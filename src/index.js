import React from 'react';
import ReactDOM from 'react-dom';
//import './global.css';
import GlobalStyle from './styles/global';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

/* 
const client = new ApolloClient({
  uri: 'http://cors-anywhere.herokuapp.com/https://blog.donilab.org/graphql)',
  cache: new InMemoryCache()
});
 */

/* const client = new ApolloClient({
  uri: 'https://blog.donilab.org/graphql',
  cache: new InMemoryCache()
});



/* 
client
  .query({
    query: gql`
   query {
      posts {
        edges {
          node {
            title
            databaseId
          }
        }
      }
    }
    
    `
  })
  .then(result => console.log(result)); */

 
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <GlobalStyle/>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
reportWebVitals();
