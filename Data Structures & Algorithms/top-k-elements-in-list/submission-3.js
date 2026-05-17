class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        nums.forEach(n=>{
            if(count[n]) {
                count[n]++
            } else {
                count[n]=1;
            }
        });

        let result = [];
        Object.values(count).sort((a, b) => b - a).slice(0,k).forEach((c,idx)=>{ 
            let key = Object.keys(count).find(key => count[key] === c)
            result.push(key);
            count[key]=-1;
            }
        )
        
        return result;
    }
}
