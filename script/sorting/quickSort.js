export default function main () {
     console.log("hello world");
     
     console.log(quickSort([5,1,8,2,6,4]));

}


function quickSort(arr) {
     if(arr.length <= 1){
        return arr
     } 
     
     let less= []
     let greater = []
     

     let pivot = arr[0]
     for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        if(pivot < element){
           greater.push(element)
        } else {
           less.push(element)
        }
     }
     return quickSort(less).concat(pivot,quickSort(greater))
}