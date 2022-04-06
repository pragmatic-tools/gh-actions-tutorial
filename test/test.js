var request = require('supertest')
var app = require('../app.js')

// TODO: Make this test pass!
describe('GET /', function() {
    it('displays "Hello World!"', function(done) {
        request(app).get('/').expect('Hello Dexcom!', done);
    })
})