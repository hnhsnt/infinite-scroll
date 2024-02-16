// Unsplash API
const count = 10;
const apiKey = 'urXmZ1dI8RgVJQ9sV5TkZg2R6YNwTBzmEEH_kapf31o';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        
    }
}

// Onload
getPhotos();