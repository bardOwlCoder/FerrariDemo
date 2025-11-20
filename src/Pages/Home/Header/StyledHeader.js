import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Navigation = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "5.625rem",
  [theme.breakpoints.down("md")]: {
    
  },
  alignItems: "center",
  display: "flex",
  position: "fixed",
  gap: "3rem",
  zIndex: 500,
}));

const Div = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
  // alignItems: "center",
  // display: 'flex',
  gap: "2.5rem",
}));

export { Navigation, Div};
