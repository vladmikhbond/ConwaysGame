class Model {

   constructor(size) {
      this.fied = new Array(size);
      for (let i in this.fied)
         this.fied[i] = new Array(size).fill(0);
   }

   nextGen() {
      

   }

   toggle(row, col) {
      this.fied[row][col] = (this.fied[row][col] + 1) % 2;
   }




}

m = new Model