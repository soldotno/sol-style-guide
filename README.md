# SOL's style guide

[![Greenkeeper badge](https://badges.greenkeeper.io/soldotno/sol-style-guide.svg)](https://greenkeeper.io/)
Providing a consistent visual profile across projects.

http://sol-style-guide.herokuapp.com/sol-style-guide

## Launching
The master branch is deployed to sol-style-guide.herokuapp.com, which serves
  static css files.

Some projects still use this repo as a dependency. Therefore, after a pull
  request has been approved to be merged into the master branch, bump the
  version number and publish it to npm:

    npm version major|minor|patch
    npm publish
    git push

## Developing
Run `gulp develop ` / `npm run develop` and all scss files will be compiled and
  a webserver will start at port 3000 if free.

When using this repository as a dependency, symlink it locally with `npm link`.

## Settings

The partials in the `src/scss/settings` directory consist of variables like
  colors and numerical values, functions and mixins. They do not output any CSS
  when compiled.

## Modules

The partials in the `src/scss/modules` directory are globally reusable components.
  Namespace modules by wrapping the whole partial in a block, like this:

```scss
.sparks {
    /* all styles go here */
}
```

## Pages
The stylesheets in the `src/scss/pages` directory consist of imported modules,
  but can also include some overrides. Overrides should be namespaced in the
  same way as modules: Wrap the entire contents of the file in a block.

Try to keep these overrides to a minimum, and focus on reusing styles wherever
  possible, simply by importing modules.
