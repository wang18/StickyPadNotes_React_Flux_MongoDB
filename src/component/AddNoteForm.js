var React = require('react');
var ReactCreateClass = require('create-react-class');
var AppAction = require('../action/AppAction');

var AddNoteList = ReactCreateClass({
    onSubmit:function (e) {
        e.preventDefault();
        var note = {'text': this.refs.text.value.trim()};
        AppAction.addNote(note);
        this.refs.text.value='';
    },
    render: function() {
        return (
            <div className="">
                <h5>Add A Note</h5>
                <form className="form-group" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="large-12 columns">
                            <label>Note Text
                                <input type="text" className="form-control" ref="text" placeholder="Enter Text..."/>
                            </label>
                            <button className="form-control button">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});
module.exports = AddNoteList;
