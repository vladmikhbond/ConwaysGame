const N = 51;
const T = 50;

const model = new Model(N);
const view = new View(model); 
Cont(model, view, T);


for (let i = 0; i < N; i++)
   model.toggle(i, i);
model.toggle(0, N-1);
view.draw();
