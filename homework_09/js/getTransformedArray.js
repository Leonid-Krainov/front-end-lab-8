getTransformedArray = (arr,trans) => {  
    var newArr = [];
    forEach(arr,function(i){
        newArr.push(trans(i));
    });
    return newArr;
}