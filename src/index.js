import React from 'react';
import ReactDOM from 'react-dom';
import account from "./components/api"
import App from "./app.js"

account.getUser();
account.getListings();

ReactDOM.render(<App />, document.getElementById('root'));


