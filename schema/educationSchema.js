import * as Yup from "yup";

export const educationSchema = Yup.object({
  education_place: Yup.string()
    .required("Name is required."),
  education_branch: Yup.string()
    .required("Last name is required."),
});