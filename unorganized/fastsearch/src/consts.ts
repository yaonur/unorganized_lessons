const isLocal = process.env.NEXT_PUBLIC_IS_LOCAL;
let apiUrlValue =''
console.log("isLocal:",isLocal)
if (isLocal==='true'){
	apiUrlValue = '';
}else{
	apiUrlValue = 'https://fastapi.onur-yanik-ynr-23d.workers.dev';
}

export const apiUrl = apiUrlValue;

