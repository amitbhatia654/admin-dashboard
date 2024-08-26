import {
  Box,
  Button,
  FormControl,
  Grid,
  TableContainer,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ErrorMessage, Form, Formik } from "formik";
import { Label } from "@mui/icons-material";
import { useFirebase } from "../../context/FireBase";
import toast from "react-hot-toast";
import { addEmployee } from "../../assets/FormSchema";

export default function CreateEmployeeData() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};
  const firebase = useFirebase();
  const [loading, setloading] = useState(false);
  const [data, setData] = useState({});

  const handleSubmit = async (values) => {
    setloading(true);
    const res = id
      ? await firebase.UpdatePost(id, values)
      : await firebase.createEmployee(values);
    setloading(false);
    console.log(res, "the response is");
    if (id) {
      toast.success(res);
    } else {
      toast.success("Employee added Successfully");
    }
    navigate("/employees");
  };

  const getEmpById = async () => {
    const result = await firebase.getPostbyId(id);
    console.log(result, "result");
    if (result) {
      setData(result);
    } else {
      setData({});
    }
  };

  useEffect(() => {
    if (id) getEmpById();
  }, []);
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
          <h1>{id ? "Edit" : "Add"} Employee Details</h1>
          <hr />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ my: 4 }}>
        <Grid item>
          <Formik
            initialValues={
              id
                ? data
                : {
                    empName: "",
                    empEmail: "",
                    empPhone: "",
                    empDepartment: "",
                    empAddress: "",
                  }
            }
            validationSchema={addEmployee}
            enableReinitialize={true}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <Grid container>
                  <Grid item xs={4}>
                    <TextField
                      name="empName"
                      id="outlined-basic"
                      placeholder="enter name"
                      value={props.values.empName}
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
                      value={props.values.empEmail}
                      placeholder="enter email"
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
                      placeholder="enter phone number"
                      type="number"
                      value={props.values.empPhone}
                      onChange={(e) => {
                        if (e.target.value.length <= 10) {
                          props.setFieldValue("empPhone", e.target.value);
                        }
                      }}
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
                      placeholder="enter department"
                      onChange={props.handleChange}
                      value={props.values.empDepartment}
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
                      placeholder="enter address"
                      onChange={props.handleChange}
                      value={props.values.empAddress}
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
