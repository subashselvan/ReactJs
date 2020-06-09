
// have a type definition for environment variables 
  
// in src/react-app-env.d.ts 

// have the following code 

  /// <reference types="react-scripts" />

  interface Window {
    INITIAL_REDUX_STATE: any
  }