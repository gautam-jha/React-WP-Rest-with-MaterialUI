import React, { createContext } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary:{
          main:'#ffffff'
      },
      secondary: {
          main: '#2196f3'
        },
        dark:{
          main:'#222222'
        }
      }
    },
  )

export const AppContext = createContext();
export const AppProvider = props => (
  <AppContext.Provider value={props}>
  
    <MuiThemeProvider theme={theme}>
 
      {props.children}
        
      </MuiThemeProvider>
  
  </AppContext.Provider>
);


