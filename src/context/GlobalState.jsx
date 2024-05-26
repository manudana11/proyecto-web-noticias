import axios from 'axios';
import AppReducer from "./AppReducer"
import React, { createContext, useReducer } from 'react';


const initialState = {
  news: []
};

const apiUrl = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=BI47iAwAfA0GFInD3uPg8nHpBeeUe16Q';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getNews = async () => {
        const res = await axios.get(apiUrl);
        dispatch({
          type: "GET_NEWS",
          payload: res.data.results,
        });
      };
      return (
        <GlobalContext.Provider
          value={{
            news: state.news,
            getNews,
          }}
        >
          {children}
        </GlobalContext.Provider>
      );    
};
