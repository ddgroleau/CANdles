const etsyAPI = async (request, response) => {
    await response.json({
        USER_URL: "https://openapi.etsy.com/v2/users/CANdles.js?callback=getData&api_key=",
        LISTINGS_URL: "https://openapi.etsy.com/v2/shops/CANdles5280/listings/active.js?callback=getData&api_key=",
        KEY: process.env.REACT_APP_KEYSTRING
    });
    }

module.exports= etsyAPI;