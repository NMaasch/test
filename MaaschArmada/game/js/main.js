var game;
var armada;

window.onload = function(){
    game = new Phaser.Game(800,600,Phaser.AUTO);
    game.state.add('Load',Load);
    game.state.add('Play',Play);
    game.state.start('Load');
}

var Load = function(game){};
Load.prototype = {
    preload: function(){
        console.log("Load function: process-preload");
        game.load.image('ship',"assets/img/shmupships_116.png");
        game.load.image('bg',"assets/img/space.png");
    },
    create: function(){
        console.log('Load function: process-create');
        game.state.start('Play');
    }
};

var Play = function(game){};
Play.prototype = {
    preload:function(){
        console.log('Play function: process-preload');
    },
    create:function(){
        console.log('Play function: process-create');
        game.add.sprite(0,0,'bg');
        console.log('spawn');    
        for(i=0;i<50;i++){
            armada = new Armada(game,'ship',game.rnd.between(0.5,3));
            game.add.existing(armada);
        }
        console.log('finish spawn');
    },
    udpate:function(){
        
    }
};