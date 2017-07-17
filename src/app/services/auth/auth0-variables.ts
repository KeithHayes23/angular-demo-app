interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '1HTa542ziV9UwaBoOqgT9hizkzBWg3jl',
  domain: 'layerxfounder.auth0.com',
  callbackURL: 'http://localhost:4201/callback'
};
