import * as yup from "yup";

export const movieActionSchema = yup.object().shape({
  name: yup.string().required("Email field is required!"),
  release_year: yup.string().required("Password field is required!"),
});
