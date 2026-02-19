function countSheeps(sheep) {
  let cont = 0;
  console.log(cont);
  
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] == true) {
      cont++;
      console.log(cont);
    }
  }
  return cont;
}