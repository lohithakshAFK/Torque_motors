car_price = {"bmwm3":76700,
    "bmwx5":90000,
    "bmwi8":80488,
    "bmwz4":71100,
    "laferrari":3286875,
    "sf90stradale":516295,
    "f40":1500000,
    "488pista":250000,
    "p911":180000,
    "p918":845000,
    "carrera":150000,
    "cayenne":150000,
    "amvalkyrie":4000000,
    "amvantage":200000,
    "amvanquish":400000,
    "amdb11":220000
};
list_cart = [];
price = 0;

function bmw_m3(){
    console.log("BMW M3 Added to cart");
    list_cart.push("BMW M3");
    console.log(list_cart);
    price = price + 76700;
    console.log(price);
    localStorage.setItem("Price",price);
};

function bmw_x5(){
    console.log("BMW X5 Added to cart");
    list_cart.push("BMW X5");
    console.log(list_cart);
    price = price + 90000;
    console.log(price);
    localStorage.setItem("Price",price);
};

function bmw_i8(){
    console.log("BMW i8 Added to cart");
    list_cart.push("BMW i8");
    console.log(list_cart);
    price = price + 80488;
    console.log(price);
    localStorage.setItem("Price",price);
};

function bmw_z4(){
    console.log("BMW Z4 Added to cart");
    list_cart.push("BMW Z4");
    console.log(list_cart);
    price = price + 76700;
    console.log(price);
    localStorage.setItem("Price",price);
};

function laferrari(){
    list_cart.push("Ferrari La Ferrari");
    console.log(list_cart);
    price = price + 3286875;
    console.log(price);
    localStorage.setItem("Price",price);
};

function sf90stradale(){
    list_cart.push("SF 90 Stradale");
    console.log(list_cart);
    price = price + 516295 ;
    console.log(price);
    localStorage.setItem("Price",price);
};

function f40(){
    list_cart.push("Ferrari F40");
    console.log(list_cart);
    price = price + 1500000;
    console.log(price);
    localStorage.setItem("Price",price);
};

function pista(){
    list_cart.push("Ferrari 488 Pista");
    console.log(list_cart);
    price = price + 250000;
    console.log(price);
    localStorage.setItem("Price",price);
};

function p911(){
    list_cart.push("Porche 911 GT3 RS");
    console.log(list_cart);
    price = price + 180000;
    console.log(price);
    localStorage.setItem("Price",price);
}
;
function p918(){
    list_cart.push("Porche 918 Spider");
    console.log(list_cart);
    price = price + 845000;
    console.log(price);
    localStorage.setItem("Price",price);
};

function carrera(){
    list_cart.push("Porche Carrera");
    console.log(list_cart);
    price = price + 150000;
    console.log(price);
    localStorage.setItem("Price",price);
};

function cayenne(){
    list_cart.push("Porche Cayenne");
    console.log(list_cart);
    price = price + 150000;
    console.log(price);
    localStorage.setItem("Price",price);
};

function valkyrie(){
    list_cart.push("Aston Martin Valkyrie");
    console.log(list_cart);
    price = price + 4000000;
    console.log(price);
    localStorage.setItem("Price",price);
};

function vantage(){
    list_cart.push("Aston Martin Vantage");
    console.log(list_cart);
    price = price + 200000 ;
    console.log(price);
    localStorage.setItem("Price",price);
};

function vanquish(){
    list_cart.push("Aston Martin Vanquish");
    console.log(list_cart);
    price = price + 400000;
    console.log(price);
    localStorage.setItem("Price",price);
};

function db11(){
    list_cart.push("Aston Martin DB11");
    console.log(list_cart);
    price = price + 220000;
    console.log(price);
    localStorage.setItem("Price",price);
};