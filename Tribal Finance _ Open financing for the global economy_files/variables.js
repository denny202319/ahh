(function(){
  const variables = {"REACT_APP_API_URL":"https://embeds.beehiiv.com","REACT_APP_GTM_ENABLED":"true","REACT_APP_TURNSTILE_SITEKEY":"0x4AAAAAAAEd9Y5m2ti6x_A8"};

  window.env = {};

  Object.keys(variables).forEach(function(key){
    window.env[key] = variables[key];
  });
}())
