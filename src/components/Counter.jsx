import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import { useState } from "react";
import RichTextEditor from "./RichTextEditor";
import LocalForm from "./LocalForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Counter = () => {
  const [data, setData] = useState(0);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid xs={6} md={8}>
          <Item>
            <h1 className="container"> {data}</h1>
            <h2>Counter</h2>
            <Button variant="contained" onClick={() => setData(data + 1)}>
              +
            </Button>
            <Button variant="outlined" color="error" onClick={() => setData(0)}>
              Reset
            </Button>
            <Button variant="contained" onClick={() => setData(data - 1)}>
              -
            </Button>
          </Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>
            <RichTextEditor />
          </Item>
        </Grid>
        <Grid xs={6} md={12}>
          <Item>
            <LocalForm />
          </Item>
        </Grid>
        {/* <Grid xs={6} md={4}>
          <Item>xs=6 md=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Counter;
