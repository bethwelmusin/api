import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';





const Update = () => {

  const navigate = useNavigate();



  const [id, setID] = useState(null);

  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
   
  }, []);



  const updateAPIData = () => {
    axios.put(`https://63b046a8f9a53fa2026540d8.mockapi.io/endpoint/${id}`, {
        firstName,
         lastName,
         
	})
  .then(() =>{

    navigate('/Read')
  }

  )
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
          value={firstName} 
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
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)}
        />
      </Box>

      <Box mt="2px">
        <Button
         type="submit" 
         variant="contained"
         onClick={updateAPIData}
         
         >
          update
        </Button>
      </Box>
    </div>
  );
};

export default Update;
