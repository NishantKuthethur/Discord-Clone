import React, { useState } from "react"
import Header from "./Header"
import { TextField } from "@mui/material"
import Button from "../../../shared/components/UI/Button"

const LoginForm = () => {
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div className="login-form">
      <Header />
      <TextField
        label="Email"
        variant="outlined"
        sx={{ width: "100%" }}
        value={mail}
        onChange={handleEmailChange}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        sx={{ width: "100%" }}
        value={password}
        onChange={handlePasswordChange}
      />
      <Button />
    </div>
  )
}

export default LoginForm
