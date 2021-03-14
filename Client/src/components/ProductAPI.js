const ProductAPI = {
    url: '/product',
    async getProducts(productAbortController) {
        const request = await fetch(this.url, { signal: productAbortController.signal });
        const response = await request.json()
        console.log(response)
        return response;
    }
}

export default ProductAPI;