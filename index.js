const fs = require('fs')
const text = fs.readFileSync('text/example.txt').toString()

const splitOnLines = text => text.split('\n')
const splitOnWords = text => text.split(' ')

const lines = splitOnLines(text)
let count = 0

for (let index = 0; index < lines.length; index++) {
  
  function main() {
    if (lines[index] === '/r') {
      return 
  } else {
      const words = splitOnWords(lines[index])
  const wordsWithCount = words.map(word => {
    if (word.length > 1) {
      count++
      return `${word}(${count})`
    } else{
      return word
    }

  })

  lines[index] = wordsWithCount.join(' ')
  }
}
main() 
 
}
const output = lines.join('\n')
fs.writeFileSync('text/copy.txt', output)