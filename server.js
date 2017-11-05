var experss = require('express');
var app = experss();
var path = require('path');

app.use(experss.static(path.join(__dirname, 'public')));

app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 8080, function(){
    console.log('Server is started');
});