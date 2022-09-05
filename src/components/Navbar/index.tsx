import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate("/movies");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={handleHeaderClick}
          >
            Queue Movies Project
          </Typography>
          <Button color="success" variant="contained">
            Add new movie
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
