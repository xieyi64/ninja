'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Zhidaoma = new Module('zhidaoma');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Zhidaoma.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Zhidaoma.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Zhidaoma.menus.add({
    title: 'zhidaoma example page',
    link: 'zhidaoma example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Zhidaoma.aggregateAsset('css', 'zhidaoma.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Zhidaoma.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Zhidaoma.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Zhidaoma.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Zhidaoma;
});
