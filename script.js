
const main = document.querySelector('.game');
const gameArea = maker(main,'div', 'gameArea','')
const game = {players:2}
const cardData = {suits:['spades', 'hearts', 'diams', 'clubs'], val: ['A', '2', '3', '4', '5', '6', '7', '8', '9', 
'10', 'J', 'Q', 'K']}

//create a deck
// const cardData = {suits:['A','B','C','D', 'E', 'F','G','I','J','K','L',
// 'M','N','O','P','Q','R', 'S', 'T', 'U', 'V','X','Y','Z',
// 'QU', 'TH', 'IN', 'ER', 'CL'],
// val:[2,8,8,5,2,6,6,7,2,2,8,3,5,5,2,6,15,5,3,3,4,11,10,12,4,14,
// 9,9,7,7,10],

// count: [10,2,2,4,12,2,4,1,8,13,2,4,2,6,7,2,2,6,3,6,6,2,2,2,4,2,2,2,2,2,2] 
// }
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
          const ele = maker(gameArea, 'div', 'player', `${i+1} Player`);
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







