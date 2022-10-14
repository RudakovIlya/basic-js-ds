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

    return rootFun(this.rootNodeElement)

    function rootFun(n) {

      if (n) {

        return n

      } else {

        return null

      }

    }

  }

  add(data) {

    this.rootNodeElement = addWith(this.rootNodeElement, data);

    function addWith(node, data) {

      if (!node) {

        return new Node(data)

      }

      if (node.data === data) {

        return node;

      }

      if (data < node.data) {

        node.left = addWith(node.left, data)

      } else {

        node.right = addWith(node.right, data)

      }

      return node

    }

  }

  has(data) {

    return search(this.rootNodeElement, data)

    function search(node, data) {

      if (!node) {

        return false;

      }

      if (node.data === data) {

        return true;

      }

      return data < node.data ? search(node.left, data) : search(node.right, data)

    }

  }

  find(data) {

    return findDataNode(this.rootNodeElement, data)

    function findDataNode(node, data) {

      if (node === null) {

        return null;

      } else if (data < node.data) {

        return findDataNode(node.left, data)

      } else if (data > node.data) {

        return findDataNode(node.right, data)

      } else {

        return node

      }

    }

  }

  remove(data) {

    this.rootNodeElement = removeNodeElem(this.rootNodeElement, data);

    function removeNodeElem(node, data) {

      if (!node) {

        return null;

      }

      if (data < node.data) {

        node.left = removeNodeElem(node.left, data)

        return node;

      } else if (data > node.data) {

        node.right = removeNodeElem(node.right, data)

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

        let minToRight = node.right;

        while (minToRight.left) {

          minToRight = minToRight.left;

        }

        node.data = minToRight.data

        node.right = removeNodeElem(node.right, minToRight.data);

        return node

      }

    }

  }

  min() {

    if (!this.rootNodeElement) {

      return;

    }

    let nodeElem = this.rootNodeElement;

    while (nodeElem.left) {

      nodeElem = nodeElem.left

    }

    return nodeElem.data
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