import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Movie App
                </Typography>

                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/Search">
                    Search
                </Button>
                <Button color="inherit" component={Link} to="/Favorites">
                    Favorites
                </Button>
            </Toolbar>
        </AppBar>

    )
}