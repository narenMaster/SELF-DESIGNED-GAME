class User{

    constructor(){
        this.name = null
        
    }

    update(){
        
         
        database.ref("user").set({
        name : this.name,
      });
    }          
}