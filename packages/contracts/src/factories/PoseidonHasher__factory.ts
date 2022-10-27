/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PoseidonHasher, PoseidonHasherInterface } from '../PoseidonHasher';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'array',
        type: 'uint256[]',
      },
    ],
    name: 'hash11',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[5]',
        name: 'array',
        type: 'uint256[5]',
      },
    ],
    name: 'hash5',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_left',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_right',
        type: 'uint256',
      },
    ],
    name: 'hashLeftRight',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'i',
        type: 'uint256',
      },
    ],
    name: 'zeros',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610fce806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635bb93995146100515780638a1a52d2146100765780639cfced9714610089578063e82955881461009c575b600080fd5b61006461005f366004610e77565b6100af565b60405190815260200160405180910390f35b610064610084366004610d98565b61023f565b610064610097366004610d12565b61060b565b6100646100aa366004610e45565b61069b565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183106101255760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6460448201526064015b60405180910390fd5b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001821061019e5760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b606482015260840161011c565b6101a6610cd6565b838152602081018390526040516314d2f97b60e11b815273__$13f06d0b49499b0569bb60333fa99a2a43$__906329a5f2f6906101e7908490600401610e99565b60206040518083038186803b1580156101ff57600080fd5b505af4158015610213573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102379190610e5e565b949350505050565b60408051600b8082526101808201909252600091829190602082016101608036833701905050905061026f610cf4565b610277610cf4565b60005b85518110156102cc5785818151811061029557610295610f6c565b60200260200101518482815181106102af576102af610f6c565b6020908102919091010152806102c481610f3b565b91505061027a565b5084515b600b81101561030a5760008482815181106102ed576102ed610f6c565b60209081029190910101528061030281610f3b565b9150506102d0565b5060005b60058110156103955783818151811061032957610329610f6c565b602002602001015183826005811061034357610343610f6c565b602002015283610354826005610f23565b8151811061036457610364610f6c565b602002602001015182826005811061037e5761037e610f6c565b60200201528061038d81610f3b565b91505061030e565b5061039e610cd6565b604051630926f44b60e31b815273__$6fa49e3b03eeedd8c21be13d8a3f72e7d1$__90634937a258906103d5908690600401610eca565b60206040518083038186803b1580156103ed57600080fd5b505af4158015610401573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104259190610e5e565b8152604051630926f44b60e31b815273__$6fa49e3b03eeedd8c21be13d8a3f72e7d1$__90634937a2589061045e908590600401610eca565b60206040518083038186803b15801561047657600080fd5b505af415801561048a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ae9190610e5e565b60208201526104bb610cd6565b6040516314d2f97b60e11b815273__$13f06d0b49499b0569bb60333fa99a2a43$__906329a5f2f6906104f2908590600401610e99565b60206040518083038186803b15801561050a57600080fd5b505af415801561051e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105429190610e5e565b815284518590600a90811061055957610559610f6c565b60200260200101518160016002811061057457610574610f6c565b60200201526040516314d2f97b60e11b815273__$13f06d0b49499b0569bb60333fa99a2a43$__906329a5f2f6906105b0908490600401610e99565b60206040518083038186803b1580156105c857600080fd5b505af41580156105dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106009190610e5e565b979650505050505050565b604051630926f44b60e31b815260009073__$6fa49e3b03eeedd8c21be13d8a3f72e7d1$__90634937a25890610645908590600401610eca565b60206040518083038186803b15801561065d57600080fd5b505af4158015610671573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106959190610e5e565b92915050565b6000816106c957507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c919050565b81600114156106f957507f13e37f2d6cb86c78ccc1788607c2b199788c6bb0a615a21f2e7a8e88384222f8919050565b816002141561072957507f217126fa352c326896e8c2803eec8fd63ad50cf65edfef27a41a9e32dc622765919050565b816003141561075957507f0e28a61a9b3e91007d5a9e3ada18e1b24d6d230c618388ee5df34cacd7397eee919050565b816004141561078957507f27953447a6979839536badc5425ed15fadb0e292e9bc36f92f0aa5cfa5013587919050565b81600514156107b957507f194191edbfb91d10f6a7afd315f33095410c7801c47175c2df6dc2cce0e3affc919050565b81600614156107e957507f1733dece17d71190516dbaf1927936fa643dc7079fc0cc731de9d6845a47741f919050565b816007141561081957507f267855a7dc75db39d81d17f95d0a7aa572bf5ae19f4db0e84221d2b2ef999219919050565b816008141561084957507f1184e11836b4c36ad8238a340ecc0985eeba665327e33e9b0e3641027c27620d919050565b816009141561087957507f0702ab83a135d7f55350ab1bfaa90babd8fc1d2b3e6a7215381a7b2213d6c5ce919050565b81600a14156108a957507f2eecc0de814cfd8c57ce882babb2e30d1da56621aef7a47f3291cffeaec26ad7919050565b81600b14156108d957507f280bc02145c155d5833585b6c7b08501055157dd30ce005319621dc462d33b47919050565b81600c141561090957507f045132221d1fa0a7f4aed8acd2cbec1e2189b7732ccb2ec272b9c60f0d5afc5b919050565b81600d141561093957507f27f427ccbf58a44b1270abbe4eda6ba53bd6ac4d88cf1e00a13c4371ce71d366919050565b81600e141561096957507f1617eaae5064f26e8f8a6493ae92bfded7fde71b65df1ca6d5dcec0df70b2cef919050565b81600f141561099957507f20c6b400d0ea1b15435703c31c31ee63ad7ba5c8da66cec2796feacea575abca919050565b81601014156109c957507f09589ddb438723f53a8e57bdada7c5f8ed67e8fece3889a73618732965645eec919050565b81601114156109f857507e64b6a738a5ff537db7b220f3394f0ecbd35bfd355c5425dc1166bf3236079b919050565b8160121415610a2857507f095de56281b1d5055e897c3574ff790d5ee81dbc5df784ad2d67795e557c9e9f919050565b8160131415610a5857507f11cf2e2887aa21963a6ec14289183efe4d4c60f14ecd3d6fe0beebdf855a9b63919050565b8160141415610a8857507f2b0f6fc0179fa65b6f73627c0e1e84c7374d2eaec44c9a48f2571393ea77bcbb919050565b8160151415610ab857507f16fdb637c2abf9c0f988dbf2fd64258c46fb6a273d537b2cf1603ea460b13279919050565b8160161415610ae857507f21bbd7e944f6124dad4c376df9cc12e7ca66e47dff703ff7cedb1a454edcf0ff919050565b8160171415610b1857507f2784f8220b1c963e468f590f137baaa1625b3b92a27ad9b6e84eb0d3454d9962919050565b8160181415610b4857507f16ace1a65b7534142f8cc1aad810b3d6a7a74ca905d9c275cb98ba57e509fc10919050565b8160191415610b7857507f2328068c6a8c24265124debd8fe10d3f29f0665ea725a65e3638f6192a96a013919050565b81601a1415610ba857507f2ddb991be1f028022411b4c4d2c22043e5e751c120736f00adf54acab1c9ac14919050565b81601b1415610bd857507f0113798410eaeb95056a464f70521eb58377c0155f2fe518a5594d38cc209cc0919050565b81601c1415610c0857507f202d1ae61526f0d0d01ef80fb5d4055a7af45721024c2c24cffd6a3798f54d50919050565b81601d1415610c3857507f23ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f187919050565b81601e1415610c6857507f1f15585f8947e378bcf8bd918716799da909acdb944c57150b1eb4565fda8aa0919050565b81601f1415610c9857507f1eb064b21055ac6a350cf41eb30e4ce2cb19680217df3a243617c2838185ad06919050565b60405162461bcd60e51b8152602060048201526013602482015272496e646578206f7574206f6620626f756e647360681b604482015260640161011c565b60405180604001604052806002906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b600060a08284031215610d2457600080fd5b82601f830112610d3357600080fd5b60405160a0810181811067ffffffffffffffff82111715610d5657610d56610f82565b604052808360a08101861015610d6b57600080fd5b60005b6005811015610d8d578135835260209283019290910190600101610d6e565b509195945050505050565b60006020808385031215610dab57600080fd5b823567ffffffffffffffff80821115610dc357600080fd5b818501915085601f830112610dd757600080fd5b813581811115610de957610de9610f82565b8060051b9150610dfa848301610ef2565b8181528481019084860184860187018a1015610e1557600080fd5b600095505b83861015610e38578035835260019590950194918601918601610e1a565b5098975050505050505050565b600060208284031215610e5757600080fd5b5035919050565b600060208284031215610e7057600080fd5b5051919050565b60008060408385031215610e8a57600080fd5b50508035926020909101359150565b60408101818360005b6002811015610ec1578151835260209283019290910190600101610ea2565b50505092915050565b60a08101818360005b6005811015610ec1578151835260209283019290910190600101610ed3565b604051601f8201601f1916810167ffffffffffffffff81118282101715610f1b57610f1b610f82565b604052919050565b60008219821115610f3657610f36610f56565b500190565b6000600019821415610f4f57610f4f610f56565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212207d42d19d9629bd7b47529daf5295877feb98242e0a63eb29d086e4aa8eac595264736f6c63430008050033';

type PoseidonHasherConstructorParams =
  | [linkLibraryAddresses: PoseidonHasherLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: PoseidonHasherConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === 'string' ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    '_isInterface' in xs[0]
  );
};

export class PoseidonHasher__factory extends ContractFactory {
  constructor(...args: PoseidonHasherConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, PoseidonHasher__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: PoseidonHasherLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$13f06d0b49499b0569bb60333fa99a2a43\\$__', 'g'),
      linkLibraryAddresses['contracts/trees/Poseidon.sol:PoseidonT3'].replace(/^0x/, '').toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$6fa49e3b03eeedd8c21be13d8a3f72e7d1\\$__', 'g'),
      linkLibraryAddresses['contracts/trees/Poseidon.sol:PoseidonT6'].replace(/^0x/, '').toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PoseidonHasher> {
    return super.deploy(overrides || {}) as Promise<PoseidonHasher>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PoseidonHasher {
    return super.attach(address) as PoseidonHasher;
  }
  connect(signer: Signer): PoseidonHasher__factory {
    return super.connect(signer) as PoseidonHasher__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoseidonHasherInterface {
    return new utils.Interface(_abi) as PoseidonHasherInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PoseidonHasher {
    return new Contract(address, _abi, signerOrProvider) as PoseidonHasher;
  }
}

export interface PoseidonHasherLibraryAddresses {
  ['contracts/trees/Poseidon.sol:PoseidonT3']: string;
  ['contracts/trees/Poseidon.sol:PoseidonT6']: string;
}