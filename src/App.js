var React = require('react');
var ReactCreateClass = require('create-react-class');
var Home = require('./component/Home');
var Nav = require('./component/Nav');
var NoteList = require('./component/NoteList');
var AddNoteForm = require('./component/AddNoteForm');
var AppAPI = require('./util/AppAPI');
var AppStore = require('./store/AppStore');

var App = ReactCreateClass({
    getInitialState: function () {
        return {
            showHomeF: true,
            showNoteF: false,
            notes: AppStore.getNotes()
        };
    },
    componentWillMount: function () {
        AppAPI.getNotes();
    },
    _onChange: function () {
      this.setState({notes: AppStore.getNotes()});
    },
    componentDidMount:  function () {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      AppStore.removeChangeListener(this._onChange);
    },
    handelShowHome: function () {
        this.setState({
            showHomeF: true,
            showNoteF: false
        });
    },
    handelShowNote: function () {
        this.setState({
            showHomeF: false,
            showNoteF: true
        });
    },
  render: function() {
      let cBody ='';
      if(this.state.showHomeF) {
          cBody = <Home />;
      }else if(this.state.showNoteF) {
          cBody = (
              <div className="off-canvas-wrapper">
                <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                    <div className="row column">
                      <br />
                      <AddNoteForm />
                    </div>
                  <div className="off-canvas-content" data-off-canvas-content>
                    <NoteList noteList={this.state.notes} />
                  </div>
                </div>
              </div>
          );
      }else{
          cBody ='Nothing';
      }
      return (
      <div className="App">
        <Nav showHome={this.handelShowHome} showHF={this.state.showHomeF}
             showNote={this.handelShowNote}  showNF={this.state.showNoteF}  />
        <div className="container">
            {cBody}
        </div>
      </div>
    );
  }
});
module.exports = App;
