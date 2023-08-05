export const API_URLS = {
    PRODUCTS: {
        url: `http://localhost:3000/products`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    },
    CATEGORIES: {
        url: `http://localhost:3000/categories`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }
}