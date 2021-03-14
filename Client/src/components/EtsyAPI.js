import fetchJsonp from 'fetch-jsonp';

const getAPI = async () => {
  const request = await fetch('/etsy');
  const response = await request.json();
  return response
}

const Account = {
    async getUser() {
      const data = await getAPI();
      document.getElementById('user').setAttribute('src', (await data.USER_URL + await data.KEY));
    },
    async getListings() {
      const data = await getAPI();
      document.getElementById('listings').setAttribute('src', (await data.LISTINGS_URL + await data.KEY));
    },
    async getJsonpUser() {
      const data = await getAPI();
      const userRequest = await fetchJsonp( await data.user_URL + await data.KEY + "&includes=MainImage");
      const userResponse = await userRequest.json();
      return userResponse.results
    },
    async getJsonpListing(listingsAbortController) {
      const data = await getAPI();
      const listingRequest = await fetchJsonp(await data.LISTINGS_URL + await data.KEY + "&includes=MainImage", { signal: listingsAbortController.signal });
      const listingsResponse = await listingRequest.json();
      return listingsResponse.results;
    }
  }

export default Account;


