var dispatcher = require('flux').Dispatcher;
var assign =  require('object-assign');

var AppDispatcher = assign(new dispatcher(), {
    handleViewAction: function (action) {
        var payload ={
            source:'VIEW_ACTION',
            action: action
        };
        this.dispatch(payload);
    }
});

module.exports = AppDispatcher;