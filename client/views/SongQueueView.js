// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    // this re-renders songQueue when "add" or "remove" is emitted
    this.collection.on('add remove', this.render, this)
    // this renders an empty song queue on initialization
    this.render()
    },

  render: function(){
    
    // WHAT DOES THIS DO?
    this.$el.children().detach();
    
    // iterating over collection and instantiating new SongQueueEntryViews
    // and assigning corresponding model to each SongQueueEntryViews
    // and appending all of those to the DOM
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
