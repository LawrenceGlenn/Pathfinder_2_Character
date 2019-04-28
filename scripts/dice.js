
const Die = (sides) => {
  const getSides = () => sides;
  const roll = (times=1) => {
    var total = 0;
    for (var i = 0; i < times; i++) {
    total += (Math.random() * sides) + 1;
    }
    return total;
  }
}

const d4 = Die(4);
const d6 = Die(6);
const d8 = Die(8);
const d10 = Die(10);
const d12 = Die(12);
const d20 = Die(20);
const d100 = Die(100);