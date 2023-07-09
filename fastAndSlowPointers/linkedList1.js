// Floyd's Tortoise & Hare

// Time complexity : O(n)
// Space complexity : O(1)

class Node{
    constructor(data){
        this.data = this.data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.root = null
    }

    findCycle(){
        let slow = this.root
        let fast = this.root

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next

            if(slow === fast){
                return true
            }
        }

        return false
    }
}
