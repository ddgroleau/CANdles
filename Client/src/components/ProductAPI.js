

const ProductAPI = {
    url: '/product',
    async getProducts() {
        const request = await fetch(this.url);
        const response = await request.json()
        return response;
    }
}

export default ProductAPI;