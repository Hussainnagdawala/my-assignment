import React from "react";
import Stack from "@mui/material/Stack";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import {
  Avatar,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <header>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
     
        >
          <Box>
            <Typography variant="h5" fontWeight="bold">
              ECHO
            </Typography>
          </Box>
          <Stack direction="row" gap={3}>
            <IconButton color="primary" variant="contained" aria-label="bulb">
              <LightbulbIcon />
            </IconButton>
            <Stack direction="row">
              <Box>
                <Avatar alt="Remy Sharp" src="../src/images/Ellipse 1.png" />
              </Box>
              <Box>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary="Sledge Hammer" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="items" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </header>
    </>
  );
};

export default Navbar;
