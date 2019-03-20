class MaxHeap<T> {
    /**
     * 最大堆
     * 堆中某个节点的值总是不大于其父节点的值
     */

    constructor(
        private data: T[] = []
    ) {
    }

    getSize(): number {
        // 获取最大堆容量
        return this.data.length;
    }

    isEmpty(): boolean {
        // 判断最大堆是否为空
        return this.data.length === 0;
    }

    parent(index: number): number {
        // 给定index节点的父节点
        if (index <= 0) {
            throw new RangeError('错误的序列号');
        }
        return (index - 1) * 2;
    }

    left(index: number): number {
        // 给定index节点的左孩子节点
        if (index <= 0) {
            throw new RangeError('错误的序列号');
        }
        return (2 * index + 1);
    }

    right(index: number): number {
        // 给定index节点的右孩子节点
        if (index <= 0) {
            throw new RangeError('错误的序列号');
        }
        return (2 * index + 2);

    }

    add(e: T) {
        // 向最大堆中添加元素
        this.data.push(e);
        this.siftUp(this.data.length - 1);
    }

    private siftUp(index: number) {
        // 当上浮元素大于父节点，继续上浮,并且不能上浮到0之上
        // 直到index 等于 0 或 比 父亲节点小了
        while (index > 0 && this.data[index] > this.data[this.parent(index)]) {
            [this.data[index], this.data[this.parent(index)]] = [this.data[this.parent(index)], this.data[index]]; // 交换位置
            index = this.parent(index);
        }
    }

    findMax(): T {
        // 获得堆中的最大元素
        if (this.data.length === 0) {
            throw new RangeError('空堆');
        }
        return this.data[0];
    }


}
