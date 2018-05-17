const fs = require('fs')
var faker = require('faker');
var Chance = require('chance');
var chance = new Chance();

module.exports = function(app) {
  //http://localhost:3000/account?id=1
  app.get('/account', function(req, res) {
    console.log(req.query)
    if(req.query.id == '9999404') {
      res.status(404).send('Mock 404 Not found Error');
    }
    else {
      response = {
        "id": req.query.id,
        "account": faker.finance.account(),
        "firstName": faker.name.findName(),
        "lastName": faker.name.lastName(),
        "email": faker.internet.email(),
        "companyName": faker.company.companyName()
      }
      res.json(response)
    }
  })

// {
//   "account":"75715372",
//   "firstName":"Maci Fahey",
//   "lastName":"Steuber",
//   "email":"Ardella_Lindgren@gmail.com",
//   "companyName":"Trantow"
// }
  app.post('/account', function(req, res) {
    res.json({"id": chance.integer({min: 100000, max: 9999999})})
  })

}
