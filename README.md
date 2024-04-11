# Sabor Grocers
<img src="./readme-files/logo-large.png" width="500" height="200">

## Summary
Full stack application for niche fictional chain grocery stores that handles basic inventory management and order handling for e-commerce site.

## Table of Contents
- [Use Case](#usecase)
- [Technologies Used](#technologies-used)
- [Entity Relationship Diagram](#entity-relationship-diagram)
- [Component Hierarchy Diagram](#component-hierarchy-diagram)
- [Wireframes](#wireframes)
- [Site Layout](#site-layout)
- [Trello Board](#trello-board)
- [MVP/Stretch Goals](#mvpstretch-goals)

## Use Case
Growing retailer with multiple brick and mortar locations wants to enhance sales by providing customers with ability to order ahead to secure purchase commitment, create process improvements to offload inventory, and increase customer satisfaction.

## Technologies Used
#### Front End
- React
- Semantic UI
- JavaScript
- HTML
- CSS
#### Back end
- Python
- Django (w/ PostgreSQL)
- Hosted on Amazon RDS

## Entity Relationship Diagram

#### V2
<img src="./readme-files/SimplifiedERD_V2.png" width="500" height="270">


#### V1
<kbd><img src="https://github.com/persefy/sabor-grocers/assets/17712788/0e56a995-75d1-43e3-9797-09d3ecc56f51" width="300" height="170"></kbd>
<kbd><img src="https://github.com/persefy/sabor-grocers/assets/17712788/78b435d6-5045-4899-aa8e-7ee0553d353f" width="300" height="170"></kbd>
<kbd><img src="https://github.com/persefy/sabor-grocers/assets/17712788/cc8e9eb8-bf1c-4306-acab-1dda1ec29541" width="300" height="170"></kbd>

## Component Hierarchy Diagram
#### V2
[coming soon]

#### V1
<kbd><img src="https://github.com/persefy/sabor-grocers/assets/17712788/b2ad40be-8f79-4821-becd-711d81b6afc5" width="300" height="170"></kbd>
<kbd><img src="https://github.com/persefy/sabor-grocers/assets/17712788/5ee81bd3-f778-4431-9335-fd6c909b342e" width="300" height="170"></kbd>

## Wireframes
![image](https://github.com/persefy/sabor-grocers/assets/17712788/5e7f450d-d4b0-4bb9-a37d-7f4db18b1cce)
![image](https://github.com/persefy/sabor-grocers/assets/17712788/6a96bff6-253b-4ff1-9f23-5090cd3f641e)
![image](./readme-files/stores_mobile_m_wirefram.png)

## Site Layout
[Coming soon]

## Trello Board
[Sabor Grocers Kanban Board](https://trello.com/b/gvykBecL/sabor-grocers)

<kbd><img src="./readme-files/sampleTrelloBoard.png" width="500" height="500">

## MVP/Stretch Goals

### MVP

_Features(guest/logged out user):_

- Access site pages (home, category pages, stores, filtered product list, product details)
- CRUD cart (initiate/create, view/read, edit/update, clear/delete)
- Mobile-first design, with similar experience on ~mobile, ~table, and ~desktop screen widths
  
### Stretch Goals
_Features(admin account):_

- CRUD Admin account (back end)
- CRUD Stores, Products, Categories, Discounts (applicable to specific product sku or category) (front and back end)
- Modify inventory items
- CRUD Admin account (front end)
- Read and/or cancel incoming orders (front end)
- CRUD Store Discounts (by product sku or by category)
- CRUD 'promo banner' feature
- CRUD 'inspiration'/'meal ideas' feature

_Features(logged in user):_

- Visit site pages
- See items filtered by category or searched query
- CRUD user account, cart
- Set cart items to 'in-store pickup' or 'delivery'
- Place order 
- Add capability to set cart items to 'deliver to store' for 'in-store pickup'
- Access order from account

_Features(guest):_

- Place order as guest
- Access order using order number
- See items filtered searched query
