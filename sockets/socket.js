const {io} = require( '../index' );

// Events Sockets
io.on( 'connection', client => {
    console.log( 'Cliente conectado' );
    client.on( 'disconnect', () => {
        console.log( 'Cliente desconectado' );
    } );

    client.on( 'message', ( payload ) => {
        console.log( 'Message', payload );

        io.emit( 'message', { admin: 'New message'} );
    });
});