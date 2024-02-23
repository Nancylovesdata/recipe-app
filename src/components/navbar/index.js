import { AppBar, Toolbar, Typography } from "@mui/material";

// import {AppBar, Toolbar, IconButton} from 

export default function Navbar() {
    return (<AppBar color= "secondary" position="static">
        <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Recipe App
            </Typography>

        </Toolbar>
    </AppBar>);
}