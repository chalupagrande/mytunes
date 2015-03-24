// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    // THIS re-renders SONG QUEUE
    this.collection.on('add remove', this.render, this)
    },

    // this.render();
    // this.on('change', function(){
    //   console.log('trying to render')
    //   this.render();
    // })

  render: function(){
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
