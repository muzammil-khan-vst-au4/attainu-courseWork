var uniquePaths = function(m, n) {
    let paths = Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            paths[j] = paths[j - 1] + paths[j];
        }
    }
    return paths[n - 1];
  };

  console.log(uniquePaths(7,2))