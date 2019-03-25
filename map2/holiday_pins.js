/////////////////////////////////////////////////HOLIDAY POINTS////////////////////////////////////////       
        
        
        //Holiday points 1
        var holiday1 = new Microsoft.Maps.Layer();
        //Add zoom information as metadata of the layer.
        holiday1.metadata = {
            zoomRange: {
                min: 4,
                max: 12
            }
        };

        //pin1
        var pin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(43.649720, -79.481480), null);
        infobo[0] = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(43.649720, -79.481480), {
            maxHeight: 300,
            maxWidth: 420,
            title: 'Colombia',
            description: 'Cocora valley <br> <br>' + '<img src="https://pbs.twimg.com/media/Dwt9_cwXgAAnC8V.jpg" height="210" alt="Mountain View">',
            visible: false,
            autoAlignment: true
        });
        //************************************************
        //infobo[0]
        //************************************************
        infobo[0].setMap(map);
        Microsoft.Maps.Events.addHandler(pin1, 'click', function() {
            _infoboClose(infobo,0); //** _infoboClose(array, arrayIndex); **
        });
        holiday1.add(pin1);
   

        ////////////////////////////////////////////////
       
        //pin2
        var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(43.659585, -79.337501), null);
        infobo[1] = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(43.659585, -79.337501), {
            maxHeight: 300,
            maxWidth: 420,
            title: 'Montana',
            description: 'Big Sky <br> <br>' + '<img src="https://pbs.twimg.com/media/DxsemS_X0AADxyX.jpg"  height="200" alt="Mountain View">',
            visible: false,
            autoAlignment: true
        });
        //************************************************
        //infobo[1]
        //************************************************
        infobo[1].setMap(map);
        Microsoft.Maps.Events.addHandler(pin2, 'click', function() {
            _infoboClose(infobo,1); //** _infoboClose(array, arrayIndex); **
        });
        holiday1.add(pin2);
        
        
        //////////////
        
        
        //Add all holiday pins to the map
        map.layers.insert(holiday1);
        
        
  ////////////////Code to Close Infobox (required once)//////////////////////////////////////////////////

        //************************************************
        // infobo [ Show / Hide ]
        // _infoboClose(array, arrayIndex);
        //************************************************
        function _infoboClose(target,index){
            for(var i=0;i<target.length;i++){
                target[i].setOptions({
                    visible: false
                });
            }
            target[index].setOptions({
                visible: true
            });
        }
        
        
