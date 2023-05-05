var arr = [4, 2, 1, 3, 5]
function min_to_max() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            var temp = arr[2];
            arr[2] = arr[0];
            arr[0] = temp;
        }


    }
    return [i];


}
min_to_max()