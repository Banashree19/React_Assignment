import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
          lineHeight: "1rem",
          backgroundColor: "rgb(25, 112, 102)",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        ></Typography>
        React Assignment
        <Typography>
          &copy;{new Date().getFullYear()} React 👍🏴. All rights reserve💯
        </Typography>
        <Typography>Bangalore,KA India</Typography>
        <Typography>+91-8638815037</Typography>
        <Typography>banashreegogoi19@gmail.com </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
