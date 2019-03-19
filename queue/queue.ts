interface Queue<E> {
    /**
     * 队列
     * 操作为数组的子集
     * First In First Out 先进先出  FIFO
     */
    enqueue(e: E): void; // 入队
    dequeue(): E;        // 出队
    getFront(): E;       // 获取队首元素
    getSize(): number;   // 获取队尾元素个数
    isEmpty(): boolean;  // 队列是否为空
}


export class ArrayQueue<E> implements Queue<E> {
    /**
     * 数组构造队列
     * 数组头作为队首，数组尾作为队尾          front [0, 1, 2, 3, 4, 5] tail
     * 注意： 循环队列当   (tail + 1 ) % front == 0 时队列满
     */


    constructor(private arr: E[] = []) {
    }

    enqueue(e: E): void {
        this.arr.push(e);
    }

    dequeue(): E {
        const first = this.arr[0];
        this.arr.shift();
        return first;
    }


    getFront(): E {
        return this.arr[0];
    }

    getSize(): number {
        return this.arr.length;
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }

}


let arrayQueue = new ArrayQueue();

for (let i = 0; i < 5; i++) {
    arrayQueue.enqueue(i);
}

console.log(arrayQueue);
