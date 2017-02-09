


function findMinMax(numArray)
{
	var ls = new Array();
	var min = numArray[0];
	var max = numArray[0];

	for (var index in numArray)
	{
		if(numArray[index] < min)
		{
			min = numArray[index];
		}

		if(numArray[index] > max)
		{
			max = numArray[index];
		} 
	}

	if(min === max)
	{
		ls[0] = min;
	}else{
		ls[0] = min;
		ls[1] = max;
	}

	return ls;
}


