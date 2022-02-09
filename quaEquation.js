const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask (question) {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

async function getInfo () {
  const a = await ask('Enter the first number: ');
  const b = await ask('Enter the second number: ');
  const c = await ask('Enter the third number: ');

  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`Equestion is: ${a}x^2 + ${b}x + ${c}\n There are 2 roots: ${root1} and ${root2}`);
  }

  else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`Equestion is: ${a}x^2 + ${b}x + ${c}\n There is 1 root: ${root1}`);
  }

  else console.log(`Equestion is: ${a}x^2 + ${b}x + ${c}\n There are 0 roots`);
}

async function printInfo () {
  const info = await getInfo();
  rl.close();
}

printInfo();
