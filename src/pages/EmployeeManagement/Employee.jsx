import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/FireBase";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Employee() {
  const firebase = useFirebase();
  const [allemployee, setAllEmployee] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    firebase.getAllPosts().then((data) => setAllEmployee(data.docs));
  }, []);

  return (
    <Box
      sx={{ m: 2 }}
      boxShadow="0px 5px 8px rgba(0, 0, 0, 0.1)"
      //   borderRadius={8}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box component={"h2"} sx={{ my: 2 }}>
          All Employee Data{" "}
        </Box>

        <Button
          variant="outlined"
          sx={{ my: 2 }}
          onClick={() => navigate("/add-new-employee")}
        >
          Add Employee
        </Button>
      </Box>

      <TableContainer>
        <Table sx={{}} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "grey" }}>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allemployee?.map((row) => (
              <TableRow
                key={row.data()?.empName}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.data().empName}</TableCell>
                <TableCell>{row?.data().empEmail}</TableCell>
                <TableCell>{row?.data().empPhone}</TableCell>
                <TableCell>{row?.data().empDepartment}</TableCell>
                <TableCell>{row?.data().empAddress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
