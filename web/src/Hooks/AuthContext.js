import React, { createContext, useReducer } from 'react';
import api from '../services/api';

const initial_state = {
  isAuthenticated: false,
  user: null,
  token: null,
  exp: null,
};

function createInitialState(){
  const user = localStorage.getItem('@MyApp/user');
  const token = localStorage.getItem('@MyApp/token');
  const exp = localStorage.getItem('@MyApp/exp');

  if(user && token){

    if(Date.now()/1000 < Number(exp)){

      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        isAuthenticated : true,
        user,
        token,
        exp,
      }
    }

  }

  return {
    isAuthenticated: false,
    user: null,
    token: null,
    exp: null,
  }

}

const reducer = (state, action) => {
  switch(action.type) {
    case "@LOGIN":
      localStorage.setItem('@MyApp/user', action.payload.user );
      localStorage.setItem('@MyApp/token', action.payload.token );
      localStorage.setItem('@MyApp/exp', action.payload.exp);

      api.defaults.headers.authorization = `Bearer ${action.payload.token}`;

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        exp: action.payload.exp,
      };

    case "@SAIR":
      localStorage.removeItem('@MyApp/user');
      localStorage.removeItem('@MyApp/token');
      localStorage.removeItem('@MyApp/exp');


      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        exp: null,
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
        dispatch,
      }}
    >
    {children}
    </AuthContext.Provider>
  );
}

