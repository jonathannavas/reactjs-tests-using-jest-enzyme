
export const getImagen = async() => {

    try {

        const apiKey = 'fWo7dXt78TPBtVXQgSvIjWhlji1a5vG8';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No existe';
    }
    
}

