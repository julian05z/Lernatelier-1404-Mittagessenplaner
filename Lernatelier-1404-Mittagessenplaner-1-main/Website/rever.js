import Router from "./router.js";
import {
    renderLogin,
    renderKalender,

  } from "./sites.js";
  
  const routes = {
    login: { hash: "#login", function: renderLogin },
    kalender: { hash: "#kalender", function: renderKalender },
    
  };


  const router = new Router(routes);

router.urlResolve();
