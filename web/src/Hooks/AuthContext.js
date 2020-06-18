import React, { createContext, useReducer } from 'react';

const initial_state = {
  isAuthenticated: false,
  user: null,
  token: null,
};

function createInitialState(){
  const user = localStorage.getItem('@MyApp/user');
  const token = localStorage.getItem('@MyApp/token');

  if(user && token){
    return {
      isAuthenticated: true,
      user,
      token,
    };
  }

  return {
    isAuthenticated: false,
    user: null,
    token: null,
  };
}

const reducer = (state, action) => {
  switch(action.type) {
    case "@LOGIN":
      // localStorage.setItem('@MyApp/user', JSON.stringify(action.payload.user));
      // localStorage.setItem('@MyApp/token', JSON.stringify(action.payload.token));

      localStorage.setItem('@MyApp/user', action.payload.user );
      localStorage.setItem('@MyApp/token', action.payload.token );



      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.payload,
      };


    case "@SAIR":

      localStorage.removeItem('@MyApp/user');
      localStorage.removeItem('@MyApp/token');

      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
}

export const AuthContext = createContext();

export function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initial_state, createInitialState);

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

