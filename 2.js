let axios = require('axios');

let fetch_cached = function()
{
	if(localStorage.length === 0)
	{
		axios({
			  url: 'https://localhost:3000/Test.pdf',
			  method: 'GET',
			  responseType: 'blob', 
			}).then((response) => {
			 	let data = response.data;
			 	console.log(data);
			 	localStorage.setItem('Data', data);
			});
	}
}

fetch_cached();

