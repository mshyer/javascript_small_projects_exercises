function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
      break;
    case '113':
      console.log('Product2');
      break;
    case '142':
      console.log('Product3');
      break;
    default:
      console.log('Product not found!');
  }
}
//barCodeScanner('113');
//
//function barCodeScanner2(serial) {
//   if (serial === "123") {
//       console.log("product 1");
//   } else if (serial === "113") {
//       console.log("product 2");
//   } else if (serial === "142") {
//       console.log("product 3");
//   } else {
//       console.log("Product not found");
//   }
//}
//
//barCodeScanner2('113');
//barCodeScanner2('443');
//barCodeScanner2('jaja');
//
//if (!!foo) {
//    return 'bar';
//} else {
//    return qux();
//}


