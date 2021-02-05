class Game {

          constructor() {

          }

getState() {

    var gameStateRef=database.ref("gameState");
    gameStateRef.on ("value",function(data){

        gameState= data.val();
    })
}

updateState(state){

    database.ref("/").update({

          gameState:state
    })
}
async start(){

   if(gameState===0){

          player=new Player();
          var pc=await database.ref("playerCount").once("value");
        if(pc.exists()){
            playerCount = pc.val();
            player.getPlayerCount();

        }
        
        form=new Form();
        form.display();
        car1 = createSprite (100,200);
        car1.addImage (car1Img);
        car2 = createSprite (300,200);
        car2.addImage (car2Img);
        car3 = createSprite (500,200);
        car3.addImage (car3Img);
        car4 = createSprite (700,200);
        car4. addImage (car4Img);


        cars = [car1,car2,car3,car4];

 }
}

play(){

   form.hide();
   Player.getPlayerDetails();
   player.getCarsAtEnd();

   if(allPlayers){
       background ("#444444");
       image (trackImg,0,-height*4,width,height*5);
             var y;
             var x=340;
             var i=0;

             for(var plr in allPlayers){
                 cars[i].x=x;
                 y=height-allPlayers[plr].distance;
                 cars[i].y=y;
                  if(plr==="player"+player.index) {
                     camera.position.x=width/2;
                     camera.position.y=cars[i].y;
                    fill("red");
                    ellipse (x,y,60,60);
                  }
                       
                      i=i+1;
                      x=x+190;
             }
             

             if(keyDown(UP_ARROW)&&player.index !=null){
                player.distance=player.distance+20;
                player.update();
                console.log (player.distance);
      
         } 
         if(player.distance>2700){
             player.rank=player.rank+1;
             player.updateCarsAtEnd(player.rank);
             console.log(player.rank);
             y=height-player.distance;
             textSize(30);
             text("Your Rank: "+player.rank,width/2-100,y-50);
             gameState=2;
         } 
         drawSprites();    
   }

  
}

end(){
    console.log("Game Ended");
}
}
