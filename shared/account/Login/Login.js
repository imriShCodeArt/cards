import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

const Card = loadable(() => import("components/surfaces/Card"));

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const Login = ({ title, subheader,  }) => {
  return (
    <Card
      elements={{
        header: {
          title,
          subheader,
        },
        content: (
          <Stack direction={"column"} spacing={".55em"}>
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

Login.propTypes = {};
Login.defaultProps = {
  title: "Sign In ",
  subheader: "Existing user sign-in",
};

export default Login;
