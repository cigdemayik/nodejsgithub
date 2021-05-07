var categories = require('./../tempdata/tempCategories.js')
var express=require('express')
const { forEach } = require('./../tempdata/tempCategories.js')
var app=express()

var metot =[ app.get('/api/category', function(request, response){
    response.write(JSON.stringify(categories))
    response.end();
}).listen(3002),

app.get('/category', function(request, response){
    let template = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous"><title>Document</title></head><body><table class="table table-striped"><thead><tr><th scope="col">Id</th><th scope="col">Name</th></tr></thead>';
    
    categories.forEach(cat => {
        
    template=template+'<tr><th scope="row">'+cat.id+'</th><td>'+cat.name+'</td></tr>'
    });
    template=template+'</tbody></table>    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script></body></html>'

    response.writeHead(200, {'Content-Type':'text/html'})

    response.write(template);
    response.end();
})
]
module.exports=metot;
