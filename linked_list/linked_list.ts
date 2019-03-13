class Point<E> {
    /**
     * 节点类型
     */
    constructor(public e?: E,
                public next?: Point<E>) {
    }
}


class LinkedList<E> {
    /**
     * 链表
     *    0  --> 1 --> 2 --> 3 --> 4 --> undefined
     *   |
     * head
     */
    constructor(private size: number = 0,
                private head?: Point<E>) {
    }

    getSize(): number {
        // 获取链表元素个数
        return this.size;
    }

    isEmpty(): boolean {
        // 判断链表是否为空
        return this.size === 0;
    }


    addFirst(e: E): void {
        // 链表头添加元素
        const p = new Point(e, this.head);
        this.size++;
    }

    /**
     * 在链表的index(0-based)位置添加新的元素e
     * 在链表中不是一个常用的操作
     * @param index 位置
     * @param e 元素
     */
    add(index: number, e: E): void {
        if (index < 0 || index > this.size) {
            throw new RangeError('Add failed, illegal index');
        }
        let prevPoint = this.head;
        // 因为有了dummyHead，多遍历一次，遍历index次
        for (let i = 0; i < index - 1; i++) {
            if (prevPoint === undefined) {
                break;
            } else {
                prevPoint = prevPoint.next;
            }
        }

        if (prevPoint !== undefined) {
            prevPoint.next = new Point<E>(e, prevPoint.next);
        }

        this.size++;

    }


}
