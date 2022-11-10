class View {
   constructor(model, canvas) {
      this.model = model;
      this.canvas = canvas;
   }

   draw() {  
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      let d = this.canvas.width / this.model.size;
      for (let r = 0; r < this.fied.length; r++) {
         for (let c = 0; c < this.fied.length; c++) {
            ctx.fillRect(r * d, c * d, d, d);
         }
      }

   }
}