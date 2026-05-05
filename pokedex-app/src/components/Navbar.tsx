import { Link } from "react-router-dom"
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

// Navbar funktsioon
export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* //Pealkiri */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Pokédex
        </Typography>

        {/* //Nupp kodulehele */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        {/* //Nupp lemmikutesse */}
        <Button color="inherit" component={Link} to="/favorites">
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
  );
}