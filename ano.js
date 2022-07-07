// 1)Print odd numbers in an array
console.log("answer for 1 ques");
(()=>{                                                            //iif
var oddarray=[];
let anofun=(function(array){
    for(let ele of array){                         
        if(ele%2!==0)
        oddarray.push(ele);
    }
    return oddarray;
})

console.log(anofun([1,2,3,4,5,6,7,8,9,10]));
}) ()

console.log("answer for 2 ques");
(()=>{                                                            //iif
var caparray=[];
let anofun2=(function(str){
    for (let iterator of str) {
    let a= iterator.toUpperCase(); 
    caparray.push(a);
    }
    return caparray;
})

console.log(anofun2(["sanjay","balaji","kabilash"]));
}) ()
console.log("answer for 3 ques");
(()=>{                                                            //iif
    var add=[];
    var sum=0;
    let anofun2=(function(u){
        for (let s of u) {
            sum=sum+s;
        
        add.push(sum);
        }
        return add;
    })

console.log(anofun2([1,2,3,4,5,6,7,8]));
}) ()

const palindrome=((data)=>{
    arr=[];
    for(let str of data){
      let output=str.split('').reverse().join('')
      if(output===str){
      arr.push(output)
    }
    }
    console.log(arr)
    });
    palindrome(['111','mam','hello','saravana',"able was i ere i saw elba"])
    console.log("answer for 4 ques");
  primearray=[];
  nonprimearray=[];                                          
  let anofun4=(array)=>{
      
      for (var iterator of array) {
          for (var i = 2; i < iterator; i++) {
              a=i;
              if(iterator%i==0){
              nonprimearray.push(iterator);
             break;}
          }   
          if(iterator%a!==0){
          primearray.push(iterator);}
  }
  return primearray;
  }
  
  console.log(anofun4([3,7,15,21,56,11]));
  console.log("answer for 6th ques");
 let anofun6=(arr1,arr2)=>{
      arr3=[...arr1,...arr2];
      
      for (i=0;i<arr3.length;i++) {
        for (j=0;j<arr3.length;j++) {
            if(arr3[i]<arr3[j])
            {
                temp=arr3[i];
                arr3[i]=arr3[j];
                arr3[j]=temp;
            }
        }    
      }
      index=arr3.length/2;
      //console.log(arr3[index]);
     // console.log(arr3[index+1]);
      median=(arr3[index]+arr3[index+1])/2;
      return median;

 }
 console.log(anofun6([45,34,78,27,61,55],[12,100,36,78]));

 //7)Remove duplicates from an array
 console.log("answer for 7 ques");
 let anofun7=(arr1,arr2)=>{              //anofun
    arr3=[...arr1];
    for (i=0;i<arr3.length;i++) {
      for (j=1;j<arr3.length;j++) {
          if(arr3[i]==arr3[j] && i!==j)
          {
             arr3.splice(j,1);
          }
      }    
    }
    
    return arr3;

}
console.log(anofun7([45,78,78,78,61,55]));
   

 //8)Rotate an array by k times 
 console.log("answer for 8 ques");
 (()=>{
    let rotateArray=function(arr,k){
        if(k==arr.length || k%arr.length==0)
        return arr;
        if(k>arr.length)
         k=k%arr.length;                                 //iif
         for(i=0;i<k;i++){
            use=arr[arr.length-1];
            arr.unshift(use);
            arr.length=arr.length-1;
         }
         return arr;
     }
     console.log(rotateArray([1,2,3,4],10));
    })()
    console.log(anomoyus)
    console.log( " answer for odd numbers")
var  b=[];
let oddnumbers=function(yyy){
 
  for( let i of yyy){
   if( i%2!==0)
   b.push(i);
  }
  return b;



}
  console.log(oddnumbers([1,2,3,4,5,6,7,8]));
  console.log( " answer for converting to uppercase")
var  b=[];
let  lowercasetouppercase=function(yyy){
 
  for( let i of yyy){
   let c = i.toUpperCase();
   b.push(c);
  }
  return b;



}
  console.log(lowercasetouppercase([" sanjay","nithish","vijayakumar"]));
  let duplicate=function(yyy){

    for(let i=0;i<=yyy.length;i++){
        for(let j=1;j<=yyy.length;j++){
            if(yyy[i]===yyy[j]){
                yyy.splice(i,2);
            }
        }

        
    }
    return yyy;

}
console.log(duplicate([1,1,2,2,3,4,4,5,6]))
console.log("answer for 4 ques");
  primearray=[];
  nonprimearray=[];                                           //arrow func
  let anofun4=(array)=>{
      
      for (var iterator of array) {
          for (var i = 2; i < iterator; i++) {
              a=i;
              if(iterator%i==0){
              nonprimearray.push(iterator);
             break;}
          }   
          if(iterator%a!==0){
          primearray.push(iterator);}
  }
  return primearray;
  }
  
  console.log(anofun4([3,7,15,21,56,11]));