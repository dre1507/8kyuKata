/**
 * You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).
 */

function billboard(name, price = 30){
    //separate the letters and create an array
    let nameArray = name.split("");
    //transform each letter to a number
    let numArray = nameArray.map(x => x = price);
    //return the sum of the numbers
    return numArray.reduce((first, next) => first + next, 0)
  } 