import fetchJsonp from 'fetch-jsonp';

const Account = {
    USER_URL: "https://openapi.etsy.com/v2/users/CANdles.js?callback=getData&api_key=",
    LISTINGS_URL: "https://openapi.etsy.com/v2/shops/CANdles5280/listings/active.js?callback=getData&api_key=",
    KEY: process.env.REACT_APP_KEYSTRING,
    getUser() {
      document.getElementById('user').setAttribute('src', (this.USER_URL + this.KEY));
    },
    getListings() {
      document.getElementById('listings').setAttribute('src', (this.LISTINGS_URL + this.KEY));
    },
    async getJsonpData() {
      const req = await fetchJsonp(this.LISTINGS_URL + this.KEY);
      const res = await req.json();
      console.log(res);
    }
    }


export default Account;


