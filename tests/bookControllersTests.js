const should = require('should');
const sinon = require('sinon');
const bookController = require('../controllers/booksController');

describe('Book Controller Tests:', () => {
    describe('Post', () => {
        it('should not allow an empty title on post', () => {
            const Book = function (book) { this.save = () => {}};

            const req = {
                body: {
                    author: 'Jon'
                }
            };

            const res = {
                status: sinon.spy(),
                send: sinon.spy(),
                json: sinon.spy()
            };

            const Controller = bookController(Book);
            Controller.post(req, res);
            res.status.calledWidth(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
            res.send.calledWidth('Title is required').should.equal(true);
        })
    })
});