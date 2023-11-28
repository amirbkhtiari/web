let http = require('http');
let fs = require('fs');
let port = 8080;
let server = http.createServer(requestHandler4);
server.listen(port);
console.log("Server is running on port:" + port)

let headers = {
    text: { 'Content-Type': 'Text/Plain' },
    html: { 'Content-Type': 'Text/Html' }
};


function write(response, body, type, statusCode) {
    response.writeHead(statusCode, headers[type]);
    response.write(body);
    response.end();
}

function page2controllerB(response) {
    console.log('page2controllerB 1')
    fs.readFile('./page1.html', 'utf8', function (error, data) {
        write(response, data, 'html', 200);
    })
}

function toPageController(req,res){
    let first = req.url.split('/')[2]
    let extention = first.url.split('.')[1]

    fs.readFile(first,(err,data)=>{
        err ? write(res,"file not found",'text',404) : write(res,data,extention,200); 
    })
}

function funcx(response) {
    write(response, 'salam xxxxx', 'text', 200);
}

function funcy(response) {
    write(response, 'salam yyyyy', 'text', 200);
}

function page1controllerA(response) {
    console.log('this is page1controllerA');
    write(response, 'Salam <b>Be Shoma!</b>', 'text', 200);
}

function page1controllerB(response) {
    write(response,'Hi <b style="color:red;background-color:gold;padding:20px">Foo</b>','html',200);
}

function page1controllerC(response) {
    console.log('this is page1controllerC');
    response.writeHead(200, headers.html);
    response.write(
        `<html>
        <head>
            <style>
                div{
                    width: 200px;
                    height: 100px;
                    background-color: lightgreen;
                    padding: 30px;
                }
            </style>
            <div>
                Page 1 inside js<br>
                Salam <b>Be Shoma!</b>
            </div>
        </head>
        </html>`
    );
    response.end();
    write(response, 'salam xxxxx', 'text', 200);
}

function page2controllerA(response) {
    console.log('page2controllerA 1')
    fs.readFile('./page2.html', 'utf8', function (error, data) {
        console.log('page2controllerA 2');
    })
    console.log('page2controllerA 3')

}

function page2controllerC(response) {
    console.log('page2controllerC 1')
    fs.readFile('./page2.html', function (error, data) {
        console.log('page2controllerC 2');
        response.writeHead(200, headers.html);
        response.write(data);
        response.end();
    })
    console.log('page2controllerC 3')
    write(response, 'salam xxxxx', 'text', 200);
}

function page2controllerD(response) {
    console.log('page2controllerD 1')
    fs.readFile('./page2.html', function (error, data) {
        console.log('page2controllerD 2');
        if (error) {
            response.writeHead(200, headers.text);
            response.write('FILE NOT FOUND.');
            response.end();
            write(response, 'salam xxxxx', 'text', 200);
        }
        else {
            response.writeHead(200, headers.html);
            response.write(data);
            response.end();
            write(response, 'salam xxxxx', 'text', 200);
        }
    })
    console.log('page2controllerD 3')
}

let routes = {
    x: funcx,
    y: funcy,
    page1: page1controllerC,
    page2: page2controllerB,
    page3: page1controllerB,
    file:toPageController
}

function requestHandler4(request, response) {
    console.log('url ', request.url);
    console.log('splitted ', request.url.split('/'));
    let firstPart = request.url.split('/')[1];
    console.log('fistPart ', firstPart);

    if (firstPart !== 'favicon.ico') {
        routes[firstPart](request,response);
    }
}


