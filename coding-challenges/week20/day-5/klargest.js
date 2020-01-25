var findKthLargest = function (nums, k) {
    const n = nums.length;
    for (let i = 0; i < k; i++)
        for (let j = 0; j < n - i; j++)
            if (nums[j] > nums[j + 1])
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    return nums[n - k];
};


console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 5))