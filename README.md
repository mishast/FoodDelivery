# FoodDelivery
<p>
  <img src="https://img.shields.io/badge/React-16.10.+-lightblue.svg">
  <img src="https://img.shields.io/badge/Redux-4.0.+-purple.svg">
  <img src="https://img.shields.io/badge/Nodejs-10.16.+-green.svg">
  <img src="https://img.shields.io/badge/Express-4.17.+-black.svg">
</p>
FoodDelivery is open source ecommerce application for food delivering.
Application consists of following parts:
1. Store front - React based SPA with server side rendering
2. Backoffice - React
3. API Backend - Node.js, Express, MongoDb

## Live demo

* To view storefront, [click here](https://shop.food-delivery.mishast.com)
* To view Backoffice, [click here](https://admin.food-delivery.mishast.com)

## Features

Storefront:
1. Server-side rendering
2. Responsive design
3. Add to cart
4. Delete from cart
5. Checkout
6. Session based on localStorage and tokens

Dashboard:

1. Login
2. Responsive design
3. Orders lists based on status
4. Change order status (**Work in progress**)
5. View order (**Work in progress**)
6. Products list
7. View product (**Work in progress**)
6. Add / edit product (**Work in progress**)

## Dependencies

1. [React](https://reactjs.org/docs/getting-started.html) - ui
2. [Redux](https://redux.js.org/api/api-reference) - state managment
3. [Redux-thunk](https://github.com/reduxjs/redux-thunk) - side effects
4. [Formidable](https://github.com/node-formidable/node-formidable) - file uploads
5. [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - implementation of json web tokens
6. [Ant.Design](https://github.com/ant-design/ant-design) - react ui library
7. [Formik](https://github.com/jaredpalmer/formik) - forms for react
8. [Yup](https://github.com/jquense/yup) - form validation
9. [Axios](https://github.com/axios/axios) - http client
10. [React Router v4](https://reacttraining.com/react-router/web/guides/quick-start) - router
11. [Express](https://expressjs.com/) - web framework

## Setup
### Prerequisites
* Install Node.js >= 10
* Install MongoDB
### Seed database
* Go to 'backends/express'
* Install 'dependencies'
```
yarn install
```
* Seed database
```
yarn run seed
```
### Start backend
* Go to 'backends/express'
* Install dependencies
```
yarn install
```
* Start backend
```
yarn run start
```
### Start storefront
* Go to 'web/store/react'
* Install dependencies
```
yarn install
```
* Start storefront
```
yarn run start
```
### Start Backoffice
* Go to 'web/admin/react'
* Install dependencies
```
yarn install
```
* Start Backoffice
```
yarn run start
```

## License

The MIT License (MIT)

Copyright (c) 2014-2019 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Coded with ❤️ by [MishaSt](https://mishast.com)
