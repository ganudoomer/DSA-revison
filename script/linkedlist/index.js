export default function main(params) {
    console.log("Hello world");
    const l = new LinkedList()
    l.push(10)
    l.push(11)
    l.push(12)
    console.log(l);
    console.log(l.pop());
    console.log(l);
    console.log(l.pop());
    console.log(l);
    console.log(l.pop());
    console.log(l);
}


class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    } 

   push(val){
     let newNode = new Node(val)  
     if(!this.head){
        this.head = newNode
        this.tail = newNode
        this.length++
        return;
     }
     let current = this.head
     while(current.next){
        current = current.next
     }
     current.next = newNode
     this.tail = current.next
     this.length++
   }

   pop(){
       if(!this.head) return undefined
       if(this.length  === 1){
         let temp = this.head
         this.head = null
         this.head = null
         this.length--
         return temp
       }
       let currentNode = this.head
       while(currentNode.next.next){
         currentNode = currentNode.next
       }
       let temp = currentNode.next
       currentNode.next = null
       this.tail = currentNode
       this.length--
       return temp
   }

}

class Node {
   constructor(val){
      this.val = val
      this.next = null
   }
}



