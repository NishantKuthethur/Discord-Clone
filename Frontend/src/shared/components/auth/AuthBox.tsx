import React from "react"
import { Box } from "@mui/material"
import { styled } from "@mui/system"

export enum AuthType {
  login = "login",
  register = "register",
}

interface AuthBoxProps {
  type: AuthType
  children?: React.ReactNode
}

const BoxWrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865F2",
})

const AuthBox = ({ type, children }: AuthBoxProps) => {
  const boxStyle = {
    width: type === AuthType.login ? 784 : 480,
    height: type === AuthType.login ? 408 : 686, // Example of conditional height
    bgcolor: "#313338",
    borderRadius: "5px",
    boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
    display: "flex",
    flexDirection: "column",
    padding: "32px",
    boxSizing: "border-box",
  }

  return (
    <BoxWrapper>
      <Box sx={boxStyle}>{children}</Box>
    </BoxWrapper>
  )
}

export default AuthBox
