let input = Deno
    .readTextFileSync("./02.txt")
    .split('\n')
    .map(line => line.split(' '))
    .map(([inst, num]) => [inst, Number(num)]);

const result = input.reduce(
  ([x, depth, aim], [inst, num]) => {
    switch (inst) {
      case 'down':    return [x, depth, aim + num];
      case 'up':      return [x, depth, aim - num];
      case 'forward': return [x + num, depth + (aim*num), aim];
      default:        return [x, depth];
    }
  },
  [0, 0, 0]
);

console.log(`${result[0]} * ${result[1]} = ${result[0] * result[1]}`);
