import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const account = {
USER_URL: "https://openapi.etsy.com/v2/users/CANdles.js?callback=getData&api_key=",
LISTINGS_URL: "https://openapi.etsy.com/v2/shops/CANdles5280/listings/active.js?callback=getData&api_key=",
KEY: process.env.REACT_APP_KEYSTRING,
getUser() {
  document.getElementById('user').setAttribute('src', (this.USER_URL + this.KEY));
},
getListings() {
  document.getElementById('listings').setAttribute('src', (this.LISTINGS_URL + this.KEY));
}
}
account.getUser();
account.getListings();
