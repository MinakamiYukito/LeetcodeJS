/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0)
    let currentNode = result

    let carry=0

    while(l1 != null || l2 != null){
        let v1=0
        let v2=0
        if (l1 != null) v1 = l1.val
        if (l2 != null) v2 = l2.val
        let sum= v1 + v2 + carry
        carry=Math.floor(sum/10)
        sum=sum%10
        currentNode.next = new ListNode(sum)

        currentNode = currentNode.next

        if (l1 != null ) l1 = l1.next
        if (l2 != null ) l2 = l2.next
    }

    if(carry>0){
        currentNode.next = new ListNode(carry)
    }
    return result.next
};

// Helper function to create linked list from array
function createLinkedList(arr) {
    let head = new ListNode(0);
    let currentNode = head;
    arr.forEach(val => {
        currentNode.next = new ListNode(val);
        currentNode = currentNode.next;
    });
    return head.next;
}

// Helper function to convert linked list to array
function linkedListToArray(list) {
    const arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

// Test cases
const testCases = [
    {
        l1: createLinkedList([2, 4, 3]),
        l2: createLinkedList([5, 6, 4]),
        expected: [7, 0, 8]
    },
    {
        l1: createLinkedList([0]),
        l2: createLinkedList([0]),
        expected: [0]
    },
    {
        l1: createLinkedList([9, 9, 9, 9, 9, 9, 9]),
        l2: createLinkedList([9, 9, 9, 9]),
        expected: [8, 9, 9, 9, 0, 0, 0, 1]
    },
    {
        l1: createLinkedList([1, 8]),
        l2: createLinkedList([0]),
        expected: [1, 8]
    },
    {
        l1: createLinkedList([2, 4]),
        l2: createLinkedList([5, 6, 4]),
        expected: [7, 0, 5]
    }
];

// Function to run all test cases
const runTests = () => {
    let passed = 0;
    testCases.forEach((test, index) => {
        const { l1, l2, expected } = test;
        const result = addTwoNumbers(l1, l2);
        const resultArray = linkedListToArray(result);
        const isPassed = JSON.stringify(resultArray) === JSON.stringify(expected);
        console.log(`Test case ${index + 1}:`, resultArray);
        console.log(`Expected: ${expected}`);
        console.log(`Pass: ${isPassed}`);
        console.log('----------------------');
        if (isPassed) {
            passed++;
        }
    });
    const total = testCases.length;
    const passRate = (passed / total) * 100;
    console.log(`Pass rate: ${passRate}% (${passed}/${total})`);
};
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Run all tests
runTests();