import React, { Suspense } from "react"
import Typography from "@mui/material/Typography"
import CircularProgress from "@mui/material/CircularProgress"
import githubSVG from "../../static/GitHub.svg"

const LazyQRImage = React.lazy(() => import("./LazyQRImage"))

const QRComponent = () => {
  return (
    <div className="qr-container">
      <Suspense fallback={<CircularProgress sx={{ margin: "8px" }} />}>
        <LazyQRImage src={githubSVG} alt="QR Code" />
      </Suspense>
      <Typography
        variant="h5"
        sx={{ color: "#f2f3f5", marginLeft: "-8px", marginTop: "-40px" }}
      >
        Github
      </Typography>
      <Typography
        sx={{ color: "#b5bac1", marginLeft: "-8px", textAlign: "center" }}
      >
        Scan this QR code to go to my Github profile
      </Typography>
      {/* Other content */}
    </div>
  )
}

export default QRComponent
