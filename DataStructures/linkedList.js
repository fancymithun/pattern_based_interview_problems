class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.root = null
    }

    addNode(data){
        const newNode = new Node(data)

        if(!this.root){
            this.root = newNode
        }else{
            let currentNode = this.root
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
    }

    deleteNode(data){
        if(!this.root) return

        
    }

}

const ll = new LinkedList()
ll.addNode(1)
ll.addNode(2)
ll.addNode(3)
ll.addNode(4)

console.log(ll)