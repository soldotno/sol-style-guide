http://soldotno.github.io/sol-style-guide

== Developing and launching ==
When using this repository as a dependency, symlink it locally with `npm link`.

After a pull request has been approved to be merged into the gh-pages branch, bump the version number and publish it to nexus.sol.no:

    npm version major|minor|patch
    npm publish
    git push
