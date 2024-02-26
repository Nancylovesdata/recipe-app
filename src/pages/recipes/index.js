import { Container, CardMedia, TextField, Grid, Card, CardContent, Typography } from "@mui/material";
import RecipeItem from "../../components/recipe-item";
import { useEffect, useState } from "react"

export default function Recipes() {
    // the recipes in the const array is to fetch the recipes, and the setRecipes is to update the Recipes
    const [recipes, setRecipes] = useState([]);

    const searchRecipes = () => {
        //prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', '4b01be90c2fb45019bbf5b209d3be976')

        // fetch recipes
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                //update the recipes state
                setRecipes(data.results);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
//empty square bracket means run once
    useEffect(searchRecipes,[]);

    return (
        <Container sx={{ my: '2rem' }} >
            <TextField
                fullWidth="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter"
                variant="outlined" />
            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />)}
            </Grid>

        </Container>
    );
}