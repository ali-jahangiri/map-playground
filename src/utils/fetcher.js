const BASE_URL_PATH = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/";

// side note : the API_Key may can be included in env.
export const API_KEY = "Bearer kqxvp9If8Wi2s-OEoiLPuEPQOBbsBxtC-Ng4DId5waTwoY9NYClZpwJYzmZ_5Cbzp6saVwMRkwCohFbqXz6Po-ipoYQbCchGnRM9PTMsdOItYp3P_pFHXwudWEGLYnYx"

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