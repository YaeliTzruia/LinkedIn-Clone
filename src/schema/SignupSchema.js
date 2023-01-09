import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(15).required(),
  firstName: Yup.string().max(50),
  lastName: Yup.string().max(50),
  country: Yup.string(),
  city: Yup.string(),
});
