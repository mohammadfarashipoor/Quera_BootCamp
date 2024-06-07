export interface MySigninFormData {
  [name: string]: string;
}
export interface MySigninProps {
  login: () => void;
  isLoading: boolean;
  loginChange: (name: string, value: string) => void;
  formErrors: { [name: string]: Object };
  loginFormData: { [name: string]: MySigninNameFormField };
}
export type MySigninNameFormField = "password" | "username";
