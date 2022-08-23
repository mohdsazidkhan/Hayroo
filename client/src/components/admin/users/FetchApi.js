import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

const BearerToken = () =>
  localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt")).token
    : false;
const Headers = () => {
  return {
    headers: {
      token: `Bearer ${BearerToken()}`,
    },
  };
};

export const getAllUsers = async () => {
  try {
    let res = await axios.get(`${apiURL}/api/user/all-user`, Headers());
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editUsers = async (uId, name, phone) => {
  let data = { uId: uId, name: name, phoneNumber: phone };
  try {
    let res = await axios.post(
      `${apiURL}/api/user/edit-user`,
      data,
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (uId) => {
  try {
    let res = await axios.post(
      `${apiURL}/api/user/delete-user`,
      { uId },
      Headers()
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
