# Resume Builder
A simple customizable resume builder with modular sections and translation made using Node.js and Bootstrap.

A picture of it:

![Screenshot](https://github.com/nickolasrm/resume/blob/main/screenshot.PNG)


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
    * Adding: To add a new section, create a new file duplicating `template.ejs` located at `views/resume`, and then add a include for it into `views/pages/resume.ejs` main tag.
    * Removing: To remove a section, delete the respective include from the `views/pages/resume` main tag, and delete the corresponding file from `views/resume` folder.
    * Changing display order: To change the sections display order, just change the order of the includes at `views/pages/resume.ejs` main tag.

Check out the ejs files on the `views/resume` folder to see how it works! (Check the functions file too).

* Adding text to a section or translations
    * After adding a section, you must add a JSON section on one of the files located at `languages` folder for retrieving its data on a ejs template.
    * By adding a new JSON at the `languages` folder a new language will be displayed at `localhost:3000`. After choosing or making the resume sections, you can duplicate the first filled JSON file and replace it with different strings for the target language.

Check out the JSON files on the `languages` folder to see how it works!

<hr>
**Note: You are free to fork this repository and build your own resume**
