# FoodDelivery
FoodDelivery is open source ecommerce application for food delivering.
Application consists of following parts:
1. Store front - React based SPA with server side rendering
2. Dashboard - React
3. API Backend - Node.js, Express, MongoDb

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

## Demo

* To view storefront, [click here](https://shop.food-delivery.mishast.com)
* To view dashboard, [click here](https://admin.food-delivery.mishast.com)

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
### Install and run MongoDB
### Start backend
#### Go to backends/express
#### Install dependencies
```
yarn install
```
### Seed the database
```
yarn run seed
```
### Start backend
```
yarn run start
```
### Start storefront
#### Go to web/store/react
#### Install dependencies
```
yarn install
```
### Start backend
```
yarn run start
```
### Start dashboard
#### Go to web/admin/react
#### Install dependencies
```
yarn install
```
### Start backend
```
yarn run start
```
