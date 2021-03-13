const ProductAPI = {
    url: '/product',
    async getProducts() {
        const request = await fetch(this.url);
        const response = await request.json()
        console.log(response)
        return response;
    }
}

export default ProductAPI;