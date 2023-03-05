import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogBoxRegister({ showRegister, onCloseRegister }) {
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

      <Dialog open={showRegister} onClose={onCloseRegister}>
        <DialogTitle>Register</DialogTitle>

        <DialogContentText>
          <strong>Bem-vindo ao Airbnb</strong>
        </DialogContentText>
        <DialogContent>
          <input
            {...register("name", { required: true, minLength: 3 })}
            autoFocus
            margin="dense"
            id="name"
            label="Nome Completo"
            type="name"
            fullWidth
            variant="standard"
            placeholder="Nome Completo"
          />
          {errors?.name && <p>Invalid name</p>}

        </DialogContent>
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
          <Button onClick={onCloseRegister}>Cancel</Button>
          <Button onClick={() => handleSubmit(onSubmit)()}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
