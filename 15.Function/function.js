//1
let arr1=[]
let firstnum='';
let getFirstValue=(...arr1)=>{
    for(let i=0; i<arr1.length;i++ ){
        if(i==0){
            firstnum=arr1[i];
        }   
    }
    return firstnum; 
}
console.log(getFirstValue(1, 2, 3));        ////1
console.log(getFirstValue(80, 5, 100));     ////80
console.log(getFirstValue(-500, 0, 50));    ////-500


//2
let arr2=[]
let lastvalue='';
let getLastItem=(...arr2)=>{
    for(let i=0; i<arr2.length;i++){
        if(i==(arr2.length-1)){
            lastvalue=arr2[i]
        }
    }
    return (lastvalue);
}
console.log(getLastItem(1, 2, 3));                  //// 3
console.log(getLastItem("cat", "dog", "duck"));     //// duck
console.log(getLastItem(true, false, true));        ////true
    



//4
function addition(addfirst, addsecond){
   let sum=addfirst+addsecond;
    //  console.log(`${addfirst}, ${addsecond}`);
     return sum;
}
  console.log(addition(3, 2));     ////5
  console.log(addition(-3, -6));   ////-9
  console.log(addition(7, 3));     ////10


//5
let lessThan100=(a, b)=>{
    let summ=a+b
    if(summ<100){
        console.log(true);       
    }
    else{
        console.log(false);
    }
return summ;
}
lessThan100(22, 45);     ////true
lessThan100(83, 34);     ////false
lessThan100(3, 77);      ////true


//6

let obj={}
function volumeOfBox(obj){
    let multiply=obj.width*obj.length*obj.height;
    return multiply;
}
console.log(volumeOfBox({width: 2, length: 5, height: 1}));     ////10    
console.log(volumeOfBox({width: 4, length: 2, height: 2}));     ////16
console.log(volumeOfBox({width: 2, length: 3, height: 5}));     ////30


//7

let points=(twoPointers, threePointers)=>{
        let multisum=(2*twoPointers)+(3*threePointers);
    return multisum;
}
console.log(points(1, 1));     ////5
console.log(points(7, 5));     ////29
console.log(points(38, 8));    ////100


//8

const arr5=[
    {name:'my name',
    surname:'my surname',
    city:'my city'
    },
    {name:'my name',
    surname:'my surname',
    city:'my city'
    },
    {name:'my name',
    surname:'my surname',
    city:'my city'
    }
]
let fillInfo=()=>{
    for(let item of arr5){
        {item.name='Nurlana',
        item.surname='Huseyinova',
        item.city='Shamkir'};
    }
    return arr5;
}
console.log(fillInfo());
