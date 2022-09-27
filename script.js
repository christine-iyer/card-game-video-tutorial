
const main = document.querySelector('.game');
const gameArea = maker(main,'div', 'gameArea','')
const game = {players:2}
// const cardData = {suits:['spades', 'hearts', 'diams', 'clubs'], val: ['A', '2', '3', '4', '5', '6', '7', '8', '9', 
// '10', 'J', 'Q', 'K']}

//create a deck
const cardData = {
     suits:['A','A','A','A','A','A','A','A','A','A','A',
     'B','B',
     'C','C',
     'D','D','D','D',
     'E','E','E','E','E','E','E','E','E','E','E','E',
     'F', 'F',
     'G','G','G','G',
     'H','H',
     'I','I','I','I','I','I','I','I',
     'J','J',
     'K','K',
     'L','L','L','L',
     'M', 'M',
     'N', 'N', 'N', 'N', 'N', 'N', 
     'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
     'P', 'P',
     'Q','Q',
     'R', 'R','R','R','R','R',
      'S', 'S','S','S',
      'T', 'T', 'T', 'T', 'T', 'T', 
      'U', 'U','U','U','U','U',
      'V', 'V',
      'W','W',
     'X', 'X',
     'Y', 'Y', 'Y', 'Y', 
     'Z','Z', 
     'QU', 'QU',
     'TH', 'TH',
     'IN','IN' ,
     'ER', 'ER', 
     'CL','CL'],
val:[2,2,2,2,2,2,2,2,2,2,2,
     8,8,
     8,8,
     5,5,5,5, 
     2,2,2,2,2,2,2,2,2,2,2,2,
     6, 6,
     6, 6,6,6,
     7,7, 
     2, 2,2,2,2,2,2,2,
     13, 13,
     8,8, 
     3,3,3,3, 
     5,5, 
     5, 5,5,5,5,5,
     2, 2,2,2,2,2,2,
     6, 6,
     15, 
     5, 5,5,5,5,5,5,
     3,3,3, 
     3,3,3,3,3,3, 
     4, 4,4,4,
     11, 11,
     10, 10,
     12, 12,
     4, 4,4,4,
     14, 14,
     9, 9,
     9, 9,
     7, 7,
     7, 7,
     10,10]


//count: [
     // a10,
     // b2,
     // c2,
     // d4,
     // e12,
     //f 2,
     //g 4,
     //h1,
     //i 8,
     // j13,
     // k2,
     // l4,
     // m2,
     // n6,
     // o7,
     // p2,
     // q2,
     // r6,
     // s3,
     // t6,
     // u6,
     // v2,
     // w2,
     // x2,
     // y4,
     //z2,
     // 2,
     // 2,
     // 2,
     // 2,
     // 2] 
}
main.innerHTML = `<h1>&#65; &#66; &#67; &#68; &#69; &#70; 
&#71; &#72; &#73; &#74; &#75; &#76; &#77; &#78; &#79; &#80; 
&#81; &#82; &#83; &#84; &#85; &#86; &#87; &#88; &#89; &#90;
&#81&#85; &#84&#72; &#73&#78; &#69&#82; &#67&#76; 
</h1>`;
const deck = [];
//main.innerHTML = `&spades; &hearts; &diams; &clubs;`

buildDeck();
addPlayers();
function addPlayers(){
     for (let i = 0; i<game.players; i++) {
          const ele = maker(gameArea,
                'div', 'player', `${i+1} Player`);
     }
}
function maker (par, eleType, cla, html){
     const ele = document.createElement(eleType);
     ele.ClassList.add(cla);
     ele.innerHTML = html;
     return par.appendChild(ele);

}


function buildDeck(){
     cardData.suits.forEach((suit) => {
          cardData.val.forEach((v, ind) => {
               const bgC = (suit == 'hearts') ||(suit == 'diams')  ? 'red' : 'black';
               const card = {
                    suit : suit,
                    icon : `&${suit}`,
                    clr : bgC, 
                    cardNum : v, 
                    cardValue : ind + v
               } 
               deck.push(card);
})
})
}

//make elements on the page







