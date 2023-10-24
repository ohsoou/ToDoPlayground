import '../App.css';
import {AppBar, Toolbar, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton
                        edge="start"
                        sx={{ mr: 2 }}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        TODO
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;