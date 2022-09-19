import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

const Card = loadable(() => import("components/surfaces/Card"));

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const Register = ({ title, subheader,  }) => {
  return (
    <Card
      elements={{
        header: {
          title,
          subheader,
        },
        content: (
          <Stack direction={"column"} spacing={".55em"}>
            <Stack spacing={".55em"} direction={"row"}>
              <TextField sx={{ flexGrow: 1 }} label={"first name"} type={"text"} />
              <TextField sx={{ flexGrow: 1 }} label={"last name"} type={"text"} />
            </Stack>
            <TextField
              type={"email"}
              label={"email"}
              placeholder={"somone@example.com"}
            />
            <TextField label={"password"} type={"password"} />
          </Stack>
        ),
      }}
    />
  );
};

Register.propTypes = {};
Register.defaultProps = {
  title: "Sign Up ",
  subheader: "Create a New User",
};

export default Register;
