import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#014D81",
        color: "white",
        height: "150px",
        display: "flex",
        alignItems: "center",
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            PromtGov
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
