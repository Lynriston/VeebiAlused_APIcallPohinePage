import { useState } from "react";
import { Container, Typography, TextField } from "@mui/material";

export default function Search() {
    const [query, setQuery] = useState("");

    return (
        <Container>
            <Typography variant="h4" mt={3}>
                Search Movies
            </Typography>
        </Container>
    )
}