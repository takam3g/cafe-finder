# cafe-finder
## Introduction
Many people work at Cafe recently.
This cafe-finder is to save information about cafe and look for a cafe which is good to work at.

## How to use 
When user open the app, it will go to Finder view.

### Form 
- To input information for new Cafe, click "Input Cafe" on top-right, fill the form and click "submit"
- If it was not successful, error message will be shown under the submit button.
- If successfully submitted, user will get a popup massage with options either to go to finder view or to add another cafe. 

    https://user-images.githubusercontent.com/84117994/143758163-7ca90f84-cddf-40ab-b749-7f07f567315e.mp4
### Finder 
- User will see all the list of cafes as default. 
- User can filter the cafes by Nomad Friendly, Outlet, Wifi, Noise.

    https://user-images.githubusercontent.com/84117994/143757899-307e809f-3858-4111-9865-703877abc43a.mov

## Installation 
- Clone or download this repository
- Install node_modules by "npm install"
- Create .env file, include PORT=(Preferred Port No) and MONGODB_URL=(Database URL)
- Run application by "npm run dev" and also "npm run watch" in another terminal

## Notes
- Images are currently not available to upload, and currently displaying default image only.
- As discussed in the class, leaving codes/files which are not used currently but for future developments (e.g. user related code/file, likes and coordinate in cafeSchema). 


## API (Currently available)
### Save New Cafe 
- Method: POST
- Endpoint: "api/v1/cafes"
- Fields: 
    - name(String, required)
    - address (String, required)
    - city (String, required) 
    - province (String, required, enum:'AB', 'BC', 'MB', 'NB', 'NF', 'NT', 'NU', 'ON', 'PE', 'PQ', 'SK', 'YT')
    - postalCode (String, required, 6letters)
    - nomadFriendly (Number, required, enum: 0(Not for Nomad),　1(Neutral), 2(Nomad Friendly))
    - outlet (Number, required, enum: 0(Not Available), 1(Available), 2(Many))
    - wifi (Number, required, enum: 0(Not Available) 1(Available), 2(Stable))
    - noise (Number, required, enum: 0(Noisy), 1(Moderate), 2(Quiet))
    - price (Number, required, enum: 1(-$1.99), 2($2.00-$2.99), 3($3.00-$3.99), 4($4.00-$4.99), 5($5.00-))
    - is24hs (Boolean)
    - open (String, required when is24hs is false )
    - close (String, required when is24hs is false ) 
    - holiday(Array of Object (day: String (Mon, Tue, Wed, Thu, Fri, Sat, Sun) status: Boolean))
- Request:
    
     <img src="https://user-images.githubusercontent.com/84117994/143733927-30a0aff8-f8ee-48a6-8c0d-754eaa01f284.png" width=200px>

- Success Response: 

     <img src="https://user-images.githubusercontent.com/84117994/143733993-b1b48852-b5e5-42d8-a20a-5e855aefcd10.png" width=200px>

- Error Response: 

     <img src="https://user-images.githubusercontent.com/84117994/143734015-e39530b4-aa82-4284-9195-b31cc9b1d803.png" width=200px>

     <img src="https://user-images.githubusercontent.com/84117994/143734053-008713f2-9ac0-4dd3-ba76-2be4b9afce16.png" width=200px>

### Get All Cafes
- Method: GET
- Endpoint: "api/v1/cafes"  
- Response: 

     <img src="https://user-images.githubusercontent.com/84117994/143733892-a811520a-09f3-40b8-8219-ce82c5714440.png" width=200px>

### Get All Cafes with filter
- Method: GET
- Endpoint: "api/v1/cafes?{filter}" for {filter}, please see the sample below
- Filter Sample: "outlet=1" will return cafes with outlet 1(Available) and 2(Many),
"outlet=2&noise=1" will return cafes with [outlet 2(Many) and noise 1(Moderate)] and [outlet 2(Many) and noise 2(Quiet)] 

   <img src="https://user-images.githubusercontent.com/84117994/143734496-44fff2e6-ba91-4cb3-a98f-04424377cdf0.png" width=200px>


## Tech Stack 
- Front-end: React, SCSS
- Back-end: Node.js, Express
- Database: MongoDB


## Future Developments
- Image upload
- Map 
- Authentication 
- Edit function
