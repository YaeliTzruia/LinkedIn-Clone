import axios from "axios";

export const authConfig = {
  handleRegistration: async (values) => {
    try {
      const res = await axios.post("http://localhost:5001/auth/signup", values);
      console.log(res, "registaration");
      return res;
    } catch (error) {
      return error;
    }
  },
  handleLogin: async (values) => {
    try {
      const res = await axios.post("http://localhost:5001/auth/signin", values);
      return res;
    } catch (error) {
      return error;
    }
  },
  handleLogout: async () => {
    const res = await axios.get("http://localhost:5001/user/logout", {
      withCredentials: true,
    });
    return res;
  },
  getCurrentUser: async () => {
    try {
      const user = await axios.get("http://localhost:5001/user/me", {
        withCredentials: true,
      });
      console.log(user, "user");
      return user;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  //   handleLogout: async () => {
  //     const res = await axios.get(`http://localhost:4000/users/logout`, {
  //       withCredentials: true,
  //     });
  //     return res;
  //   },
  //   updUser: async (userDetails) => {
  //     console.log("user details from updUser", userDetails);
  //     const editedUser = await axios.put(
  //       `http://localhost:4000/users/${userDetails.id}`,
  //       userDetails,
  //       { withCredentials: true }
  //     );
  //     console.log("edited user", editedUser);
  //     return editedUser.data;
  //   },
};
