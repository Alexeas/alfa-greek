let arrOne =[
    {"name": 'apple',
    "ID": '22'},
    {
        "name": 'oil',
        "ID": '22',
    },
    {
        "name": 'meet',
        "ID": '43',
    },
    {
        "name": 'paper',
        "ID": '67',
    }
]

let arrTwo = [
    {
        "_id": '22',
        "naming": 'home',
    },
    {
        "_id": '43',
        "naming": 'shop',
    },
    {
        "_id": '87',
        "naming": 'librery',
    },
    {
        "_id": '92',
        "naming": 'garden',
    },
];
let arrThree = arrOne.slice(0);
let warn = [];

  for (let i = 0; i < arrThree.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrThree[i].ID === arrTwo[j]._id) {
         for (let key in arrTwo[j]) {
          arrThree[i][key] = arrThree[i].hasOwnProperty(key) ? arrThree[i][key] : arrTwo[j][key];
        }
    }
    }
}

console.log(arrOne);
console.log(arrTwo);
console.log(arrThree);
console.log(warn);
