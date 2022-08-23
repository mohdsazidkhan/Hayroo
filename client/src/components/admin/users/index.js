import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout";
import UsersMenu from "./UsersMenu";
import AllUsers from "./AllUsers";
import { usersState, usersReducer } from "./UsersContext";

/* This context manage all of the caregories component's data */
export const UsersContext = createContext();

const UsersComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <UsersMenu />
      <AllUsers />
    </div>
  );
};

const Users = (props) => {
  const [data, dispatch] = useReducer(usersReducer, usersState);
  return (
    <Fragment>
      <UsersContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<UsersComponent />} />
      </UsersContext.Provider>
    </Fragment>
  );
};

export default Users;
