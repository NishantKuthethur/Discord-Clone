import React, { useState } from "react"
import Header from "./Header"
import { TextField, Button, Link, Typography } from "@mui/material"
import { useNavigate, Link as RouterLink } from "react-router-dom"
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

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name as keyof FormValues],
        value,
        error: false,
      },
    }))
    console.log(name, value)
  }

  const validate = () => {
    const formFields = Object.keys(formValues) as (keyof FormValues)[]
    let newFormValues = { ...formValues }
    let isValid = true
    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index]
      const currentValue = formValues[currentField].value

      if (currentValue === "") {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true,
          },
        }
        isValid = false
      }
    }

    setFormValues(newFormValues)
    return isValid
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("logging in")
    if (!validate()) {
      return
    }
    // TODO: implement login functionality here
    navigate("/dashboard")
  }

  // const handleNavigation = (path: string) => {
  //   navigate(path)
  // }

  return (
    <form className="login-form" method="post" onSubmit={handleLogin}>
      <Header />
      <TextField
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        sx={{ width: "100%" }}
        value={formValues.email.value}
        onChange={handleChange}
        error={formValues.email.error}
        helperText={formValues.email.error ? formValues.email.errorMessage : ""}
        inputProps={{
          autoComplete: "new-password",
        }}
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
      <Link
        sx={{
          cursor: "pointer",
          color: "#5865F2",
          marginTop: "-10px",
          fontSize: "13px",
        }}
        underline="hover"
      >
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
          sx={{ cursor: "pointer", color: "#5865F2" }}
          underline="hover"
          component={RouterLink}
          to={"/register"}
        >
          Register
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
