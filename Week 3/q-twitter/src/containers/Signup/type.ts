export interface MySignupFormData {
  [name: string]: string;
}
export interface MySignupProps {
  signUp: () => void;
  isLoading: boolean;
  signupChange: (
    name: string,
    value: string
  ) => { type: string; payload: MySignupFormData };
  formErrors: { [name: string]: Object };
  signupFormData: { [name: string]: MySignupNameFormField };
}
export type MySignupNameFormField = "email" | "password" | "name" | "username";
