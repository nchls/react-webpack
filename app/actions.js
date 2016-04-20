var uuid = require('node-uuid');

// Action creators

module.exports = {
    addColumn: function(id, name) {
        return {
            type: 'ADD_COLUMN',
            id: id || uuid.v4(),
            name: name
        };
    },

    renameColumn: function(id, name) {
        return {
            type: 'RENAME_COLUMN',
            id: id,
            name: name
        };
    },

    addCard: function(id, name, columnId) {
        id = id || uuid.v4();
        return {
            type: 'ADD_CARD',
            id: id,
            name: name,
            columnId: columnId
        };
    },

    moveCard: function(cardId, columnId) {
        return {
            type: 'MOVE_CARD',
            cardId: cardId,
            columnId: columnId
        };
    },

    renameCard: function(id, name) {
        return {
            type: 'RENAME_CARD',
            id: id,
            name: name
        };
    }
};