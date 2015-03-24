// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({ 

  initialize: function(){
    this.on('add remove', function(){
      if(this.length === 1){
       this.playFirst()
      }
    },this)

    this.on('ended', function(){
      console.log('ended')
      this.at(0).dequeue();
      this.playFirst();
    })

    this.on('dequeue', function(song){
      this.shift(song);
      console.log(this);
    })
    // render
  },

  render : function(){
    console.log('trying to render songqueue')
  },

  playFirst: function(){
    this.at('0').play();
  }

  // listens for enqueue and dequeue from songqueue array
  // calls render
});