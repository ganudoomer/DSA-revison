
// Fruits into Baskets
// Given two baskets you have to find the max number of fruits you can find in a Basket
// You can only choose one type of fruit in a Basket 
// You can start from any tree but cannot skip a tree 
export default function main() {
   let  Fruit=['A', 'B', 'C', 'A', 'C']    
   let map  = new Map()
   let windowStart = 0
   let maxFruits  = 0

   for(let windowEnd = 0; windowEnd <  Fruit.length; windowEnd++){
       let endItem = Fruit[windowEnd]
       map.set(endItem,(map.get(endItem) || 0) + 1)
       while(map.size>2){
        let startItem  = Fruit[windowStart]
        map.set(startItem,map.get(startItem)  - 1)
        if(map.get(startItem) === 0){
            map.delete(startItem)
        }
        windowStart++
       }
       maxFruits = Math.max(maxFruits,windowEnd-windowStart +1 )
    }
    console.log(maxFruits);
}

// O(N) Time 
// O(1) Space 
// We are only storing Two different types of fruits in the MAP
