Homepage
====

This is my fork of [Ruri homepage](https://github.com/gokoururi/homepage).
Also check out upstream's version. ^ ^

![alt tag](screenshots/preview.png "Homepage preview")

**[Live Demo (upstream version, dark theme)](http://gokoururi.github.io/homepage/)**

This repository contains a custom homepage made using html, css and javascript (node.js). Feel free to download and modify. Comments and suggestions appreciated. Please don't expect too much.

Features:
* Flashy links
* Flashy Slidy sublinks
* Flashy Slidy searchbars
* Randomly selected cute 2D girls
* Column style links.
* Dark and light color themes.
* **New**: Javascript (JSON) configurated.

Customizing, adding mascots and themes
----

To customize links, edit the [config](config.js).

To customize mascots for `dark` theme, modify array in [themes/dark/mascots.js](themes/dark/mascots.js):
```javascript
var mascotList = [ "ruri1.png", "ruri2.png", "ruri3.png" ];
```

To add own theme, copy an existing one, change mascots and [colors.css](themes/dark/colors.css).

Disclaimer
----
Images of cute girls were made by Anons from /w/ and stolen from their [Google Drive](https://drive.google.com/folderview?id=0B_VmbVyD4eT3N1VUbGN4Wjd5OVE).
