import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users')
      const data = await res.json();
      return data;
    }
  });

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })

      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make Admin successful');
          refetch();

        }
      })
  }
  return (
    <div>
      <h1>all user {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Email</th>
              <th>Email</th>

            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) =>
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-xs btn-outline btn-success">Make Admin</button>}</td>
                  <td><button className="btn btn-xs btn-outline btn-error">Delete</button></td>


                </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;