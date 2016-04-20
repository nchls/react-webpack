'use strict';

var React = require('react');

var store = require('../app/store.js');
var actions = require('../app/actions.js');

module.exports = React.createClass({
    displayName: 'Card',

    handleClickMoveLeft: function() {
        var columnId = store.getState().columns[this.props.columnIndex - 1].id;
        store.dispatch(actions.moveCard(this.props.id, columnId));
    },

    handleClickMoveRight: function() {
        var columnId = store.getState().columns[this.props.columnIndex + 1].id;
        store.dispatch(actions.moveCard(this.props.id, columnId));
    },

    handleNameChange: function(event) {
        var self = this;
        store.dispatch(actions.renameCard(self.props.id, event.target.value));
    },

    render: function() {
        var columnsCount = store.getState().columns.length;
        return <li className="card">
            <input className="card-name" value={this.props.name} onChange={this.handleNameChange} />
            {(this.props.columnIndex > 0 ?
                <button className="move-left" onClick={this.handleClickMoveLeft}>Move left</button>
            : null)}
            {(this.props.columnIndex < columnsCount - 1 ?
                <button className="move-right" onClick={this.handleClickMoveRight}>Move right</button>
            : null)}
        </li>
    }
});
