const { User, Book } = require('../models');
const { ObjectID } = require('mongoose').Types;
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { findOneAndUpdate } = require('../models/User');

const resolvers = {
    Query: {
        users: async () => {
            return User.find({});
        },
        books: async () => {
            return Book.find({});
        },
        // find single book
        book: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Book.find(params);
        },
        // find single user
        user: async (parent, { _id }) => {
            return User
        },
    },

    Mutations: {
        // create user
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },

        //  save book - update user
        saveBook: async (parent, { userId,  savedBook }) => {
            return User.findOneAndUpdate(
                { _id: userID},
                { $addToSet: { savedBooks: savedBook } },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },

        // delete book - update user
        removeBook: async (parent, { userId, bookId }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { savedBooks: { _id: bookId }}},
                { new: true }
            );
        },
    },
};