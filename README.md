# nodemock
Basic node javascript mock
### installation
```sh
npm install
node index.js
```
### how to use
GET Example
```javascript
GET http://localhost:3000/account?id=567347
Response:
{
  "id": "567347",
  "account": "00707025",
  "firstName": "Jeanie Smith",
  "lastName": "Senger",
  "email": "Lazaro_Carter0@gmail.com",
  "companyName": "Predovic Inc"
}
```
POST Example:
```javascript
POST http://localhost:3000/account
Body: 
{
  "account":"75715372",
  "firstName":"Maci Fahey",
  "lastName":"Steuber",
  "email":"Ardella_Lindgren@gmail.com",
  "companyName":"Trantow"
}
Response:
{
  "id": 6638304
}
```

See [blog](https://wordpress.com/post/automationbug.wordpress.com/194) for more details.
