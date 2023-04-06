# Fashion Frenzy

Fashion Frenzy is ECommerce Website & is a clone of Anthropologie. With a vast collection of products of fashion and clothing, we offer a seamless shopping experience. Our user-friendly interface and secure payment options ensure a hassle-free shopping experience for our customers. Shop with us today and discover the convenience of online shopping!

## Deployed Link

Visit: https://frontend-suhail3535.vercel.app/

## Clone of Anthropologie

Anthropologie is a unique, full-lifestyle shopping destination, with a mostly exclusive assortment of clothing, shoes, accessories, beauty, furniture, home décor, garden, bridal, and more.

## Functionalities

1. Admin Page
2. Cart Functionality (like adding an item and removing)
3. Login and Sign Up
4. Product Page (with Sorting)

## Our Mission

# Home Page

<table>
  <tr>
    <td valign="top"><img width="663" alt="image" src="https://user-images.githubusercontent.com/97578587/229366144-2011e707-867e-4874-afb8-55e8ef3ab6c0.png"></td> 
    <td valign="top"><img width="283" alt="image" src="https://user-images.githubusercontent.com/97578587/229366560-8c81396f-4db5-40a8-a995-dbc85d6351ac.png">
</td>
  </tr>
</table>

# Admin Page (Add,Edit and Delete Product )

<img width="691" alt="image" src="https://user-images.githubusercontent.com/97578587/229366206-a9996662-b449-4247-9696-29fabd845eab.png">


# Product Page

<img width="682" alt="image" src="https://user-images.githubusercontent.com/97578587/229337853-6c716b40-59d2-4687-8345-39536aca94d7.png">

<p align="center" width="100%">
<table>
  <tr>
    <td valign="top"><img width="398" alt="image" src="https://user-images.githubusercontent.com/97578587/229337884-6efd2ed9-a618-4692-ba1a-ee98a3c24183.png"></td>
    <td valign="top"><img width="235" alt="image" src="https://user-images.githubusercontent.com/97578587/229337938-9245c3cd-6158-4228-a0fc-392e2190349f.png"></td>
  </tr>
</table>
</p>

# SingleProduct Page

<table>
  <tr>
    <td valign="top"><img width="688" alt="image" src="https://user-images.githubusercontent.com/97578587/229366232-7e71e3f3-9283-43fb-875e-d01c49e2f14c.png">
</td>
    <td valign="top"><img width="230" alt="image" src="https://user-images.githubusercontent.com/97578587/229366275-a2407853-5f94-4d09-ba36-6bfc4a22879f.png">
</td>
  </tr>
</table>
 
# Cart Page 
<table>
  <tr>
    <td valign="top"><img width="707" alt="image" src="https://user-images.githubusercontent.com/97578587/229366313-bc700826-4fcf-4323-900a-37cef1cb4f0a.png">
</td>
    <td valign="top"><img width="237" alt="image" src="https://user-images.githubusercontent.com/97578587/229366384-baabdffe-9191-4608-9883-e24e819e84a7.png">
</td>
  </tr>
</table>

# SignIn Page

<table>
  <tr>
    <td valign="top"><img width="692" alt="image" src="https://user-images.githubusercontent.com/97578587/229366447-6c2330bf-508c-4416-b50d-1c2e8f3d3ba2.png">
</td>
    <td valign="top"><img width="243" alt="image" src="https://user-images.githubusercontent.com/97578587/229366468-91f3148b-09bb-46e6-b3e1-b55a863af56a.png">
</td>
  </tr>
</table>

# Tech Stack

# Front-End

- HTML
- CSS
- JavaScript
- React

# Back-End

- NodeJS
- Express
- MongoDB

# External CSS Library

-Chakra UI

#Front-End Deployment - netlify
#Back-End Deployment - Cyclic

## Note

This website is fully mobile friendly. You can use this website in mobile, tablet either desktop as well as. You feels very nice when you are using this website.

Things Used
We using different kinds of the technologies to make this website. These things are as follows:

- Javascript, React, Readux, Chakra UI, CSS, HTML etc.

## Contributers

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

- [x] Suhail Khan - [GitHub Profile](https://github.com/suhail3535)
- [x] Namrata Awasthi - [GitHub Profile](https://github.com/Namrata0407)
- [x] Tushit Saxena - [GitHub Profile](https://github.com/tushit99)
- [x] Shagun Sharma - [GitHub Profile](https://github.com/shagunsharma6677)

# Folder Structure and Packages

==>Before you start:

- We have already created all the folders which you will need during journey.

- WE have already setup all the things related to `redux`, `.env`, `Chakra UI` and `react-router-dom`
  You guys have to just start developments.

- Also given you sample `Navbar` and `Footer` components so that you get
  comfortable about folder components export.

- You will get all the routing files in `Mainroutes` folder.

- You can also use context-api if needed.

- All the end-points and base-url is in env files.

<!-- Cloning related and Getting started related stuffs -->

=> Clone the directory to start work `$git clone https://github.com/suhail3535/alive-run-138`

=> Ok guys here are the some basic instruction before you start , If you are here you are successfully pulled the code and you are ready to type you first command in terminal.

Step-1- Navigate to proeject directory using `$cd alive-run-138`

Step-2- install node_modules using `$cd npm install`

- It will install some common dependencies:- <br />
  - `$npm install react-router-dom redux react-redux redux-thunk axios`<br />
  - `$npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion`

=> Some helpful Tools during development :<br /> - Chakra-UI - https://chakra-ui.com/<br /> - Chakra-Templets - https://chakra-templates.dev/#<br /> - String Builder - https://codebeautify.org/string-builder<br /> - Chat-gpt - https://chat.openai.com/chat<br /> - Your-Team-members- https://chat.whatsapp.com/KR80RM0zbWi6agJVFL66Z9<br />

# DATABASE SCHEMAS

# /user

```
|GET
`/user`-------> |POST
                |-----> `/user/register`  //for registering user

                   {
                      email:"suhail@gmail.com",
                      password:"12345",
                      name: "suhail"
                    }
-------------------------------------------------------------------------------------------------------
                |POST
                |-----> `/user/login`

                   {

                        email:"suhail@gmail.com",
                        password:"12234",

                    }

-------------------------------------------------------------------------------------------------------

                |GET
                |---> `/admin`

                  headers:{
                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                    }

 -----------------------------------------------------------------------------------------------------

 # /product

```

|GET/POST
`/product`---> |GET/PATCH/DELETE
|-----------------> `/product/:id`

            |GET -----> /product?category=kurta

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`

            }

---

            |POST --> /product

                [{
                    name: "Pilcro The Romy Relaxed Buttondown",
                    img: "https://images.urbndata.com/is/image/Anthropologie/4110907290003_019_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
                    price: 7399.47,
                    Spise: 8057.2 ,
                    brand: "Pilcro" ,
                    rating: 4.2
                }]

                 headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`

                    }

```

```
