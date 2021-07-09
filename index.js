const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    getData(Array.from(data.split('\n')));
});

function getData(content){
  let data = []
  for (let i in content){
    data.push(parseInt(content[i]));
  }
  twoProducts(data, 2020);
}


// //Solve using brute force
function twoProducts (list, target){
  let product = 0;

  for (let i = 0; i < list.length; i++){
    for(let j = i+1; j < list.length; j++){
      if ((list[i] + list[j]) == target){
        product = list[i] * list[j];
      }
    }
  }
  console.log(product, ' here');
}


// // //solve using hashing
function twoProducts (list, target) {
  let hashObj = {};

  for (let i = 0; i < list.length; i++){
    hashObj[i] = list[i];
  }

  for (let i in hashObj){
    let num2 = target - hashObj[i];
    if(Object.values(hashObj).includes(num2) ){
     product = hashObj[i] * num2;
    }
  }
  console.log(product);
}



//solve using binary search
function twoProducts(list, target){
  let product = [];
  let sortedData = list.sort((a, b) => a-b);

  for (let i in sortedData){
    let num2 = target - sortedData[i];
    if(binSearch(sortedData, num2)){
      product.push(binSearch(sortedData, num2));
    }
  }

  console.log(product.reduce((a,b) => a*b));
}

// iterative approach
function binSearch(arr, target, startPnt = 0, endPnt = arr.length - 1){
  while( startPnt <= endPnt){
    let midPnt = ~~(startPnt + (endPnt - startPnt)/2);

    if (arr[midPnt] === target) return target;
    else if (arr[midPnt] < target) {
      startPnt = midPnt + 1;
    }
    else {
      endPnt = midPnt - 1
    }
    
  }
  return false
}

//recursive approach
function binSearch(arr, target, startPnt = 0, endPnt = arr.length - 1){
  if(startPnt > endPnt) return false;

  let midPnt = ~~(startPnt + (endPnt - startPnt)/2);  

  if (arr[midPnt] === target) return target;

  if(arr[midPnt] > target){
    return binSearch(arr, target, startPnt, midPnt-1)
  }
  else {
    return binSearch(arr, target, midPnt+1, endPnt)
  }
}