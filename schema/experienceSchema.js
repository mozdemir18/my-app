import * as Yup from "yup";

export const experienceSchema = Yup.object({
  experience_place: Yup.string()
    .required("Place is required."),
  description: Yup.string()
    .required("Description name is required.")
});