const categories = [
    'COCA_COLA', 'SABORES', 'JUGOS', 'NECTAR_SOYA', 
    'AGUAS', 'AGUAS_SABORIZADAS', 'ISOTONICOS', 
    'ENERGIZANTES', 'OTROS'
  ];
  
  function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateSQLForDate(date) {
    const sqlStatements = [];
    categories.forEach(category => {
      const preSaleSingleServe = randomValue(null);
      const budgetSingleServe = randomValue(10, 100);
      const preSaleMultiServe = randomValue(null);
      const budgetMultiServe = randomValue(100, 400);
      sqlStatements.push(`(2024, ${date.getMonth() + 1}, ${date.getDate()}, '${category}', ${preSaleSingleServe}, ${budgetSingleServe}, ${preSaleMultiServe}, ${budgetMultiServe})`);
    });
    return sqlStatements.join(",\n");
  }
  
  function generateSQLForRange(startDate, endDate) {
    let currentDate = new Date(startDate.getTime());
    let sqlStatements = [];
  
    while (currentDate <= endDate) {
      sqlStatements.push(generateSQLForDate(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return "INSERT INTO VendorPreSales (year, month, day, category, preSaleSingleServe, budgetSingleServe, preSaleMultiServe, budgetMultiServe) VALUES \n" + sqlStatements.join(",\n") + ";";
  }
  
  const startDate = new Date(2024, 3, 1); // April 20, 2024 (note: January is 0)
  const endDate = new Date(2024, 5, 31); // May 20, 2024
  const sql = generateSQLForRange(startDate, endDate);
  
  console.log(sql);