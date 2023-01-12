
<p align=center>
<img src="https://i.postimg.cc/2jFw4J8N/logo-innovar.png">
</p>

## How to clone the repository?
First, in order to use the project correctly it is necessary to use the following command to correctly access the project folders.

$git clone https://github.com/ThePalmars1one/Innovar-Bienes-Raices.git

## How to deploy the project locally?
In order to view the project via localhost, the following command is required to install all the necessary dependencies:

npm install

## What´s about this project?
Innovar Bienes Raíces is a real estate company, located in Cuenca, Ecuador, that mainly wanted to facilitate its customer acquisition process.
## Folders Estructure
### Home
This folder contains all the components present in the first view to which the user has access.

<p align=center>
<img src="https://i.postimg.cc/pLTJMJb9/home.png">
</p>

### Public
Public only contains the shopping cart, as it is accessed through different sections of the page.

<p align=center>
<img src="https://i.postimg.cc/qBym1w44/public.png">
</p>

### Renting, Sales
In this folder you get a component to display filters and products, and on the other hand a component to call the shopping cart and products in an organized way.

<p align=center>
<img src="https://i.postimg.cc/GpB0tDYt/renting.png">
</p>

<p align=center>
<img src="https://i.postimg.cc/Hkg4V1yy/selling.png">
</p>

## Services
There is only one service, which is used for all the functionalities of the shopping cart and the sending of information by Whatsapp. This is an example of a function to add products to the cart:

<p align=center>
<img src="https://i.postimg.cc/VLGmNmT7/code.png">
</p>

## Interface
In OOP, the properties and methods that an object exposes to the outside world are called public interfaces. In this case, these are the properties defined for the products:

<p align=center>
<img src="https://i.postimg.cc/QNcqsMB3/2.png">
</p>

And with this array, all the respective information for each product is defined, which are added manually but are automatically rendered in the project.

<p align=center>
<img src="https://i.postimg.cc/jdRcqJJb/4.png">
</p>

## HTML Structure of the Product View

<p align=center>
<img src="https://i.postimg.cc/02D5cLHZ/4.png">
</p>

With this structure and the array, all the product cards are created, without the need to create each one manually.

## Product Filters

<p align=center>
<img src="https://i.postimg.cc/QCPB11Ct/5.png">
</p>

Using buttons, the function receives as parameter the category, the Array has in its properties "type" and makes the comparison with conditionals.

## Whatsapp funcionality

<p align=center>
<img src="https://i.postimg.cc/gkQSk7z9/1.png">
</p>

send() is the function in charge of taking all the information of the products previously added to the cart. which is located in the corresponding component.
https://i.postimg.cc/76t1tCbv/2.png

<p align=center>
<img src="https://i.postimg.cc/76t1tCbv/2.png">
</p>

sendMessage() is in the service, and sends the info that send() took with the Whatsapp API.

## Shopping Cart

All these functions are accessed through the service for shopping cart functionalities.

<p align=center>
<img src="https://i.postimg.cc/JhqSnQYb/3.png">
</p>

1- itemsCount() is used for the sum of items in the cart.

2- deleteItem() is used to delete each item individually in the cart.

3- clearCart() is used to remove all items from the cart.