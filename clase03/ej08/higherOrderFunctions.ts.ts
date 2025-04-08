
export default function createMultiplier(factor:number): (num:number)=>number{
    return function (num: number):number{
        return num * factor
    }
}