import uniqid from "uniqid";

export default class List {
  constructor() {
    this.items = [];
  }
  addItem(count, unit, ingredient) {
    const item = {
      id: uniqid(), //lib that generates a unique id
      count,
      unit,
      ingredient
    };
    this.items.push(item);
    return item;
  }
  deleteItem(id) {
    const index = this.items.findIndex(el => el.id === id);
    //[2,4,8] splice(1, 1) ->returns 4, original array is now [2,8]. the 2nd argument is how many spots it takes
    //[2,4,8] slice(1, 1) ->returns nth. it doesn't change the original array. 2nd argument is the ending point.
    this.items.splice(index, 1);
  }
  updateCount(id, newCount) {
    this.items.find(el => el.id === id).count = newCount;
  }
}
