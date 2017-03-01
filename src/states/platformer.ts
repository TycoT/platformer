import * as Utils from '../utils/utils';
import * as Assets from '../assets';

export default class Platformer extends Phaser.State {

    platforms: any;
    player: Phaser.Sprite;
    cursor: Phaser.CursorKeys;
    walls: any;
    coins: any;
    enemies: any;
    
    public preload(): void {
        this.game.load.image('player', require('assets/images/player.png'));
        this.game.load.image('wall', require('assets/images/wall.png'));
        this.game.load.image('coin', require('assets/images/coin.png'));
        this.game.load.image('enemy', require('assets/images/enemy.png'));
    }

    create() {

      // Set the background color to blue
      this.game.stage.backgroundColor = '#3598db';

      // Start the Arcade physics system (for movements and collisions)
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      // Add the physics engine to all game objects
      this.game.world.enableBody = true;

      // Variable to store the arrow key pressed
      this.cursor = this.game.input.keyboard.createCursorKeys();

      // Create the player in the middle of the game
      this.player = this.game.add.sprite(70, 100, 'player');

      // Add gravity to make it fall
      this.player.body.gravity.y = 600;

      // Create 3 groups that will contain our objects
      this.walls = this.game.add.group();
      this.coins = this.game.add.group();
      this.enemies = this.game.add.group();

      // Design the level. x = wall, o = coin, ! = lava.
      var level = [
          'xxxxxxxxxxxxxxxxxxxxxx',
          '!         !          x',
          '!                 o  x',
          '!         o          x',
          '!                    x',
          '!     o   !    x     x',
          'xxxxxxxxxxxxxxxx!!!!!x',
      ];

      // Create the level by going through the array
      for (var i = 0; i < level.length; i++) {
          for (var j = 0; j < level[i].length; j++) {

              // Create a wall and add it to the 'walls' group
              if (level[i][j] == 'x') {
                  var wall = this.game.add.sprite(30+20*j, 30+20*i, 'wall');
                  this.walls.add(wall);
                  wall.body.immovable = true; 
              }

              // Create a coin and add it to the 'coins' group
              else if (level[i][j] == 'o') {
                  var coin = this.game.add.sprite(30+20*j, 30+20*i, 'coin');
                  this.coins.add(coin);
              }

              // Create a enemy and add it to the 'enemies' group
              else if (level[i][j] == '!') {
                  var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'enemy');
                  this.enemies.add(enemy);
              }
          }
      }
    }

    update() {

       // Move the player when an arrow key is pressed
       if (this.cursor.left.isDown) 
           this.player.body.velocity.x = -200;
       else if (this.cursor.right.isDown) 
           this.player.body.velocity.x = 200;
       else 
           this.player.body.velocity.x = 0;

       // Make the player jump if he is touching the ground
       if (this.cursor.up.isDown && this.player.body.touching.down) 
           this.player.body.velocity.y = -250;

        // Make the player and the walls collide
        this.game.physics.arcade.collide(this.player, this.walls);

        // Call the 'takeCoin' function when the player takes a coin
        this.game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);

        // Call the 'restart' function when the player touches the enemy
        this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);

    }

    // Function to kill a coin
    takeCoin(player, coin) {
        coin.kill();
    }

    // Function to restart the game
    restart() {
        this.game.state.start('main');
    }
}
