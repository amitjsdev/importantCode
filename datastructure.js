//insert value in array
let arr = [9, 8, 9, 8, 9, 8];
let postion = 3;
let newel = 7;
for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= postion) {
    arr[i + 1] = arr[i];
    if (i == postion) {
      arr[i] = newel;
    }
  }
}
console.log(arr);

//remove element

let arr = [9, 8, 9, 8, 9, 8];
let postion = 3;

for (let i = postion; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(arr);

//merge two array
let arr1 = [9, 8, 9, 8, 9, 8];
let arr2 = [1, 3, 4];
let arr3 = [];
for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i];
}
for (let b = 0; b < arr.length; b++) {
  arr3[arr1.length + 1] = arr[b];
}
console.log(arr3);

let s = [4, 6, 3, 1, 2];
for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j < s.length; j++) {
    if (s[i] > s[j]) {
      let temp;
      temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
  }
}
console.log(s);

//recursion with reverse

let data = [1, 3, 4, 6, 7];

let temp;

function getRevese(data, start, end) {
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;

    getRevese(data, start + 1, end - 1);
  }
  return data;
}

console.log(getRevese(data, 0, data.length - 1));

let data = [1, 3, 4, 6, 7];
let countVal = data.length;
function deque() {
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i + 1];
    countVal--;
    data.length = countVal;
  }
}

//binary search : it will work only for sort array

let arr = [33, 44, 22, 99, 88];

for (let i = 0; i <= arr.length - 1; i++) {
  for (let j = i; j <= arr.length - 1; j++) {
    if (arr[j] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

let find = 99;
let start = 0;
let end = arr.length - 1;
let position = "";

while (start <= end) {
  let mid = Math.floor(start + end / 2);
  if (data[mid] == find) {
    position = mid;
    break;

    
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    start = mid - 1;
  }
}

function recursion (data,start,end) {
  let mid = Math.floor(start + end / 2);
  if (data[mid] == find) {
    position = mid;
    break;

    
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    start = mid - 1;
  }
}

//palidrome
let str =  'level';
function palindrome (data) {
  let start = 0
  let end = data.length - 1;
let result = true;
  while(end > start){

     if(data[start] != data[end]){
      result =  false;
     }
     start++;
     end--;
  }
  return result;

}



//string 

let str = "hello test";

let arr = str.split('');
let strObj = {}
let maxVal = ''
for(let i = 0;i < arr.length;i++){
        let key = arr[i]
     if(arr[i].trim()){
        if(!strObj[key]){
        strObj[key]=0;
    }
    strObj[key]++
     }
    if(maxVal == '' || strObj[key] > strObj[maxVal]){
        maxVal +=key
    }
}

//
class List {

  constructor(data){
    this.head = {
      value:data,
      next:null
    }
    this.tail = this.head
  }

  appendNode(nodeData){

    let newNode = {
      value : nodeData,
      next:null
    }
      this.tail.next = newNode
      this.tail= newNode
  }
  tranverse(){
    let counter = 0;
    let currentNode = this.head;
    while(counter < this.size){
      currentNode=currentNode.next;
      counter++;
    }
  }

  deleteNode(index){
      let counter = 1;
      let lead = this.head;
      if(index === 1){
        this.head =this.head.next;
      }else{
        while(counter < index - 1){
           lead = lead.next;
           counter++;
        }
        let nextNode = lead.next.next;
        lead.next = nextNode;
        console.log(lead)
      }
  }

  inserNode(index,value){
    let counter = 1;
    let currentNode = this.head;
      while(counter > index){
        counter++;
        currentNode=currentNode.next;
      }
      let nextNode = currentNode.next;
      currentNode.next = {
            value: value,
            next: nextNode
      }
  }

        searchNode(data){
          let result = undefined;
          let lead = this.head;
          let loop = true;
            while(loop){
              lead = lead.next;
              loop = !!lead;
                
              if(loop && lead.value == data){
                  loop = false;
                  result = lead;
              }
            }
        }
} 

let list = new List(200);
list.appendNode(200)
list.inserNode(2,300)
list.searchNode(2,300)

console.log(list)
