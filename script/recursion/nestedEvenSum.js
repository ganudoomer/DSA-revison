export default function main() {
    var obj2 = {
        a: 2,
        b: {b: 2, bb: {b: 3, bb: {b: 2}}},
        c: {c: {c: 2}, cc: 'ball', ccc: 5},
        d: 1,
        e: {e: {e: 2}, ee: 'car'}
      };
      let sum = 0
      nestedEvenSum(obj2)
      console.log(sum);
    
    function nestedEvenSum(obj) {
       for(let key in obj){
           if(typeof obj[key] === 'object'){
              nestedEvenSum(obj[key])
           } else if(typeof obj[key] == 'number' && obj[key] % 2 == 0) {
               sum += obj[key]
           }
       }
    }
    console.log(sum)
}



