# Ares_Files
> Customization files for Atlas Systems' Ares

These are customized CSS and JavaScript files to modify the user-facing side of [Ares Course Reserve Software from Atlas Systems](https://www.atlas-sys.com/ares/) for the GVSU University Libraries. You can see the live site with these customizations in place at [https://www.gvsu.edu/library/ereserve](https://www.gvsu.edu/library/ereserve). (A GVSU login is required for much of the site.)

## Getting started

These files are customized to match the branding guidelines and needs of Grand Valley State University Libraries. You'll need to make customizations to match your institution's branding, and choose which JavaScript functions are useful for your users.

### Deploying / Publishing

You'll need a server to host these customzied CSS and JavaScript files. Once you've uploaded them, you need to add them to your Ares template. 

#### Adding CSS Files

Add the CSS file in the `<head>` section if possble. Replace the URL below with the actual URL to your CSS file:

```
<link rel="stylesheet" type="text/css" href="https://URL/TO/YOUR/CSS_FILE.css" />
</head>
```

#### Adding Customized JavaScript Files

You'll need to call the JavaScript file from your template as well. I prefer to call the script from right before the closing `<body>` tag. Replace the URL below with the actual URL to your JavaScript file.

```
<script src="https://URL/TO/YOUR/JS_FILE.js"></script>
</body>
</html>
```

## Features

* Customized style sheets for the GVSU website template, built with [CSSMaker](https://github.com/gvsulib/cssMaker)
* Integrates GVSU Libraries Course Reserves help for Faculty and Students
* Rewrites useless alerts and warnings with useful information
* Improves accessibility by adding useful aria-labels and table captions
* Responsive design to support all devices

### For Students:

* Replaces the default "blank" home screen at the beginning of each semester with useful information aimed at helping students add their classes
* Design improvements to the item listing page to make it easier to find the items you need

### For Instructors:

* Replaces the default "blank" home screen at the beginning of each semester with useful information aimed at helping instructors add or clone their classes and get items online
* Simplifies the decision of whether to add a new class or clone an old one by integrating the "Add Class" and "Clone Class" features into a simple dialog box
* JavaScript combines all 7 item type submission forms, simplfying adding items for your instructors
* Simplifies the decision of how to supply content by walking instructors through the options
* Improved form validation
* And more!

## Author

These customization files were written by Matthew Reidsma, Web Services Librarian. Feel free to get in touch at [reidsmam@gvsu.edu](mailto:reidsmam@gvsu.edu) if you have questions.

## Licensing

The code in this project is licensed under MIT license.
