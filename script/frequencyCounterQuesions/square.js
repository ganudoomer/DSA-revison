export default function frequnecyCounter() {
    console.log(same([1,2,3,2], [9,1,4,4]))
}

// Find if the arrayTwo is Sqaure of arrayOne
function same(arr1,arr2){
    let arr1Obj = {}
    let arr2Obj = {}
    
    for(let i = 0; i<arr1.length; i++){
          let val1 = arr1[i]
      let val2 = arr2[i]
      arr1Obj[val1] = (arr1Obj[val1] || 0) + 1
      arr2Obj[val2] = (arr2Obj[val2] || 0) + 1
      }
   
    for(let key in arr1Obj){
             if(!(key ** 2 in arr2Obj)) return false
        if(arr1Obj[key] != arr2Obj[key ** 2]) return false
    }
   
    return true
  }
  
  
  
