'use strict';

var React = require('react');
var _ = require('lodash');

var store = require('../app/store.js');
var actions = require('../app/actions.js');
var Card = require('./Card.jsx');

module.exports = React.createClass({
    displayName: 'Column',

    handleAddCard: function() {
        var self = this;
        store.dispatch(actions.addCard(undefined, '', self.props.id));
    },

    handleNameChange: function(event) {
        var self = this;
        store.dispatch(actions.renameColumn(self.props.id, event.target.value));
    },

    render: function() {
        var self = this;
        return <li className="column">
            <input className="column-name" value={this.props.name} onChange={this.handleNameChange}/>
            <ol className="cards">
                {this.props.cards.map(function(card) {
                    return <Card key={card.id} id={card.id} name={card.name} columnIndex={self.props.index}/>
                })}
            </ol>
            <button className="add-card" onClick={this.handleAddCard}>Add Card</button>
        </li>
    }
});
