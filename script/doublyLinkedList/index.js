export default function main() {
    console.log("Hello World");    
    let DL = new DoublyLinkedList()
    DL.push(12)
    DL.push(33)
    DL.push(40)
    console.log(DL);
    console.log(DL);
    console.log(DL);
   
    console.log(DL.reverse());
}


class DoublyLinkedList {
    constructor(){
       this.head = null
       this.tail  = null
       this.length =  0
    }


    push(val){
        let newNode = new Node(val)
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        } else {
          this.tail.next = newNode
          newNode.prev = this.tail
          this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        let temp = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        temp.next = null
        temp.prev = null
        this.length--
        return temp
    }

    shift(){
        let tempHead = this.head
        this.head = this.head.next
        this.head.prev = null
        tempHead.next = null
        tempHead.perv = null
        this.length--
        return tempHead
    }

    unshift(val){
        let newNode = new Node(val)
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    reverse(){
        let start = 0
        let end = this.length
        let leftCurrent = this.head
        let rightCurrent = this.tail

        while(start != end && start < end){
            let tempVal = leftCurrent.val
            leftCurrent.val = rightCurrent.val
            rightCurrent.val = tempVal
            leftCurrent = leftCurrent.next
            rightCurrent = rightCurrent.prev
            start++
            end--
        }
        return this
    }


}


class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}