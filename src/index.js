import React, { useState, Component, useEffect } from 'react';
import ReactDOM from 'react-dom';


console.log('Hello Candles!');

const getListings = async () => {
    const URL = `https://openapi.etsy.com/v2/listings/active?api_key=`;
    const KEY = process.env.REACT_APP_KEYSTRING;
    const request = await fetch(URL+KEY, 
      {
      header: {
      'Access-Control-Allow-Origin':'*',
    }
  });
    const response = await request;
    console.log(response.json());
}
getListings()