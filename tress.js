class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  isTreeEmpty() {
    return this.root === null;
  }

  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, val) {
    if (root === null) {
      return false;
    } else if (root.value === val) {
      return true;
    } else if (root.value > val) {
      return this.search(root.left, val);
    } else {
      return this.search(root.right, val);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(30);
bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);

console.log(bst);
console.log(bst.root, 30);

//graph edges

class Graph {
  constructor() {
    this.data = [];
  }

  addVertex(vertex) {
    if (!this.data[vertex]) {
      this.data[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.data[v1]) {
      this.addVertex(v1);
    }
    if (!this.data[v2]) {
      this.addVertex(v2);
    }

    this.data[v1].push(v2);
    this.data[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.data[v1] = this.data[v1].filter((item) => {
      return item != v2;
    });

    this.data[v2] = this.data[v2].filter((item) => {
      return item != v1;
    });
  }

  removeVertex(vertex) {
    if (!this.data[vertex]) {
      return;
    }
    for (let item of this.data[vertex]) {
      console.warn(item);
      this.removeEdge(vertex, item);
    }
  }
}

const graph1 = new Graph();

graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
graph1.addEdge("A", "C");
graph1.addEdge("A", "D");
graph1.removeVertex("A");
