var React = require('react');
var ReactCreateClass = require('create-react-class');
var Note = require('./Note');

var NoteList = ReactCreateClass({
        render: function() {
          return (
              <div className="row small-up-2 medium-up-3 large-up-4">
                  {
                      this.props.noteList.map(function(note, i){
                          return (
                              <Note note={note} key={i} />
                          )
                      })
                  }
              </div>
        );
    }
});
module.exports = NoteList;
