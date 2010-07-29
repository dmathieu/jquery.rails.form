# Jquery Rails Form

Generating and adding forms to the DOM in javascript in rails apps can be a pain and it's not very DRY.
This jQuery plugin tries to solve parts of that problem (but not all (yet?) unfortunately).

## Requirements

There are two libraries required.

* [jQuery](http://github.com/jquery/jquery). I'm using 1.4.2. But any recent version should be compatible.
* [Mustache.js](http://github.com/janl/mustache.js). Just because it rox and `"str" + var + "str"` is bad.

## Installation

* Download src/jquery.form.js
* Put it in your public directory
* Load it in your page
* Let's roll !


## Use

    jQuery.form({}, "The Content in the middle of my form");
    jQuery.form({method: 'get'}, "An other form which will be sent in get");
    jQuery.form({action: '/test'}, "This one will be sent to the url /test");
    jQuery.form({class: "awesome_form"}, "This one will have the awesome_form css class");

There's absolutely no restriction on which options you pass. They'll all be added as parameters to the form.

## TODO

* **WRITE TESTS**


## Contributing

If you think this plugin is great but can be improved, feel free to contribute.
To do so, you can :

* [Fork](http://help.github.com/forking/) the project
* Do your changes and commit them to your repository
* Create an [issue](http://github.com/dmathieu/jquery.rails.form/issues) with a link to your commits.

And that's it! We'll soon take a look at your issue and review your changes.

## Credits

Damien MATHIEU :: 42 (AT|CHEZ) dmathieu.com
