function composeRanges(nums: number[]): string[] {
    const array = []
    let string = nums[0] + "->"
    for (let i = 1; i < nums.length; i++){
        if (nums[i+1] - nums[i] !== 1){
            string += nums[i]
            array.push(string)
            if (i+1 !== nums.length-1){
                string = nums[i+1] + "->"
            } else {
                string = ''
            }
        }
    }
    
    return array
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 10]));