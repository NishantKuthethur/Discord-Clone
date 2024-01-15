import React from "react"
import AuthBox, { AuthType } from "../../../shared/components/auth/AuthBox"
import QRComponent from "../../../components/QR/QRComponent"
import "./Login.css"
import LoginForm from "./LoginForm"
const LoginPage = () => {
  return (
    <AuthBox type={AuthType.login}>
      <div className="login-container">
        <LoginForm />
        <QRComponent />
      </div>
    </AuthBox>
  )
}

export default LoginPage
