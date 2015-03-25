// SongQueue.js - Defines a backbone model class for the song queue.

var SongQueue = Songs.extend({ 

  initialize: function(){
    this.on('add', this.enqueue, this)
    this.on('dequeue', this.dequeue, this)
    this.on('ended', this.ended, this)
  },

  enqueue: function(song){
    console.log('enqueue')

    if( this.length === 1){
      this.playFirst()
    }
  },

  dequeue : function(song){
    console.log('dequeue')
    
    this.remove(song);
    
    if( this.length === 0) { 
      this.trigger('stop')
    } else {
      this.playFirst()
    }
  },

  ended : function(){
    console.log('ended')

    this.at(0).dequeue();
    if(this.length !== 0 ){
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
  }
});