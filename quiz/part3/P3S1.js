    // Soal 1
    function cariMean(arr) {
    // you can only write your code here!
    let count = 1;
    let num = 0;
    for(let i = 0 ;i< arr.length - 1; i++){
        num += arr[i] 
        count += 1;
    }
    return num;

    let mean = num / arr.length;
    console.log(Math.floor(mean));
    }

    // TEST CASES
    console.log(cariMean([1, 2, 3, 4, 5])); // 3
    console.log(cariMean([3, 5, 7, 5, 3])); // 5
    console.log(cariMean([6, 5, 4, 7, 3])); // 5
    console.log(cariMean([1, 3, 3])); // 2
    console.log(cariMean([7, 7, 7, 7, 7])); // 7

    //tips baca dokumentasi Math js untuk pembulatan