var arr = [4, 2, 1, 3, 5]
function min_to_max() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            var temp = arr[i];
            arr[i]=temp
            delete arr[i];
            arr.unshift(temp);
        }


    }
    return [i];


}
min_to_max()