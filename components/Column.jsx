'use strict';

var React = require('react');
var _ = require('lodash');

var store = require('../app/store.js');
var Card = require('./Card.jsx');

module.exports = React.createClass({
    displayName: 'Column',

    handleAddCard: function() {
        var self = this;
        var nextId = _.max(_.map(store.state.cards, 'id')) + 1;

        store.push('cards', {
            id: nextId,
            label: null,
            column: self.props.index
        });
    },

    handleNameChange: function() {
        console.log(arguments);
    },

    render: function() {
        var self = this;
        return <li className="column">
            <input className="column-name" value={this.props.name} onChange={this.handleNameChange}/>
            <ol className="cards">
                {this.props.cards.map(function(card) {
                    return <Card key={card.id} id={card.id} label={card.label} columnIndex={self.props.index}/>
                })}
            </ol>
            <button className="add-card" onClick={this.handleAddCard}>Add Card</button>
        </li>
    }
});
