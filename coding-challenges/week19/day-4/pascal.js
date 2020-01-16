function pascalTriangle (numRows) {
    var Tri = [];
    for (var i = 0; i < numRows; i++) { 
      Tri[i] = new Array(i+1);
      for (var j = 0; j < i+1; j++) {            
        if (j === 0 || j === i) {
          Tri[i][j] = 1;
        } else {
          Tri[i][j] = Tri[i-1][j-1] + Tri[i-1][j];
        }
      }
    }
    return Tri;
  }
  
  console.log(pascalTriangle(10));