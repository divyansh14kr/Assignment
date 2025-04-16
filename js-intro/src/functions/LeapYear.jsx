export function LeapYear(params){
    if((params % 4 == 0 && params%100 != 0) || (params%400 == 0)){
        return true;
    }
    return false;
}