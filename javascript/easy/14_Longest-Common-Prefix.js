/* ***
 1- Link: https://leetcode.com/problems/longest-common-prefix/description/

 2- Description:
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
    

    Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters if it is non-empty.
*/



// The Solution



function longestCommonPrefix(stringsArr) {
    
  let commonStr = '';
  let firstStr = stringsArr[0];
  
  
  for (let i = 1; i < stringsArr.length; i++) {
      let temp = '';
      for (let j = 0; j < firstStr.length; j++ ) {
          
          for (let k = j + 1; k < firstStr.length; k++) {
              let sub = firstStr.substring(j, k);
              
              if (stringsArr[i].includes(sub) && sub.length > temp.length ) {
                  temp = sub;
              }
          }
      }
      commonStr = temp;
  }
  return commonStr;
}
const stringsArr = ["flower","flow","flight"];
const result = longestCommonPrefix(stringsArr);
console.log(result);






