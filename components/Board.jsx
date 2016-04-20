'use strict';

var React = require('react');
var _ = require('lodash');

var actions = require('../app/actions.js');
var store = require('../app/store.js');
var api = require('../app/api.js');
//var EventListenerMixin = require('./EventListenerMixin.jsx');
var Column = require('./Column.jsx');

module.exports = React.createClass({
    displayName: 'Board',

    getInitialState() {
        return {
            columns: [],
            cards: []
        };
    },

    getCardsInColumn: function(cards, columnId) {
        return cards.filter(function(card) {
            return card.columnId === columnId;
        });
    },

    unsubscribe: function() {},

    componentWillMount: function() {
        var self = this;

        self.unsubscribe = store.subscribe(function() {
            self.setState(store.getState());
        });

        api.get().then(function(data) {
            _.forEach(data.columns, function(column) {
                store.dispatch(actions.addColumn(column.id, column.name));
            });
            _.forEach(data.cards, function(card) {
                store.dispatch(actions.addCard(card.id, card.name, card.columnId));
            });
        });
    },

    componentWillUnmount() {
        this.unsubscribe();
    },

    handleAddColumn: function() {
        store.dispatch(actions.addColumn(undefined, ''));
    },

    render: function() {
        var self = this;

        return <div className="board">
            <div className="board-header">
                <h1>Kanban!</h1>
                <button className="add-column" onClick={this.handleAddColumn}>Add Column</button>
            </div>
            <ol className="columns">
                {this.state.columns.map(function(column, columnIndex) {
                    var columnCards = self.getCardsInColumn(self.state.cards, column.id);
                    return <Column name={column.name} key={column.id} index={columnIndex} id={column.id} cards={columnCards}/>;
                })}
            </ol>
        </div>
    }
});
