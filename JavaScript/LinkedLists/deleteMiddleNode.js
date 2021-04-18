class LinkedList{
	constructor(){
		this.head = null;
	}
	
	add(value){
		if(this.head === null){
			this.head = {value: value, next: null};
			return;
		}
		
		var curr = this.head;
		while(curr.next !== null){
			curr = curr.next;
		}
		
		curr.next = {value: value, next: null};
	}

	get(value){
		if(this.head === null)
		    return null;

		var curr = this.head;
		while(curr !== null){
			if(curr.value === value){
				return curr;
			}

			curr = curr.next;
		}

		return null;
	}

	print(){
		if(this.head === null){
			console.log("null");
			return;
		}

		var curr = this.head;
		var str = "";
		while(curr !== null){
			if(curr.next !== null){
				str += curr.value + "->"
			}else{
				str += curr.value;
			}

			curr = curr.next;
		}

		console.log(str);
	}
} 

//input = node in a linked list
//the idea is to just replace the current node with the next node, and then delete the next node
//assuming node is valid and actually exists in the linked list in question

//O(1) time, O(1) space
function deleteMiddleNode(node){
	node.value = node.next.value;
	node.next = node.next.next;
	return node;
}


var list = new LinkedList();
list.add("a");
list.add("b");
list.add("c");
list.add("d");
list.add("e");
list.add("f");
list.print(); //a -> b -> c -> d -> e -> f
deleteMiddleNode(list.get("c"));
list.print(); //a -> b -> d -> e -> f


