window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx =  canvas.getContext("2d");

    /*---vars---*/
    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 1;
    foodY = 14;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;

    /*---chamo a funcao game a cada 100ms---*/
    setInterval(game,150);

    /*---controles de movimento---*/
    document.addEventListener("keydown",function(key){
        switch(key.keyCode){
            /*--- a = left ---*/
            case 65:
                velX = -1;
                vely = 0;
            break;
            /*--- d = direita ---*/
            case 68:
                velX = 1;
                velY = 0;
            break;
            /*--- w = cima ---*/
            case 87:
                velY = -1;
                velX = 0;
            break;
            /*---seta baixo---*/
            case 83:
                velY = 1;
                velX = 0;
            break;
        }
    })
}

function game(){
    /*---configurando a tela do jogo---*/
    ctx.fillStyle = "#452381";

    /*---distancia borda x, distancia borda y, largura, altura---*/
    ctx.fillRect(0,0, canvas.width, canvas.height)

    /***---deslocamento da snake---***/
    positionX += velX;
    positionY += velY;

    /*---  snake infinito ---*/
    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0;
    }
    if(positionY < 0){
        positionY = grid;
    }
    if(positionY > grid){
        positionY = 0;
    }

    /*---config da snake---*/
    ctx.fillStyle = "#fc7201"
    for(i=0;i<snake.length;i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1,grid-1);
        if(snake[i].x=== positionX && snake[i].y===positionY){
            tam = 1;
        }
    }

    /*---posicionando a snake---*/
    snake.push({x: positionX, y: positionY})

    /*--- apagar o corpinho dela---*/
    while(snake.length>tam){
        snake.shift();
    }

    /*--- criando a food ---*/
    ctx.fillStyle = "#ffffcc";
    ctx.fillRect(foodX*grid,foodY*grid, grid-1, grid-1);

    /*--- comendo a food ---*/
    if(positionX===foodX && positionY===foodY){
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }
}