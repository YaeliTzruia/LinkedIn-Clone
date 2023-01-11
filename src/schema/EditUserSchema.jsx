import * as Yup from "yup";

export const EditUserSchema = Yup.object().shape({
  //   email: Yup.string().email().required(),
  //   password: Yup.string().min(6).max(15).required(),
  firstName: Yup.string().max(50).required,
  lastName: Yup.string().max(50).required,
  country: Yup.string().required,
  city: Yup.string().required,
});
