import React, { createContext, useReducer } from 'react';

const initial_state = {
  isAuthenticated: false,
  user: 'eduardo',
  token: 'nulsdfsd',
};

const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      console.log("login") ;
      return state;
    case "SAIR":
      console.log("sair");
      return state;
    default:
      return state;
  }
}

export const AuthContext = createContext();

export function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initial_state);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    {children}
    </AuthContext.Provider>
  );
}

