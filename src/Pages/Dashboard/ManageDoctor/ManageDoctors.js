import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading';

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch('http://localhost:5000/doctors',
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
  })

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

                  <td><button className="btn btn-xs btn-outline btn-error">Delete</button></td>


                </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;