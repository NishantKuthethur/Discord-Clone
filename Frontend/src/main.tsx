import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import App from "./App"
import "./index.css"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#5865F2", // Your custom color
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Border color for all states
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1e1f22",
            borderRadius: "8px", // #b5bac1
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // Label color when not focused
          color: "rgba(181, 186, 193, 1)",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "rgba(181, 186, 193, 1)", // Change text color
          backgroundColor: "#1e1f22", // Background color of the input
          borderRadius: "8px",
        },
      },
    },
  },
})

// Create a client root instance
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
