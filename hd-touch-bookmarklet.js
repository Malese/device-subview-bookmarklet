(function( d, w, undefined) {

  // Configuration.
  var param  = 'subview=mobile', // Define your get param key-value pair
      myhost = 'hd.se'; // Define your host

  // Internals
  var proto  = d.location.protocol,
      host   = d.location.host,
      path   = d.location.pathname,
      search = d.location.search,
      hash   = d.location.hash;

  if ( ( host.indexOf( myhost ) !== -1 ) && ( search.indexOf( myParam ) === -1 ) ) {

    search  = search.replace( 'subview=mobile', '' ); // Remove mobile param if that was previously used.
    search  = search.replace( '?&', '?' );   // After above line, we could be left with '?&' (empty GET-param).
    search  = search === '?' ? '' : search;  // If contains only '?', remove it. 
    search += search.length > 0 ? '&' : '?'; // Respect other GET-params.
    search  = search.replace( '&&', '&' );   // After above line, we could be left with '&&' (doubble ampersand).
    search += myParam;

    window.location.href = proto + '//' + host + path + search + hash;

  }

}( document, window ));
