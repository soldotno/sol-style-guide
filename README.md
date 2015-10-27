SOL's style guide
=================
Providing a consistent visual profile across projects.

http://sol-style-guide.herokuapp.com/sol-style-guide

Launching
------------------------
The master branch is deployed to sol-style-guide.herokuapp.com, which serves static css files.

Some projects still use this repo as a dependency. Therefore, after a pull request has been approved to be merged into the master branch, bump the version number and publish it to npm:

    npm version major|minor|patch
    npm publish
    git push

Developing
------------------------
When using this repository as a dependency, symlink it locally with `npm link`.

# develop

Run `gulp develop ` / `npm run develop` and all scss files will be compiled and
  a webserver will start at port 3000 if free.

GAMMEL STRUKTUR
------------------------
    /             statiske html-filer og prosjektmeta, se nederst
    css/          ferdig bygde filer + det Jekyll trenger for å lage dem
    scss/         "endepunkter" / ferdig bygde filer
    scss/settings innstillinger som kan tas inn i alle prosjekter; spytter ikke ut NOE css når kompilert
    scss/modules  Moduler som brukes i "endepunktene"

FORESLÅTT NY STRUKTUR
------------------------
    /                prosjektmeta
    /css             kompilert fra scss/prod
    /css/unit-tests  kompilert fra scss/unit-tests
    /unit-tests      html-filene som tidligere lå i rot, og dessuten flere, mindre tester
    /scss            tom
    /scss/settings   som før
    /scss/modules    som før
    /scss/prod       "endepunktene" som tidligere lå i rot (article.scss, listicle.scss etc)
    /scss/unit-tests "endepunkter" som ikke er til produksjon (header.scss, footer.scss etc)

Statiske HTML-filer og prosjektmeta
------------------------
* statiske html-filer funker som visuelle unit-tester, speiler prosjekter som skal bruke "endepunktene"
* prosjektmeta (package.json etc)
