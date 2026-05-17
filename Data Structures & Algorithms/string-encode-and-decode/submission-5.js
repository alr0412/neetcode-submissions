class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        strs.forEach(s=>{
            result+=s.length.toString()+'#'+s;
        });
        console.log(result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let p = 0;

        while(p<str.length){
            console.log("Iter: ");
            let t = "";
            let i = p;
            let word = "";

            while(true){
                if(str[i]==="#"){
                    i++;
                    break;
                }
                t+=str[i];
                i++;
            }

            t=Number(t);
            console.log(t+" - "+i)
            for(let j = i;j<=i+t-1;j++){
                word+=str[j];
            }

            result.push(word);
            p =t+i;
        }

        return result;
    }
}
