const contentfulManagement = require('contentful-management');

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-yt9TDEw9Gf9oKOaUJmKe-Fl1PTayIoPOXuopQW-pRWQ',
  });

  return contentfulClient.getSpace('5qz7sv761dgw').then(space => space.getEnvironment('master'));
};
