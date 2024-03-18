export const getJokeCN = async() => {
  
    try {
        const url = await fetch(`https://api.chucknorris.io/jokes/random`);
        const broma  = await url.json();
        const jokeCN = {
            value : broma.value,
            url: broma.url,
            update_at:broma.updated_at,
            id:broma.id
        }
        return jokeCN;
    } catch (error) {
        return error;
    }
}
