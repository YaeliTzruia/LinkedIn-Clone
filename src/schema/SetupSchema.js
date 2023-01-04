import * as Yup from "yup";

export const SetupSchema = Yup.object().shape({
  country: Yup.string()
    .required("Please select a country or region.")
    .label("Selected Country"),
  city: Yup.string().required(),
});
