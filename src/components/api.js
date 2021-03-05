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
    async getJsonpUser() {
      const userRequest = await fetchJsonp(this.user_URL + this.KEY);
      const userResponse = await userRequest.json();
      return userResponse.results
    },
    async getJsonpListing() {
      const listingRequest = await fetchJsonp(this.LISTINGS_URL + this.KEY);
      const listingsResponse = await listingRequest.json();
      return listingsResponse.results;
    }
  }

export default Account;


