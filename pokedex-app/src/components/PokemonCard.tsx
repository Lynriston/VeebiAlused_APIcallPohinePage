import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";


//Defineerib PokemonCardProps tüüpi
//objekt nimega pokemon, millel on nimi
type PokemonCardProps = {
  pokemon: {
    name: string;
  };
};

//Funktsioon Pokemoni kuvamist kaardina
export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    //Laseb kaardil toimida kui link detail vaatesse
    <Card
      component={Link}
      to={`/pokemon/${pokemon.name}`}
      sx={{
        textDecoration: "none", //eemaldab  allkriipsu
        transition: "0.2s",// annab sujuva animatsiooni
        "&:hover": { transform: "scale(1.05)" }, //suurendab kaardi kui hiir on selle peal
      }}
    >
      <CardContent>
        {/* Kuvab pokemoni nime */}
        <Typography variant="h6" align="center">
          {pokemon.name.toUpperCase()}
        </Typography>
      </CardContent>
    </Card>
  );
}