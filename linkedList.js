
class Node {
    constructor(data) {
        this.data = data; 
        this.next = null
    }
}


const nodeA = new Node(6);
const nodeB = new Node(3);
const nodeC = new Node(4);
const nodeD = new Node(2);
const nodeE = new Node(1);
const nodeF = new Node(10);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeF;

// write a function to return the number of nodes in this linkedList

// let counter ++ until .next is null;


function countNode(currentNode) {
    let counter = 1;
    while(currentNode.next !== null) {
        counter ++;
        currentNode = nodeHead.next;
    }
    return counter;
}
console.log(countLinkedList(nodeA));

