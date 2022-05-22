const BASE_URL_PATH = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/";
export const API_KEY = "Bearer 4BTjXRy1zRew5u6onySO4RSwvVro0QDJtjYyd1xoNKK9V9pGPyrcrIo2qXGEVybawmpA5Sxvj4sbCTDbcDkW0iSSV__lEC-U-fkm7CK0wlnfpPGmyVq71rZGvC2KYnYx"

async function fetcher(requestPath) {
    const res = await fetch(`${BASE_URL_PATH}${requestPath}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: API_KEY,
            "Access-Control-Allow-Origin" : "http://localhost:3000",
            "Access-Control-Allow-Credentials" : "true",
            "Access-Control-Allow-Methods" : "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers" : "Origin, Content-Type, Accept",
        },
    });
    const data = await res.json();
    return data;
}

export default fetcher;