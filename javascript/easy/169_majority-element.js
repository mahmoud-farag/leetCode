/* ***
 1- Link: https://leetcode.com/problems/majority-element/description/

 2- Description:
    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

    Example 1:

    Input: nums = [3,2,3]
    Output: 3
    Example 2:

    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
    

    Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109
    

    Follow-up: Could you solve the problem in linear time and in O(1) space?
*/



//? The Solution

function findMajorityNumber (integerArr) {
    
  const majorityNumberThreshold = integerArr.length / 2;
  const numberOccurrenceMap = new Map();
  let majorElement = 0;

  if (!Array.isArray(integerArr)) return 0;
  if (integerArr.length === 1) return integerArr[0];
  
 
  for (let index = 0; index < integerArr.length; index++) {
     
      const number = integerArr[index];

      if (!numberOccurrenceMap.has(number)) {
         numberOccurrenceMap.set(number, 1);
         
      } else {
         const currentValue = numberOccurrenceMap.get(number);
         numberOccurrenceMap.set(number, currentValue + 1);
      }
  }
  
  let maximumValue  = 0;

  for (const [key, value] of numberOccurrenceMap) {
      
      if (value > majorityNumberThreshold && value > maximumValue) {
          maximumValue = value;
          majorElement = key;
      }
  }
  
  return majorElement;
  
}


const result = findMajorityNumber([1,1]);
console.log('result:', result);