export interface MySignupFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
}
export interface MySignupProps {
  signUp: () => void;
  signupChange: (
    name: string,
    value: string
  ) => { type: string; payload: MySignupFormData };
  formErrors: { [name: string]: Object };
  signupFormData: { [name: string]: MySignupNameFormField };
}
export type MySignupNameFormField =
  | "email"
  | "password"
  | "firstName"
  | "lastName"
  | "username";
