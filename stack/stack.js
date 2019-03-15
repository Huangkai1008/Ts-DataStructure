"use strict";
exports.__esModule = true;
var ArrayStack = /** @class */ (function () {
    /**
     * 利用数组构造栈 数组尾作为栈顶   [0, 1, 2, 3 ] top
     */
    function ArrayStack(arr) {
        if (arr === void 0) { arr = []; }
        this.arr = arr;
    }
    ArrayStack.prototype.getSize = function () {
        return this.arr.length;
    };
    ArrayStack.prototype.isEmpty = function () {
        return this.arr.length === 0;
    };
    ArrayStack.prototype.peek = function () {
        return this.arr[this.arr.length - 1];
    };
    ArrayStack.prototype.pop = function () {
        var last = this.arr[this.arr.length - 1];
        this.arr.pop();
        return last;
    };
    ArrayStack.prototype.push = function (e) {
        this.arr.push(e);
    };
    return ArrayStack;
}());
exports.ArrayStack = ArrayStack;
var arrayStack = new ArrayStack();
for (var i = 0; i < 5; i++) {
    arrayStack.push(i);
}
console.log(arrayStack);
console.log(arrayStack.peek(), arrayStack.pop());
console.log(arrayStack.isEmpty());
