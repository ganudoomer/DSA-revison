export default function main() {
    let map = new HashMap()
    map.set("main","File")
    console.log(map.get('main'));
}   

class HashMap {
    constructor(){
        this.values = []
        for(let i = 0;i < 100;i++){
            this.values[i] = []
        }
    }

     get(key){
        let index = hashFunctionV2(key,100)
        let values =   this.values[index];
        for(let i = 0;i < values.length;i++){
            if(values[i][0] == key){
                return values[i][1]
            }
        }
        return undefined
      }

     set(key,value){
       let index = hashFunctionV2(key,100)
       this.values[index].push([key,value])
     } 

     
}




function hashFunction(key,arrLen) {
    let total = 0 
    for(let char of key){
        let value = char.charCodeAt(0)  - 96
        total = (total + value) % arrLen
    }
    console.log(total);
    return total    
}


function hashFunctionV2(key,arrLen) {
    let total = 0 
    let WEIRD_PRIME = 31
    for(let char of key){
        let value = char.charCodeAt(0)  - 96
        total = (total + WEIRD_PRIME  + value) % arrLen
    }
    console.log(total);
    return total    
}