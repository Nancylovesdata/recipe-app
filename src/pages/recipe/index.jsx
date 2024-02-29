import { Container } from "@mui/material";
import { useParams } from "react-router-dom"
import useSWR from "swr";
import spinner from "../../assets/images/infinite-spinner.svg";

const getRecipe = (...args) => {
     //prepare url
     const url = new URL(...args);
     url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
     //fetch and return data
return fetch (url).then(response => response.json());
}

export default function Recipe(){

const {id} =useParams ();
const {data: Recipe, isLoading } =useSWR(`https://api.spoonacular.com/recipes/${id}/information`,getRecipe)
console.log(Recipe, isLoading);

    return (
        <>
        {isLoading? <img src = {spinner} /> : (
            <Container>
            <h1>{Recipe.title}</h1>
            
            <div dangerouslySetInnerHTML= {{__html: Recipe.summary}}/>
<img src = {Recipe.image}/>
           
            </Container>
        )}
        </>
    );
 
}