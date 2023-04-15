//1)Yuxaridaki arraydaki butun reqemlerin cemini tapin (Foreach methodu istifadə edərək)

//2)Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

//3)Arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin

//4)Arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

let arr1 = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];

//////1
//firstway
let sum=0;
let sumArr=arr1.forEach((element)=>sum+=element);
console.log(sum);

//secondway
let result=arr1.reduce((sum,current)=>sum+current,0);
console.log(result);

   
//////2
let filterArr=arr1.filter((element)=>element===5);
console.log(filterArr);        //this show only array width 5
console.log(filterArr.length);    //this show count

//////3
let maxArr=arr1.filter((element)=>element===Math.max(...arr1));
console.log(maxArr);             //this show array width 7
console.log(maxArr.length);      //this show count


//////4
let findArr=arr1.find((elem)=>{
if(elem%3==2){
  return(elem);
}

})
console.log(findArr);



   
  
  

 












