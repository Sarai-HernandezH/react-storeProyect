export const API_URLS = {
    INSTRUMENTS: {
        url: './src/instruments.json',
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    },

    VINYLS: {
        url: './src/vinyls.json',
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }

}