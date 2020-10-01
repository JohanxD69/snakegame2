var Boot = {

	preload: function () {
		game.load.image('progressBar', './assets/image/progressBar.png');
	
		
		
	},

	create: function() { 
		if(!game.device.desktop) {
        
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			
			document.body.style.backgroundColor = '#FF00F0';
		
	
			game.scale.minWidth = 250;
			game.scale.minHeight = 170;
			game.scale.maxWidth = 1200;
			game.scale.maxHeight = 900;
			
			
			game.stage.scale.pageAlignHorizontally = true;
			game.stage.scale.pageAlignVertically = true;
			
			game.scale.setScreenSize(true);		
			
			var stylesheet = document.styleSheets[0];
			
			stylesheet.disabled = true;
			
			game.state.start('Menu');
			
		}
		else {
			var stylesheet = document.styleSheets[1];
			
			stylesheet.disabled = true;
			
			game.state.start('Menu');
		
		}
	
	},
	
	startGame: function () {
		
		game.state.start('Menu');
	
	}
	
};