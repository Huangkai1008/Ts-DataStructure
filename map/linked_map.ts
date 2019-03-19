import {Map} from './map';

class LinkNode<K, V> {
    constructor(
        public key: K,
        public value: V,
        public next?: LinkNode<K, V>
    ) {
    }
}


class LinkedMap<K, V> implements Map<K, V> {
    constructor(
        private size = 0,
        private head?: LinkNode<K, V>,
    ) {
    }

    add(key: K, value: V): void {
        let prev = this.head;
        let member = new LinkNode(key, value);
        if (prev === undefined) {
            this.head = member;
            return;
        }
        while (prev.next !== undefined) {
            prev = prev.next;
        }
        prev.next = member;
        this.size++;
    }

    contains(key: K): boolean {
        let cur = this.head;
        while (cur !== undefined) {
            if (cur.key === key) {
                return true;
            }
        }
        return false;
    }

    get(key: K): V {
        let cur = this.head;
        while (cur !== undefined) {
            if (cur.key === key) {
                return cur.value;
            }
        }
        throw new Error('不存在的key');
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    remove(key: K): void {
        if (this.head === undefined) {
            throw new RangeError('空Map');
        }

        if (this.head.key === key) {
            let cur = this.head;
            while (cur.next !== undefined) {
                cur = cur.next;
            }
            this.size--;
            return;
        }

        let prev = this.head;
        while (prev.next !== undefined) {
            if (prev.next.key == key) {
                break;
            }
            let ret = prev.next;
            prev.next = ret.next;
            ret.next = undefined;
            this.size--;
        }


    }

    set(key: K, value: V): void {
        let cur = this.head;
        while (cur !== undefined) {
            if (cur.key === key) {
                cur.value = value;
            }
            cur = cur.next;
        }
    }

}
