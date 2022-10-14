//const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this.rootNodeElement = null;
  }

  root() {
    return rootBST(this.rootNodeElement)

    function rootBST(n) {
      if (n) {
        return n
      } else {
        return null
      }
    }
  }

  add(data) {
    this.rootNodeElement = addWithin(this.rootNodeElement, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return searchWithin(this.rootNodeElement, data)

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data)
    }
  }

  find(data) {
    return findData(this.rootNodeElement, data)

    function findData(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return findData(node.left, data)
      } else if (data > node.data) {
        return findData(node.right, data)
      } else {
        return node
      }
    }
  }

  remove(data) {
    this.rootNodeElement = removeNode(this.rootNodeElement, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data

        node.right = removeNode(node.right, minFromRight.data);

        return node
      }
    }
  }

  min() {
    if (!this.rootNodeElement) {
      return;
    }

    let node = this.rootNodeElement;
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this.rootNodeElement) {
      return;
    }

    let node = this.rootNodeElement;
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};