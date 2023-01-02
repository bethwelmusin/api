import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from 'react-router-dom';



const Create = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const postData = () => {

    axios.post(`https://63b046a8f9a53fa2026540d8.mockapi.io/endpoint`, {
      firstName,
      lastName,
    
  })
  .then(() => {
    navigate('/Read')
})

    
}

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          helperText="Please enter your First name"
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >


        <TextField
         helperText="Please enter your last name"
          label="Last Name"

          onChange={(e) => setLastName(e.target.value)}
          
          
          />
      </Box>


      <Box  mt="2px">
        <Button type="submit" variant="contained"

          onClick={postData}
        >

          Submit

        </Button>
      </Box>
     
    </div>
  );
};

export default Create;
