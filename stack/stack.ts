interface Stack<E> {
    /**
     * 栈结构
     */
    push(e: E): void; // 向栈中加入元素
    pop(): E; // 弹出栈顶元素
    peek(): E; // 查看栈顶元素
    getSize(): number; // 栈中元素个数
    isEmpty(): boolean; // 判断栈是否为空
}


class ArrayStack<E> implements Stack<E> {

    arr: E[];

    constructor() {
        this.arr = [];
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
        let last = this.arr[this.arr.length - 1];
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



