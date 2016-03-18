import chai from 'chai'
import sinon from 'sinon'
import conditionNPM from '../src'

describe('conditionNPM', () => {
  context('valid script', () => {
    it('runs successfully', (done) => {
      conditionNPM(null, {script: 'hello-world'}, done)
    })
  })
  context('invalid script', () => {
    it('fails correctly', (done) => {
      conditionNPM(null, {script: 'invalid'}, (err) => {
        chai.expect(err).to.be.an('error')
        done()
      })
    })
  })
})
