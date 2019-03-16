"use strict";
exports.__esModule = true;
var stack_1 = require("../stack/stack");
var linked_list_1 = require("./linked_list");
var LinkedListStack = /** @class */ (function () {
    function LinkedListStack() {
        /**
         * 链表构建栈  链表头作为栈顶       top 0 -> 1 -> 2 -> 3  bottom
         */
        this.list = new linked_list_1.LinkedList();
    }
    LinkedListStack.prototype.getSize = function () {
        return this.list.getSize();
    };
    LinkedListStack.prototype.isEmpty = function () {
        return this.list.getSize() === 0;
    };
    LinkedListStack.prototype.peek = function () {
        return this.list.get(0);
    };
    LinkedListStack.prototype.pop = function () {
        var ret = this.list.get(0);
        this.list.remove(0);
        return ret;
    };
    LinkedListStack.prototype.push = function (e) {
        this.list.add(e, 0);
    };
    return LinkedListStack;
}());
function test(label, stack) {
    var loop = 10000000;
    var start = new Date().getTime();
    for (var i = 0; i <= loop; i++) {
        stack.push(i);
    }
    for (var i = 0; i < 10000000; i++) {
        stack.pop();
    }
    var end = new Date().getTime();
    console.log(label + " const " + (end - start));
}
var linkedListStack = new LinkedListStack();
var arrStack = new stack_1.ArrayStack();
test('linkedList', linkedListStack);
test('array', arrStack);
