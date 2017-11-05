var AppConstants = require('../constant/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppAction ={
    receiveNotes: function (notes) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_NOTES,
            notes: notes
        });
    },
    addNote: function(note){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_NOTE,
            note: note
        });
    },
    deleteNote: function (note_id) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.DELETE_NOTE,
            note_id: note_id
        });
    }
};
module.exports = AppAction;