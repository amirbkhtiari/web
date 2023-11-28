/*
"کد اول"
et http = require ('http');
let server = http.createServer(requestHandler);
let port = 80;
server.listen(port);

let headers = {'Content-Type': 'Text/Plain'}
let obj = {
x: function(){
    console.log('3Xxxxxxxxxxxxxxxx')
},
y: function(){
    console.log('3yyyyyyyyyyyyyyyy')
},
"favicon.ico": function(){
    console.log('favicon')
}

}
function requestHandler(request, response){
    console.log("server is running on port:" + port)
    //console.log('request url: ', request.url);
    //console.log('request method: ', request.method); 

    let firstPart = request.url.split('/')[1];

obj [firstPart]();

    response.writeHead(200, headers);
    response.write('salam ' + request.url);
    response.end();
}
*/
/*
"کد دوم"
let http = require('http');
let port = 8037;
let server = http.createServer(requestHandler7);
server.listen(port);
console.log("Server is running on port:" + port);


function requestHandler1(request, response) {
  console.log("test");
}

function requestHandler2(request, response) {
  console.log("test");
  response.writeHead(200, { 'Content-Type': 'Text/Plain' });
  response.write('salam');
  response.end();
}

let headers = { 'Content-Type': 'Text/Plain' };

function requestHandler3(request, response) {
  console.log("test");
  response.writeHead(200, headers);
  response.write('salam');
  response.end();
}

let http = require("http");
let server = http.createServer(requestHandler);
server.listen(80);

let headers = {"Content-Type" : "Text/Plain"};



function requestHandler(request,response)
{
    let currentRoute = request.url.split('/');
    let routes = 
    {
        sayHello : function ()
        {
            response.write("salam"+ " " + request.url + " "+  request.method + '\n');
            response.end();
        },
        "saySomeThing":function()
        {
            response.write("<h1>"+ currentRoute[2]+ "</h1>" + '\n');
            response.end();
        },
        "favicon.ico" : function()
        {
            response.write("fav" + '\n');
            response.end();
        }
    }

    
    routes[currentRoute[1]]();
}
*/
//کد نهایی
function requestHandler4(request, response) {
  let firstPart = request.url.split('/')[1];

  if (firstPart === 'x') {
    console.log('this is x');
    response.writeHead(200, headers);
    response.write('salam xxxxx 1');
    response.end();
  }
  if (firstPart === 'y') {
    console.log('this is y');
    response.writeHead(200, headers);
    response.write('salam yyyyy 1');
    response.end();
  }
}

function requestHandler5(request, response) {
  let firstPart = request.url.split('/')[1];

  function funcx() {
    console.log('this is x');
    response.writeHead(200, headers);
    response.write('salam xxxxx 2');
    response.end();
  }

  function funcy() {
    console.log('this is y');
    response.writeHead(200, headers);
    response.write('salam yyyyy 2');
    response.end();
  }

  if (firstPart === 'x') {
    funcx()
  }
  if (firstPart === 'y') {
    funcy()
  }
}

function requestHandler6(request, response) {
  let firstPart = request.url.split('/')[1];

  function funcx() {
    console.log('this is x');
    response.writeHead(200, headers);
    response.write('salam xxxxx 3');
    response.end();
  }

  function funcy() {
    console.log('this is y');
    response.writeHead(200, headers);
    response.write('salam yyyyy 3');
    response.end();
  }

  let obj = {
    x: funcx,
    y: funcy
  }

  if (firstPart !== 'favicon.ico') {
    obj[firstPart]();
  }

}

function funcx(response) {
  console.log('this is x');
  response.writeHead(200, headers);
  response.write('salam xxxxx 4');
  response.end();
}

function funcy(response) {
  console.log('this is y');
  response.writeHead(200, headers);
  response.write('salam yyyyy 4');
  response.end();
}

let obj = {
  x: funcx,
  y: funcy
}

function requestHandler7(request, response) {
  let firstPart = request.url.split('/')[1];
  if (firstPart !== 'favicon.ico') {
    obj[firstPart](response);
  }
}
