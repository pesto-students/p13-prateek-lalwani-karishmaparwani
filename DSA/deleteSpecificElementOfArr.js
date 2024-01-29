 

let arr = [1,2,3,4,5];

let pos = 3;
// T.C: O(N)
// S.C: O(1)
function deleteXPos(arr,pos){
    let n = arr.length;

    if(pos==0){
        throw new Error("invalid position");
    }
    // do left shifting
    for(let i=pos-1;i<n-1;i++){
       
    console.log(arr);
        arr[i]=arr[i+1];
        console.log(arr);
    }
    arr.length =arr.length-1;
    console.log(arr);
    return arr;
}

console.log(deleteXPos(arr,pos));
