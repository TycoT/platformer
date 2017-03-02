import * as Utils from '../utils/utils';
import * as Assets from '../assets';

export default class Platformer extends Phaser.State {

    platforms: any;
    player: Phaser.Sprite;
    cursor: Phaser.CursorKeys;
    walls: any;
    grounds: any;
    coins: any;
    enemies: any;

    wallJump: any;
    
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
      this.player = this.game.add.sprite(200, 100, 'player');

      // Add gravity to make it fall
      this.player.body.gravity.y = 600;

      // Create 3 groups that will contain our objects
      this.grounds = this.game.add.group();
      this.walls = this.game.add.group();
      this.coins = this.game.add.group();
      this.enemies = this.game.add.group();

      // Design the level. x = wall, o = coin, ! = lava.
      var level = [
          'xxxxxxxxxxxxxxxxxxxxxx',
          '!         !          w',
          '!                 o  w',
          '!         o    w     w',
          '!              w     w',
          '!     o   !    w     w',
          'xxxxxxxxxxxxxxxx!!!!!x',
      ];

    //  Create the level by going through the array
      for (var i = 0; i < level.length; i++) {
          for (var j = 0; j < level[i].length; j++) {

              // Create a wall and add it to the 'grounds' group
              if (level[i][j] == 'x') {
                  var ground = this.game.add.tileSprite(50*j, 50*i, 50, 50, 'wall');
                  this.grounds.add(ground);
                  ground.body.immovable = true; 
              }

              // Create a enemy and add it to the 'wall' group
              else if (level[i][j] == 'w') {
                  var wall = this.game.add.tileSprite(50*j, 50*i, 50, 50, 'wall');
                  this.walls.add(wall);
                  wall.body.immovable = true; 
              }

              // Create a coin and add it to the 'coins' group
              else if (level[i][j] == 'o') {
                  var coin = this.game.add.sprite(50*j, 50*i, 'coin');
                  this.coins.add(coin);
              }

              // Create a enemy and add it to the 'enemies' group
              else if (level[i][j] == '!') {
                  var enemy = this.game.add.sprite(50*j, 50*i, 'enemy');
                  this.enemies.add(enemy);
              }

            //   // Create a enemy and add it to the 'wall' group
            //   else if (level[i][j] == 'w') {
            //       var wall = this.game.add.sprite(50*j, 50*i, 'wall');
            //       this.walls.add(wall);
            //   }
          }
      }
    }

    update() {

      let hitPlatform = this.game.physics.arcade.collide(this.player, this.grounds);
      

      // Move the player when an arrow key is pressed
      if (this.cursor.left.isDown) 
          this.player.body.velocity.x = -200;
      else if (this.cursor.right.isDown) 
          this.player.body.velocity.x = 200;
      else 
          this.player.body.velocity.x = 0;

      // Make the player jump if he is touching the ground
      if (this.cursor.up.isDown && this.player.body.touching.down && hitPlatform) 
          this.player.body.velocity.y = -350;

      if (this.cursor.up.isDown && this.wallJump) {
         this.player.body.velocity.y = -350;
         this.wallJump = false;
      }

      // Make the player and the grounds collide
      this.game.physics.arcade.collide(this.player, this.grounds);
      this.game.physics.arcade.collide(this.player, this.walls, this.wallCollide, null, this);

      // Call the 'takeCoin' function when the player takes a coin
      this.game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);

      // Call the 'wallCollide' function when the player touches the enemy
      // this.game.physics.arcade.overlap(this.player, this.walls, this.wallCollide, null, this);

      // Call the 'restart' function when the player touches the enemy
      this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
      

    }

    // Function to kill a coin
    takeCoin(player, coin) {
        coin.kill();
    }

    // function when colliding with wall
    wallCollide(player: Phaser.Sprite, wall) {
      console.log("test");
      player.body.velocity.y *= 0.75;

      let hitPlatform = this.game.physics.arcade.collide(this.player, this.grounds);
      this.wallJump = true;
           
    }

    // Function to restart the game
    restart() {
        this.game.state.start('platformer');
    }
}
