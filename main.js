const FIELD_SIZE = 100;
const TIME_INTERVAL = 50;

const model = new Model(FIELD_SIZE);
const view = new View(model);
controller(model, view, TIME_INTERVAL);

// початкова конфігурація
for (let i = 0; i < FIELD_SIZE; i++)
   model.toggle(i, i);
model.toggle(0, FIELD_SIZE-1);
view.draw();
