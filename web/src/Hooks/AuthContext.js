import React, { createContext, useReducer } from 'react';
import api from '../services/api';

const initial_state = {
  isAuthenticated: false,
  user: null,
  token: null,
};

async function createInitialState(){
  const user = localStorage.getItem('@MyApp/user');
  const token = localStorage.getItem('@MyApp/token');
  let tokenIsValid = false;

  if(user && token){

    const response = await api.get('sessions', { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkyNTIzMjM0LCJleHAiOjE1OTI3ODI0MzR9.7iclFkLh78TjXHiVXK4BI8u7CmK-KpslJyC69WpAkKM' });
    console.log(response.data.valid);
    tokenIsValid = response.data.valid;
  }

  if(tokenIsValid){
    api.defaults.headers.authorization = `Bearer ${token}`;
    return {
      isAuthenticated: true,
      user,
      token,
    }
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
      localStorage.setItem('@MyApp/user', action.payload.user );
      localStorage.setItem('@MyApp/token', action.payload.token );
      api.defaults.headers.authorization = `Bearer ${action.payload.token}`;

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

