import {
  Box,
  Button,
  FormControl,
  Grid,
  TableContainer,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ErrorMessage, Form, Formik } from "formik";
import { Label } from "@mui/icons-material";
import { useFirebase } from "../../context/FireBase";
import toast from "react-hot-toast";
import { addEmployee } from "../../assets/FormSchema";

export default function CreateEmployeeData() {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [loading, setloading] = useState(false);

  const handleSubmit = async (values) => {
    return;
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

      <Grid container justifyContent="center" sx={{ my: 4 }}>
        <Grid item>
          <Formik
            initialValues={{
              empName: "",
              empEmail: "",
              empPhone: "",
              empDepartment: "",
              empAddress: "",
            }}
            validationSchema={addEmployee}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <Grid container>
                  <Grid item xs={4}>
                    <TextField
                      name="empName"
                      id="outlined-basic"
                      label="Name"
                      onChange={props.handleChange}
                      variant="outlined"
                      sx={{ m: 1 }}
                    />
                    <ErrorMessage
                      name="empName"
                      component={"div"}
                      className="text-danger"
                    ></ErrorMessage>
                  </Grid>
                  <Grid item sm={4}>
                    <TextField
                      name="empEmail"
                      id="outlined-basic"
                      label="Email"
                      type="email"
                      onChange={props.handleChange}
                      variant="outlined"
                      sx={{ m: 1 }}
                    />

                    <ErrorMessage
                      name="empEmail"
                      component={"div"}
                      className="text-danger"
                    ></ErrorMessage>
                  </Grid>

                  <Grid item sm={4}>
                    <TextField
                      name="empPhone"
                      id="outlined-basic"
                      label="Phone"
                      type="number"
                      onChange={props.handleChange}
                      variant="outlined"
                      sx={{ m: 1 }}
                    />
                    <ErrorMessage
                      name="empPhone"
                      component={"div"}
                      className="text-danger"
                    ></ErrorMessage>
                  </Grid>
                  <Grid item sm={4}>
                    <TextField
                      name="empDepartment"
                      id="outlined-basic"
                      label="Department"
                      onChange={props.handleChange}
                      variant="outlined"
                      sx={{ m: 1 }}
                    />
                    <ErrorMessage
                      name="empDepartment"
                      component={"div"}
                      className="text-danger"
                    ></ErrorMessage>
                  </Grid>
                  <Grid item sm={3}>
                    <TextField
                      name="empAddress"
                      id="outlined-basic"
                      label="Address"
                      onChange={props.handleChange}
                      variant="outlined"
                      sx={{ m: 1, width: "100%" }}
                    />

                    <ErrorMessage
                      name="empAddress"
                      component={"div"}
                      className="text-danger"
                    ></ErrorMessage>
                  </Grid>
                </Grid>

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
