import api from "./_api";

async function fetcher ( url:string ) {
	return api.get(url).then(res => res.data)
}

export default fetcher