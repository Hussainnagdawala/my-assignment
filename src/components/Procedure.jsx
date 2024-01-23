import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { proceduredata } from "../data";
import { useNavigate } from "react-router-dom";

const Procedure = () => {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        pb={3}
      >
        <Typography variant="h5" fontWeight="900">
          {" "}
          Procedure
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/add");
          }}
        >
          Add Procedure
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Procedure Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right"> Date Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proceduredata.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Procedure;
