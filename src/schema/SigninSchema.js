import * as Yup from "yup";

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(15).required(),
});
