// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({
  
  // table row
  tagName: 'tr',
  
  // format for the DOM element specific to one song(model)
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // listens to the browser's click event on the actual div 
  // and makes the song(model) fire enqueue
  events: {
    'click': function() {
      this.model.enqueue();
    }
  },
  
  // this.model is the song; this.model.attributes are the properties to fill out template
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
