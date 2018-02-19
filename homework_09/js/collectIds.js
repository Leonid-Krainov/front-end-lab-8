collectIds = (arr) => { 
    var newArr = getFilteredArray(arr,function(i){
        return i.rating > 3.0;
    });
    return getTransformedArray(newArr,function(i){
        return i.id;
    }); 
}    