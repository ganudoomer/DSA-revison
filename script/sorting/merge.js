export default function main() {
    let arr  = [22,42,1,8,90,66]
    
//    const sorted = merge([1,10,50],[2,14,99,100])
    
   console.log(mergeSort(arr));
}

function mergeSort(arr) {
     if(arr.length <= 1) return arr
     let middle = Math.floor(arr.length/2)
     let left = mergeSort(arr.slice(0,middle))
     let right = mergeSort(arr.slice(middle))
     return merge(left,right)     
}


function merge(arr1,arr2){
    let res = []
    let i = 0 
    let j = 0 

    while(i < arr1.length  && j < arr2.length){
        if(arr1[i] > arr2[j]){
            res.push(arr2[j])
            j++
        } else {
            res.push(arr1[i])
            i++
        }    
    } 

    while(i < arr1.length){
        res.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        res.push(arr2[j])
        j++
    }
    
    return res
}