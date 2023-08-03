export const API_URLS = {
    PRODUCTS: {
        url: 'https://dev-tngvyhvvpdelpke.api.raw-labs.com/products.json',
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        }
    },
    CATEGORIES:{
        url:'https://dev-tngvyhvvpdelpke.api.raw-labs.com/categories.json',
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        }
    }
}