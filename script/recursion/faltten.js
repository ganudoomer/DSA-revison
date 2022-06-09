export default function main() {

   console.log(flatten([[[[1], [[[2]]], [[[[[[[3],[[[[[[5]]]]]]]]]]]]]]]))    

   
   function flatten(arr) {
    let f = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
          let res =  flatten(arr[i])
          f.push(...res)
        } else {
          f.push(arr[i])
        }
    }
    return f
 }
 
 

}

