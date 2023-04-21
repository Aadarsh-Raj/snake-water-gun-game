// Use js to crate a game of snake, water & gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S,W or G and declare win or loss using alert. 
// Use confirm and prompt whenever required.

// S, W, G
// s w = s
// s g = g
// g w = w
let arr = ['s', 'w', 'g']
let score = 0;

let runAgain = true;

const check = (char, random) => {
  ('s' > 'w' && 's' < 'g' && 'g' < 'w')
  return (char, random) ? true : false;
}


while (runAgain) {
  for (let i = 0; i < 5; i++) {
    let random = arr[Math.floor(Math.random() * arr.length)]

    let char = prompt('Enter s, w, g')
    alert('You entered ' + char)
    if (char == random) {
      alert('Tie')

    }
    else {
      if (char > random) {

        alert('Computer generated ' + random + '  So, You are winner')
      }
      else {
        alert('Computer generated ' + random + ' So,Computer is winner')
      }
    }
    if (char > random) {
      score++;
    }
    else {
      score = score + 0;
    }
    alert('Your score is ' + score + ' out of 5.')
  }
  runAgain = confirm('Do you want to play Again?')
}


