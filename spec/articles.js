
import { run } from '../server';
import { get, post } from 'request';

var serverInstance;

beforeEach(function (done) {
    serverInstance = run(done);
});

afterEach(function (done) {
    serverInstance.close(done);
});



const endpoint = 'http://localhost:3000/articles';

describe('city', function () {
    it('should return 200 response code', function (done) {
        get(endpoint, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    it('should fail on POST', function (done) {
        post(endpoint, {json: true, body: {}}, function (error, response) {
            expect(response.statusCode).toEqual(404);
            done();
        });
    });
});