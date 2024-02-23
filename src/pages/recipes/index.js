import { Container, CardMedia, TextField, Grid, Card, CardContent, Typography } from "@mui/material";
export default function Recipes() {
    return (
        <Container sx={{ my: '2rem' }} maxWidth="sm">
            <TextField
                fullWidth="outlined-basic"
                label="Enter a keyword to search recipes and hit Enter"
                variant="outlined" />
            <Grid container spacing={3}>
                <Grid sx={{mt:"1rem"}} item xs={4}>
                    <Card>
                        <CardMedia sx={{ height: 140 }} image="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFtYnVyZ2VyfGVufDB8fDB8fHww" />
                    </Card>
                    <CardContent>
                        <Typography variant="h5">
                            HAMBURGER
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </Container>
    );
}