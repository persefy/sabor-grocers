# Sabor Grocers
## Summary
Full stack application for niche fictional chain grocery stores that handles basic inventory management and order handling for e-commerce site.

## Table of Contents
- Use Case
- Technologies
- Entity Relationship Diagram (ERD)
- Component Hierarchy Diagram
- Wireframes
- Site Layout
- Trello Board
- MVP/Stretch Goals

## Use Case
Growing retailer with multiple brick and mortar locations wants to enhance sales by providing customers with ability to order ahead to secure purchase commitment, create process improvements to offload inventory, and increase customer satisfaction.

## Technologies Used
- React
- _Semantic UI_
- JavaScript
- _TypeScript_
- HTML
- CSS
- Django (w/ PostgreSQL)

## Entity Relationship Diagram (ERD)
<kbd><img src="https://github.com/persefy/sabor-grocers/assets/17712788/0e56a995-75d1-43e3-9797-09d3ecc56f51" width="300" height="170"></kbd>
<kbd><img src="https://github.com/persefy/sabor-grocers/assets/17712788/78b435d6-5045-4899-aa8e-7ee0553d353f" width="300" height="170"></kbd>
<kbd><img src="https://github.com/persefy/sabor-grocers/assets/17712788/cc8e9eb8-bf1c-4306-acab-1dda1ec29541" width="300" height="170"></kbd>

## Component Hierarchy Diagram
<kbd><img src="https://github.com/persefy/sabor-grocers/assets/17712788/b2ad40be-8f79-4821-becd-711d81b6afc5" width="300" height="170"></kbd>
<kbd><img src="https://github.com/persefy/sabor-grocers/assets/17712788/5ee81bd3-f778-4431-9335-fd6c909b342e" width="300" height="170"></kbd>

## Wireframes


## Site Layout
[Coming soon]

## Trello Board
[Sabor Grocers Kanban Board](https://trello.com/b/gvykBecL/sabor-grocers)

## MVP/Stretch Goals

### MVP
_Features(admin account):_

- CRUD Admin account (back end)
- CRUD Stores, Products, Categories, Discounts (applicable to specific product sku or category) (front and back end)
- Modify inventory items

_Features(logged in user):_

- Visit site pages
- See items filtered by category or searched query
- CRUD user account, cart
- Set cart items to 'in-store pickup' or 'delivery'
- Place order 

_Features(guest/logged out user):_

- Visit site pages
- See items filtered by category or searched query
- Place order as guest
  
### Stretch Goals
_Features(admin account):_

- CRUD Admin account (front end)
- Read and/or cancel incoming orders (front end)
- CRUD Store Discounts (by product sku or by category)

_Features(user account):_

- Add capability to set cart items to 'deliver to store' for 'in-store pickup'
- Access order from account

_Features(guest):_

- Access order using order number
