## README

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A very basic portfolio site, written in [React](https://reactjs.org/), built using [webpack](https://webpack.js.org/) with content from a headless CMS ([Contentful](contentful.com/)).

### Key technologies used:

- [typescript](https://www.typescriptlang.org/)
- [react](https://reactjs.org/)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [styled-components](https://styled-components.com/)
- [contentful](https://www.contentful.com/)

### TODO

- [ ] Switch Contenful API queries over to GraphQL (likely via [apollo-client](https://www.npmjs.com/package/apollo-client))
- [ ] Add a decent page transition
- [ ] Sort out page spinner
- [ ] Replace portfolio page item previews with dependency-free solution
- [ ] Sort/group portfolio items in some way, perhaps by creation date
- [ ] Code splitting via lazy-loading components with @loadable/component
- [ ] Tidy up ContentService, deprecate use of `lodash.get`
