import { ethers } from 'ethers';
import {
  PoseidonHasher as PoseidonHasherContract,
  PoseidonHasher__factory,
  PoseidonT3__factory,
  PoseidonT6__factory,
} from '@webb-tools/contracts';

export class PoseidonHasher {
  contract: PoseidonHasherContract;

  constructor(contract: PoseidonHasherContract) {
    this.contract = contract;
  }

  public static async createPoseidonHasher(signer: ethers.Signer) {
    const poseidonT3LibraryFactory = new PoseidonT3__factory(signer);
    const poseidonT3Library = await poseidonT3LibraryFactory.deploy();
    await poseidonT3Library.deployed();

    const poseidonT6LibraryFactory = new PoseidonT6__factory(signer);
    const poseidonT6Library = await poseidonT6LibraryFactory.deploy();
    await poseidonT6Library.deployed();

    const libraryAddresses = {
      ['contracts/trees/Poseidon.sol:PoseidonT3']: poseidonT3Library.address,
      ['contracts/trees/Poseidon.sol:PoseidonT6']: poseidonT6Library.address,
    };
    const factory = new PoseidonHasher__factory(libraryAddresses, signer);

    const contract = await factory.deploy();
    await contract.deployed();

    const hasher = new PoseidonHasher(contract);
    return hasher;
  }

  public static async connect(hasherAddress: string, signer: ethers.Signer) {
    const hasherContract = PoseidonHasher__factory.connect(hasherAddress, signer);
    const hasher = new PoseidonHasher(hasherContract);
    return hasher;
  }
}