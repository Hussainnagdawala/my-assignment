import { Box, Button, Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import Procedure from "./Procedure";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleprocedure = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <>
      <Stack direction="row" pt={3} spacing={5}>
        <Box sx={{ width: { lg: "20vw" } }}>
          <Button
            sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}
            component="label"
            variant="text"
            onClick={handleprocedure}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Procedure
          </Button>
          <Divider />
          <Button
            sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}
            component="label"
            variant="text"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Procedure
          </Button>
        </Box>
        <Box sx={{ width: { lg: "70vw" } }}>
          {show === true ? <Procedure /> : ""}
        </Box>
      </Stack>
    </>
  );
};

export default Home;
