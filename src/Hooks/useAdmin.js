import { useEffect, useState } from 'react';

const useAdmin = email => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoadingAdmin, setisLoadingAdmin] = useState(true)
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {

          setIsAdmin(data?.isAdmin)
          setisLoadingAdmin(false)
        })
    }
  }, [email])
  return [isAdmin, isLoadingAdmin]
};

export default useAdmin;