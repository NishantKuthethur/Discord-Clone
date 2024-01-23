import React, { useState } from "react"
import Header from "./Header"
import { TextField, Button, Link, Typography } from "@mui/material"
//import Button from "../../../shared/components/UI/Button"

interface FormField {
  value: string
  error: boolean
  errorMessage: string
}

interface FormValues {
  email: FormField
  password: FormField
}

const LoginForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: {
      value: "",
      error: false,
      errorMessage: "You must enter an email",
    },
    password: {
      value: "",
      error: false,
      errorMessage: "You must enter a password",
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name as keyof FormValues],
        value,
      },
    }))
    console.log(name, value)
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("logging in")
  }

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <Header />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        sx={{ width: "100%" }}
        value={formValues.email.value}
        onChange={handleChange}
        error={formValues.email.error}
        helperText={formValues.email.error ? formValues.email.errorMessage : ""}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        sx={{ width: "100%" }}
        value={formValues.password.value}
        onChange={handleChange}
        error={formValues.password.error}
        helperText={
          formValues.password.error ? formValues.password.errorMessage : ""
        }
      />
      <Link style={{ cursor: "crosshair", color: "#00a8fc" }} underline="hover">
        Forgot your Password?
      </Link>
      <Button
        type="submit"
        sx={{
          marginTop: "10px",
          height: "35px",
          width: "100%",
          backgroundColor: "#5865f1",
          color: "#f2f3f5",
          padding: "8px",
        }}
      >
        Log in
      </Button>
      <div className="register-link">
        <Typography sx={{ color: "#949ba4" }}>Need an account?</Typography>
        <Link
          style={{ cursor: "crosshair", color: "#00a8fc" }}
          underline="hover"
        >
          Register
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
