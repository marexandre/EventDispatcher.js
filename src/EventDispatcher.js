/**
 * Simple EventDispatcher.
 *
 * @author alexandre.kirillov@gmail.com
 * @version 0.1
 *
 * @created 2012/11/09
 * @modified 2013/01/06
 */

var EventDispatcher = (function() {
    "use strict";

    var _hash = {};

    return {
        fire: function( key, data ) {
            if ( !_hash.hasOwnProperty(key) ) { return; }

            for ( var i = 0, imax = _hash[key].length; i < imax; i++ ) {
                _hash[key][i]( data );
            }
        },
        on: function( key, callback ) {
            if ( !_hash.hasOwnProperty(key) ) {
                _hash[ key ] = [];
            }

            _hash[ key ].push( callback );
        },
        off: function( key, callback ) {
            if ( !_hash.hasOwnProperty(key) ) { return; }

            if ( callback ) {
                var func = callback || function(){};
                for ( var i = 0, imax = _hash[key].length; i < imax; i++ ) {
                    if ( _hash[ key ][ i ] === func ) {
                        _hash[ key ].splice( i, 1 );

                    }
                }
            }
            else {
                _hash[ key ] = [];
            }
        }
    };
})();
