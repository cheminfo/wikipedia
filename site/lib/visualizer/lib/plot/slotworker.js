

onmessage = function( e ) {
	var data = e.data.data;
	var slotNb = e.data.slotNumber;
	var slot = e.data.slot;
	var flip = e.data.flip;
	var max = e.data.max;
	var min = e.data.min;

	var dataPerSlot = slot / (max - min);

	var incrXFlip = 0;
	var incrYFlip = 1;

	if( flip ) {
		incrXFlip = 1;
		incrYFlip = 0;
	}



	this.slotsData = [];

	for(var j = 0, k = data.length; j < k ; j ++ ) {

		for(var m = 0, n = data[ j ].length ; m < n ; m += 2 ) {

			slotNumber = Math.floor( ( data[ j ][ m ] - min ) * dataPerSlot );
			this.slotsData[ slotNumber ] = this.slotsData[ slotNumber ] || { 
					min: data[ j ][ m + incrYFlip ], 
					max: data[ j ][ m + incrYFlip ], 
					start: data[ j ][ m + incrYFlip ],
					stop: false,
					x: data[ j ][ m + incrXFlip ] };

			this.slotsData[ slotNumber ].stop = data[ j ][ m + incrYFlip ];
			this.slotsData[ slotNumber ].min = Math.min( data[ j ][ m + incrYFlip ], this.slotsData[ slotNumber ].min );
			this.slotsData[ slotNumber ].max = Math.max( data[ j ][ m + incrYFlip ], this.slotsData[ slotNumber ].max );

		}
	}

	postMessage( { slotNumber: slotNb, slot: slot, data: this.slotsData } );
};