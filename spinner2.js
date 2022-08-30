const arr = ["|", "/", "-", "\\","|", "/", "-", "\\", "|", "\n"];
let delay = 100;
arr.forEach(element => {
  setTimeout(() => {
    process.stdout.write(`\r${element}`);
  }, delay);
  delay += 200;
});







