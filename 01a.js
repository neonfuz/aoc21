const input = Deno
      .readTextFileSync('./01.txt')
      .split('\n')
      .map(row => Number(row));

const increases = input.reduce(
  ([count, last], num) => [count + (num > last), num],
  [0, Infinity]
)[0];

console.log(increases);
