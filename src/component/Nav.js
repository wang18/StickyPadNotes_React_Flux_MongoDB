var React = require('react');
var ReactCreateClass = require('create-react-class');

var Nav = ReactCreateClass({
   /* getInitialState: function () {
         return {
         };
    },*/
    showHome(e){
        e.preventDefault();
        this.props.showHome();
    },
    showNote(e){
        e.preventDefault();
        this.props.showNote();
    },
    render: function(){
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="" onClick={this.showHome}>Sticky<strong>Pad</strong></a>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className={"nav-item "+ (this.props.showHF ? 'active' : '')}>
                            <a className="nav-link " href="" onClick={this.showHome}>Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className={"nav-item " + (this.props.showNF ? 'active' : '')} >
                            <a className="nav-link " href="" onClick={this.showNote}>Note List</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Nav;
