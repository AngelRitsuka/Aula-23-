class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }
  display() {
    //CONTROLE DO CANHÃO
    //sugestao minha :) para a direita limite bom: 0.35
   
    

    //limite para a esquerda no controle -1.45
   



    fill("#676e6a");
    //push e pop: abre caixa e fecha caixa para não ficar uma bagunça nma tela
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-10, -20, this.width, this.height);
    pop();
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    noFill();
  }
}
