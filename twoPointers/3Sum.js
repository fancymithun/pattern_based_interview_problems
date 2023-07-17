// points 3 poniters at different indexed example 0,1,last

// values must unique in all so need to set everytime so if get the count not equal to set then we should reduce last index

// then we need to add all values and should see if equal to 0 then can push to array that we created

// if not equal increase second index not then first

// at the end return whole array of result

function threeSum(nums){
    let result = []
    nums.sort((a,b) => a - b) // [-4,-1,-1,0,1,2]  result = [[-1,-1,2],[-1,1,0] ] 

    let i=0, j = i + 1, k = nums.length-1

    while(j < k){
        if(j === k){
            i++
            j = i + 1
        }
        let sum = nums[i] + nums[j] + nums[k]

        if(sum > 0){
            k--
        }else if(sum < 0){
            j++
        }else{
            result.push([nums[i],nums[j],nums[k]])
            j++
            k--
        }
    }
    return result

}

const nums = [-1,0,1,2,-1,-4]
let result = threeSum(nums)
console.log(result);