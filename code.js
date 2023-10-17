function quicksort(arr)
{
	if (arr.length==0){
		return []
	}
	return quickSortIterative(arr, 0, arr.length-1);
}

function quickSortIterative(arr, lo, hi)
{
    var stack = new Array(hi);
    stack.fill(0);
    var topOfStack=0;
    var bufferVariable=-1;
    var pivot=-1;
    stack[topOfStack]=lo;
    topOfStack++;
    stack[topOfStack]=hi;

    while (topOfStack > -1){
	    hi=stack[topOfStack];
	    topOfStack--;
	    lo=stack[topOfStack];
	    topOfStack--;

	    pivot = lo;
       	    for(i = lo + 1; i <= hi; i++){
               	    if(arr[i] < arr[lo]){
                       	    bufferVariable=arr[pivot+1];
                       	    arr[pivot+1]=arr[i];
                       	    arr[i]=bufferVariable;
                       	    pivot++;
               	    }
       	    }
       	    bufferVariable=arr[lo];
       	    arr[lo]=arr[pivot];
      	    arr[pivot]=bufferVariable;
	    
	    
	    if (pivot-1 > lo){
		    topOfStack++;
		    stack[topOfStack]=lo;
		    topOfStack++;
		    stack[topOfStack]=pivot-1;
	    }
	    if (pivot+1 < hi){
		    topOfStack++;
		    stack[topOfStack]=pivot+1;
		    topOfStack++;
		    stack[topOfStack]=hi;
	    }
    }
    return arr;
}
