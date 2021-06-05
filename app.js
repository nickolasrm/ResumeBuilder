const express = require('express'),
    router = require('./src/router'),
    constants = require('./src/constants'),
    app = express()

app.set('view engine', 'ejs')
app.set('views', constants.PAGES_PATH)
app.use(express.static('public'))

router.addRoutes(app)

app.listen(3000,function() {
    console.log("Resume Builder started, go to http://localhost:3000 to see you resume");
});