import * as yup from "yup";

export const movieActionSchema = yup.object().shape({
  name: yup.string().required("Email field is required!"),
  release_year: yup
    .number()
    .typeError("Entry type should be number")
    .required("Password field is required!"),
});

export const directorActionSchema = yup.object().shape({
  first_name: yup.string().required("Email field is required!"),
  last_name: yup.string().required("Password field is required!"),
});
