let arr = [1,2,3,1,2,5,4,6,4,3,2]
// let strArr = ['bipin','nikhil','ashok','sumin','manish',]
// let str = 'bhushan punse'

let newArr =[]

while(arr.length != 0){
   let max = arr[0]
   arr.map(item=>{
      if(max>item){
         max= item
      }
   })
   let popelem = arr.splice(arr.indexOf(max),1)
   newArr.push(...popelem)
}    

console.log('new Arr :',newArr)
