class View {
   constructor(model, canvas) {
      this.model = model;
      this.canvas = canvas;
   }

   draw() {  
      const ctx = this.canvas.getContext("2d");            
      const d = this.canvas.width / this.model.size;
      const field = this.model.field;

      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let r = 0; r < field.length; r++) {
         for (let c = 0; c < field.length; c++) {
            if (field[r][c])
               ctx.fillRect(c * d, r * d, d, d);
         }
      }

   }
}