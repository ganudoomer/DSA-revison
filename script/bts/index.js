export default function main() {
    let bst = new BST()
    console.log(bst.insert(10));
    console.log(bst.insert(8));
    console.log(bst.insert(90));
    console.log(bst.insert(1));
    console.log(bst.insert(300));
}

class Node {
     constructor(val){
        this.val = val
        this.left = null
        this.right = null
     }
}


class BST {
    constructor(){
        this.root = null
    }
    
    insert(val){
        let newNode = new Node(val)
        if(this.root == null) {
            this.root = newNode
            return this
        }
        let currentNode = this.root

        while(true){
            if(currentNode.val === val) return undefined
            if(currentNode.val > val){
              if(currentNode.left === null){
                 currentNode.left = newNode
                 return this
              } else {
                currentNode = currentNode.left
              }
           } else {
             if(currentNode.right === null){
                currentNode.right = newNode
                return this
             } else {
                currentNode = currentNode.right
             }
           }
        }
    }
    

}