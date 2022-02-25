const {shuffleArray} = require('./utils')

let testArray = ['a','b','c','d', 'e']

describe('shuffleArray should', () => {
test('shuffle the elements of an array',()=>{
    let result = shuffleArray(testArray)
    expect(result[0]).not.toBe(testArray[0])
})

test('return an array with same length.',()=>{
let result = shuffleArray(testArray)
expect(result.length).toEqual(testArray.length)
})
})
