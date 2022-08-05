class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}


class LinkedList {
    constructor(head = null) {
        this.head = head
    }


    size = function() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }


    clear = function() {
        this.head = null;
    }

    getFirst= function() {
        return this.head;
    }

    getLast = function() {
        let tempNode = this.head;
        if (tempNode) {
            while (tempNode.next) {
                tempNode = tempNode.next
            }
        }
        return tempNode
    }

    insertAtBeginning = function(data){

        // A newNode object is created with property data and next = null
        let newNode = new Node(data);

        // The pointer next is assigned head pointer so that both pointers now point at the same node.
        newNode.next = this.head;

        // As we are inserting at the beginning the head pointer needs to now point at the newNode. 
        this.head = newNode;

        return this.head;
    }
    

    insertAtEnd = function(data){

        // A newNode object is created with property data and next=null
        let newNode = new Node(data);

        // When head = null i.e. the list is empty, then head itself will point to the newNode.
        if(!this.head){
            this.head = newNode;
            return this.head;
        }

        // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
       let tail = this.head;
       while(tail.next !== null){
            tail = tail.next;
       }
       tail.next = newNode;
       return this.head;
    }

    getAt = function(index){
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
            return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }


    insertAt = function(data, index){

        // if the list is empty i.e. head = null
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        // if new node needs to be inserted at the front of the list i.e. before the head. 
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // else, use getAt() to find the previous node.
        const previous = this.getAt(index - 1);
        let newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;       

        return this.head
    }

    deleteFirstNode = function(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    }

    deleteLastNode = function(){

        if(!this.head){
            return null;
        }

        // if only one node in the list
        if(!this.head.next){
            this.head = null;
            return;
        }

        let previous = this.head;
        let tail = this.head.next;
        
        while(tail.next !== null){
            previous = tail;
            tail = tail.next;
        }
        
        previous.next = null;
        return this.head;
    }

    deleteAt = function(index){

        // when list is empty i.e. head = null
        if (!this.head) {
             return;
         }

        // node needs to be deleted from the front of the list i.e. before the head.
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        // else, use getAt() to find the previous node.
        const previous = this.getAt(index - 1);
        
        if (!previous || !previous.next) {
            return;
        }
        
        previous.next = previous.next.next;     
        return this.head
    }

    deleteList = function(){
        this.head = null;
    }

    printLinkedList = function(){
       
        let printList = [];
    
        //Pointer which points to the head node
        let currentNode = this.head;
    
        //Start iterating from the first node till you reach the last node
        while(currentNode !== null){
            //Add every node's value to the array
            printList.push(currentNode.data);
    
            //Point pointer to the next node
            currentNode = currentNode.next;
        }

        //Return the array
        return printList.join(' -> ');
        
    }

    searchElement = function(value){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.data === data) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

}


let node1 = new Node(23)
let node2 = new Node(28)
let node3 = new Node(22)
let node4 = new Node(14)
node1.next = node2
node2.next = node3
node3.next = node4


let list = new LinkedList(node1)

console.log(list.printLinkedList())

console.log("size =", list.size())


let firstNode = list.getFirst()
console.log("First node data=",firstNode.data)

let lastNode = list.getLast()
console.log("Last node data=",lastNode.data)

list.insertAtBeginning(30);
console.log(list.printLinkedList())

list.insertAtEnd(6)
console.log(list.printLinkedList())

let myNode = list.getAt(0)
console.log(myNode.data)

//insert element at index 3
list.insertAt(7,3)
console.log(list.printLinkedList())

list.deleteFirstNode()
console.log(list.printLinkedList())

list.deleteLastNode()
console.log(list.printLinkedList())

list.deleteAt(1)
console.log(list.printLinkedList())

console.log(list.searchElement(7))

