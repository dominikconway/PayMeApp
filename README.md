# PayMe App 
***
This App May be used for sending payments to family and friends. Simply type in your name, the receivers name, the amount and a quick note. Your payment will be on its way and display in your Transaction Log

[Click Here](https://aqueous-beach-56581.herokuapp.com) to see the deployed app!

## Technologies Used 
***
- HTML5
- CSS3
- Javascript
- MongoDb
- Azure
- Heroku
- Google Fonts

## Routes Table
***
| Route Name|   URL            | HTTP | Description|
| ----------|----------------- |------|------------|
| Index     |/payments         |  GET | Displays all payments|
| New       |/payments/new     |  GET | creates a new payment|
| Create    |/payments/create  |  POST| post a new payment to the index page|
| Show      |/payments/:id     |  GET | views payment details|
| Edit      |/payments/:id/edit|  GET | edits the selected payment|
| Update    |/payments/:id     |  PUT | updates the edited payment|
| Destroy   |/payments/:id     |  DELETE| deletes the selected payment|

## Model Schema Table
***
    |          |                |                 | 
    |----------|----------------|-----------------|
    | sender   | type: String   | required: true  | 
    | receiver | type: String   | required: true  |
    | amount:  | type: Number   |required: true   |
    | note:    | type: String   |required: true   |

##  Original WireFrame
***
![original wireframe design](https://i.imgur.com/Yj4eGXb.png)


# Screenshots
***

### On App load
***
![Opening of the app](https://i.imgur.com/UdPpAOD.png)

### After Submitting a payment
***
![Submitting a payment](https://i.imgur.com/9KLhnvQ.png)

### Payment Details view
***
![Payment Details](https://i.imgur.com/kO9uzav.png)

### With New Payment Added

![After submitting a payment](https://i.imgur.com/gc93i85.png)


### After Editing a payment
***
![Edit a payment](https://i.imgur.com/LfVXvpp.png)

### created by Alex Conway

