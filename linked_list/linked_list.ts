class N<E> {
    /**
     * 节点类型
     */
    e: E | null;
    next: N<E> | null;

    constructor(e = null, next = null) {
        this.e = e;
        this.next = next;
    }
}


class LinkedList<E> {
    /**
     * 链表
     *    0  --> 1 --> 2 --> 3 --> 4 --> null
     *   |
     * head
     */

}
