
const ConfirmDelete = ({ deleteUser, closeConfirm }) => {

  return (
    <div className="form-block" >
        <h2 className="sub-head">
          Are you sure you wish to delete your account?
        </h2>
        <p>Your reviews and profile will be permanently deleted</p>
        <button onClick={deleteUser} className="bttn">Yes, Delete Account</button>
        <button onClick={closeConfirm} className="bttn-flip">Go back</button>
    </div>
  );
}

export default ConfirmDelete