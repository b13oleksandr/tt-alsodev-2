export const useFunctions = () => {
  const arrayIsSequential = (array = []) => {
    const arr = [...array].sort((a, b) => a - b)
    
    for (let i = 0; i < array.length - 1; i++) {
      if (arr[i] !== arr[i + 1] - 1) {
        return false
      }
    }
    
    return true
  }
  
  const arrayUniqueElements = (array = []) => {
    return Array.from(new Set(array))
      .sort((a, b) => a - b)
  }
  
  const arrayGetRepeats = (array = []) => {
    const repeats = array.reduce((acc, el) => {
      acc[el] ? acc[el]++ : acc[el] = 1
      return acc
    }, {})
    
    return Object.entries(repeats)
      .map(([key, value]) => ({ [key]: value }));
  }
  
  return {
    arrayIsSequential,
    arrayUniqueElements,
    arrayGetRepeats
  }
}