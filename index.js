const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

// Strings

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
const [Bessie, , Dolly, Babe, Little] = farmAnimals.split(' ')
const [black_and_white, , black, pink, ] = farmAnimals.split(' ')

// Arrays

const [red,orange,yellow,green,blue,indigo,violet] = colors
const [red,orange,yellow,green,blue, ,violet] = colors
const [,,,,,indigo,] = colors



// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
