import React, { Fragment, useContext, useState, useEffect } from "react";
import { UsersContext } from "./index";
import { editUsers, getAllUsers } from "./FetchApi";

const EditUsersModal = (props) => {

  const { data, dispatch } = useContext(UsersContext);
  console.log(data.editUsersModal)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [uId, setUid] = useState("");

  useEffect(() => {

    setName(data.editUsersModal.name);
    setPhone(data.editUsersModal.phone);
    setUid(data.editUsersModal.uId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.editUsersModal.modal]);

  const fetchData = async () => {
    let responseData = await getAllUsers();
    if (responseData.Users) {
      dispatch({
        type: "fetchUsersAndChangeState",
        payload: responseData.Users,
      });
    }
  };

  const submitForm = async () => {
    dispatch({ type: "loading", payload: true });
    let edit = await editUsers(uId, name, phone);
    if (edit.error) {
      console.log(edit.error);
      dispatch({ type: "loading", payload: false });
    } else if (edit.success) {
      console.log(edit.success);
      dispatch({ type: "editUsersModalClose" });
      setTimeout(() => {
        fetchData();
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  };

  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        onClick={(e) => dispatch({ type: "editUsersModalClose" })}
        className={`${
          data.editUsersModal.modal ? "" : "hidden"
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          data.editUsersModal.modal ? "" : "hidden"
        } fixed inset-0 m-4  flex items-center z-30 justify-center`}
      >
        <div className="relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4  overflow-y-auto px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Add User
            </span>
            {/* Close Modal */}
            <span
              style={{ background: "#303031" }}
              onClick={(e) => dispatch({ type: "editUsersModalClose" })}
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col space-y-1 w-full py-4">
              <label htmlFor="name">User Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="px-4 py-2 border focus:outline-none"
                type="text"
              />
          </div>
          <div className="flex flex-col space-y-1 w-full py-4">
              <label htmlFor="phoneNumber">User Phone No.</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="px-4 py-2 border focus:outline-none"
                type="text"
              />
          </div>
          <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6">
            <button
              style={{ background: "#303031" }}
              onClick={(e) => submitForm()}
              className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2"
            >
              Update User
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUsersModal;
