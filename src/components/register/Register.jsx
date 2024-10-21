import React, { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom"; 

export function Register({ setFormType }) {
  const navigate = useNavigate(); 
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert(`Registered with Mobile: ${mobile}`);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ my: 5 }}>
      <Box
        sx={{
          p: 4,
          backgroundColor: "#ffffff",
          borderRadius: 3,
          boxShadow: 4,
          textAlign: "center",
          border: "1px solid #e0e0e0",
        }}
      >
        
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontFamily: "roboto" }}>
          Register
        </Typography>

       
        <TextField
          fullWidth
          variant="outlined"
          label="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          margin="normal"
          InputProps={{
            style: {
              borderRadius: 8,
            },
          }}
        />

       
        <TextField
          fullWidth
          variant="outlined"
          label="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          InputProps={{
            style: {
              borderRadius: 8,
            },
          }}
        />

        
        <TextField
          fullWidth
          variant="outlined"
          label="Confirm your password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          margin="normal"
          InputProps={{
            style: {
              borderRadius: 8,
            },
          }}
        />

        
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            py: 2,
            mt: 3,
            backgroundColor: "#00796b",
            "&:hover": { backgroundColor: "#004d40" },
          }}
          onClick={handleRegister}
        >
          Verify with OTP
        </Button>

        
        <Button
          sx={{
            mt: 3,
            py: 1,
            px: 2,
            width: "55%", 
            borderColor: "#1e88e5",
            color: "#1e88e5",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: "bold",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#000000",
              color: "#fff",
              borderColor: "#1e88e5",
            },
          }}
          variant="outlined"
          onClick={() => navigate("/loginwithpassword")}
        >
          Back to Login
        </Button>
      </Box>
    </Container>
  );
}
