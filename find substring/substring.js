function longestCommonSubstring(str1,str2){
    let m= str1.length;
    let n=str2.length;
    let result=0;
    let end=0
    let len=new Array(m+1);
    for(let i=0;i<=m;i++){
        len[i]=new Array(n+1);
        for(let j=0;j<=n;j++){
            len[i][j]=0
        }
    }
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(str1[i-1]==str2[j-1]){
                len[i][j]=len[i-1][j-1]+1;
                if(len[i][j]>result){
                    result=len[i][j];
                    end=i;
                }
            }
        }
    }
    return str1.substring(end-result,end);
}
console.log(longestCommonSubstring("Meera",'Peeram'))
