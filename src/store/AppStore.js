var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppContants = require('../constant/AppConstants');
var assign = require('object-assign');
var AppAPI = require('../util/AppAPI');
var EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'change';
let _notes=[];

var AppStore=assign({}, EventEmitter.prototype, {
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on('change', callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    },
    setNotes: function (notes) {
        _notes=notes;
    },
    getNotes: function () {
        return _notes;
    },
    addNote: function (note) {
        _notes.push(note);
    },
    deleteNote: function(note_id){
        var index = _notes.findIndex(x => x._id.$oid === note_id.$oid);
        _notes.splice(index,1);
    }
});

module.exports = AppStore;

AppDispatcher.register(function (payload) {
   var action = payload.action;
   switch(action.actionType){
       case AppContants.RECEIVE_NOTES:
           AppStore.setNotes(action.notes);
           AppStore.emitChange();
           break;
       case AppContants.ADD_NOTE:
           AppStore.addNote(action.note);
           AppAPI.addNote(action.note);
           AppStore.emitChange(0);
           break;
       case AppContants.DELETE_NOTE:
           AppStore.deleteNote(action.note_id);
           AppAPI.deleteNote(action.note_id);
           AppStore.emitChange();
           break;
       default:
           break;
   }
   return true;

});