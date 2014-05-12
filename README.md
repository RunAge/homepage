Homepage
====

![alt tag](screenshots/preview.png "Homepage preview")

**[Live Demo](http://gokoururi.github.io/homepage/)**

This repository contains a custom homepage made using html, css and javascript (node.js). Feel free to download and modify. Comments and suggestions appreciated. Please don't expect too much.

Features:
* Flashy links
* Flashy Slidy sublinks
* Flashy Slidy searchbars 
* Randomly selected cute 2D girls
* **New**: Column style links. See [Live Demo](http://gokoururi.github.io/homepage/)

Generate your own!
----
To make editing easier, this fork has Mustache templates and generator scripts included.
Just edit home.yaml and re-run gen/generate script to make your own version.

This will overwrite home.html and style.css files, so don't edit them manually or deal with preserving manual modifications in some way (like commiting and rebasing them).

Customizing and adding mascots
----

To customize mascots modify the following values in [javascript](js/scripts.js):

```javascript
    var mascotEnable    = true;
    var mascotPath      = "images/mascots/"
    var mascotList      = [ 'ruri1.png', 'ruri2.png', 'ruri3.png' ];
```

Disclaimer
----
Images of cute girls were made by Anons from /w/ and stolen from their [Google Drive](https://drive.google.com/folderview?id=0B_VmbVyD4eT3N1VUbGN4Wjd5OVE).
