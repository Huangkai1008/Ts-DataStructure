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
        return (index - 1) / 2;
    }

    left(index: number): number {
        // 给定index节点的左孩子节点
        return (2 * index + 1);
    }

    right(index: number): number {
        // 给定index节点的右孩子节点
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


    private siftDown(index: number) {
        while (this.left(index) < this.data.length) {
            let j = this.left(index);   // 获得左孩子节点
            // 右孩子有可能不存在，条件: 有右孩子，右孩子的值大于左孩子的值
            if (j + 1 < this.data.length && this.data[j + 1] > this.data[j]) {
                j++;    // j为右孩子索引
            }

            if (this.data[index] > this.data[j]) {
                break;
            }

            // 交换index 和 j的位置
            [this.data[index], this.data[j]] = [this.data[j], this.data[index]];

            index = j;  // 继续下沉
        }
    }

    extractMax(): T {
        // 取出最大元素
        const ret = this.findMax();
        [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]];
        this.data.pop();
        this.siftDown(0);
        return ret;
    }
}


let maxHeap = new MaxHeap();

for (let i = 1; i < 10; i++) {
    maxHeap.add(i);
}

console.log(maxHeap);
