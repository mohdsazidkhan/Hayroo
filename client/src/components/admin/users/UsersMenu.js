import React, { Fragment, useContext } from "react";
import { UsersContext } from "./index";
import EditUsersModal from "./EditUsersModal";

const UsersMenu = (props) => {
  const { dispatch } = useContext(UsersContext);

  return (
    <Fragment>
      <div className="col-span-1 flex items-center">
        <EditUsersModal />
      </div>
    </Fragment>
  );
};

export default UsersMenu;
