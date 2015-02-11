(function( d, w, undefined) {

  // Configuration.
  var myParam  = 'mobile=1', // Define your get param key-value pair
      myHosts = [ 'www.hd.se', 'www.sydsvenskan.se' ]; // Define your host

  // Internals
  var proto  = d.location.protocol,
      host   = d.location.host,
      path   = d.location.pathname,
      search = d.location.search,
      hash   = d.location.hash;

  if ( ( myHosts.indexOf( host ) !== -1 ) && ( search.indexOf( myParam ) === -1 ) ) {

    search  = search === '?' ? '' : search;  // If contains only '?', remove it. 
    search += search.length > 0 ? '&' : '?'; // Respect other GET-params.
    search  = search.replace( '&&', '&' );   // After above line, we could be left with '&&' (doubble ampersand).
    search += myParam;

    window.location.href = proto + '//' + host + path + search + hash;

  }

}( document, window ));
