function Armada(game,key,scale){
    Phaser.Sprite.call(this,game,game.rnd.integerInRange(0,game.width),game.rnd.integerInRange(0,game.height),key);
    
    //properties
    this.anchor.set(0.5);
    this.scale.x=scale;
    this.scale.y=scale;
    
    game.physics.enable(this);
    this.body.velocity.x=game.rnd.integerInRange(-10,-800);
    reverseKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
}
Armada.prototype = Object.create(Phaser.Sprite.prototype);
Armada.prototype.constructor = Armada;

Armada.prototype.update = function(){
    if(reverseKey.isDown){
        this.body.velocity.x=-(this.body.velocity.x);
    }
    if(this.x<-100){
        this.x=game.width+100;
    }
    else if(this.x>game.width+99){
        this.x=-99;
    }
}