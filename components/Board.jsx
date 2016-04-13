'use strict';

var React = require('react');
var _ = require('lodash');

var store = require('../app/store.js');
var api = require('../app/api.js');
var EventListenerMixin = require('./EventListenerMixin.jsx');
var Column = require('./Column.jsx');

module.exports = React.createClass(_.assign({}, EventListenerMixin, {
    displayName: 'Board',

    getInitialState() {
        return {
            columns: [],
            cards: []
        };
    },

    getCardsInColumn: function(cards, columnIndex) {
        return cards.filter(function(card) {
            return card.column === columnIndex;
        });
    },

    componentWillMount: function() {
        var self = this;

        self.addPropListener('columns', function() {
            self.setState({
                columns: store.state.columns
            });
        });

        self.addPropListener('cards', function() {
            self.setState({
                cards: store.state.cards
            });
        });

        api.get().then(function(data) {
            store.set({
                columns: data.columns,
                cards: data.cards
            });
        });

        store.emitter.addListener('moveCard', function(cardId, cardDirection) {
            var cards = _.clone(self.state.cards);
            var cardIdx = _.findIndex(cards, {id: cardId});
            if (cardDirection === 'left') {
                cards[cardIdx].column--;
            } else {
                cards[cardIdx].column++;
            }
            self.setState({
                cards: cards
            });
        });
    },

    handleAddColumn: function() {
        store.push('columns', {name: null});
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
                    var columnCards = self.getCardsInColumn(self.state.cards, columnIndex);
                    return <Column name={column.name} key={columnIndex} index={columnIndex} cards={columnCards}/>;
                })}
            </ol>
        </div>
    }
}));
