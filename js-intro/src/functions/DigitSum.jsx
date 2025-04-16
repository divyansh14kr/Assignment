export function DigitSum(params){
    let sum =0;
    for(let i =0;i<params.length;i++){
        sum += Number.parseInt(params[i]);
    }
    return sum;
}