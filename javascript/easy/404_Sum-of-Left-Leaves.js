/* ***
 1- Link: https://leetcode.com/problems/sum-of-left-leaves/description/

 2- Description:
      Given the root of a binary tree, return the sum of all left leaves.

      A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

      

      Example 1:


      Input: root = [3,9,20,null,null,15,7]
      Output: 24
      Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
      Example 2:

      Input: root = [1]
      Output: 0
      

      Constraints:

      The number of nodes in the tree is in the range [1, 1000].
      -1000 <= Node.val <= 1000
 */



//! Not finished yet.

    
function sumOfLeftLeavesFromArray(arr) {
  if (!arr.length) return 0;
  
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
      let leftChildIndex = 2 * i + 1; // Left child index in array representation
  
      // Check if left child exists and is a leaf (i.e., has no further children)
      if (leftChildIndex < arr.length && arr[leftChildIndex] !== null) {
          let leftGrandChildIndex = 2 * leftChildIndex + 1;
          let rightGrandChildIndex = 2 * leftChildIndex + 2;
  
          if (
              leftGrandChildIndex >= arr.length || arr[leftGrandChildIndex] === null &&
              rightGrandChildIndex >= arr.length || arr[rightGrandChildIndex] === null
          ) {
              sum += arr[leftChildIndex];
          }
      }
  }
  
  return sum;
}

// Example Usage:
console.log(sumOfLeftLeavesFromArray([3,9,20,null,null,15,7])); // Output: 24
console.log(sumOfLeftLeavesFromArray([1, 2, 3, 4, 5, null, 6])); // Output: 4
console.log(sumOfLeftLeavesFromArray([10, 8, 12, 6, null, 11, 15])); // Output: 6

    