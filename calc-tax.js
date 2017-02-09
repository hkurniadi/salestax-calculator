/*
// function calcsalestax(companysales, taxrate)
for each object/company from the companysalesdata array {
  take sales data
  sum the sales number //could use a function totalSales(sales key) {}
  return sumoOfSales

  match the correct province, //function applicableTax () {}
  if AB = 0.05
  if BC = 0.12
  if SK = 0.10
  return the correct tax

  sales tax = sumOfSales * correct tax

  }
  add sales tax property to company object
}

print all objects

*/

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//pass company sales in an array format
function totalSales(companysSales) {
  var sum = 0;
  for (var i = 0; i < companysSales.length; i++) {
    sum += companysSales[i];
  }
  return sum;
}

//pass company province as a value of company province key
function applicableTax(companysProvince) {
  return salesTaxRates[companysProvince];
}

function calculateSalesTax (companySalesData, salesTaxRates){
  var storedResult = {};
  for (var i = 0; i < companySalesData.length; i++) {
    var companysName = companySalesData[i]['name'];

    var companysSales = companySalesData[i]['sales'];
    var salesTotal = totalSales(companysSales);
    //console.log(salesTotal);

    var companysProvince = companySalesData[i]['province'];
    //console.log(companysProvince);
    var salesTaxTotal = salesTotal * applicableTax(companysProvince);

    if (storedResult.hasOwnProperty(companysName)) {
      storedResult[companysName]['totalSales'] += salesTotal;
      storedResult[companysName]['totalTaxes'] += salesTaxTotal;
    } else {
      storedResult[companysName] = {};
      storedResult[companysName]['totalSales'] = salesTotal;
      storedResult[companysName]['totalTaxes'] = salesTaxTotal;
    }


    // companySalesData[i]['totalSales'] = salesTotal;
    // companySalesData[i]['totalTaxes'] = salesTaxTotal;
  }

  return storedResult;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

