getFilteredArray = (arr,predicateFunction) => {  
    var newArr = [];
    forEach(arr,function(i){
        if (predicateFunction(i) === true) {
            newArr.push(i);
        }
    });
    return newArr;
}