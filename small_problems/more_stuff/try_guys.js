try {
    let a = b;
} catch (ReferenceError) {
    a = 'haha';
    console.log(a);
} finally {
    console.log(`the variable a was initialized with value ${a}`);
}
