
// Your solution goes here
const gameObject = {
    lives : 3,
    coins: 0,
    points: function(){
        return this.coins * 10
    },
    playerDies : function(){
        return this.lives>0 ? this.lives-- : this.lives //if I do lives-1 is not working why?
    },
    newGame: function() {
         lives = 3 ,
         coins = 0
    }
}
const game = Object.create(gameObject);
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
console.log("points = " + game.points());  // should be 0
game.coins = 2;
console.log("points = " + game.points());  // should be 20
game.playerDies();
console.log("lives = " + game.lives);    // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives);    // should be 0
game.newGame();
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0