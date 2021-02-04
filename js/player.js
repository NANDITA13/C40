class Player {

          constructor(){

                this.index=null;
                this.name=null;
                this.distance=0;
                this.rank=0;    
          }
          getPlayerCount (){

               var countRef = database.ref("playerCount");
               countRef.on ("value", function(data){
                    
                    playerCount=data.val();
               })     
          }

          updateCount(count){
             database.ref("/").update({
                playerCount:count 
             })  
           }

           update(){

              var playerIndex="players/player"+this.index;
              database.ref(playerIndex).set({

                    name:this.name,
                    distance:this.distance 
              })
           }

           static getPlayerDetails(){
              database.ref("players").on("value",(data)=> {

              allPlayers=data.val();

            })

           }

           getCarsAtEnd(){
              database.ref("carsAtEnd").on("value",(data)=> {

               this.rank=data.val();
              })
           }

           updateCarsAtEnd(rank){
              database.ref("/").update({
                 carsAtEnd:rank
              });


             
           }
}