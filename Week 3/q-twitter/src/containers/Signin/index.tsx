"use client";
import Input from "@/components/Input";
import { MySigninProps } from "./type";
import { connect } from "react-redux";
import actions from "@/lib/actions";

import Link from "next/link";

function Signin(props: MySigninProps): JSX.Element {
  const { login, loginChange, formErrors, loginFormData } = props;
  function handlesignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login();
  }
  return (
    <form className="auth__form" onSubmit={(e) => handlesignUp(e)}>
      <h2>ورود</h2>
      <hr />
      <Input
        type={"text"}
        error={formErrors["username"]}
        label={"نام کاربری"}
        name={"username"}
        placeholder={"لطفا نام کاربری خود را وارد کنید"}
        value={loginFormData.username}
        onInputChange={(name, value) => {
          loginChange(name, value);
        }}
      />
      <Input
        type={"password"}
        error={formErrors["password"]}
        label={"پسورد"}
        name={"password"}
        placeholder={"لطفا پسورد خود را وارد کنید"}
        value={loginFormData.password}
        onInputChange={(name, value) => {
          loginChange(name, value);
        }}
      />
      <input type="submit" value={"ورود"} />
      <p>
        حساب کاربری ندارید؟
        <Link href="/auth/signup"> ثبت نام</Link>
      </p>
    </form>
  );
}

const mapStateToProps = (state: any) => {
  return {
    loginFormData: state.login.loginFormData,
    formErrors: state.login.formErrors,
    isLoading: state.login.isLoading,
  };
};
export default connect(mapStateToProps, actions)(Signin);
