

let i = 0;
const speed = 200;
const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

const spinner2 = () => {
  if (i < spin.length) {
    process.stdout.write(spin[i]);
    i++;
    setTimeout(spinner2, speed);
  } else {
    process.stdout.write('\n');
  }
};

spinner2();