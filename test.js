var assert = require('assert');
var request = require('supertest');
var app = require('./app');

describe('GET products for users', function() {
    it('return all products', function(done) {
        request(app)
          .get('/user/DBU?token=pippo')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('buy single product without token', function(done) {
        request(app)
          .post('/user/buy/1')
          .set('Accept', 'application/json')
          .send({id:1})
          .expect(401)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('buy single product with token', function(done) {
        request(app)
          .post('/user/buy/1?token=pippo')
          .set('Accept', 'application/json')
          .send({id:1})
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
  });

  describe('GET admin products', function() {
      it('return all products', function(done) {
          request(app)
            .get('/admin/DB?token=admin')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
              if (err) return done(err);
              done();
        });
      })
      it('add new product', function(done) {
          request(app)
            .post('/admin/add?token=admin')
            .set('Accept', 'application/json')
            .send({name:'Iphone X plus', amout: 12})
            .expect(201)
            .end(function(err, res) {
              if (err) return done(err);
              done();
        });
      })
      it('delete product with id 1', function(done) {
          request(app)
            .delete('/admin/del/1?token=admin')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
              if (err) return done(err);
              done();
        });
      })
      it('edit product with id 2', function(done) {
          request(app)
            .put('/admin/mod/2?token=admin')
            .set('Accept', 'application/json')
            .expect(201)
            .end(function(err, res) {
              if (err) return done(err);
              done();
        });
      })


    });
