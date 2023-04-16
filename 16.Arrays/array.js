
////1+
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

function fullStack(){
    let result=frontEnd.concat(backEnd);
    return result;
}
console.log(fullStack());            // output: ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

////2
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
function findAges(){
    let sumAge=ages.reduce((sum,item)=>sum+item,0);
    let avarageage=parseInt(sumAge/(ages.length));
    return avarageage;
}
console.log(findAges());


////3
const countries =
[
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
function filterCountries(){
    let sliced=countries.map((el,index) => (el.slice(0, 3).toLocaleUpperCase()));
    return sliced;
}
console.log(filterCountries());

////4
let numbers = [
    4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
    5, 6, 3, 7, 3, 7,
  ];
let sum=0
 let result2=numbers.find((el,i)=>el===7 ? console.log(sum+=i):null);

const todos = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];

////5+
function filterTrue() {
  let result = todos.filter((el) => el.completed === true);
  return result;
}
console.log(filterTrue());

////6+
  function filterTitle(){
  let result=todos.filter((el)=>el.title.length>40);
  return result;
  }
  console.log(filterTitle());
