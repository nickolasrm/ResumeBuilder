const fs = require('fs'),
    path = require('path'),
    constants = require('./constants')

function getLanguageJSON(language)
{
    return JSON.parse(fs.readFileSync(path.join(constants.LANGUAGES_PATH, language + '.json')))
}

function getLanguages()
{
    let langs = []
    fs.readdirSync(constants.LANGUAGES_PATH).forEach(file => {
        langs.push(path.parse(file).name)
    })
    return langs
}

function addLanguagesRoute(app)
{
    app.get('/languages', (req,res) => {
        res.json(getLanguages())
    })
}

function addSummaryRoutes(app)
{
    getLanguages().forEach(language => {
        app.get('/' + language, (req, res) => {
            res.render('resume', getLanguageJSON(language))
        })
    })
}

function addIndexRoute(app)
{
    app.get('/', (req, res) => {
        res.render('index')
    })
}

function addRoutes(app)
{
    addIndexRoute(app)
    addLanguagesRoute(app)
    addSummaryRoutes(app)
}

module.exports.addRoutes = addRoutes