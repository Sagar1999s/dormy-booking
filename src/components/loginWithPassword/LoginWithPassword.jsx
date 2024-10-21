import React, { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom"; 

export const LoginWithPassword = ({ setFormType }) => {
  const navigate = useNavigate(); 
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

 
  const handleLogin = () => {
   
    alert(`Logging in with Mobile: ${mobile} and Password: ${password}`);
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
          Login with Password
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
          onClick={handleLogin}
        >
          LOGIN
        </Button>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          OR
        </Typography>

        
        <Button
          sx={{
            mt: 3,
            py: 1,
            px: 2,
            width: "70%", 
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
          onClick={() => navigate("/loginwithotp")}
        >
          Login with OTP
        </Button>

        
        <Button
          sx={{
            mt: 2,
            py: 1,
            px: 2,
            width: "45%", 
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
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};
