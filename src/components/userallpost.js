import React, { useEffect, useState } from 'react';

const Allposts = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [users, setUsers] = useState([]);

  const fetchItems = async () => {
    const res = await fetch("http://localhost:8000/users");

    const jsonData = await res.json();
    setUsers(jsonData.users);
  };
  return (

    <div className='div' >

      {users.map((e) => (
        <div key={e._id}>
          <h1>name{users.name}</h1>
          <h1>description{users.description}</h1>
        </div>
      ))
      }
    </div>
  )
}
export default Allposts;