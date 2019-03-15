"use strict";
exports.__esModule = true;
var LinkNode = /** @class */ (function () {
    /**
     * 链表节点类型
     * @param data 节点数据
     * @param next 此节点的下一个节点
     */
    function LinkNode(data, next) {
        this.data = data;
        this.next = next;
    }
    return LinkNode;
}());
var LinkedList = /** @class */ (function () {
    /**
     * 链表
     *    0  --> 1 --> 2 --> 3 --> 4 --> undefined
     *   |
     * head
     */
    function LinkedList(length, head) {
        if (length === void 0) { length = 0; }
        this.length = length;
        this.head = head;
    }
    // 添加元素
    LinkedList.prototype.add = function (data, index) {
        if (index > this.length || index < 0) {
            throw new RangeError('Add failed, illegal index');
        }
        var prev;
        if (this.head === undefined) {
            this.head = new LinkNode(data);
        }
        else {
            prev = this.head; // 初始定位到头节点
            for (var i = 0; i < index - 1; i++) {
                if (prev.next !== undefined) {
                    prev = prev.next;
                }
                else {
                    break;
                }
            }
        }
        if (prev !== undefined) {
            prev.next = new LinkNode(data, prev.next);
        }
        this.length++;
    };
    LinkedList.prototype.append = function (data) {
        // 链表尾插入元素
        this.add(data, this.length);
    };
    LinkedList.prototype.get = function (index) {
        // 获得index位置的元素
        if (index < 0 || index >= this.length) {
            throw new RangeError('Get failed, illegal index');
        }
        var cur = this.head;
        for (var i = 0; i < index; i++) {
            if (cur !== undefined) {
                cur = cur.next;
            }
        }
        if (cur !== undefined) {
            return cur.data;
        }
        else {
            throw new Error('Wrong Get func');
        }
    };
    LinkedList.prototype.contains = function (data) {
        // 是否存在data元素
        var cur = this.head;
        while (cur !== undefined) {
            if (cur.data === data) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    };
    LinkedList.prototype.remove = function (index) {
        // 移除index位置元素
        if (index < 0 || index >= this.length) {
            throw new RangeError('remove failed, illegal index');
        }
        var prev = this.head;
        for (var i = 0; i < index - 1; i++) {
            if (prev !== undefined) {
                prev = prev.next;
            }
        }
        if (prev !== undefined) {
            var ret = prev.next;
            prev.next = ret.next;
            ret.next = undefined;
            this.length--;
        }
    };
    LinkedList.prototype.getSize = function () {
        return this.length;
    };
    LinkedList.prototype.print = function () {
        // 打印链表
        var arr = ['head'];
        for (var i = 0; i < this.getSize(); i++) {
            arr.push("" + this.get(i));
        }
        arr.push('Null');
        console.log(arr.join(' -> '));
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var linkedList = new LinkedList(0); // 构造一个空链表
for (var i = 0; i < 5; i++) {
    linkedList.append(i);
}
console.log(linkedList.getSize());
linkedList.print();
linkedList.remove(4);
linkedList.remove(1);
console.log(linkedList.contains(4));
linkedList.print();
