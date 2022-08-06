class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {

    constructor(node=null){
        this.head = node;
        this.tail = node;
    }

    insertAtEnd = function(element) {
        let node = new Node(element);
        let current = this.head;
        
        if(!current){
            this.head = node;
            this.tail = node;
        }else{
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        }
    }

    insertAtStart = function(element){
        let node = new Node(element);
        let current = this.head;
        if(!current){
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        return this.head;
    }

    insert = function(element,position){

        let length = this.findLength(this.head);

        if(position >= 0 && position <= length){
            let node = new Node(element),
                current = this.head,
                previous,
                index = 0;
            
            if(position === 0){
              if(!this.head){
                this.head = node;
                this.tail = node;
              }else{
                node.next = current;
                current.prev = node;
                this.head = node;
              }
            }else if(position === length){
              current = this.tail;
              current.next = node;
              node.prev = current;
              this.tail = node;
            }else{
              while(index < position){
                previous = current;
                current = current.next;
                index++;
              }
              
              node.next = current;
              previous.next = node;
              
              current.prev = node;
              node.prev = previous; 
            }
            return true;
          }else{
            return false;
          }
    }  
    
    remove = function(position){
    //look for out-of-bounds value
    let length = this.findLength(this.head);
    if(position > -1 && position < length){

      let current = this.head, previous, index = 0;
      
      //Removing first item
      if(position === 0){

        //if there is only one item, update tail 
        if(length === 1){
          this.head=null
          this.tail = null;
        }else{
          this.head = this.head.next;
        }
      }else if(position === length - 1){
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      }else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        
        //link previous with current's next - skip it
        previous.next = current.next; 
        current.next.prev = previous;
      }
      return current.element;
    }else{
      return null;
    }
    }

    //Get the indexOf item 
    indexOf = function(element){
        let current = this.head,
        index = -1;
        while(this.current !== null){
            if(element === current.data){
                index++;
                return index;
            }
            index++;
            current = current.next;
        }
        //Else return -1
        return -1;
  };

    findLength = function(head){
        let tempNode = head;
        let length=0;
        while(tempNode!=null){
            length++;
            tempNode = tempNode.next;
        }
        return length;
    }

    printLinkedList = function(){
        let printList = [];
    
        //Pointer which points to the head node
        let currentNode = this.head;
    
        //Start iterating from the first node till you reach the last node
        while(currentNode !== null){
            //Add every node's value to the array
            printList.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return printList.join(' -> ');
        
    }
}

let n1 = new Node(11);

let list = new LinkedList(n1);

list.insertAtEnd(12);
// console.log(list.printLinkedList());


list.insertAtStart(10);

list.insert(13,1);

// list.remove(1);

console.log(list.printLinkedList());
console.log(list.indexOf(11))


