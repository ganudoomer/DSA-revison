export default function main() {
    let bst = new BST()
    console.log(bst.insert(10));
    console.log(bst.insert(6));
    console.log(bst.insert(15));
    console.log(bst.insert(3));
    console.log(bst.insert(8));
    console.log(bst.insert(20));
    console.log(bst.BFS());
    console.log(bst.DFSPreOrder());
    console.log(bst.DFSPostOrder());
    console.log(bst.DFSInOrder());

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
    
    find(val){
        let currentNode = this.root
        let found = false
        
        while(true){
            if(!currentNode) return false
            if(currentNode.val == val) return currentNode
            if(currentNode.val > val){
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
    }


    BFS(){
        let queue = [this.root]
        let data = []

        while(queue.length){
           let node = queue.shift()
           data.push(node.val)
           if(node.left) queue.push(node.left)
           if(node.right) queue.push(node.right)
        }

        return data
    }

    DFSPreOrder(){
       let data = []
       function DFSPreOrderHelper(node){
            if(!node) return 
            data.push(node.val)
            if(node.left) DFSPreOrderHelper(node.left)
            if(node.right) DFSPreOrderHelper(node.right)
        }
        DFSPreOrderHelper(this.root)
        return data
    }

    DFSPostOrder(){
        let data = []
        function DFSPostOrderHelper(root) {
            if(!root) return 
            if(root.left) DFSPostOrderHelper(root.left)
            if(root.right) DFSPostOrderHelper(root.right)
            data.push(root.val)
        }
        DFSPostOrderHelper(this.root)
        return data
    }
    

    DFSInOrder(){
        let data = []
        function DFSInOrderHelper(root) {
            if(!root) return 
            if(root.left) DFSInOrderHelper(root.left)
            data.push(root.val)
            if(root.right) DFSInOrderHelper(root.right)
        }
        DFSInOrderHelper(this.root)
        return data
    }

}

