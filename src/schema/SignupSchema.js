import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(15).required(),
  firstName: Yup.string().required("Please enter your first name").max(50),
  lastName: Yup.string().required("Please enter your last name").max(50),
});
