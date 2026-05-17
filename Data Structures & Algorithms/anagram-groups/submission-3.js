class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    static checkMapsEquality(map1,map2){
        if(map1.size!==map2.size) return false;
        for(let [key,val] of map1){
            if(!map2.has(key)||map2.get(key)!=val) return false;
        }

        return true;
    }
    groupAnagrams(strs) {
        const myMap = new Map();
        
        for(let i = 0;i<strs.length;i++){
            let elMap = new Map();
            
            for(let j = 0;j<strs[i].length;j++){
                elMap.set(strs[i][j],elMap.get(strs[i][j])?elMap.get(strs[i][j])+1:1);
            }
            let added = false;
            for(const key of myMap.keys()){
                if(Solution.checkMapsEquality(key,elMap)){
                    myMap.set(key,[...myMap.get(key),strs[i]]);
                    added=true;
                    break;
                }
            }
            if(!added) myMap.set(elMap,[strs[i]]);
        }

        return [...myMap.values()];
    }
}
