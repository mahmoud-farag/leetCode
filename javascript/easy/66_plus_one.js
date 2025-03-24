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



//? The Solution

console.log(buildPlusOneArray([9,7,9,9,2,9])); // [ 9, 7, 9, 9, 3, 0 ]

function buildPlusOneArray (digitsArr) {
    
    for (let index = digitsArr.length -1; index >=0; index--) {
        
        if (index === 0 ) {
            
            if (digitsArr[0] === 9) {
                digitsArr[0] = 0;
                digitsArr.unshift(1);
            
                
            } else {
               digitsArr[0] = digitsArr[0] + 1 ; 
            }
            
        } else {
            
            if (digitsArr[index] === 9) {
                digitsArr[index] = 0;

            } else {
                
             digitsArr[index] = digitsArr[index] + 1;
             break;

            }
        }
    }
    
    return digitsArr;
}
