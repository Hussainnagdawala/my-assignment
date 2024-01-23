import {
  Box,
  Checkbox,
  Collapse,
  Divider,
  FormControlLabel,
  FormGroup,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { contentdata } from "../contentblock";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

const Add_procedure = () => {
  const { procedureBlocks } = contentdata;
  const [selectedid, setSelectedid] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClick = (id) => {
    setSelectedid(id);
    setOpen(!open);
  };
  console.log(procedureBlocks);
  return (
    <div>
      <Stack direction="row" pt={4} gap={5}>
        <Box sx={{ width: { lg: "80vw" } }}>
          <Box
            pb={3}
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            gap={4}
          >
            <ArrowBackIosNewIcon />
            <Typography variant="h5" fontWeight="medium">
              {" "}
              Add Procedure
            </Typography>
          </Box>
          <Divider />
        </Box>
        <Box sx={{ width: { lg: "20vw" } }}>
          <Typography>Choose Content block</Typography>
          {procedureBlocks.map((item, index) => {
            return (
              <>
                <ListItemButton onClick={() => handleClick(item.id)}>
                  <ListItemText primary={item.title} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {selectedid === item.id ? (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <FormGroup>
                      {item.blocks.map((sub) => {
                        return (
                          <FormControlLabel
                            control={<Checkbox />}
                            label={sub.subtitle}
                          />
                        );
                      })}
                    </FormGroup>
                  </Collapse>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </Box>
      </Stack>
    </div>
  );
};

export default Add_procedure;
