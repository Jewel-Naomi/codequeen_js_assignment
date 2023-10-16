const numbers = [5,4,3,2,1,0,-1,-2,-3,-4,-5];

function getPositives(numbers){
    const posArr = numbers.filter(num => num > -1);
    return posArr;
}

const posArr = numbers.filter(function(num){
    return num > -1;
});

console.log (posArr);