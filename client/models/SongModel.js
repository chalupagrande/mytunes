// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },


  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    // this.trigger('enqueue', this);
    console.log('Song is trying to dequeue');
  }

  // enqueue : function(){
  //   console.log('enqueue in SongModel')
  // }

  // dequeue : function(){
  //   console.log('dequeue in SongModel')
  // }

});
