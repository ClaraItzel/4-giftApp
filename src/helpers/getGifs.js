const getGifs = async (category) => {

    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=IgRPPKAa0MDD5FUs4lOYnSZY0sdz3jrC`

    const response= await fetch(url);

    const {data} = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log(gifs);
    return gifs;
}

export default getGifs;