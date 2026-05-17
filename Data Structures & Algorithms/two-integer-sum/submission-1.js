class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = new Map();

        for(let i=0;i<nums.length;i++){
            if(myMap.has(nums[i])){
                return [myMap.get(nums[i]),i];
            }
            myMap.set(target-nums[i],i);
        }
    }
}
