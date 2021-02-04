class Form {

              constructor(){

                    this.input=createInput("Name");
                    this.button=createButton("Play");
                    this.greeting=createElement("h2");
                    this.title=createElement("h2");
                    this.reset=createButton("Reset");
               }

          display(){

             this.title.html("Car Racing Game");
             this.title.position(width/2-80,0);
             this.input.position(width/2-80,height/2);
             this.button.position(width/2-60,height/2+40);
             this.button.mousePressed(()=>{
                       console.log(this);
                       this.input.hide();
                       this.button.hide();
                       console.log(this.input.value());
                       player.name=this.input.value();
                       playerCount=playerCount+1;
                       player.index=playerCount;
                       player.updateCount(playerCount);
                       player.update();
                       this.greeting.html("Hello! "+player.name);
                       this.greeting.position(width/2-80,height/3);
             })
             this.reset.position(width-80,10);
             this.reset.mousePressed(()=> {
               
               player.updateCount (0);
               game.updateState (0);
               player.updateCarsAtEnd (0);

               database.ref("/").update({
                  players:null
               });

             })
          }

          hide(){
             this.input.hide();
             this.greeting.hide();
             this.title.hide();
             this.button.hide();
          }


}