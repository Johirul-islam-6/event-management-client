# <span style="color: #53C3DD;">The Event Management System [ Client Site Link ](https://event-management-client.vercel.app/)</span>

#### <span style="color: #9f9f9f;"> _**Project Summary** : 1. A User Very Easyly Created Account with Email, Password. And After Login in Successfully Valide Email, Password Genarat JWT Token to set Cookies . 2. Only User Access Created Event, Delete event, Update even, user very easyly booking event . 3. Open Route is Details Event, etc_ </span>

#### <span style="color: #53C3DD;">**Development Dependencies :** </span><span style="color: #dfdfdf;"> _@reduxjs/toolkit, axios, bootstrap, cors, js-cookie, moment-timezone, react, react-calendar, react-datepicker, react-dom, react-icons, react-query, react-redux, react-router-dom, react-share, react-toastify_</span>

## <span style="color: #fa9644;"> The Folder Structure Of The Entry System : </span>

```javaScript
src
└── apps
    └── Components
        ├── module1
        └── ...
    └── Layout
        ├── module1
        └── ...
    └── Page
        ├── module1
        └── ...
    └── Page
        ├── module1
        └── ...
    └── Redux
        ├── module1
        └── ...
    └── route
        ├── module1
        └── ...
    └── sass
        ├── module1
        └── ...
└── more...

```

</br>

## <span style="color:#53C3DD;">01. **If Your Are User Or Not User Then Apply Get All Event Query Searching Field & Pagination**</span>

## <h3 style="color:#ffff;"> _Get Event Searching Event [ title, location, event creator, start date, end date, etc] Pagination=value, Limite=value, Sorte=value, sortOrder=value, etc_</h3>

```javaScript
// Booking Event information
Get API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/event/?searchTerm=${value}&page=${value}&limit=${value}&sort=${value}&sortOrder=${value}`

//  search input value  example :
{
value = title | location | start date | end data | author | etc  // get all data query to backEnd

}
//pagination value
{
    value = 1 | 2 | 3 | 4 | etc
}

```

<br/>

<!-- ### <span style="color: #fa9644;"> _Error Handeling : All API Request To Send Error Message This Error Massage Alert Desplay ! ._ </span> -->

## <span style="color: #53C3DD;">02. **Authenticaion & authorization**</span>

 <h3  style="color: #FF0000;">API Request to get server site Message success/Error show alert !</h3>

//create account valid email password

// login Current Email password
<br/>

## <span style="color:#53C3DD;">02. **Only Login User Creted Event Access to Update, Delete, Read **</span>

```javaScript
// Backend zod validation error Handeling

// create event
{
 "title": "event title",
 "description":"description somethin ....",
 "start_date": "01/01/2023",
  "end_date": "03/03/2023",
  "location": "saver,Dhaka,Bangladesh",
  "email": "rasel@gmil.com",
  "cetagory" : "education",
  "image" : "https://..."
}

// Update information send example :
{
 "title": "event title",
 "description":"description somethin ....",
 "start_date": "01/01/2023",
  "end_date": "03/03/2023",
  "location": "saver,Dhaka,Bangladesh",
  "email": "rasel@gmil.com",
  "cetagory" : "education",
  "image" : "https://..."
}

// Singel Event Delete
// params id is event id example :
id : '64e70b18f9c99f5d825f8575'


```

## <span style="color:#fa9644;">03. **A User Only Booking Access Events**</span>

```javaScript
// Booking Event information example :

 {
    "eventId" : "64e828e8ac600c93505c139e",
    "userEmail" : "rase@gmil.com",
    "bookingDate": "01/02/2023",
    "bookingTime" : "10:10 P.M"
}

```

#### <span style="color: #9f9f9f; text-align : center;"> **The project encompasses a streamlined user experience, beginning with effortless account creation through email and password. Upon successful login, email and password validation lead to the generation of a JWT token, enhancing security while facilitating a seamless user journey. Specifically tailored for authorized users, the platform grants exclusive access to event-related functions, enabling the creation, deletion, and modification of events. The event booking process is user-friendly, optimizing engagement. The project also establishes open routes for accessing event details. By delineating roles and responsibilities succinctly, this system affords users a comprehensive, secure, and accessible event management environment.**</span>

<h3 style="color: #1dd; text-align : center;">I can do better in the future</h3>
 <h4 style="color: #1dd01d; text-align : center;">Thank you for opcunety [ gain solutions ltd ] </h4>
