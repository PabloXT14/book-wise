export const getMostFrequentString = (arr: string[]) => {
  const hashmap = arr.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1
    return acc 
  }, {} as Record<string, number>)

  return Object.keys(hashmap).reduce((a, b) => 
    hashmap[a] > hashmap[b] ? a : b
  )
}