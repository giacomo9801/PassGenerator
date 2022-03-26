import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function CardPassword() {
  const title = "Password Generator";
  const symbol = "zxcvbnmasdfghjklqwertyuiop1234567890.-_:,;!£$%&/()=?ì^";

  const [pass, UsePass] = useState("");
  const [lenght, UseLenght] = useState(0);

  function handleChangeInput(event) {
    UseLenght(event.target.value);
  }

  function handleGenerate() {
    let random = "";
    for (let i = 0; i < lenght; i++) {
      random += symbol.charAt(Math.floor(Math.random(symbol) * symbol.length));
    }
    UsePass(random);
  }

  function handleReset(event) {
    UsePass("");
    UseLenght(0);
  }
  function handleCopy(event) {
    const copyPass = pass;
    navigator.clipboard.writeText(copyPass);
  }

  return (
    <Card sx={{ maxWidth: 500, backgroundColor: "#80deea" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://morethantech.it/images/publications/284/pass.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          style={{ justifyContent: "center" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>
            <TextField
              inputProps={{ inputMode: "numeric" }}
              placeholder="Insert lenght password"
              onChange={handleChangeInput}
              value={lenght}
              label="Lenght Password"
              color="secondary"
              focused
            />
          </div>
          <h2>Password: {pass} </h2>
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button variant="contained" onClick={handleGenerate}>
          Generate Pass
        </Button>
        <Button color="success" variant="contained" onClick={handleCopy}>
          Copy Password
        </Button>
        <Button color="error" variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardPassword;
