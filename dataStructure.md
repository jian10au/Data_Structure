
# 1. LinkedList:

## a. Definition 

Basically a group of objects which is linked through an object key (mostly using the key call next);

Therefore, linkedList is actually a layer sitting on top of the objects.

## b. Code example created using JS; 

The following gives an example of linkedList created using JS:

```
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

```

## c. Array vs Linked List:

You can run loops in the linkedList like you do in array.

In array, you basically change the index like this:

```
for(let i=0; i<= arr.length -1; i++) {
    arr[i];
}
```
or

``` 
let i=0;
while(i<=arr.length) {
    arr[i];
    i++;
}
```
### In Linked list

```
let counter = 0;

while(node.next !== null) {
    
    // do something in here; for example, counter ++;
    // or run the function available to each node object.
    // node.functionA();
    node = node.next
}
```
### D. LinkedList vs Array:

<b>Following is from stackoverflow:</b>


<b>Linked lists are preferable over arrays when:</b>

you need constant-time insertions/deletions from the list (such as in real-time computing where time predictability is absolutely critical)

you don't know how many items will be in the list. With arrays, you may need to re-declare and copy memory if the array grows too big

you don't need random access to any elements

you want to be able to insert items in the middle of the list (such as a priority queue)

<b>Arrays are preferable when:</b>

you need indexed/random access to elements

you know the number of elements in the array ahead of time so that you can allocate the correct amount of memory for the array

you need speed when iterating through all the elements in sequence. You can use pointer math on the array to access each element, whereas you need to lookup the node based on the pointer for each element in linked list, which may result in page faults which may result in performance hits.

memory is a concern. Filled arrays take up less memory than linked lists. Each element in the array is just the data. Each linked list node requires the data as well as one (or more) pointers to the other elements in the linked list.

Array Lists (like those in .Net) give you the benefits of arrays, but dynamically allocate resources for you so that you don't need to worry too much about list size and you can delete items at any index without any effort or re-shuffling elements around. Performance-wise, arraylists are slower than raw arrays.

### Efficiency of different structure:

Algorithm|         ArrayList  |LinkedList
---      |   ---              |   ----   
seek front|            O(1)   |      O(1)
seek back|           O(1)     |    O(1)
seek to index|         O(1)   |      O(N)
insert at front|       O(N)    |     O(1)
insert at back  |      O(1)     |    O(1)
insert after an item|  O(N)      |   O(1)
