import {BST} from '../bst/bst';

interface Set<T> {
    /**
     * 集合
     *  去重
     */

    add(e: T): void; // 添加元素

    contains(e: T): boolean; //是否存在元素

    getSize(): number;   // 获取元素个数

    isEmpty(): boolean;  // 是否为空
}


class BSTSet<T> implements Set<T> {


    private bst: BST<T> = new BST();

    add(e: T): void {
        return this.bst.add(e);
    }

    contains(e: T): boolean {
        return this.bst.contain(e);
    }

    getSize(): number {
        return this.bst.getSize();
    }

    isEmpty(): boolean {
        return this.bst.isEmpty();
    }


}
