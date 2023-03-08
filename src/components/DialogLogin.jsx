import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogBoxLogin({ showLogin, onCloseLogin }) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Dialog open={showLogin} onClose={onCloseLogin}>
        <DialogTitle>Login</DialogTitle>

        <DialogContentText>
          <strong class="ms-4">Bem-vindo ao Airbnb</strong>
        </DialogContentText>
        <DialogContent>
          <input
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            placeholder="Email"
          />
          {errors?.email && <p>Invalid Email</p>}
        </DialogContent>
        <DialogContent>
          <input
            {...register("password", {
              required: true,
            })}
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            placeholder="Password"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => handleSubmit(onSubmit)()}>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
