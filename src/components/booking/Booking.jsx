import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import hotelIcon from "../../assets/hotel.jpg";
import roomIcon from "../../assets/room1.jpg";
import dormIcon from "../../assets/dorm.jpg";

const Booking = () => {
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  
  const handleDateChange = (daysToAdd) => {
    const today = new Date();
    today.setDate(today.getDate() + daysToAdd);
    const formattedDate = today.toISOString().split("T")[0]; 
    setDate(formattedDate);
  };

  return (
    <Container maxWidth="sm" sx={{ my: 5 }}>
      
      <Grid container spacing={3} justifyContent="center" sx={{ my: 4 }}>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            sx={{
              flexDirection: "column",
              p: 2,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <img
              src={hotelIcon}
              alt="Hotel"
              style={{ width: "100%", height: "200px", borderRadius: "8px" }}
            />
            <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
              Book Hotels
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            sx={{
              flexDirection: "column",
              p: 2,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <img
              src={roomIcon}
              alt="Room"
              style={{ width: "100%", height: "200px", borderRadius: "8px" }}
            />
            <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
              Rent Rooms
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            sx={{
              flexDirection: "column",
              p: 2,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <img
              src={dormIcon}
              alt="Dormitory"
              style={{ width: "100%", height: "200px", borderRadius: "8px" }}
            />
            
            <Typography
              variant="body1"
              sx={{ mt: 2, fontWeight: "bold", whiteSpace: "nowrap" }}
            >
              Book Dormitory
            </Typography>
          </Button>
        </Grid>
      </Grid>

      
      <Box
        sx={{
          p: 4,
          backgroundColor: "#fff",
          borderRadius: 3,
          boxShadow: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Hourly Basis Hotels Booking
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
          Assured hotels of your choice
        </Typography>

        <Box component="form" noValidate sx={{ mt: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Enter City"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            margin="normal"
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            type="date"
            label="Select Date"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            margin="normal"
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              py: 2,
              mt: 4,
              backgroundColor: "#d32f2f",
              "&:hover": { backgroundColor: "#b71c1c" },
            }}
          >
            SEARCH ROOMS
          </Button>
        </Box>

       
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
            fontWeight: "bold",
          }}
        >
          <Button
  variant="outlined"
  color="primary"
  sx={{
    px: 4,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#ADD8E6", 
      color: "#000000", 
    },
  }}
  onClick={() => handleDateChange(0)}
>
  Today
</Button>
<Button
  variant="outlined"
  color="primary"
  sx={{
    px: 4,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#ADD8E6", 
      color: "#000000", 
    },
  }}
  onClick={() => handleDateChange(1)} 
>
  Tomorrow
</Button>

        </Box>
      </Box>
    </Container>
  );
};

export default Booking;
