export interface Stack<E> {
    /**
     * 栈结构
     * 操作为数组的子集
     * Last In First Out   后进先出 LIFO
     */
    push(e: E): void; // 向栈中加入元素
    pop(): E; // 弹出栈顶元素
    peek(): E; // 查看栈顶元素
    getSize(): number; // 栈中元素个数
    isEmpty(): boolean; // 判断栈是否为空
}


export class ArrayStack<E> implements Stack<E> {
    /**
     * 利用数组构造栈 数组尾作为栈顶   [0, 1, 2, 3 ] top
     */
    constructor(
        private arr: E[] = []) {
    }

    getSize(): number {
        return this.arr.length;
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }

    peek(): E {
        return this.arr[this.arr.length - 1];
    }

    pop(): E {
        const last = this.arr[this.arr.length - 1];
        this.arr.pop();
        return last;
    }

    push(e: E): void {
        this.arr.push(e);
    }


}

let arrayStack = new ArrayStack();

for (let i = 0; i < 5; i++) {
    arrayStack.push(i);
}


console.log(arrayStack);

console.log(arrayStack.peek(), arrayStack.pop());

console.log(arrayStack.isEmpty());



