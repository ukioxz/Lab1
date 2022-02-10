const fs = require('fs');
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask (question) {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
};

async function getInfo() {
  const fileName = await ask("Enter file name: ");
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;

    if (fs.existsSync(fileName)) {
      const regexp = /-*\d+[.\d+]* -*\d+[.\d+]* -*\d+[.\d+]*/;
      const fileContent = fs.readFileSync(fileName, "utf-8");
      //const str = fileContent.match(regexp)[0];
    //  const arr = str.split(" ");
    const arr = fileContent.split(" ");
      const numbers = arr.map(parseFloat);

      const a = numbers[0];
      const b = numbers[1];
      const c = numbers[2];
      
      if(typeof a !== 'number' || isNaN(a)){
        console.log(`Error. Expected a valid real number, got ${a} instead`);
        rl.close();
      }
      if(typeof b != 'number'|| isNaN(b)){
        console.log(`Error. Expected a valid real number, got ${b} instead`);
        rl.close();
      }
      if(typeof c != 'number'|| isNaN(c)){
        console.log(`Error. Expected a valid real number, got ${c} instead`);
        rl.close();
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

 async function printInfo () {
  const info = await getInfo();
  rl.close();
};

printInfo();
