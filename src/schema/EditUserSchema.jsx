import * as Yup from "yup";

export const EditUserSchema = Yup.object().shape({

  firstName: Yup.string().max(50).required(),
  middleName: Yup.string().max(50),
  lastName: Yup.string().max(50).required(),
  birthday: Yup.string().max(50),
  country: Yup.string().required(),
  city: Yup.string().required(),
  address: Yup.string().max(50),
  headline: Yup.string().max(50),
  profession: Yup.string().max(100),
  industry: Yup.string().max(100),
  education: Yup.string().max(100),
  phone: Yup.string().max(30),
  phoneType: Yup.string(),
  profileImg: Yup.string(),
  headerImg: Yup.string(),
  link: Yup.string(),
  linkText: Yup.string().max(30),
});



// website: {
//   websiteURL: { type: String },
//   websiteType: { type: String },
// },

// posts: [{ text: { type: String } }],