class Box {
    constructor(x , y , width, height){
        var ball_options ={
            restitution: 0.5,
            friction : 0.8
        }
    
        this.body = Bodies.rectangle(x , y , width, height, ball_options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill('blue');
        rect(pos.x, pos.y,  this.width, this.height);

    }
}