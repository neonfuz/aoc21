let input = Deno
    .readTextFileSync("./02.txt")
    .split('\n')
    .map(line => line.split(' '))
    .map(([inst, num]) => [inst, Number(num)]);

const result = input.reduce(
  ([x, depth], [inst, num]) => {
    switch (inst) {
      case 'forward': return [x + num, depth];
      case 'down':    return [x, depth + num];
      case 'up':      return [x, depth - num];
      default:        return [x, depth];
    }
  },
  [0, 0]
);

console.log(`${result[0]} * ${result[1]} = ${result[0] * result[1]}`);
