import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Form, Formik } from "formik";
import { Label } from "@mui/icons-material";
import { useFirebase } from "../../context/FireBase";
import toast from "react-hot-toast";

export default function CreateEmployeeData() {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [loading, setloading] = useState(false);

  const handleSubmit = async (values) => {
    setloading(true);
    const res = await firebase.createEmployee(values);
    setloading(false);
    toast.success("Employee add Successfully");
    navigate("/employees");
  };
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <button>
            <KeyboardBackspaceIcon
              onClick={() => navigate("/employees")}
            ></KeyboardBackspaceIcon>
          </button>
        </Grid>
        <Grid item sx={{ margin: "0 auto" }}>
          <h1>Add Employee Details</h1>
          <hr />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ my: 5 }}>
        <Grid item>
          <Formik
            initialValues={{
              empName: "",
              empEmail: "",
              empPhone: "",
              empDepartment: "",
              empAddress: "",
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <TextField
                  name="empName"
                  id="outlined-basic"
                  label="Name"
                  onChange={props.handleChange}
                  variant="outlined"
                  sx={{ m: 1 }}
                />
                <TextField
                  name="empEmail"
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  onChange={props.handleChange}
                  variant="outlined"
                  sx={{ m: 1 }}
                />
                <br />

                <TextField
                  name="empPhone"
                  id="outlined-basic"
                  label="Phone"
                  type="number"
                  onChange={props.handleChange}
                  variant="outlined"
                  sx={{ m: 1 }}
                />
                <TextField
                  name="empDepartment"
                  id="outlined-basic"
                  label="Department"
                  onChange={props.handleChange}
                  variant="outlined"
                  sx={{ m: 1 }}
                />
                <br />
                <TextField
                  name="empAddress"
                  id="outlined-basic"
                  label="Address"
                  onChange={props.handleChange}
                  variant="outlined"
                  sx={{ m: 1, width: "100%" }}
                />
                <br />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ mx: 1 }}
                  disabled={loading}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>{" "}
      </Grid>
    </>
  );
}
