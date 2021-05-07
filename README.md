# Resume Builder
A simple customizable resume builder with modular sections and translations made using Node.js and Bootstrap.

![Screenshot](https://github.com/nickolasrm/resume/blob/main/screenshot.PNG)
An example of resume

### Resume sections
- Personal information
- Excerpt
- Skills
- Jobs
- Education
- Organizations
- Languages
- Other

### Customization
* Colors and fonts: As this project uses bootstrap, customizing its colors is easy. Just edit the variables located at `public/css/styles.css`
* Sections
    * Adding: To add a new section, create a new file duplicating `template.ejs` located at `views/resume`, and then add an include for it into `views/pages/resume.ejs` main tag.
    * Removing: To remove a section, delete the respective include from `views/pages/resume` main tag, and delete the corresponding file from `views/resume` folder.
    * Changing display order: To change the sections display order, just change the order of the includes at `views/pages/resume.ejs` main tag.

Check out the ejs files in the `views/resume` folder to see how it works! (Check out the functions file too).

* Adding text into a section or adding translations
    * After creating a section, you must add a JSON section into one of the files located at the `languages` folder for retrieving its data in an ejs template.
    * By adding a new JSON at the `languages` folder a new language will be displayed at `localhost:3000`. After choosing or making resume sections, you can duplicate the first filled JSON file and replace it with different strings for the target language.

Check out the JSON files into the `languages` folder to see how it works!

### How to use it
- Make sure you have node and npm installed. If don't, download it here: https://nodejs.org/en/
- Clone this repository somewhere in your computer
- Open a terminal session at the resume-builder main folder
- Run `npm install` to install the required dependencies
- Run `npm start` to start resume-builder
- Open a browser tab and enter the following URL: `localhost:3000`

<hr>
<b>Note 1: Everytime you add a new JSON (language), you have to restart the application in order to refresh express' routes</b>

<b>Note 2: You are free to fork this repository and build your resume as you want</b>

<b>Note 3: If this helped you in some way, don't forget to give it a star ;)</b>
