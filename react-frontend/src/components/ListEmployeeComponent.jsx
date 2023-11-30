import React from "react";
import Table from "@mui/material/Table";
import Grid from "@mui/material/Grid";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ListEmployeeComponent() {
  const response = [
    {
      id: 1,
      firstName: "sasi",
      lastName: "kumar",
      email: "sasi@gmail.com",
    },
    {
      id: 2,
      firstName: "sarath",
      lastName: "kumar",
      email: "sasi@gmail.com",
    },
  ];

  return (
    <Grid container>
      <TableContainer component={Paper} sx={{ m: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name </TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {response.map((row) => (
              <TableRow key={row.id} sx={{}}>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default ListEmployeeComponent;
