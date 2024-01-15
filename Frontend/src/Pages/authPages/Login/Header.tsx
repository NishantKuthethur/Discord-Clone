import React from "react"
import { Typography } from "@mui/material"

const Header = () => {
  return (
    <div className="login-header">
      <Typography variant="h5" sx={{ color: "#f2f3f5", textAlign: "center" }}>
        Welcome back!
      </Typography>
      <Typography sx={{ color: "#b5bac1" }}>
        We're so excited to see you again
      </Typography>
    </div>
  )
}

export default Header
