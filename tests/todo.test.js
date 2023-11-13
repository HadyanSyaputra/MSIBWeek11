const app = require('../app')
const request = require('supertest');


describe('Get Todo', () => {
    test('Get All Todo', (done) => {
        request(app)
            .get('/todo')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('success')
                done()
            })
            .catch(done)
    });

    describe('Delete User', () => {
        test('Delete a User', (done) => {
            request(app)
                .delete('/todo/1') 
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.message).toBe('Todo deleted success')
                    done()
                })
                .catch(done)
        });
    });
    
    describe('Get User by ID', () => {
        test('Get User by ID', (done) => {
            request(app)
                .get('/todo/1')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body.message).toBe('success')
                    done()
                })
                .catch(done)
        });
    });
    
    
});
