function sockMerchant(n, ar) {
  // find unique element in the array and sort it
  const uniqueElem = [...new Set(ar)].sort((a, b) => a - b);

  // create a group array where we will have an array of array with related pairs eg something like [[1,1,1], [2,      2]]
  const groupedArr = [];

  // create a even counter variable that increase based on the number of pairs of even socks
  let even = 0;

  // loop through the unique elem
  uniqueElem.forEach((item) => {
    // create a grouped pairs based on the unique unique elem array
    groupedArr.push(ar.filter((elem) => elem === item));
  });

  //loop through the grouped arr and determine the even pairs of socks
  groupedArr.forEach((item) => {
    if (item.length >= 2) {
      even += item.length / 2 === 0 ? 1 : Number.parseInt(item.length / 2);
    }
  });

  // return the even pairs of socks
  return even;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
