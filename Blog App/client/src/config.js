const oktaAuthConfig = {
  issuer: 'https://dev-54612852.okta.com/oauth2/default',
  clientId: '0oa3q9g4syX8tZJ7k5d7',
  redirectUri: window.location.origin + '/login/callback',
};

const oktaSignInConfig = {
  baseUrl: 'https://dev-54612852.okta.com',
  clientId: '0oa3q9g4syX8tZJ7k5d7',
  redirectUri: window.location.origin + '/login/callback',
  logo: 'https://www.lifewire.com/thmb/OcjgnrjWn4R5mFg5HfCZv6hiLqo=/2891x1038/filters:fill(auto,1)/165942540-56a9f7525f9b58b7d0003d43.jpg',
  authParams: {
     
  }

};

export { oktaAuthConfig, oktaSignInConfig };