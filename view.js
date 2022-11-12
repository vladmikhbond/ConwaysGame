class View {
   constructor(model) {
      this.model = model;
   }

   draw() {  
      const ctx = fieldCanvas.getContext("2d");            
      const cellSize = fieldCanvas.width / this.model.size;
      const field = this.model.field;

      ctx.clearRect(0, 0, fieldCanvas.width, fieldCanvas.height);
      for (let r = 0; r < field.length; r++) {
         for (let c = 0; c < field.length; c++) {
            if (field[r][c])
               ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
         }
      }
   }
}

