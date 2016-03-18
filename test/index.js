var chai = require('chai')
var sinon = require('sinon')
var conditionNPM = require('../src/index')

describe('conditionNPM', function () {
  context('valid script', function() {
    it('runs successfully', function(done) {
      conditionNPM(null, {script: 'hello-world'}, done)
    })
  })
  context('invalid script', function () {
    it('fails correctly', function (done) {
      conditionNPM(null, {script: 'invalid'}, (err) => {
        chai.expect(err).to.be.an('error')
        done()
      })
    })
  })
})
