 

import { createTheme } from "@mui/material"
// you can also import colors
import { pink,blue,yellow} from "@mui/material/colors";

const primaryColor = pink[600];
const secondaryColor = yellow["A100"];
const errorColor = blue.A100;

// custom theme
const theme = createTheme({
    
     // pallete for primary and secondary colors
    palette: {
      primary: {
            main: primaryColor,
// also could use contrast text 
      },
        secondary: {
            main: secondaryColor,
      },
        error:{
            main:errorColor, 
      }
    },
    // custom changed element
    components:{

        MuiFab:{
            // this tells MUI that I want to change that file
            styleOverrides:{
                secondary:{
                    // accesing hover css part
                    '&:hover':{
                        backgroundColor:"white"
                    },
                    backgroundColor:{secondaryColor}
                }
            }
        }
    }
    
});
  export default theme