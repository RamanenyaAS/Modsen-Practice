function showVariableScope(){
  {
    var varX = "var";
    let letX = "let";
    const constX = "const";
    console.log(`Variables inside block: ${varX}, ${letX}, ${constX}`);
  }
  console.log(`Variables outside block: ${varX}`);
}
showVariableScope();