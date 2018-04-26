function maxProduct(nums) {
  //split the array at any 0's
  if (nums.length === 1) return nums[0]

  let subarrays = zeroSplit(nums)
  console.log(subarrays)
  let maxSubArray,
    maxValue = 0
  //check each subarray after split for the number of negatives

  subarrays.forEach(array => {
    if (array.length > 0) {
      let negCount = 0,
        currentProd
      let negatives = []

      array.forEach((val, idx) => {
        if (val < 0) {
          negatives.push(idx)
          negCount++
        }
      })

      if (negCount % 2 === 0) {
        currentProd = 1
        array.forEach(val => (currentProd *= val))
        if (currentProd > maxValue) {
          maxValue = currentProd
          maxSubArray = array
        }
      } else {
        //   1. from beginning of subarray to one before the last negative
        if (array.length === 1) {
          currentProd = array[0]
          if (currentProd > maxValue) {
            maxValue = currentProd
            maxSubArray = array[0]
          }
        } else {
          currentProd = 1
          for (let i = 0; i < negatives[negatives.length - 1]; i++) {
            console.log(array[i])
            currentProd *= array[i]
          }

          if (currentProd > maxValue) {
            maxValue = currentProd
            maxSubArray = array.slice(0, negatives[negatives.length - 1])
          }

          //   2. from one after the first negative to the end of the subarray
          currentProd = 1
          for (let j = negatives[0] + 1; j < array.length; j++) {
            currentProd *= array[j]
          }

          if (currentProd > maxValue) {
            maxValue = currentProd
            maxSubArray = array.slice(negatives[0] + 1)
          }
        }
      }
    }
  })

  return maxValue
}

function zeroSplit(nums) {
  let zeros = []
  let subarrays = []

  nums.forEach((num, idx) => {
    if (num === 0) zeros.push(idx)
  })

  if (zeros.length === 0) return [nums]
  if (zeros.length > 0) {
    let begin = 0
    zeros.forEach(zero => {
      subarrays.push(nums.slice(begin, zero))
      begin = zero + 1
    })
    subarrays.push(nums.slice(begin))
  }

  return subarrays
}

console.log(maxProduct([0, -2, 0]))
