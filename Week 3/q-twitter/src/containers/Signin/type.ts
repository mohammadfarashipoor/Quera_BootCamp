export interface MySigninFormData {
  password: string;
  username: string;
}
export interface MySigninProps {
  login: () => void;
  loginChange: (
    name: string,
    value: string
  ) => { type: string; payload: MySigninFormData };
  formErrors: { [name: string]: Object };
  loginFormData: { [name: string]: MySigninNameFormField };
}
export type MySigninNameFormField = "password" | "username";
