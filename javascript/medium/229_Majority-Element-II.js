/* ***
 1- Link: https://leetcode.com/problems/majority-element-ii/

 2- Description:
    Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

    Example 1:

    Input: nums = [3,2,3]
    Output: [3]
    Example 2:

    Input: nums = [1]
    Output: [1]
    Example 3:

    Input: nums = [1,2]
    Output: [1,2]
    

    Constraints:

    1 <= nums.length <= 5 * 104
    -109 <= nums[i] <= 109
    

    Follow up: Could you solve the problem in linear time and in O(1) space?
*/



//? The Solution

function findMajorElements(numbersArr) {
    
    if (!Array.isArray(numbersArr)) return [];
    

    //initialization step
    let majorElementsSet = new Set();
    let NumberOccurrenceHash = {};
    let threshold = numbersArr.length / 3;
    
    for (const number of numbersArr) {
        
        NumberOccurrenceHash[number] = 1 + (NumberOccurrenceHash[number] || 0);
        
        if ( NumberOccurrenceHash[number] > threshold) {
            majorElementsSet.add(number);
        }
    }
    
    return Array.from(majorElementsSet);
}






const result = findMajorElements([2]);

console.log('result:',result)













