import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string()
    .required("Name is required.")
    .min(3, "Full name must be at least 3 characters."),
  last_name: Yup.string()
    .required("Last name is required.")
    .min(3, "Last name must be at least 3 characters."),
  password: Yup.string()
  .required("Password is required.")
  .min(8, "Password must be at least 8 characters.")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least one uppercase, one lowercase, one number and one special character."
  ),
  country: Yup.string()
    .required("Country is required."),
  city: Yup.string()
    .required("City is required."),
  userType: Yup.string()
    .required("Country is required."),
  title: Yup.string()
    .required("Title is required."),
  branch: Yup.string()
    .required("Title is required."),
  email: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .email('Invalid email address')
    .required('Please enter your email'),
  acceptTerms: Yup.bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
  acceptTerms2: Yup.bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
});