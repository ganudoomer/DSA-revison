export default function main() {
    let arr = [1,2,3,3,3,3,3,4,5,6,7,8,9]
    let count = 0
    let pointerOne = 0 
    let pointerTwo = 1 
    
    while(
        pointerOne < arr.length && 
        pointerTwo < arr.length
        ){
        if(arr[pointerOne] !== arr[pointerTwo]){
            count++
        } 
        pointerOne++
        pointerTwo++
     }
    
    
    console.log(count+1)
}