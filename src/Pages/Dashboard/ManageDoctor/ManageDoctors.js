import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal';
import Loading from '../../Shared/Loading';

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null)
  }

  const { data: doctors, isLoading, refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch('https://doctor-portal-server-api.onrender.com/doctors',
          {
            headers: {

              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
          })
        const data = await res.json();
        return data;
      } catch (error) {

      }
    }
  });
  const handleDeleteDoctor = doctor => {
    fetch(`https://doctor-portal-server-api.onrender.com/doctors/${doctor._id}`,
      {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data => {

        if (data.deletedCount > 0) {
          toast.success(`${doctor.name} is deleted successfully`);
          refetch();
        }
      })
  }

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h1 className="text-3xl">this is a manage doctors page {doctors?.length}</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>specialty</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            {
              doctors?.map((doctor, i) =>
                <tr key={doctor._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <img src={doctor?.image} alt="img" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor?.name}</td>
                  <td>{doctor?.email}</td>
                  <td>{doctor?.specialty}</td>

                  <td>
                    <label onClick={() => {
                      setDeletingDoctor(doctor)
                    }} htmlFor="confirmation-modal" className="btn btn-xs btn-outline btn-error">Delete</label>

                  </td>


                </tr>)
            }


          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <ConfirmationModal
          title={'Are you sure you want to delete ?'}
          message={`If you delete ${deletingDoctor.name} it cannot be data back.`}
          handleDeleteDoctor={handleDeleteDoctor}
          modalData={deletingDoctor}
          closeModal={closeModal}
        ></ConfirmationModal>
      }
    </div>
  );
};

export default ManageDoctors;