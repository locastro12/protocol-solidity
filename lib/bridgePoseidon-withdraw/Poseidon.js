const circomlib = require('circomlib')
const maci = require('maci-crypto');
const { hashLeftRight } = maci;
const snarkjs = require('snarkjs')

class PoseidonHasher {
  hash(level, left, right) {
    return hashLeftRight(BigInt(left), BigInt(right)).toString()
  }

  hash3(inputs) {
    if (inputs.length !== 3) throw new Error('panic');
    return circomlib.poseidon(inputs);
  }
}

module.exports = PoseidonHasher;