const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function ask (question) {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
};

async function getChoise() {
  const choise = await ask('Interactive - 1 or Noninteractive - 0');
  const choiseNum = +choise;
  if(choiseNum === 1) {
    async function Interactive() {
      const info = await getInfoInt();
      rl.close();
    }
    Interactive();
  } if (choiseNum === 0){
    async function NonInteractive() {
      const info = await getInfoNonInt();
      rl.close();
    }
    NonInteractive();
  }
}

async function getInfoInt () {
  const a = await ask('Enter the first number: ');
  const b = await ask('Enter the second number: ');
  const c = await ask('Enter the third number: ');

  const aNum = +a;
  const bNum = +b;
  const cNum = +c;

  if ( a === '' || isNaN(aNum) || a == 0) {
      console.log(`Error. Expected a valid real number, got ${a} instead`);
      return await getInfo();
  }
  if ( b === '' || isNaN(bNum)) {
      console.log(`Error. Expected a valid real number, got ${b} instead`);
      return await getInfo();
  }
  if ( c === '' || isNaN(cNum)) {
      console.log(`Error. Expected a valid real number, got ${c} instead`);
      return await getInfo();
  }

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
};

async function getInfoNonInt () {
  const fileName = await ask("Enter file name: ");
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;

    if (fs.existsSync(fileName)) {
      const regexp = /-*\d+[.\d+]* -*\d+[.\d+]* -*\d+[.\d+]*/;
      const fileContent = fs.readFileSync(fileName, "utf-8");
      const arr = fileContent.split(" ");
      const numbers = arr.map(parseFloat);

      const a = numbers[0];
      const b = numbers[1];
      const c = numbers[2];

      if(typeof a !== 'number' || isNaN(a) || a == 0){
        console.log(`Error. Expected a valid real number, got ${a} instead`);
        process.exit(1);
      }
      if(typeof b != 'number'|| isNaN(b)){
        console.log(`Error. Expected a valid real number, got ${b} instead`);
        process.exit(1);
      }
      if(typeof c != 'number'|| isNaN(c)){
        console.log(`Error. Expected a valid real number, got ${c} instead`);
        process.exit(1);
      }

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

    } else console.log('this file is not exist');
  });
};

async function getAnswer() {
  const info1 = await getChoise();
}
getAnswer();
