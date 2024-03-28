import react ,{useState} from 'react';

const UserPost = () => {
    const [name, setName] = useState(" ")
    const [description, setDescription] = useState(" ")
    const [image, setImage] = useState(" ")


const handle = (e) => {
    e.preventDefault();
    console.log({ name, description, image })

    fetch('http://localhost:8000/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name, description, image  })
    }).then((response) => {
      console.log("saved")
    }).catch((err) => { console.log(err.message) })

    setName(" ");
    setDescription(" ");
    setImage(" ");
    
  }


const handlee = () => {
    alert("succefully posted post");
  }

  return (
    console.log("sucessfully posted")
  )}

  export default UserPost;