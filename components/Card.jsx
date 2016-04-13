'use strict';

var React = require('react');

var store = require('../app/store.js');

module.exports = React.createClass({
    displayName: 'Card',

    handleClickMoveLeft: function() {
        store.emitter.emit('moveCard', this.props.id, 'left');
    },

    handleClickMoveRight: function() {
        store.emitter.emit('moveCard', this.props.id, 'right');
    },

    render: function() {
        var columnsCount = store.state.columns.length;
        return <li className="card">
            <h3>{this.props.label}</h3>
            {(this.props.columnIndex > 0 ?
                <button className="move-left" onClick={this.handleClickMoveLeft}>Move left</button>
            : null)}
            {(this.props.columnIndex < columnsCount - 1 ?
                <button className="move-right" onClick={this.handleClickMoveRight}>Move right</button>
            : null)}
        </li>
    }
});
