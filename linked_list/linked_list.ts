class LinkNode<T> {
    /**
     * 链表节点类型
     * @param data 节点数据
     * @param next 此节点的下一个节点
     */
    constructor(
        public data: T,
        public next?: LinkNode<T>
    ) {
    }
}


class LinkedList<T> {
    /**
     * 链表
     *    0  --> 1 --> 2 --> 3 --> 4 --> undefined
     *   |
     * head
     */
    constructor(
        private length: number,
        private head?: LinkNode<T>
    ) {
    }


    // 添加元素
    add(data: T, index: number): void {
        if (index > this.length || index < 0) {
            throw new RangeError('Add failed, illegal index');
        }

        let prev;

        if (this.head === undefined) {
            this.head = new LinkNode(data);
        } else {
            prev = this.head;   // 初始定位到头节点
            for (let i = 0; i < index - 1; i++) {
                if (prev.next !== undefined) {
                    prev = prev.next;
                } else {
                    break;
                }
            }
        }

        if (prev !== undefined) {
            prev.next = new LinkNode(data, prev.next);
        }

        this.length++;
    }

    append(data: T): void {
        // 链表尾插入元素
        this.add(data, this.length);
    }

    get(index: number): LinkNode<T> {
        // 获得index位置的元素
        if (index < 0 || index >= this.length) {
            throw new RangeError('Get failed, illegal index');
        }

        let cur = this.head;
        for (let i = 0; i < index; i++) {
            if (cur !== undefined) {
                cur = cur.next;
            }
        }

        return cur as LinkNode<T>;
    }

    contains(data: T): boolean {
        // 是否存在data元素
        let cur = this.head;
        while (cur !== undefined) {
            if (cur.data === data) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    remove(index: number): void {
        // 移除index位置元素
        if (index < 0 || index >= this.length) {
            throw new RangeError('remove failed, illegal index');
        }

        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (prev !== undefined) {
                prev = prev.next;
            }
        }
    }
}



