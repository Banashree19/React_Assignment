import { Container, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Counter />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
