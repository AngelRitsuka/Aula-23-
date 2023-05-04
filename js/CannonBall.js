class CannonBall 
{

  constructor(x, y) 
  {
    var options = 
    {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };

    this.r = 40;

    //crie um corpo circular

    //carregue a imagem

    //adicionando no mundo
    World.add(world, this.body);
  }

  shoot() {
    
    //defina o ângulo da bala para o canhão

    //defina valor estático para o corpo

    //defina a velocidade da bala para fazê-la se mover


    /*notinha:
    Se for converter grau → radianos:  PI ÷ 180
    Se for converter radianos → grau:  180 ÷ PI
    Mas isso só se você colocar em graus no angulo que
    você adicionou no sketch, no nosso caso para facilitar
    coloquei em radiano e deixei o número Pi menor para 
    usarmos como controle e rodar o canhão e mexer a bala 
    fazendo uma especie de arco
    
    */
  }

  display() 
  {
    //push e pop: abre caixa e fecha caixa para não ficar uma bagunça nma tela
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    //mostrar a imagem
  
    pop();

    }
  }

