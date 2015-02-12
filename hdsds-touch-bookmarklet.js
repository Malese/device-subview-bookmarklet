(function( w, undefined) {

  // Configuration.
  var myParam  = 'mobile=1', // Define your get param key-value pair
      myHosts = [ // Define your hosts
        'www.hd.se',
        'www.sydsvenskan.se',

        'hd-www-daily.bonnierdigitalservices.se',
        'hd-cms-daily.bonnierdigitalservices.se',
        'hd-www-test.bonnierdigitalservices.se',
        'hd-cms-test.bonnierdigitalservices.se',
        'hd-www-qa.bonnierdigitalservices.se',
        'hd-cms-qa.bonnierdigitalservices.se',
        'hd-www-stage.bonnierdigitalservices.se',
        'hd-cms-stage.bonnierdigitalservices.se',

        'sydsvenskan-www-daily.bonnierdigitalservices.se',
        'sydsvenskan-cms-daily.bonnierdigitalservices.se',
        'sydsvenskan-www-test.bonnierdigitalservices.se',
        'sydsvenskan-cms-test.bonnierdigitalservices.se',
        'sydsvenskan-www-qa.bonnierdigitalservices.se',
        'sydsvenskan-cms-qa.bonnierdigitalservices.se',
        'sydsvenskan-www-stage.bonnierdigitalservices.se',
        'sydsvenskan-cms-stage.bonnierdigitalservices.se'
      ];

  // Internals
  var proto  = w.location.protocol,
      host   = w.location.host,
      path   = w.location.pathname,
      search = w.location.search,
      hash   = w.location.hash;

  if ( ( myHosts.indexOf( host ) !== -1 ) && ( search.indexOf( myParam ) === -1 ) ) {

    search  = search === '?' ? '' : search;  // If contains only '?', remove it. 
    search += search.length > 0 ? '&' : '?'; // Respect other GET-params.
    search  = search.replace( '&&', '&' );   // After above line, we could be left with '&&' (doubble ampersand).
    search += myParam;

    w.location.href = proto + '//' + host + path + search + hash;

  }

}( window ));
