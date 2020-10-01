const mainState = {

	counter: 0,

	preload: function() {
		game.load.image('logo', './assets/logo.png');
		game.stage.backgroundColor = '#ffffff';
	},

	create: function () {
		this.sprite = game.add.sprite(300, 150, 'logo');
		this.sprite.inputEnabled = true;
		this.sprite.events.onInputDown.add(this.spriteClickListener, this);

		this.text = game.add.text(210, 250, this.counter);
	},

	update: function () {
	},

	spriteClickListener: function () {
		this.counter++;
		this.text.text = "Clicks: " + this.counter;
		console.log(this.counter);
	}
};

const game = new Phaser.Game(1024, 768, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');
