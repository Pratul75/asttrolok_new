import * as yup from "yup";

export const loginSchema = () => {
  return yup.object({
    userName: yup
      .string("username must be a string")
      .min(3, "username cannot be less than three characters")
      .max(32, "username cannot exceed 24 characters")
      .required("username is required"),
    password: yup
      .string("password must be a string")
      .min(6, "password should be atleast 6 characters long")
      .required("password is required"),
  });
};

export const signupSchema = () => {
  return yup.object({
    name: yup
      .string("name must be a string")
      .min(3, "name must contain atleast 3 characters ")
      .required("name is required"),
    email: yup.string().email("invalid email").required("email is required"),
    number: yup
      .string()
      .matches(/^\+?[0-9]{1,}$/g, "Invalid phone number")
      .min(10, "enter valid number")
      .max(10, "enter valid number")
      .required("Phone number is required"),
    password: yup
      .string()
      .min(3, "password cannot be less than 3 characters")
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
};

export const forgetPasswordSchema = () => {
  return yup.object({
    email: yup
      .string()
      .email("invalid email")
      .required("email cannot be empty string"),
  });
};

export const profileUpdateSchema = () => {
  return yup.object({
    firstName: yup
      .string("name must be a string")
      .min(3, "name must contain atleast 3 characters ")
      .required("name is required"),
    lastName: yup
      .string("name must be a string")
      .min(3, "name must contain atleast 3 characters ")
      .required("name is required"),
    email: yup.string().email("invalid email").required("email is required"),

    address: yup.string("address must be a string"),
    location: yup.string("location must be a string"),
    mobile: yup.string(),
  });
};

export const astrologerdetailUpdateSchema = () => {
  return yup.object({
    firstName: yup.string(),
    lastName: yup.string(),
    mobile: yup.number(),
    experience: yup.number(),
    email: yup.string().email(),
    organization: yup.string(),
    areaOfInterest: yup.string(),
    gender: yup.string(),
    videoType: yup.string(),
    ReviewVideo: yup.string(),
    address: yup.string(),
  });
};


export const changePasswordSchema = () => {
  return yup.object({
    currentPassword: yup.string(),
    // .min(3, "password cannot be less than 3 characters")
    // .required("password is required")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //   "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    // ),
    newPassword: yup.string(),
    // .min(3, "password cannot be less than 3 characters")
    // .required("password is required")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //   "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    // ),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
};

export const birthDetailsUpdateSchema = () => {
  return yup.object({
    firstName: yup
      .string("firstName must be a string")
      .min(3, "firstName must contain atleast 3 characters ")
      .required("firstName is required"),
    lastName: yup
      .string("lastName must be a string")
      .min(3, "lastName must contain atleast 3 characters ")
      .required("lastName is required"),
    gender: yup.string("gender must be a string"),
    birthDate: yup.string("birthDate must be a string"),
    placeOfbirth: yup.string("placeOFBirth must be a string"),
    birthTime: yup.string("birthTime must be a string"),
    message: yup.string("message must be a string"),
    relation: yup.string("relation must be a string"),
  });
};
