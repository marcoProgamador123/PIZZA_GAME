class Form{
   constructor(){
    this.button2 = createButton("Com amigos");
    this.button1 = createButton('Sozinho');
   } 
   display(){
      var title = createElement('h2')
      title.html("HORA DA PIZZA");
      title.position(displayWidth/2-70, 0);

      this.button1.position(displayWidth/2-70, 200)
      this.button2.position(displayWidth/2+90, 200)
  
   }
}
    