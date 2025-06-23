function validateInteger(num){
  if (!Number.isInteger(num)){
    throw new Error("The number is not an integer");
  }
}