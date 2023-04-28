var express = require('express')
var url = require('url')
var web = express()

web.listen(5500,function(){console.log('Server Started')})
web.get('/',function(request,response){
    response.send('Web Site Reached!')
})
web.get('/madhav',function(request,response){
    response.send('Subdomain "/madhav" Reached!')
})

