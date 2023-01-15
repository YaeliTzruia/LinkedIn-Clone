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
    const res = await axios.get("http://localhost:5001/auth/logout", {
      withCredentials: true,
    });
    return res;
  },
  getUser: async () => {
    try {
      const user = await axios.get("http://localhost:5001/user/me", {
        withCredentials: true,
      });
      // console.log(user, "user");
      return user;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  updateUser: async (user) => {
    const edit = await axios.put(
      `http://localhost:5001/user/${user.id}`,
      user,
      { withCredentials: true }
    );

    console.log(edit);
    return edit.data;
  },

  updateImage: async (image) => {
    const editImg = await axios.post("http://localhost:5001/uploads", image);
    return editImg;
  },
};
