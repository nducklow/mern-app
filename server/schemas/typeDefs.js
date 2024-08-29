const { Item } = require('../models');

const resolvers = {
    Query: {
        profiles: async () => {
            return Item.find();
        }
    }
};

module.exports = resolvers;