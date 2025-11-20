import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const SlideIn = styled (Box)(() => ({
    width: '100%',
    // height: '100vh',
    overflow: 'hidden',
    alignContent: "center"
}))
const TitleBox = styled(Box)(() => ({
    width:  '70%',
    height: '20rem',
    textAlign: 'center',
    alignContent: "center",
    flexWrap: 'wrap',
    left: '50%',
    top: '80%',
    padding: '0  0 3rem 0',
    transform: 'translate(-50%, -50%)',
}))
export {
    SlideIn,
    TitleBox,
}