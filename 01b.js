const input = Deno
      .readTextFileSync('./01.txt')
      .split('\n')
      .map(row => Number(row));

const increases = input.reduce(
  (count, num, i) => count + (num < input[i+3]),
  0
);

console.log(increases);
