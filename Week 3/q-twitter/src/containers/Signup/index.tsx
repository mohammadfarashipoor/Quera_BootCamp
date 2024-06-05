"use client";
import Input from "@/components/Input";
import { MySignupProps } from "./type";
import { connect } from "react-redux";
import actions from "@/lib/actions";

import Link from "next/link";

function Signup(props: MySignupProps): JSX.Element {
  const { signUp, signupChange, formErrors, signupFormData } = props;
  function handlesignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signUp();
  }
  return (
    <form className="auth__form" onSubmit={(e) => handlesignUp(e)}>
      <h2>ثبت نام</h2>
      <hr />
      <Input
        type={"text"}
        error={formErrors["name"]}
        label={"نام"}
        name={"name"}
        placeholder={"لطفا نام خود را وارد کنید"}
        value={signupFormData.name}
        onInputChange={(name, value) => {
          signupChange(name, value);
        }}
      />

      <Input
        type={"text"}
        error={formErrors["email"]}
        label={"ایمیل"}
        name={"email"}
        placeholder={"لطفا ایمیل خود را وارد کنید"}
        value={signupFormData.email}
        onInputChange={(name, value) => {
          signupChange(name, value);
        }}
      />
      <Input
        type={"text"}
        error={formErrors["username"]}
        label={"نام کاربری"}
        name={"username"}
        placeholder={"لطفا نام کاربری خود را وارد کنید"}
        value={signupFormData.username}
        onInputChange={(name, value) => {
          signupChange(name, value);
        }}
      />
      <Input
        type={"password"}
        error={formErrors["password"]}
        label={"پسورد"}
        name={"password"}
        placeholder={"لطفا پسورد خود را وارد کنید"}
        value={signupFormData.password}
        onInputChange={(name, value) => {
          signupChange(name, value);
        }}
      />
      <input type="submit" value={"ثبت نام"} />
      <p>
        حساب کاربری دارید؟
        <Link href="/auth/signin"> ورود</Link>
      </p>
    </form>
  );
}

const mapStateToProps = (state: any) => {
  return {
    signupFormData: state.signup.signupFormData,
    formErrors: state.signup.formErrors,
    isLoading: state.signup.isLoading,
  };
};
export default connect(mapStateToProps, actions)(Signup);
