(function( w, undefined) {

  // Configuration.
  var param  = 'subview=mobile', // Define your get param key-value pair
      myhost = [ 'hd.se' ]; // Define your host

  // Internals
  var proto  = w.location.protocol,
      host   = w.location.host,
      path   = w.location.pathname,
      search = w.location.search,
      hash   = w.location.hash;

  if ( ( myHosts.indexOf( host ) !== -1 ) && ( search.indexOf( myParam ) === -1 ) ) {

    search  = search.replace( 'subview=touch', '' ); // Remove touch param if that was previously used.
    search  = search.replace( '?&', '?' );   // After above line, we could be left with '?&' (empty GET-param).
    search  = search === '?' ? '' : search;  // If contains only '?', remove it.
    search += search.length > 0 ? '&' : '?'; // Respect other GET-params.
    search  = search.replace( '&&', '&' );   // After above line, we could be left with '&&' (doubble ampersand).
    search += myParam;

    w.location.href = proto + '//' + host + path + search + hash;

  }

}( window ));
