import {ArrayStack, Stack} from '../stack/stack';
import {LinkedList} from './linked_list';

class LinkedListStack<T> implements Stack<T> {
    /**
     * 链表构建栈  链表头作为栈顶       top 0 -> 1 -> 2 -> 3  bottom
     */
    private list: LinkedList<T> = new LinkedList();

    getSize(): number {
        return this.list.getSize();
    }

    isEmpty(): boolean {
        return this.list.getSize() === 0;
    }

    peek(): T {
        return this.list.get(0);
    }

    pop(): T {
        const ret = this.list.get(0);
        this.list.remove(0);
        return ret;
    }

    push(e: T): void {
        this.list.add(e, 0);
    }

}


function test(label: string, stack: Stack<number>) {
    const loop = 10000000;
    const start = new Date().getTime();
    for (let i = 0; i <= loop; i++) {
        stack.push(i);
    }
    for (let i = 0; i < 10000000; i++) {
        stack.pop();
    }
    const end = new Date().getTime();
    console.log(`${label} const ${end - start}`);
}

const linkedListStack = new LinkedListStack<number>();
const arrStack = new ArrayStack<number>();

test('linkedList', linkedListStack);
test('array', arrStack);
