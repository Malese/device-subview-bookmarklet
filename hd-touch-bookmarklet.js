(function( d, w, undefined) {

  // Configuration. Define your key-value pair
  var match  = 'subview=touch';

  // Internals
  var proto  = d.location.protocol,
      host   = d.location.host,
      path   = d.location.pathname,
      search = d.location.search,
      hash   = d.location.hash;

  if ( ( host.indexOf( 'hd.se' ) !== -1 ) && ( search.indexOf( match ) === -1 ) ) {

    search  = search.replace( 'subview=mobile', '' ); // Remove mobile param if that was previously used.
    search  = search.replace( '?&', '?' );   // After above line, we could be left with '?&' (empty GET-param).
    search  = search === '?' ? '' : search;  // If contains only '?', remove it. 
    search += search.length > 0 ? '&' : '?'; // Respect other GET-params.
    search  = search.replace( '&&', '&' );   // After above line, we could be left with '&&' (doubble ampersand).
    search += match;

    window.location.href = proto + '//' + host + path + search + hash;

  }

}( document, window ));
