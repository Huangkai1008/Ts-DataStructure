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
     * 天然递归结构表现在: 每个节点的左，右子树都是棵二叉树，所以可以递归去插入，
     * node为每一个子二叉树的根节点
     */
    private addNode(node: TreeNode<T>, e: T): void {
        if (e === node.e) {
            return;
            // e小于根节点的值，并且该节点的左子树为空
        } else if (e < node.e && node.left === undefined) {
            node.left = new TreeNode(e);
            this.size++;
            return;
            // e大于根节点的值的值，并且该节点的右子树为空
        } else if (e > node.e && node.right === undefined) {
            node.right = new TreeNode(e);
            this.size++;
            return;
        }

        // 上面条件不满足，说明还得继续往下找左右子树为null可以挂载上的节点
        if (e < node.e && node.left !== undefined) {
            // 如果小于，那么继续往它的左子树添加该节点
            this.addNode(node.left, e);
        } else if (e > node.e && node.right !== undefined) {
            // 如果大于，那么继续往它的左子树添加该节点
            this.addNode(node.right, e);
        }
    }

    contain(e: T): boolean {
        return this.contains(e, this.root);
    }

    private contains(e: T, node?: TreeNode<T>): boolean {
        // 以node为根的二分搜索树中是否包含元素e(递归算法语义)
        if (node === undefined) {
            return false;
        }
        if (e === node.e) {
            return true;
        } else if (e < node.e) {
            return this.contains(e, node.left);
        } else {
            return this.contains(e, node.right);
        }
    }

    pre() {
        this.preOrder(this.root);
    }

    private preOrder(node?: TreeNode<T>) {
        // 前序遍历以node为根的二分搜索树, 递归算法
        if (node === undefined) {
            return;
        }
        console.log(node.e, ' ');
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    in() {
        this.inOrder(this.root);
    }

    private inOrder(node?: TreeNode<T>) {
        // 中序遍历以node为根的二分搜索树, 递归算法
        // 中序遍历的结果就是二分搜索树排序的结果，从小到大
        if (node === undefined) {
            return;
        }
        this.inOrder(node.left);
        console.log(node.e, ' ');
        this.inOrder(node.right);
    }

    post() {
        this.postOrder(this.root);
    }

    private postOrder(node?: TreeNode<T>) {
        // 后序遍历以node为根的二分搜索树, 递归算法
        if (node === undefined) {
            return;
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.e, '');
    }


}

