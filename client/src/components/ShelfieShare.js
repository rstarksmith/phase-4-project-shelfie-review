import { useState, useEffect } from "react"
import Shelfie from "./Shelfie";

const ShelfieShare = () => {
  const [userPhotos, setUserPhotos] = useState([]);
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch("/shelfieshare")
      .then((resp) => {
        if(resp.ok) {
          resp.json().then(setUserPhotos)
        }else{
          resp.json().then(resp => setErrors(resp.errors))
        }
      })
  }, []);
  // make sure new shelfies show up as users sign up

  const displayPhotos = userPhotos.map(userPhoto => <Shelfie key={userPhoto.id} userPhoto={userPhoto}/>)

  if(errors) return <h1>{errors}</h1>;
  
  return (
    <div>
      <h1>#shelfieshare</h1>
      <h4>Browse our readers TBR shelfies</h4>
      <div>{displayPhotos}</div>
    </div>
  );
}

export default ShelfieShare