class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
  }

 
  display() {
    super.display();
    ball.body.position.x = mouseX;
    ball.body.position.Y = mouseY;
  }
}
