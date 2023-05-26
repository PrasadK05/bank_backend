
# Apna bank server
It is a backend server of apna bank web application which is deployed on [Render.com]("https://dashboard.render.com/") 



## Tech Stack

**Server:** Node, Express, Mongoose, JWT, argone2

**Database:** MongoDB


## API Reference

#### Base URL

```http
   https://banksbackend.onrender.com
```

#### Signup api

```http
  POST /signup
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**.  |
| `email` | `string` | **Required**.  |
| `password` | `string` | **Required**. |
| `mobileNumber` | `string` | **Required**. |

Responses
```
status:200 (successful)
res={
    status:true,
    messege:"user created successfully"
    }

status:400 (unsuccessful) 
res={
    status:false,
    messege:"user already registered"
    }

res={
    status:false,
    messege:"something went wrong"
    }     
```

#### Login api

```http
  POST /login
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**.  |
| `password` | `string` | **Required**. |

Responses
```
status:200 (successful)
res={
    status:true,
    toekn:"andkfsafkp[@kfkfk255FFF",
    user:{
    _id:"5sd5fdfs5g5gdv",
    name:"XYZ",
    email:"example@gmail.com",
    role:"customer" || "banker"
    }
    }

status:400 (unsuccessful) 
res={
    status:false,
    messege:"Wrong Password"
    }
status:404 (unsuccessful) 
res={
    status:false,
    messege:"User not found"
    }     
```

#### Logout api

```http
  GET /logout
```

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |


Responses
```
status:200 (successful)
res={
    status:true,
    messege: "User logout successfully"
    }

status:400 (unsuccessful) 
res={
    status:false,
    messege: "something went wrong"
    }
```    

#### User account api

```http
  GET /user/account
```

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

Responses
```
status:200 (successful)
res={
    account:{...users account details in json format}
    }

status:400 (unsuccessful) 
res={
        messege: "Something went wrong"
    }

status:401 (unsuccessful) 
res={message: "Unauthorized"}
```    

#### User transactions api

```http
  GET /user/transactions
```

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

Responses
```
status:200 (successful)
res={
    transactions:{...users transaction details in json format}
    }

status:400 (unsuccessful) 
res={
        messege: "Something went wrong"
    }

status:401 (unsuccessful) 
res={message: "Unauthorized"}
```    

#### Money deposit api

```http
  POST /user/deposit
```
 body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `type` | `string` | **Required**.  |
| `ammount` | `string` | **Required**. |

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

Responses
```
status:200 (successful)
res={
   message:"Money deposited successfully"
    }

status:400 (unsuccessful) 
res={
        messege: "Something went wrong"
    }

status:401 (unsuccessful) 
res={message: "Unauthorized"}
```    

#### Money deposit api

```http
  POST /user/withdraw
```
 body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `type` | `string` | **Required**.  |
| `ammount` | `string` | **Required**. |

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

Responses
```
status:200 (successful)
res={
   message:"Monwey withdrawl successfully"
    }

status:400 (unsuccessful) 
res={
        messege: "Insufficient Funds"
    }
res={
        messege: "Something went wrong"
    }

status:401 (unsuccessful) 
res={message: "Unauthorized"}
```    
#### Banker api for get customer list

```http
  GET /banker/customers
```

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

Responses
```
status:200 (successful)
res={
    customers:{...customer list in json format}
    }

status:400 (unsuccessful) 
res={
        messege: "Something went wrong"
    }

status:401 (unsuccessful) 
res={message: "Unauthorized"}
```  

#### Banker api for get specific customers transactions

```http
  GET /banker/"/customerTransactions/:id
```
| params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**.  |

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**.  |

Responses
```
status:200 (successful)
res={
    transactions:{...customers transactions in json format}
    }

status:400 (unsuccessful) 
res={
        messege: "Something went wrong"
    }

status:401 (unsuccessful) 
res={message: "Unauthorized"}
```  
## Run Locally

Clone the project

```bash
  git clone https://github.com/PrasadK05/bank_backend
```

Install dependencies

```bash
  npm install
```

Start the server for developement

```bash
  npm run dev
```

Start the server for production

```bash
  npm run start
```

## Related

Checkout front end repo and live website

[Frontend_Repo](https://github.com/PrasadK05/bank_frontend)

[Deployed](https://tangerine-gecko-f85f18.netlify.app)

## Authors

- [Prasad Karde](https://github.com/PrasadK05)

