import React from "react"
import AuthBox, { AuthType } from "../../../shared/components/auth/AuthBox"

const RegisterPage = () => {
  return (
    <AuthBox type={AuthType.register}>
      <div>Register Page</div>
    </AuthBox>
  )
}

export default RegisterPage
