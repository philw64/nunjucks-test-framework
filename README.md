# Nunjucks experiments
---
## Environment

This uses gulp, which can be installed locally:

`npm install gulp`

and the extension that renders nunjucks templates

`npm install gulp-nunjucks-render --save-dev`

The config file for gulp is gulpfile.js, in the root directory.

This includes a custom function to render the nunjucks tempates using 
the path setup in this example.

```
root/
    |-gulpfile.js
    |  
    |-dest\
    |     | <output files>
    |
    |-pages\
    |      |-index.njk
    |      |-default.njk
    |
    |-templates\
               |-layout.njk
               |-partials\
               |-macros\
```

# Tutorial

The examples here are based on this [tutorial](https://zellwk.com/blog/nunjucks-with-gulp/)

This seems to be a [good reference](https://mozilla.github.io/nunjucks/templating.html#syntax-highlighting) 

Nunjucks is based on jinja2, for which there is a [Chromium style guide](https://www.chromium.org/developers/jinja). *Note that not all jinja2 features are ported*

