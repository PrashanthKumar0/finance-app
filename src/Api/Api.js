export class Api {
    #url = 'http:/localhost:8800'
    constructor(url) {
        this.#url = url;
    }
    async getProducts() {
        return await fetch(`${this.#url}/products`).then(r => r.json());
    }
    makeOrder(productId, price) {

    }
}