const path = require('path')

const projectPath = path.dirname(__dirname)

module.exports = {
    PROJECT_PATH: projectPath,
    LANGUAGES_PATH: path.join(projectPath, '/languages/'),
    PAGES_PATH: path.join(projectPath, '/views/pages/')
}