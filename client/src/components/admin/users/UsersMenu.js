import React, { Fragment } from "react";
import EditUsersModal from "./EditUsersModal";

const UsersMenu = () => {

  return (
    <Fragment>
      <div className="col-span-1 flex items-center">
        <EditUsersModal />
      </div>
    </Fragment>
  );
};

export default UsersMenu;
