var _ = require('lodash');

var initialState = {
    columns: [],
    cards: []
};

var kanbanApp = function(state, action) {
    if (state === undefined) {
        return initialState;
    }

    var newState = _.assign({}, state);

    if (action.type === 'ADD_COLUMN') {

        newState.columns.push({
            id: action.id,
            name: action.name
        });

    } else if (action.type === 'RENAME_COLUMN') {

        var columnIdx = _.findIndex(newState.columns, {id: action.id});
        _.assign(newState.columns[columnIdx], {
            name: action.name
        });

    } else if (action.type === 'ADD_CARD') {

        newState.cards.push({
            name: action.name,
            id: action.id,
            columnId: action.columnId
        });

    } else if (action.type === 'MOVE_CARD') {

        var cardIndex = _.findIndex(newState.cards, {id: action.cardId});
        newState.cards[cardIndex].columnId = action.columnId;

    } else if (action.type === 'RENAME_CARD') {

        var cardIdx = _.findIndex(newState.cards, {id: action.id});
        _.assign(newState.cards[cardIdx], {
            name: action.name
        });

    }

    return newState;
};

module.exports = kanbanApp;
