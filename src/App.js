import ImageCard from "./components/ImageCard";
import {Box,AppBar,Toolbar,IconButton,Typography,Button}from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
// importing own theme
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>

   <div className="App">
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
     <ImageCard/>
   </div>
    </ThemeProvider>
  );
}

export default App;
