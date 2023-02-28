import { useState, useEffect } from "react"
import Shelfie from "./Shelfie";

const ShelfieShare = () => {
  const [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    fetch("/shelfieshare")
      .then((resp) => resp.json())
      .then(resp => setUserPhotos(resp));
  }, []);
  // make sure new shelfies show up as users sign up

  const displayPhotos = userPhotos.map(userPhoto => <Shelfie key={userPhoto.id} userPhoto={userPhoto}/>)

  return (
    <div>
      <h1>#shelfieshare</h1>
      <h4>Browse our readers TBR shelfies</h4>
      <div>{displayPhotos}</div>
    </div>
  );
}

export default ShelfieShare