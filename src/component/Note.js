var React = require('react');
var ReactCreateClass = require('create-react-class');
var AppAction = require('../action/AppAction');

var Note = ReactCreateClass({
    removeNote: function (n_id) {
        console.log(n_id);
        AppAction.deleteNote(n_id);
    },
    render: function() {
        return (
            <div className="column">
                <div onDoubleClick={this.removeNote.bind(this, this.props.note._id)} className="note">
                    <p>{this.props.note.text}</p>
                </div>
            </div>
        );
    }
});
module.exports = Note;
