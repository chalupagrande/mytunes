// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', null);
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    
    // is not params.library because triggered from songqueue
    this.get('songQueue').on('stop', function() {
      this.set('currentSong', null );
    }, this);

    params.library.on('play', function(song){
      // this change to this model generates a change event
      this.set('currentSong', song);
    }, this);
    
    // translates intent of enqueque to add song in songQueue
    // params is app
    // this.model.get('library').on works as well *check index.html
    params.library.on('enqueue', function(song){
      // collections emit an "add" event
      this.get('songQueue').add(song);
    }, this);

    params.library.on('dequeue', function(song){
      this.get('songQueue').remove(song);
    }, this);
  }

});
