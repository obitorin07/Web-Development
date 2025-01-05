
// same like python start,stop,step
//  array in js is similar to list in python

let programming_languages = ['Python','JavaScript','Php','SQL']
for (let i = 0 ; i < (programming_languages).length; i++){
    console.log(programming_languages[i] + ' Is Programming Langauge.')
}

//  print odd numbers from given list/array
//  why am i writing loop because im lazy to write all the numbers in list/array😀
let nums = []

for (let i = 0 ; i <=30; i = i+1){
    nums.push(i) 
    // used to append value and in python we do nums.append(i) :)
}
console.log(nums)

// so here check that condition print odd numbers only

// i want to check how many values are their inside that array
size_array = nums.length;
for (i = 0; i < size_array; i++){
    if (nums[i] % 2 !=0){
        console.log(nums[i]+' is Odd number')
    }
}