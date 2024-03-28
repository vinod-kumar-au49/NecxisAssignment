import React, { useEffect, useState } from 'react';


const Allreviwes = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [reviwes, setreview] = useState([]);

  const fetchItems = async () => {
    const res = await fetch("http://localhost:8000/reviews");

    const jsonData = await res.json();
    setreview(jsonData.reviwes);
  };
  return (

    <div className='div' >

      {reviwes.map((e) => (
        <div key={e._id}>
          <h1>comment{reviwes.comment}</h1>
          <h1>likes{reviwes.likes}</h1>
        </div>
      ))
      }
    </div>
  )
}
export default Allreviwes;