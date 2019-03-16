class TreeNode<T> {
    /**
     * 二叉树节点类型
     * @param e 节点元素
     * @param left 左孩子
     * @param right 右孩子
     */
    constructor(
        public e: T,
        public left?: TreeNode<T>,
        public right?: TreeNode<T>
    ) {
    }
}


class BST<T> {
    /**
     * 二分搜索树  Binary Search Tree
     */

    constructor(
        private root?: TreeNode<T>,
        private size = 0
    ) {
    }

    // 元素个数
    getSize(): number {
        return this.size;
    }

    // 是否为空树
    isEmpty(): boolean {
        return this.size === 0;
    }

    // 添加节点
    add(e: T): void {
        if (this.root === undefined) {
            this.root = new TreeNode(e);
            this.size++;
        } else {
            this.addNode(this.root, e);
        }
    }

    /**
     * 向以node为根的二分搜索树中插入元素e，递归算法
     *
     */
    private addNode(node: TreeNode<T>, e: T): void {
        if (e === node.e) {
            return;
            // 小于e的值，并且该节点的左子树为空
        } else if (e < node.e && node.left === undefined) {
            node.left = new TreeNode(e);
            this.size++;
            return;
            // 大于e的值，并且该节点的右子树为空
        } else if (e > node.e && node.right === undefined) {
            node.right = new TreeNode(e);
            this.size++;
            return;
        }

        // 上面条件不满足，说明还得继续往下找左右子树为null可以挂载上的节点
        if (e < node.e && node.left !== undefined) {
            this.addNode(node.left, e);
        } else if (e > node.e && node.right !== undefined)
        // 如果小于，那么继续往它的左子树添加该节点
        {
            this.addNode(node.right, e);
        }
    }


}

