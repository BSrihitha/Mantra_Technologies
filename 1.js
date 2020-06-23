let filterJson = function(data){

	let outData = [];
	for(let obj of data)
	{
		if(obj.type === 'external')
			outData.push(obj);
	}
    return outData; //Contains filtered output 
}