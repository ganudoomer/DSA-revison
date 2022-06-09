export default function main() {
    console.log( 
        linearSearch([34,51,1,2,3,45,56,687], 51)   
     );
}

function linearSearch(arr,k){
    for (let i = 0; i < arr.length; i++) {
         let item = arr[i]
         if(item === k){
             return i
         }
    }
}