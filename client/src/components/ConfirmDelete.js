

const ConfirmDelete = ({ deleteUser, closeConfirm}) => {

  return (
    <div className="confirm-block">
      <h2 className="sub-head">
        Are you sure you wish to delete your account?
      </h2>
      <div className="center-bttn">
        <button onClick={deleteUser} className="bttn">
          Delete
        </button>
        <button onClick={closeConfirm} className="bttn-flip">
          Go back
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete