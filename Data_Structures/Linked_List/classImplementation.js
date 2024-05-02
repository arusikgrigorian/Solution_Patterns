"use strict";
exports.__esModule = true;
var LinkedNode = /** @class */ (function () {
    function LinkedNode(data, next) {
        this.data = data;
        this.next = next;
    }
    return LinkedNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.insertAtStart = function (data) {
        this.head = new LinkedNode(data, this.head);
        this.size++;
    };
    LinkedList.prototype.insertAtEnd = function (data) {
        if (!this.head) {
            this.insertAtStart(data);
        }
        else {
            var currentHead = this.head;
            while (currentHead.next) {
                currentHead = currentHead.next;
            }
            currentHead.next = new LinkedNode(data, null);
            this.size++;
        }
    };
    LinkedList.prototype.insertAtIndex = function (data, index) {
        if (index > this.size) {
            return 'Please pass a valid index';
        }
        else if (index === 0) {
            this.insertAtStart(data);
        }
        else {
            var node = new LinkedNode(data, null);
            var currentHead = this.head;
            var previousHead = null;
            var count = 0;
            while (count < index) {
                previousHead = currentHead;
                currentHead = (currentHead === null || currentHead === void 0 ? void 0 : currentHead.next) || null;
                count++;
            }
            node.next = currentHead;
            previousHead && (previousHead.next = node);
            this.size++;
        }
    };
    LinkedList.prototype.getAtIndex = function (index) {
        if (index > this.size) {
            return 'Please pass a valid index';
        }
        else {
            var currentHead = this.head;
            var count = 0;
            while (count < index) {
                currentHead = (currentHead === null || currentHead === void 0 ? void 0 : currentHead.next) || null;
                count++;
            }
            return currentHead;
        }
    };
    LinkedList.prototype.removeAtIndex = function (index) {
        if (index > this.size) {
            return 'Please pass a valid index';
        }
        else {
            var currentHead = this.head;
            var previousHead = null;
            var count = 0;
            if (index === 0) {
                this.head = (currentHead === null || currentHead === void 0 ? void 0 : currentHead.next) || null;
            }
            else {
                while (count < index) {
                    previousHead = currentHead;
                    currentHead = (currentHead === null || currentHead === void 0 ? void 0 : currentHead.next) || null;
                    count++;
                }
                previousHead && (previousHead.next = (currentHead === null || currentHead === void 0 ? void 0 : currentHead.next) || null);
            }
            this.size--;
        }
    };
    LinkedList.prototype.clearList = function () {
        this.head = null;
        this.size = 0;
    };
    LinkedList.prototype.reverseList = function () {
        var currentHead = this.head;
        var previousHead = null;
        while (currentHead === null || currentHead === void 0 ? void 0 : currentHead.next) {
            var nextHead = currentHead === null || currentHead === void 0 ? void 0 : currentHead.next;
            currentHead.next = previousHead;
            previousHead = currentHead;
            currentHead = nextHead;
        }
        this.head = previousHead;
    };
    LinkedList.prototype.printData = function () {
        var currentHead = this.head;
        while (currentHead === null || currentHead === void 0 ? void 0 : currentHead.data) {
            console.log(currentHead.data);
            currentHead = currentHead.next;
        }
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.insertAtStart('three');
linkedList.insertAtStart('two');
linkedList.insertAtStart('first');
linkedList.insertAtStart('zero');
console.log(JSON.stringify(linkedList, null, 4));
console.log(linkedList.reverseList());
console.log(JSON.stringify(linkedList, null, 4));
exports["default"] = linkedList;
