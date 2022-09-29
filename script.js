const main = document.querySelector('.game');
const gameArea = maker(main,'div', 'gameArea','')
const btn = maker(main, 'button', 'btn', 'Next Round >>>')
btn.addEventListener('click', (event)=>{
     const temp = [];
     for (let i = 0; i<game.players;i++){
          if(game.cards[i].length >0) {
               temp.push(i);
          }else{
               const ele = game.view[i];
               game.view[i].innerHTML = "X";
               ele.style.backgroundColor = '#bbb';
          }
     }
     mes.innerHTML = `${game.cards}`
     gamer(temp, []);

} )

function gamer (inPlay, holder) {
     const vals = [];
     console.log(inPlay);
     inPlay.forEach((i) =>{

     })
}
const mes = maker(main, 'div', 'mes', 'Click to Play')
const game = {players:3, cards: [], view: []}

// const cardData = {suits:['spades', 'hearts', 'diams', 'clubs'], val: ['A', '2', '3', '4', '5', '6', '7', '8', '9', 
// 10', 'J', 'Q', 'K']}

//create a deck
// const cardData = {
//      suits:['A','A','A','A','A','A','A','A','A','A','A',
//      'B','B',
//      'C','C',
//      'D','D','D','D',
//      'E','E','E','E','E','E','E','E','E','E','E','E',
//      'F', 'F',
//      'G','G','G','G',
//      'H','H',
//      'I','I','I','I','I','I','I','I',
//      'J','J',
//      'K','K',
//      'L','L','L','L',
//      'M', 'M',
//      'N', 'N', 'N', 'N', 'N', 'N', 
//      'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
//      'P', 'P',
//      'Q','Q',
//      'R', 'R','R','R','R','R',
//       'S', 'S','S','S',
//       'T', 'T', 'T', 'T', 'T', 'T', 
//       'U', 'U','U','U','U','U',
//       'V', 'V',
//       'W','W',
//      'X', 'X',
//      'Y', 'Y', 'Y', 'Y', 
//      'Z','Z', 
//      'QU', 'QU',
//      'TH', 'TH',
//      'IN','IN' ,
//      'ER', 'ER', 
//      'CL','CL'],
// val:[2,2,2,2,2,2,2,2,2,2,2,
//      8,8,
//      8,8,
//      5,5,5,5, 
//      2,2,2,2,2,2,2,2,2,2,2,2,
//      6, 6,
//      6, 6,6,6,
//      7,7, 
//      2, 2,2,2,2,2,2,2,
//      13, 13,
//      8,8, 
//      3,3,3,3, 
//      5,5, 
//      5, 5,5,5,5,5,
//      2, 2,2,2,2,2,2,
//      6, 6,
//      "15", 
//      5, 5,5,5,5,5,5,
//      3,3,3, 
//      3,3,3,3,3,3, 
//      4, 4,4,4,
//      11, 11,
//      10, 10,
//      12, 12,
//      4, 4,4,4,
//      14, 14,
//      9, 9,
//      9, 9,
//      7, 7,
//      7, 7,
//      10,10]
// }
class Card {
     constructor(suit, icon,val) {
         this.suit = suit,
          this.icon = icon,
          this.val = val
     }
}
const cardData = [
     new Card ('A', '&#65', 2),
     new Card ('A', '&#65', 2),
     new Card ('A', '&#65', 2),
     new Card ('A', '&#65', 2),
     new Card ('A', '&#65', 2),
     new Card ('A', '&#65', 2),
     new Card ('A', '&#65', 2),
     new Card ('A', '&#65', 2),
     new Card ('A', '&#65', 2),
     new Card ('A', '&#65', 2),
     new Card ('B', '&#66', 8),
     new Card ('B', '&#66', 8),
     new Card ('C', '&#67', 8),
     new Card ('C', '&#67', 8),
     new Card ('CL', '&#67&#76', 10),
     new Card ('CL', '&#67&#76', 10),
     new Card ('D', '&#68', 5),
     new Card ('D', '&#68', 5),
     new Card ('D', '&#68', 5),
     new Card ('D', '&#68', 5),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('E', '&#69', 2),
     new Card ('ER', '&#69&#82', 7),
     new Card ('ER', '&#69&#82', 7),
     new Card ('F', '&#70', 6),
     new Card ('F', '&#70', 6),
     new Card ('G', '&#71', 6),
     new Card ('G', '&#71', 6),
     new Card ('G', '&#71', 6),
     new Card ('G', '&#71', 6),
     new Card ('H', '&#72', 7),
     new Card ('H', '&#72', 7),
     new Card ('I', '&#73', 2),
     new Card ('I', '&#73', 2),
     new Card ('I', '&#73', 2),
     new Card ('I', '&#73', 2),
     new Card ('I', '&#73', 2),
     new Card ('I', '&#73', 2),
     new Card ('I', '&#73', 2),
     new Card ('I', '&#73', 2),
     new Card ('IN', '&#73&#78', 7),
     new Card ('IN', '&#73&#78', 7),
     new Card ('J', '&#74', 2),
     new Card ('J', '&#74', 2),
     new Card ('K', '&#75', 8),
     new Card ('K', '&#75', 8),
     new Card ('L', '&#76', 3),
     new Card ('L', '&#76', 3),
     new Card ('L', '&#76', 3),
     new Card ('L', '&#76', 3),
     new Card ('M', '&#77', 5),
     new Card ('M', '&#77', 5),
     new Card ('N', '&#78', 5),
     new Card ('N', '&#78', 5),
     new Card ('N', '&#78', 5),
     new Card ('N', '&#78', 5),
     new Card ('N', '&#78', 5),
     new Card ('N', '&#78', 5),
     new Card ('O', '&#79', 2),
     new Card ('O', '&#79', 2),
     new Card ('O', '&#79', 2),
     new Card ('O', '&#79', 2),
     new Card ('O', '&#79', 2),
     new Card ('O', '&#79', 2),
     new Card ('O', '&#79', 2),
     new Card ('O', '&#79', 2),
     new Card ('P', '&#80', 6),
     new Card ('P', '&#80', 6),
     new Card ('Q', '&#81', 15),
     new Card ('Q', '&#81', 15),
     new Card ('QU', '&#8&#85', 9),
     new Card ('QU', '&#8&#85', 9),
     new Card ('R', '&#82', 5),
     new Card ('R', '&#82', 5),
     new Card ('R', '&#82', 5),
     new Card ('R', '&#82', 5),
     new Card ('R', '&#82', 5),
     new Card ('R', '&#82', 5),
     new Card ('S', '&#83', 3),
     new Card ('S', '&#83', 3),
     new Card ('S', '&#83', 3),
     new Card ('S', '&#83', 3),
     new Card ('T', '&#84', 3),
     new Card ('T', '&#84', 3),
     new Card ('T', '&#84', 3),
     new Card ('T', '&#84', 3),
     new Card ('T', '&#84', 3),
     new Card ('T', '&#84', 3),
     new Card ('TH', '&#84&#72', 9),
     new Card ('TH', '&#84&#72', 9),
     new Card ('U', '&#85', 4),
     new Card ('U', '&#85', 4),
     new Card ('U', '&#85', 4),
     new Card ('U', '&#85', 4),
     new Card ('U', '&#85', 4),
     new Card ('U', '&#85', 4),
     new Card ('V', '&#86', 11),
     new Card ('V', '&#86', 11),
     new Card ('W', '&#87', 10),
     new Card ('W', '&#87', 10),
     new Card ('X', '&#88', 12),
     new Card ('X', '&#88', 12),
     new Card ('Y', '&#89', 4),
     new Card ('Y', '&#89', 4),
     new Card ('Y', '&#89', 4),
     new Card ('Y', '&#89', 4),
     new Card ('Z', '&#90', 14),
     new Card ('Z', '&#90', 14)
]
//  const cardData = [
//      new Card ('A', 2),
//      new Card ('A', 2),
//      new Card ('A', 2),
//      new Card ('A', 2),
//      new Card ('A', 2),
//      new Card ('A', 2),
//      new Card ('A', 2),
//      new Card ('A', 2),
//      new Card ('A', 2),
//      new Card ('A', 2),
//      new Card ('B',  8),
//      new Card ('B',  8),
//      new Card ('C',  8),
//      new Card ('C',  8),
//      new Card ('CL', 10),
//      new Card ('CL', 10),
//      new Card ('D',  5),
//      new Card ('D',  5),
//      new Card ('D',  5),
//      new Card ('D',  5),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('E',  2),
//      new Card ('ER',  7),
//      new Card ('ER',  7),
//      new Card ('F',  6),
//      new Card ('F',  6),
//      new Card ('G', 6),
//      new Card ('G', 6),
//      new Card ('G', 6),
//      new Card ('G', 6),
//      new Card ('H',  7),
//      new Card ('H',  7),
//      new Card ('I',  2),
//      new Card ('I',  2),
//      new Card ('I',  2),
//      new Card ('I',  2),
//      new Card ('I',  2),
//      new Card ('I',  2),
//      new Card ('I',  2),
//      new Card ('I',  2),
//      new Card ('IN',  7),
//      new Card ('IN',  7),
//      new Card ('J',  2),
//      new Card ('J',  2),
//      new Card ('K',  8),
//      new Card ('K',  8),
//      new Card ('L',  3),
//      new Card ('L',  3),
//      new Card ('L',  3),
//      new Card ('L',  3),
//      new Card ('M',  5),
//      new Card ('M',  5),
//      new Card ('N',  5),
//      new Card ('N',  5),
//      new Card ('N',  5),
//      new Card ('N',  5),
//      new Card ('N',  5),
//      new Card ('N',  5),
//      new Card ('O',  2),
//      new Card ('O',  2),
//      new Card ('O',  2),
//      new Card ('O',  2),
//      new Card ('O',  2),
//      new Card ('O',  2),
//      new Card ('O',  2),
//      new Card ('P',  6),
//      new Card ('P',  6),
//      new Card ('Q',  15),
//      new Card ('Q',  15),
//      new Card ('QU',  9),
//      new Card ('QU',  9),
//      new Card ('R', 5),
//      new Card ('R', 5),
//      new Card ('R', 5),
//      new Card ('R', 5),
//      new Card ('R', 5),
//      new Card ('R', 5),
//      new Card ('S',  3),
//      new Card ('S',  3),
//      new Card ('S',  3),
//      new Card ('T',  3),
//      new Card ('T',  3),
//      new Card ('T',  3),
//      new Card ('T',  3),
//      new Card ('T',  3),
//      new Card ('T',  3),
//      new Card ('TH', 9),
//      new Card ('TH', 9),
//      new Card ('U',  4),
//      new Card ('U',  4),
//      new Card ('U',  4),
//      new Card ('U',  4),
//      new Card ('U',  4),
//      new Card ('U',  4),
//      new Card ('V',  11),
//      new Card ('V',  11),
//      new Card ('W', 10),
//      new Card ('W', 10),
//      new Card ('X',  12),
//      new Card ('X',  12),
//      new Card ('Y',  4),
//      new Card ('Y',  4),
//      new Card ('Y',  4),
//      new Card ('Y',  4),
//      new Card ('Z',  14),
//      new Card ('Z',  14)]
 
//  const letters = ['A',
//  'B',
//  'C',
//  'D',
//  'E',
//  'F',
//  'G',
//  'H',
//  'I',
//  'J',
//  'K',
//  'L',
//  'M',
//  'N',
//  'O',
//  'P',
//  'Q',
//  'R',
//  'S',
//  'T',
//  'U',
//  'V',
//  'W',
//  'X',
//  'Y',
//  'Z',
//  'QU',
//  'TH',
//  'IN',
//  'ER',
//  'CL'
//      ]
// const suits = ['&#65',
// 
// '&#67',
// '&#68',
// '&#69',
// '&#70',
// '&#71',
// '&#72',
// '&#73',
// '&#74',
// '&#75',
// '&#76',
// '&#77',
// '&#78',
// '&#79',
// '&#80',
// '&#81',
// '&#82',
// '&#83',
// '&#84',
// '&#85',
// '&#86',
// '&#87',
// '&#88',
// '&#89',
// '&#90',
// '&#8&#85',
// '&#84&#72',
// '&#73&#78',
// '&#69&#82',
// '&#67&#76']

// letters.forEach

// main.innerHTML = `<h1>&#65; &#66; &#67; &#68; &#69; &#70; 
// &#71; &#72; &#73; &#74; &#75; &#76; &#77; &#78; &#79; &#80; 
// &#81; &#82; &#83; &#84; &#85; &#86; &#87; &#88; &#89; &#90;
// &#81&#85; &#84&#72; &#73&#78; &#69&#82; &#67&#76; 
// </h1>`;
const deck = [];
//main.innerHTML = `&spades; &hearts; &diams; &clubs;`

buildDeck();
addPlayers();
function addPlayers(){
     for (let i = 0; i<game.players; i++) {
          const el = maker(gameArea, 'div', 'player', ``);
          const ele = maker(el,'div', 'info', `${i+1} Player`);
          const hand = deck.slice(0,6)
          let handIcons = [];
          for (j = 0; j< hand.length;j++){
               handIcons.push(hand[j].icon) 
          }
          handIcons = handIcons.join(' ')
          const card = maker(el, 'div', 'card', `${handIcons}`);
          game.view.push(card);
          game.cards[i] = deck.splice(0, 6);
          const score = maker(el, 'div', 'score', `${game.cards[i].length} left`);
          } 
          console.log(game.cards);
}
function maker (par, eleType, cla, html){
     const ele = document.createElement(eleType);
     ele.classList.add(cla);
     ele.innerHTML = html;
     return par.appendChild(ele);
}
function buildDeck(){
     cardData.forEach((val) => {
 
               const card = {
                    suit : val.suit,
                    icon : val.icon,
                    value : val.val
               } 
               deck.push(card);
          })
deck.sort(()=> {
     return Math.random()-0.5;
})
}

//make elements on the page







