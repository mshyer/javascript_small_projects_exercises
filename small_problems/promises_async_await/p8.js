function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function test(input) {
  const a = await after1s(2);
  const b = await after1s(3);
  return input * a * b;
}

test(3).then((value) => console.log(value));

// The program will log 18 to the console after 2 seconds
