export class Nodes {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

export class Trees {
  constructor(root) {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Nodes(data);
    // If the toNodeData arg is passed, find it. Otherwise, store null.
    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    // Push new node to parent whose value matches toNodeData
    if (parent) {
      parent.children.push(node);
    } else {
      // If there's no parent, make this the root node
      if (!this.root) this.root = node;
      else return "Tried to store node as root when root already exists.";
    }
  }

  findBFS(data) {
    let _node = null;

    // Go thru every node in BFS
    this.traverseBFS((node) => {
      // Return match if found
      if (node.data === data) {
        _node = node;
      }
    });

    return _node;
  }

  traverseBFS(cb) {
    const queue = [this.root];

    if (cb)
      while (queue.length) {
        // Store current node & remove it from queue
        const node = queue.shift();

        cb(node);

        // Push children of current node to end of queue
        for (const child of node.children) {
          queue.push(child);
        }
      }
  }
}

let tree = new Trees();

tree.add("Laptop", null);


console.log(tree.findBFS("Laptop"));
