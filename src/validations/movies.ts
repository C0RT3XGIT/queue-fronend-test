import * as yup from "yup";

export const movieActionSchema = yup.object().shape({
  name: yup.string().required("Email field is required!"),
  release_year: yup
    .number()
    .typeError("Entry type should be number")
    .required("Password field is required!"),
});
