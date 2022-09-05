import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleGoToMoviesClick = () => {
    navigate("/movies");
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h4" textAlign="center" py={5}>
        There was an error while processing your request. Please try again
        later.
      </Typography>

      <Button variant="outlined" onClick={handleGoToMoviesClick}>
        Go to movies
      </Button>
    </Box>
  );
};

export default Error;
