//Soal 1
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  // you can only write your code here!
  let count = 0;
  arr_kata = [];
  arr_kata = kata.split("");
  for(let i = 0; i < arr_kata.length ; i++){
    if(arr_kata[i] === arr_kata[arr_kata.length - 1 - i ]){
      count++;
      if(count === arr_kata.length) return true;
    }
    else return false;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false