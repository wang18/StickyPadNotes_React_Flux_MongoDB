var AppAction = require('../action/AppAction');
var $ = require('jquery');

var AppAPI = {
    getNotes: function () {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=HPEQEopUR_GK8t1RueWE4jeMgcnjaZ9W",
            dataType: 'json',
            cache: false,
            success: function (data) {
                AppAction.receiveNotes(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    },
    addNote: function (note) {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes?apiKey=HPEQEopUR_GK8t1RueWE4jeMgcnjaZ9W",
            data: JSON.stringify(note),
            type: 'POST',
            contentType: 'application/json'
        });
    },
    deleteNote: function (note_id) {
        let noteId=note_id.$oid;
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad/collections/notes/"+noteId+"?apiKey=HPEQEopUR_GK8t1RueWE4jeMgcnjaZ9W",
            type:'DELETE',
            aync: true,
            timeout: 300000,
            success: function (data) {
                console.log(data);
            }.bind(this),
            error: function(xhr,status,err){
                console.log(err);
            }.bind(this)
        });
    }
}
module.exports = AppAPI;