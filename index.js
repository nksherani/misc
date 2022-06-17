let arr = [0,8,7,6,5,-3,3]

const eqIndex = (arr) => {
    const summing = SumWrapper1();
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum=summing(arr,i);
    }
    console.log(sum);
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let left = 0,right = 0;
        if(i > 0){
            left = summing(arr, i-1);
        }
        right = sum - el - left;
        if(left == right)
        return i;
    }
    return -1;
    
}

const SumWrapper1 = () => {

    const map = {};
    return (arr, idx) => {
        if (idx == 0) {
            map[idx] = arr[idx];
            return map[idx];
        }
        map[idx] = map[idx - 1] + arr[idx];
        return map[idx];
    }
}
console.log(eqIndex(arr));