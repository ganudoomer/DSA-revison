export default function name() {
 console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))
}

function sumZero(arr){
  let l = 0 
  let r = arr.length - 1
  while(l<r){
     let sum = arr[l] + arr[r]
     if(sum == 0) return [arr[l],arr[r]]
     if(sum < 0) l++
     if(sum > 0) r--      
  }
  
}





