export const AccountAddress: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, string>;
export const SuiAddress: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, string>;
export const StructTag: import("@mysten/bcs").BcsStruct<{
    address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    module: import("@mysten/bcs").BcsType<string, string, "string">;
    name: import("@mysten/bcs").BcsType<string, string, "string">;
    type_args: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
        length: number;
    }, string>;
}, string>;
export const TypeTag: any;
export const AccumulatorAddress: import("@mysten/bcs").BcsStruct<{
    address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    ty: any;
}, string>;
export const AccumulatorOperation: import("@mysten/bcs").BcsEnum<{
    Merge: any;
    Split: any;
}, "AccumulatorOperation">;
export const Digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const AccumulatorValue: import("@mysten/bcs").BcsEnum<{
    Integer: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    IntegerTuple: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
    EventDigest: import("@mysten/bcs").BcsType<[string, number[]][], Iterable<readonly [string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    }, string>;
}, "AccumulatorValue">;
export const AccumulatorWriteV1: import("@mysten/bcs").BcsStruct<{
    address: import("@mysten/bcs").BcsStruct<{
        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        ty: any;
    }, string>;
    operation: import("@mysten/bcs").BcsEnum<{
        Merge: any;
        Split: any;
    }, "AccumulatorOperation">;
    value: import("@mysten/bcs").BcsEnum<{
        Integer: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        IntegerTuple: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
        EventDigest: import("@mysten/bcs").BcsType<[string, number[]][], Iterable<readonly [string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
    }, "AccumulatorValue">;
}, string>;
export const JwkId: import("@mysten/bcs").BcsStruct<{
    iss: import("@mysten/bcs").BcsType<string, string, "string">;
    kid: import("@mysten/bcs").BcsType<string, string, "string">;
}, string>;
export const JWK: import("@mysten/bcs").BcsStruct<{
    kty: import("@mysten/bcs").BcsType<string, string, "string">;
    e: import("@mysten/bcs").BcsType<string, string, "string">;
    n: import("@mysten/bcs").BcsType<string, string, "string">;
    alg: import("@mysten/bcs").BcsType<string, string, "string">;
}, string>;
export const ActiveJwk: import("@mysten/bcs").BcsStruct<{
    jwk_id: import("@mysten/bcs").BcsStruct<{
        iss: import("@mysten/bcs").BcsType<string, string, "string">;
        kid: import("@mysten/bcs").BcsType<string, string, "string">;
    }, string>;
    jwk: import("@mysten/bcs").BcsStruct<{
        kty: import("@mysten/bcs").BcsType<string, string, "string">;
        e: import("@mysten/bcs").BcsType<string, string, "string">;
        n: import("@mysten/bcs").BcsType<string, string, "string">;
        alg: import("@mysten/bcs").BcsType<string, string, "string">;
    }, string>;
    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, string>;
export const AdditionalConsensusStateDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const Argument: import("@mysten/bcs").BcsEnum<{
    GasCoin: any;
    Input: import("@mysten/bcs").BcsType<number, number, "u16">;
    Result: import("@mysten/bcs").BcsType<number, number, "u16">;
    NestedResult: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number, number, "u16">, import("@mysten/bcs").BcsType<number, number, "u16">], string>;
}, "Argument">;
export const SequenceNumber: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
export const AuthenticatorStateExpire: import("@mysten/bcs").BcsStruct<{
    min_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    authenticator_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, string>;
export const AuthenticatorStateUpdate: import("@mysten/bcs").BcsStruct<{
    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    new_active_jwks: import("@mysten/bcs").BcsType<{
        jwk_id: {
            iss: string;
            kid: string;
        };
        jwk: {
            kty: string;
            e: string;
            n: string;
            alg: string;
        };
        epoch: string;
    }[], Iterable<{
        jwk_id: {
            iss: string;
            kid: string;
        };
        jwk: {
            kty: string;
            e: string;
            n: string;
            alg: string;
        };
        epoch: string | number | bigint;
    }> & {
        length: number;
    }, string>;
    authenticator_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, string>;
export const AuthorityPublicKeyBytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const AuthorityQuorumSignInfo: import("@mysten/bcs").BcsStruct<{
    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    signature: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    signers_map: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
}, string>;
export const ObjectID: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, string>;
export const ObjectDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const SharedObjectMutability: import("@mysten/bcs").BcsEnum<{
    Immutable: any;
    Mutable: any;
    NonExclusiveWrite: any;
}, "SharedObjectMutability">;
export const ObjectArg: import("@mysten/bcs").BcsEnum<{
    ImmOrOwnedObject: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">], string>;
    SharedObject: import("@mysten/bcs").BcsStruct<{
        id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        mutability: import("@mysten/bcs").BcsEnum<{
            Immutable: any;
            Mutable: any;
            NonExclusiveWrite: any;
        }, "SharedObjectMutability">;
    }, string>;
    Receiving: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">], string>;
}, "ObjectArg">;
export const Reservation: import("@mysten/bcs").BcsEnum<{
    MaxAmountU64: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, "Reservation">;
export const WithdrawalTypeArg: import("@mysten/bcs").BcsEnum<{
    Balance: any;
}, "WithdrawalTypeArg">;
export const WithdrawFrom: import("@mysten/bcs").BcsEnum<{
    Sender: any;
    Sponsor: any;
}, "WithdrawFrom">;
export const FundsWithdrawalArg: import("@mysten/bcs").BcsStruct<{
    reservation: import("@mysten/bcs").BcsEnum<{
        MaxAmountU64: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, "Reservation">;
    type_arg: import("@mysten/bcs").BcsEnum<{
        Balance: any;
    }, "WithdrawalTypeArg">;
    withdraw_from: import("@mysten/bcs").BcsEnum<{
        Sender: any;
        Sponsor: any;
    }, "WithdrawFrom">;
}, string>;
export const CallArg: import("@mysten/bcs").BcsEnum<{
    Pure: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    Object: import("@mysten/bcs").BcsEnum<{
        ImmOrOwnedObject: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">], string>;
        SharedObject: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            mutability: import("@mysten/bcs").BcsEnum<{
                Immutable: any;
                Mutable: any;
                NonExclusiveWrite: any;
            }, "SharedObjectMutability">;
        }, string>;
        Receiving: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">], string>;
    }, "ObjectArg">;
    FundsWithdrawal: import("@mysten/bcs").BcsStruct<{
        reservation: import("@mysten/bcs").BcsEnum<{
            MaxAmountU64: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, "Reservation">;
        type_arg: import("@mysten/bcs").BcsEnum<{
            Balance: any;
        }, "WithdrawalTypeArg">;
        withdraw_from: import("@mysten/bcs").BcsEnum<{
            Sender: any;
            Sponsor: any;
        }, "WithdrawFrom">;
    }, string>;
}, "CallArg">;
export const CheckpointDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const ChainIdentifier: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const ProtocolVersion: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
export const ChangeEpoch: import("@mysten/bcs").BcsStruct<{
    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    protocol_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    storage_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    computation_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    storage_rebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    non_refundable_storage_fee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    epoch_start_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    system_packages: import("@mysten/bcs").BcsType<[string, number[][], number[][]][], Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }]> & {
        length: number;
    }, string>;
}, string>;
export const CheckpointArtifactsDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const ECMHLiveObjectSetDigest: import("@mysten/bcs").BcsStruct<{
    digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
}, string>;
export const CheckpointCommitment: import("@mysten/bcs").BcsEnum<{
    ECMHLiveObjectSetDigest: import("@mysten/bcs").BcsStruct<{
        digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">;
    }, string>;
    CheckpointArtifactsDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
}, "CheckpointCommitment">;
export const TransactionDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const TransactionEffectsDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const ExecutionDigests: import("@mysten/bcs").BcsStruct<{
    transaction: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
    effects: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
}, string>;
export const GenericSignature: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const CheckpointContentsV1: import("@mysten/bcs").BcsStruct<{
    transactions: import("@mysten/bcs").BcsType<{
        transaction: number[];
        effects: number[];
    }[], Iterable<{
        transaction: Iterable<number> & {
            length: number;
        };
        effects: Iterable<number> & {
            length: number;
        };
    }> & {
        length: number;
    }, string>;
    user_signatures: import("@mysten/bcs").BcsType<number[][][], Iterable<Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }> & {
        length: number;
    }, string>;
}, string>;
export const CheckpointTransactionContents: import("@mysten/bcs").BcsStruct<{
    digest: import("@mysten/bcs").BcsStruct<{
        transaction: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">;
        effects: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">;
    }, string>;
    user_signatures: import("@mysten/bcs").BcsType<[number[], string][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint]> & {
        length: number;
    }, string>;
}, string>;
export const CheckpointContentsV2: import("@mysten/bcs").BcsStruct<{
    transactions: import("@mysten/bcs").BcsType<{
        digest: {
            transaction: number[];
            effects: number[];
        };
        user_signatures: [number[], string][];
    }[], Iterable<{
        digest: {
            transaction: Iterable<number> & {
                length: number;
            };
            effects: Iterable<number> & {
                length: number;
            };
        };
        user_signatures: Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint]> & {
            length: number;
        };
    }> & {
        length: number;
    }, string>;
}, string>;
export const CheckpointContents: import("@mysten/bcs").BcsEnum<{
    V1: import("@mysten/bcs").BcsStruct<{
        transactions: import("@mysten/bcs").BcsType<{
            transaction: number[];
            effects: number[];
        }[], Iterable<{
            transaction: Iterable<number> & {
                length: number;
            };
            effects: Iterable<number> & {
                length: number;
            };
        }> & {
            length: number;
        }, string>;
        user_signatures: import("@mysten/bcs").BcsType<number[][][], Iterable<Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }> & {
            length: number;
        }, string>;
    }, string>;
    V2: import("@mysten/bcs").BcsStruct<{
        transactions: import("@mysten/bcs").BcsType<{
            digest: {
                transaction: number[];
                effects: number[];
            };
            user_signatures: [number[], string][];
        }[], Iterable<{
            digest: {
                transaction: Iterable<number> & {
                    length: number;
                };
                effects: Iterable<number> & {
                    length: number;
                };
            };
            user_signatures: Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint]> & {
                length: number;
            };
        }> & {
            length: number;
        }, string>;
    }, string>;
}, "CheckpointContents">;
export const CheckpointContentsDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const GasCostSummary: import("@mysten/bcs").BcsStruct<{
    computationCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    storageCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    storageRebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    nonRefundableStorageFee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, string>;
export const EndOfEpochData: import("@mysten/bcs").BcsStruct<{
    nextEpochCommittee: import("@mysten/bcs").BcsType<[number[], string][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint]> & {
        length: number;
    }, string>;
    nextEpochProtocolVersion: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    epochCommitments: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        ECMHLiveObjectSetDigest: {
            digest: number[];
        };
        CheckpointArtifactsDigest: number[];
    }, "ECMHLiveObjectSetDigest" | "CheckpointArtifactsDigest">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        ECMHLiveObjectSetDigest: {
            digest: Iterable<number> & {
                length: number;
            };
        };
        CheckpointArtifactsDigest: Iterable<number> & {
            length: number;
        };
    }>> & {
        length: number;
    }, string>;
}, string>;
export const CheckpointSummary: import("@mysten/bcs").BcsStruct<{
    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    sequence_number: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    network_total_transactions: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    content_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
    previous_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "Option<vector<u8>>">;
    epoch_rolling_gas_cost_summary: import("@mysten/bcs").BcsStruct<{
        computationCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        storageCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        storageRebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        nonRefundableStorageFee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    checkpoint_commitments: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        ECMHLiveObjectSetDigest: {
            digest: number[];
        };
        CheckpointArtifactsDigest: number[];
    }, "ECMHLiveObjectSetDigest" | "CheckpointArtifactsDigest">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        ECMHLiveObjectSetDigest: {
            digest: Iterable<number> & {
                length: number;
            };
        };
        CheckpointArtifactsDigest: Iterable<number> & {
            length: number;
        };
    }>> & {
        length: number;
    }, string>;
    end_of_epoch_data: import("@mysten/bcs").BcsType<{
        nextEpochCommittee: [number[], string][];
        nextEpochProtocolVersion: string;
        epochCommitments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            ECMHLiveObjectSetDigest: {
                digest: number[];
            };
            CheckpointArtifactsDigest: number[];
        }, "ECMHLiveObjectSetDigest" | "CheckpointArtifactsDigest">[];
    }, {
        nextEpochCommittee: Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint]> & {
            length: number;
        };
        nextEpochProtocolVersion: string | number | bigint;
        epochCommitments: Iterable<import("@mysten/bcs").EnumInputShape<{
            ECMHLiveObjectSetDigest: {
                digest: Iterable<number> & {
                    length: number;
                };
            };
            CheckpointArtifactsDigest: Iterable<number> & {
                length: number;
            };
        }>> & {
            length: number;
        };
    }, `Option<${string}>`>;
    version_specific_data: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
}, string>;
export const Intent: import("@mysten/bcs").BcsStruct<{
    scope: import("@mysten/bcs").BcsType<number, number, "u8">;
    version: import("@mysten/bcs").BcsType<number, number, "u8">;
    app_id: import("@mysten/bcs").BcsType<number, number, "u8">;
}, string>;
export const StructInput: import("@mysten/bcs").BcsStruct<{
    address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    module: import("@mysten/bcs").BcsType<string, string, "string">;
    name: import("@mysten/bcs").BcsType<string, string, "string">;
    type_args: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
        length: number;
    }, string>;
}, string>;
export const TypeInput: any;
export const ProgrammableMoveCall: import("@mysten/bcs").BcsStruct<{
    package: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    module: import("@mysten/bcs").BcsType<string, string, "string">;
    function: import("@mysten/bcs").BcsType<string, string, "string">;
    type_arguments: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
        length: number;
    }, string>;
    arguments: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>> & {
        length: number;
    }, string>;
}, string>;
export const Command: import("@mysten/bcs").BcsEnum<{
    MoveCall: import("@mysten/bcs").BcsStruct<{
        package: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        module: import("@mysten/bcs").BcsType<string, string, "string">;
        function: import("@mysten/bcs").BcsType<string, string, "string">;
        type_arguments: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
            length: number;
        }, string>;
        arguments: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">[], Iterable<import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>> & {
            length: number;
        }, string>;
    }, string>;
    TransferObjects: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>> & {
        length: number;
    }, string>, import("@mysten/bcs").BcsEnum<{
        GasCoin: any;
        Input: import("@mysten/bcs").BcsType<number, number, "u16">;
        Result: import("@mysten/bcs").BcsType<number, number, "u16">;
        NestedResult: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number, number, "u16">, import("@mysten/bcs").BcsType<number, number, "u16">], string>;
    }, "Argument">], string>;
    SplitCoins: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsEnum<{
        GasCoin: any;
        Input: import("@mysten/bcs").BcsType<number, number, "u16">;
        Result: import("@mysten/bcs").BcsType<number, number, "u16">;
        NestedResult: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number, number, "u16">, import("@mysten/bcs").BcsType<number, number, "u16">], string>;
    }, "Argument">, import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>> & {
        length: number;
    }, string>], string>;
    MergeCoins: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsEnum<{
        GasCoin: any;
        Input: import("@mysten/bcs").BcsType<number, number, "u16">;
        Result: import("@mysten/bcs").BcsType<number, number, "u16">;
        NestedResult: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number, number, "u16">, import("@mysten/bcs").BcsType<number, number, "u16">], string>;
    }, "Argument">, import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>> & {
        length: number;
    }, string>], string>;
    Publish: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, string>, import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, string>], string>;
    MakeMoveVec: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<unknown, unknown, `Option<${any}>`>, import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: [number, number];
    }, "GasCoin" | "Input" | "Result" | "NestedResult">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        GasCoin: unknown;
        Input: number;
        Result: number;
        NestedResult: readonly [number, number];
    }>> & {
        length: number;
    }, string>], string>;
    Upgrade: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, string>, import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, string>, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>, import("@mysten/bcs").BcsEnum<{
        GasCoin: any;
        Input: import("@mysten/bcs").BcsType<number, number, "u16">;
        Result: import("@mysten/bcs").BcsType<number, number, "u16">;
        NestedResult: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number, number, "u16">, import("@mysten/bcs").BcsType<number, number, "u16">], string>;
    }, "Argument">], string>;
}, "Command">;
export const ProgrammableTransaction: import("@mysten/bcs").BcsStruct<{
    inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        Pure: number[];
        Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            ImmOrOwnedObject: [number[], string, number[]];
            SharedObject: {
                id: number[];
                initial_shared_version: string;
                mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Immutable: unknown;
                    Mutable: unknown;
                    NonExclusiveWrite: unknown;
                }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
            };
            Receiving: [number[], string, number[]];
        }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
        FundsWithdrawal: {
            reservation: {
                MaxAmountU64: string;
                $kind: "MaxAmountU64";
            };
            type_arg: {
                Balance: unknown;
                $kind: "Balance";
            };
            withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Sender: unknown;
                Sponsor: unknown;
            }, "Sender" | "Sponsor">;
        };
    }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        Pure: Iterable<number> & {
            length: number;
        };
        Object: import("@mysten/bcs").EnumInputShape<{
            ImmOrOwnedObject: readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }];
            SharedObject: {
                id: Iterable<number> & {
                    length: number;
                };
                initial_shared_version: string | number | bigint;
                mutability: import("@mysten/bcs").EnumInputShape<{
                    Immutable: unknown;
                    Mutable: unknown;
                    NonExclusiveWrite: unknown;
                }>;
            };
            Receiving: readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }];
        }>;
        FundsWithdrawal: {
            reservation: {
                MaxAmountU64: string | number | bigint;
            };
            type_arg: {
                Balance: unknown;
            };
            withdraw_from: import("@mysten/bcs").EnumInputShape<{
                Sender: unknown;
                Sponsor: unknown;
            }>;
        };
    }>> & {
        length: number;
    }, string>;
    commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        MoveCall: {
            package: number[];
            module: string;
            function: string;
            type_arguments: unknown[];
            arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
        };
        TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
        SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
        MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
        Publish: [number[][], number[][]];
        MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
        Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: [number, number];
        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
    }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        MoveCall: {
            package: Iterable<number> & {
                length: number;
            };
            module: string;
            function: string;
            type_arguments: Iterable<unknown> & {
                length: number;
            };
            arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            };
        };
        TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>> & {
            length: number;
        }, import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>];
        SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>> & {
            length: number;
        }];
        MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>> & {
            length: number;
        }];
        Publish: readonly [Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }];
        MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>> & {
            length: number;
        }];
        Upgrade: readonly [Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, Iterable<number> & {
            length: number;
        }, import("@mysten/bcs").EnumInputShape<{
            GasCoin: unknown;
            Input: number;
            Result: number;
            NestedResult: readonly [number, number];
        }>];
    }>> & {
        length: number;
    }, string>;
}, string>;
export const MoveObjectType_: import("@mysten/bcs").BcsEnum<{
    Other: import("@mysten/bcs").BcsStruct<{
        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        module: import("@mysten/bcs").BcsType<string, string, "string">;
        name: import("@mysten/bcs").BcsType<string, string, "string">;
        type_args: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
            length: number;
        }, string>;
    }, string>;
    GasCoin: any;
    StakedSui: any;
    Coin: any;
    SuiBalanceAccumulatorField: any;
    BalanceAccumulatorField: any;
}, "MoveObjectType_">;
export const MoveObjectType: import("@mysten/bcs").BcsEnum<{
    Other: import("@mysten/bcs").BcsStruct<{
        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        module: import("@mysten/bcs").BcsType<string, string, "string">;
        name: import("@mysten/bcs").BcsType<string, string, "string">;
        type_args: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
            length: number;
        }, string>;
    }, string>;
    GasCoin: any;
    StakedSui: any;
    Coin: any;
    SuiBalanceAccumulatorField: any;
    BalanceAccumulatorField: any;
}, "MoveObjectType_">;
export const MoveObject: import("@mysten/bcs").BcsStruct<{
    type: import("@mysten/bcs").BcsEnum<{
        Other: import("@mysten/bcs").BcsStruct<{
            address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            module: import("@mysten/bcs").BcsType<string, string, "string">;
            name: import("@mysten/bcs").BcsType<string, string, "string">;
            type_args: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                length: number;
            }, string>;
        }, string>;
        GasCoin: any;
        StakedSui: any;
        Coin: any;
        SuiBalanceAccumulatorField: any;
        BalanceAccumulatorField: any;
    }, "MoveObjectType_">;
    has_public_transfer: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
    version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    contents: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
}, string>;
export const TypeOrigin: import("@mysten/bcs").BcsStruct<{
    module_name: import("@mysten/bcs").BcsType<string, string, "string">;
    datatype_name: import("@mysten/bcs").BcsType<string, string, "string">;
    package: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
}, string>;
export const UpgradeInfo: import("@mysten/bcs").BcsStruct<{
    upgraded_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    upgraded_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, string>;
export const MovePackage: import("@mysten/bcs").BcsStruct<{
    id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    module_map: import("@mysten/bcs").BcsType<Map<string, number[]>, Map<string, Iterable<number> & {
        length: number;
    }>, "Map<string, vector<u8>>">;
    type_origin_table: import("@mysten/bcs").BcsType<{
        module_name: string;
        datatype_name: string;
        package: number[];
    }[], Iterable<{
        module_name: string;
        datatype_name: string;
        package: Iterable<number> & {
            length: number;
        };
    }> & {
        length: number;
    }, string>;
    linkage_table: import("@mysten/bcs").BcsType<Map<number[], {
        upgraded_id: number[];
        upgraded_version: string;
    }>, Map<Iterable<number> & {
        length: number;
    }, {
        upgraded_id: Iterable<number> & {
            length: number;
        };
        upgraded_version: string | number | bigint;
    }>, `Map<${string}, ${string}>`>;
}, string>;
export const Data: import("@mysten/bcs").BcsEnum<{
    Move: import("@mysten/bcs").BcsStruct<{
        type: import("@mysten/bcs").BcsEnum<{
            Other: import("@mysten/bcs").BcsStruct<{
                address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                module: import("@mysten/bcs").BcsType<string, string, "string">;
                name: import("@mysten/bcs").BcsType<string, string, "string">;
                type_args: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
            GasCoin: any;
            StakedSui: any;
            Coin: any;
            SuiBalanceAccumulatorField: any;
            BalanceAccumulatorField: any;
        }, "MoveObjectType_">;
        has_public_transfer: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        contents: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
    }, string>;
    Package: import("@mysten/bcs").BcsStruct<{
        id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        module_map: import("@mysten/bcs").BcsType<Map<string, number[]>, Map<string, Iterable<number> & {
            length: number;
        }>, "Map<string, vector<u8>>">;
        type_origin_table: import("@mysten/bcs").BcsType<{
            module_name: string;
            datatype_name: string;
            package: number[];
        }[], Iterable<{
            module_name: string;
            datatype_name: string;
            package: Iterable<number> & {
                length: number;
            };
        }> & {
            length: number;
        }, string>;
        linkage_table: import("@mysten/bcs").BcsType<Map<number[], {
            upgraded_id: number[];
            upgraded_version: string;
        }>, Map<Iterable<number> & {
            length: number;
        }, {
            upgraded_id: Iterable<number> & {
                length: number;
            };
            upgraded_version: string | number | bigint;
        }>, `Map<${string}, ${string}>`>;
    }, string>;
}, "Data">;
export const Owner: import("@mysten/bcs").BcsEnum<{
    AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    Shared: import("@mysten/bcs").BcsStruct<{
        initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    Immutable: any;
    ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
        start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
    }, string>;
}, "Owner">;
export const GenesisObject: import("@mysten/bcs").BcsEnum<{
    RawObject: import("@mysten/bcs").BcsStruct<{
        data: import("@mysten/bcs").BcsEnum<{
            Move: import("@mysten/bcs").BcsStruct<{
                type: import("@mysten/bcs").BcsEnum<{
                    Other: import("@mysten/bcs").BcsStruct<{
                        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                        module: import("@mysten/bcs").BcsType<string, string, "string">;
                        name: import("@mysten/bcs").BcsType<string, string, "string">;
                        type_args: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                            length: number;
                        }, string>;
                    }, string>;
                    GasCoin: any;
                    StakedSui: any;
                    Coin: any;
                    SuiBalanceAccumulatorField: any;
                    BalanceAccumulatorField: any;
                }, "MoveObjectType_">;
                has_public_transfer: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
                version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                contents: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            Package: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                module_map: import("@mysten/bcs").BcsType<Map<string, number[]>, Map<string, Iterable<number> & {
                    length: number;
                }>, "Map<string, vector<u8>>">;
                type_origin_table: import("@mysten/bcs").BcsType<{
                    module_name: string;
                    datatype_name: string;
                    package: number[];
                }[], Iterable<{
                    module_name: string;
                    datatype_name: string;
                    package: Iterable<number> & {
                        length: number;
                    };
                }> & {
                    length: number;
                }, string>;
                linkage_table: import("@mysten/bcs").BcsType<Map<number[], {
                    upgraded_id: number[];
                    upgraded_version: string;
                }>, Map<Iterable<number> & {
                    length: number;
                }, {
                    upgraded_id: Iterable<number> & {
                        length: number;
                    };
                    upgraded_version: string | number | bigint;
                }>, `Map<${string}, ${string}>`>;
            }, string>;
        }, "Data">;
        owner: import("@mysten/bcs").BcsEnum<{
            AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            Shared: import("@mysten/bcs").BcsStruct<{
                initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            Immutable: any;
            ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
                start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, "Owner">;
    }, string>;
}, "GenesisObject">;
export const GenesisTransaction: import("@mysten/bcs").BcsStruct<{
    objects: import("@mysten/bcs").BcsType<{
        RawObject: {
            data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Move: {
                    type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Other: {
                            address: number[];
                            module: string;
                            name: string;
                            type_args: unknown[];
                        };
                        GasCoin: unknown;
                        StakedSui: unknown;
                        Coin: unknown;
                        SuiBalanceAccumulatorField: unknown;
                        BalanceAccumulatorField: unknown;
                    }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                    has_public_transfer: boolean;
                    version: string;
                    contents: number[];
                };
                Package: {
                    id: number[];
                    version: string;
                    module_map: Map<string, number[]>;
                    type_origin_table: {
                        module_name: string;
                        datatype_name: string;
                        package: number[];
                    }[];
                    linkage_table: Map<number[], {
                        upgraded_id: number[];
                        upgraded_version: string;
                    }>;
                };
            }, "Move" | "Package">;
            owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
        };
        $kind: "RawObject";
    }[], Iterable<{
        RawObject: {
            data: import("@mysten/bcs").EnumInputShape<{
                Move: {
                    type: import("@mysten/bcs").EnumInputShape<{
                        Other: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            module: string;
                            name: string;
                            type_args: Iterable<unknown> & {
                                length: number;
                            };
                        };
                        GasCoin: unknown;
                        StakedSui: unknown;
                        Coin: unknown;
                        SuiBalanceAccumulatorField: unknown;
                        BalanceAccumulatorField: unknown;
                    }>;
                    has_public_transfer: boolean;
                    version: string | number | bigint;
                    contents: Iterable<number> & {
                        length: number;
                    };
                };
                Package: {
                    id: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    module_map: Map<string, Iterable<number> & {
                        length: number;
                    }>;
                    type_origin_table: Iterable<{
                        module_name: string;
                        datatype_name: string;
                        package: Iterable<number> & {
                            length: number;
                        };
                    }> & {
                        length: number;
                    };
                    linkage_table: Map<Iterable<number> & {
                        length: number;
                    }, {
                        upgraded_id: Iterable<number> & {
                            length: number;
                        };
                        upgraded_version: string | number | bigint;
                    }>;
                };
            }>;
            owner: import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>;
        };
    }> & {
        length: number;
    }, string>;
}, string>;
export const ConsensusCommitPrologue: import("@mysten/bcs").BcsStruct<{
    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, string>;
export const ExecutionTimeObservationKey: import("@mysten/bcs").BcsEnum<{
    MoveEntryPoint: import("@mysten/bcs").BcsStruct<{
        package: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        module: import("@mysten/bcs").BcsType<string, string, "string">;
        function: import("@mysten/bcs").BcsType<string, string, "string">;
        type_arguments: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
            length: number;
        }, string>;
    }, string>;
    TransferObjects: any;
    SplitCoins: any;
    MergeCoins: any;
    Publish: any;
    MakeMoveVec: any;
    Upgrade: any;
}, "ExecutionTimeObservationKey">;
export const Duration: import("@mysten/bcs").BcsStruct<{
    secs: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    nanos: import("@mysten/bcs").BcsType<number, number, "u32">;
}, string>;
export const StoredExecutionTimeObservations: import("@mysten/bcs").BcsEnum<{
    V1: import("@mysten/bcs").BcsType<[import("@mysten/bcs").EnumOutputShapeWithKeys<{
        MoveEntryPoint: {
            package: number[];
            module: string;
            function: string;
            type_arguments: unknown[];
        };
        TransferObjects: unknown;
        SplitCoins: unknown;
        MergeCoins: unknown;
        Publish: unknown;
        MakeMoveVec: unknown;
        Upgrade: unknown;
    }, "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade" | "MoveEntryPoint">, [number[], {
        secs: string;
        nanos: number;
    }][]][], Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
        MoveEntryPoint: {
            package: Iterable<number> & {
                length: number;
            };
            module: string;
            function: string;
            type_arguments: Iterable<unknown> & {
                length: number;
            };
        };
        TransferObjects: unknown;
        SplitCoins: unknown;
        MergeCoins: unknown;
        Publish: unknown;
        MakeMoveVec: unknown;
        Upgrade: unknown;
    }>, Iterable<readonly [Iterable<number> & {
        length: number;
    }, {
        secs: string | number | bigint;
        nanos: number;
    }]> & {
        length: number;
    }]> & {
        length: number;
    }, string>;
}, "StoredExecutionTimeObservations">;
export const WriteAccumulatorStorageCost: import("@mysten/bcs").BcsStruct<{
    storage_cost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, string>;
export const EndOfEpochTransactionKind: import("@mysten/bcs").BcsEnum<{
    ChangeEpoch: import("@mysten/bcs").BcsStruct<{
        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        protocol_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        storage_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        computation_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        storage_rebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        non_refundable_storage_fee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        epoch_start_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        system_packages: import("@mysten/bcs").BcsType<[string, number[][], number[][]][], Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
    }, string>;
    AuthenticatorStateCreate: any;
    AuthenticatorStateExpire: import("@mysten/bcs").BcsStruct<{
        min_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        authenticator_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    RandomnessStateCreate: any;
    DenyListStateCreate: any;
    BridgeStateCreate: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
    BridgeCommitteeInit: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    StoreExecutionTimeObservations: import("@mysten/bcs").BcsEnum<{
        V1: import("@mysten/bcs").BcsType<[import("@mysten/bcs").EnumOutputShapeWithKeys<{
            MoveEntryPoint: {
                package: number[];
                module: string;
                function: string;
                type_arguments: unknown[];
            };
            TransferObjects: unknown;
            SplitCoins: unknown;
            MergeCoins: unknown;
            Publish: unknown;
            MakeMoveVec: unknown;
            Upgrade: unknown;
        }, "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade" | "MoveEntryPoint">, [number[], {
            secs: string;
            nanos: number;
        }][]][], Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
            MoveEntryPoint: {
                package: Iterable<number> & {
                    length: number;
                };
                module: string;
                function: string;
                type_arguments: Iterable<unknown> & {
                    length: number;
                };
            };
            TransferObjects: unknown;
            SplitCoins: unknown;
            MergeCoins: unknown;
            Publish: unknown;
            MakeMoveVec: unknown;
            Upgrade: unknown;
        }>, Iterable<readonly [Iterable<number> & {
            length: number;
        }, {
            secs: string | number | bigint;
            nanos: number;
        }]> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
    }, "StoredExecutionTimeObservations">;
    AccumulatorRootCreate: any;
    CoinRegistryCreate: any;
    DisplayRegistryCreate: any;
    AddressAliasStateCreate: any;
    WriteAccumulatorStorageCost: import("@mysten/bcs").BcsStruct<{
        storage_cost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
}, "EndOfEpochTransactionKind">;
export const RandomnessRound: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
export const RandomnessStateUpdate: import("@mysten/bcs").BcsStruct<{
    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    randomness_round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    random_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    randomness_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, string>;
export const ConsensusCommitDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const ConsensusCommitPrologueV2: import("@mysten/bcs").BcsStruct<{
    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
}, string>;
export const ConsensusDeterminedVersionAssignments: import("@mysten/bcs").BcsEnum<{
    CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint]> & {
        length: number;
    }]> & {
        length: number;
    }, string>;
    CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, Iterable<readonly [readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint], string | number | bigint]> & {
        length: number;
    }]> & {
        length: number;
    }, string>;
}, "ConsensusDeterminedVersionAssignments">;
export const ConsensusCommitPrologueV3: import("@mysten/bcs").BcsStruct<{
    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
    commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
    consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
        CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint]> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
        CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, Iterable<readonly [readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint], string | number | bigint]> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
    }, "ConsensusDeterminedVersionAssignments">;
}, string>;
export const ConsensusCommitPrologueV4: import("@mysten/bcs").BcsStruct<{
    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
    commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
    consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
        CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint]> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
        CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, Iterable<readonly [readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint], string | number | bigint]> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
    }, "ConsensusDeterminedVersionAssignments">;
    additional_state_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
}, string>;
export const TransactionKind: import("@mysten/bcs").BcsEnum<{
    ProgrammableTransaction: import("@mysten/bcs").BcsStruct<{
        inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Pure: number[];
            Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                ImmOrOwnedObject: [number[], string, number[]];
                SharedObject: {
                    id: number[];
                    initial_shared_version: string;
                    mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Immutable: unknown;
                        Mutable: unknown;
                        NonExclusiveWrite: unknown;
                    }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                };
                Receiving: [number[], string, number[]];
            }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
            FundsWithdrawal: {
                reservation: {
                    MaxAmountU64: string;
                    $kind: "MaxAmountU64";
                };
                type_arg: {
                    Balance: unknown;
                    $kind: "Balance";
                };
                withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Sender: unknown;
                    Sponsor: unknown;
                }, "Sender" | "Sponsor">;
            };
        }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
            Pure: Iterable<number> & {
                length: number;
            };
            Object: import("@mysten/bcs").EnumInputShape<{
                ImmOrOwnedObject: readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }];
                SharedObject: {
                    id: Iterable<number> & {
                        length: number;
                    };
                    initial_shared_version: string | number | bigint;
                    mutability: import("@mysten/bcs").EnumInputShape<{
                        Immutable: unknown;
                        Mutable: unknown;
                        NonExclusiveWrite: unknown;
                    }>;
                };
                Receiving: readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }];
            }>;
            FundsWithdrawal: {
                reservation: {
                    MaxAmountU64: string | number | bigint;
                };
                type_arg: {
                    Balance: unknown;
                };
                withdraw_from: import("@mysten/bcs").EnumInputShape<{
                    Sender: unknown;
                    Sponsor: unknown;
                }>;
            };
        }>> & {
            length: number;
        }, string>;
        commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
            MoveCall: {
                package: number[];
                module: string;
                function: string;
                type_arguments: unknown[];
                arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
            };
            TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
            SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
            MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
            Publish: [number[][], number[][]];
            MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
            Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
        }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
            MoveCall: {
                package: Iterable<number> & {
                    length: number;
                };
                module: string;
                function: string;
                type_arguments: Iterable<unknown> & {
                    length: number;
                };
                arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                };
            };
            TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>];
            SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }];
            MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }];
            Publish: readonly [Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }];
            MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }];
            Upgrade: readonly [Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<number> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>];
        }>> & {
            length: number;
        }, string>;
    }, string>;
    ChangeEpoch: import("@mysten/bcs").BcsStruct<{
        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        protocol_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        storage_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        computation_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        storage_rebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        non_refundable_storage_fee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        epoch_start_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        system_packages: import("@mysten/bcs").BcsType<[string, number[][], number[][]][], Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
    }, string>;
    Genesis: import("@mysten/bcs").BcsStruct<{
        objects: import("@mysten/bcs").BcsType<{
            RawObject: {
                data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Move: {
                        type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Other: {
                                address: number[];
                                module: string;
                                name: string;
                                type_args: unknown[];
                            };
                            GasCoin: unknown;
                            StakedSui: unknown;
                            Coin: unknown;
                            SuiBalanceAccumulatorField: unknown;
                            BalanceAccumulatorField: unknown;
                        }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                        has_public_transfer: boolean;
                        version: string;
                        contents: number[];
                    };
                    Package: {
                        id: number[];
                        version: string;
                        module_map: Map<string, number[]>;
                        type_origin_table: {
                            module_name: string;
                            datatype_name: string;
                            package: number[];
                        }[];
                        linkage_table: Map<number[], {
                            upgraded_id: number[];
                            upgraded_version: string;
                        }>;
                    };
                }, "Move" | "Package">;
                owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
            };
            $kind: "RawObject";
        }[], Iterable<{
            RawObject: {
                data: import("@mysten/bcs").EnumInputShape<{
                    Move: {
                        type: import("@mysten/bcs").EnumInputShape<{
                            Other: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                module: string;
                                name: string;
                                type_args: Iterable<unknown> & {
                                    length: number;
                                };
                            };
                            GasCoin: unknown;
                            StakedSui: unknown;
                            Coin: unknown;
                            SuiBalanceAccumulatorField: unknown;
                            BalanceAccumulatorField: unknown;
                        }>;
                        has_public_transfer: boolean;
                        version: string | number | bigint;
                        contents: Iterable<number> & {
                            length: number;
                        };
                    };
                    Package: {
                        id: Iterable<number> & {
                            length: number;
                        };
                        version: string | number | bigint;
                        module_map: Map<string, Iterable<number> & {
                            length: number;
                        }>;
                        type_origin_table: Iterable<{
                            module_name: string;
                            datatype_name: string;
                            package: Iterable<number> & {
                                length: number;
                            };
                        }> & {
                            length: number;
                        };
                        linkage_table: Map<Iterable<number> & {
                            length: number;
                        }, {
                            upgraded_id: Iterable<number> & {
                                length: number;
                            };
                            upgraded_version: string | number | bigint;
                        }>;
                    };
                }>;
                owner: import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>;
            };
        }> & {
            length: number;
        }, string>;
    }, string>;
    ConsensusCommitPrologue: import("@mysten/bcs").BcsStruct<{
        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    AuthenticatorStateUpdate: import("@mysten/bcs").BcsStruct<{
        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        new_active_jwks: import("@mysten/bcs").BcsType<{
            jwk_id: {
                iss: string;
                kid: string;
            };
            jwk: {
                kty: string;
                e: string;
                n: string;
                alg: string;
            };
            epoch: string;
        }[], Iterable<{
            jwk_id: {
                iss: string;
                kid: string;
            };
            jwk: {
                kty: string;
                e: string;
                n: string;
                alg: string;
            };
            epoch: string | number | bigint;
        }> & {
            length: number;
        }, string>;
        authenticator_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    EndOfEpochTransaction: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        ChangeEpoch: {
            epoch: string;
            protocol_version: string;
            storage_charge: string;
            computation_charge: string;
            storage_rebate: string;
            non_refundable_storage_fee: string;
            epoch_start_timestamp_ms: string;
            system_packages: [string, number[][], number[][]][];
        };
        AuthenticatorStateCreate: unknown;
        AuthenticatorStateExpire: {
            min_epoch: string;
            authenticator_obj_initial_shared_version: string;
        };
        RandomnessStateCreate: unknown;
        DenyListStateCreate: unknown;
        BridgeStateCreate: number[];
        BridgeCommitteeInit: string;
        StoreExecutionTimeObservations: {
            V1: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                MoveEntryPoint: {
                    package: number[];
                    module: string;
                    function: string;
                    type_arguments: unknown[];
                };
                TransferObjects: unknown;
                SplitCoins: unknown;
                MergeCoins: unknown;
                Publish: unknown;
                MakeMoveVec: unknown;
                Upgrade: unknown;
            }, "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade" | "MoveEntryPoint">, [number[], {
                secs: string;
                nanos: number;
            }][]][];
            $kind: "V1";
        };
        AccumulatorRootCreate: unknown;
        CoinRegistryCreate: unknown;
        DisplayRegistryCreate: unknown;
        AddressAliasStateCreate: unknown;
        WriteAccumulatorStorageCost: {
            storage_cost: string;
        };
    }, "AuthenticatorStateExpire" | "ChangeEpoch" | "WriteAccumulatorStorageCost" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit" | "StoreExecutionTimeObservations" | "AccumulatorRootCreate" | "CoinRegistryCreate" | "DisplayRegistryCreate" | "AddressAliasStateCreate">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        ChangeEpoch: {
            epoch: string | number | bigint;
            protocol_version: string | number | bigint;
            storage_charge: string | number | bigint;
            computation_charge: string | number | bigint;
            storage_rebate: string | number | bigint;
            non_refundable_storage_fee: string | number | bigint;
            epoch_start_timestamp_ms: string | number | bigint;
            system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }]> & {
                length: number;
            };
        };
        AuthenticatorStateCreate: unknown;
        AuthenticatorStateExpire: {
            min_epoch: string | number | bigint;
            authenticator_obj_initial_shared_version: string | number | bigint;
        };
        RandomnessStateCreate: unknown;
        DenyListStateCreate: unknown;
        BridgeStateCreate: Iterable<number> & {
            length: number;
        };
        BridgeCommitteeInit: string | number | bigint;
        StoreExecutionTimeObservations: {
            V1: Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
                MoveEntryPoint: {
                    package: Iterable<number> & {
                        length: number;
                    };
                    module: string;
                    function: string;
                    type_arguments: Iterable<unknown> & {
                        length: number;
                    };
                };
                TransferObjects: unknown;
                SplitCoins: unknown;
                MergeCoins: unknown;
                Publish: unknown;
                MakeMoveVec: unknown;
                Upgrade: unknown;
            }>, Iterable<readonly [Iterable<number> & {
                length: number;
            }, {
                secs: string | number | bigint;
                nanos: number;
            }]> & {
                length: number;
            }]> & {
                length: number;
            };
        };
        AccumulatorRootCreate: unknown;
        CoinRegistryCreate: unknown;
        DisplayRegistryCreate: unknown;
        AddressAliasStateCreate: unknown;
        WriteAccumulatorStorageCost: {
            storage_cost: string | number | bigint;
        };
    }>> & {
        length: number;
    }, string>;
    RandomnessStateUpdate: import("@mysten/bcs").BcsStruct<{
        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        randomness_round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        random_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        randomness_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    ConsensusCommitPrologueV2: import("@mysten/bcs").BcsStruct<{
        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">;
    }, string>;
    ConsensusCommitPrologueV3: import("@mysten/bcs").BcsStruct<{
        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
        commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">;
        consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
            CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint]> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint], string | number | bigint]> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
        }, "ConsensusDeterminedVersionAssignments">;
    }, string>;
    ConsensusCommitPrologueV4: import("@mysten/bcs").BcsStruct<{
        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
        commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">;
        consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
            CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint]> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint], string | number | bigint]> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
        }, "ConsensusDeterminedVersionAssignments">;
        additional_state_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">;
    }, string>;
    ProgrammableSystemTransaction: import("@mysten/bcs").BcsStruct<{
        inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Pure: number[];
            Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                ImmOrOwnedObject: [number[], string, number[]];
                SharedObject: {
                    id: number[];
                    initial_shared_version: string;
                    mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Immutable: unknown;
                        Mutable: unknown;
                        NonExclusiveWrite: unknown;
                    }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                };
                Receiving: [number[], string, number[]];
            }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
            FundsWithdrawal: {
                reservation: {
                    MaxAmountU64: string;
                    $kind: "MaxAmountU64";
                };
                type_arg: {
                    Balance: unknown;
                    $kind: "Balance";
                };
                withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Sender: unknown;
                    Sponsor: unknown;
                }, "Sender" | "Sponsor">;
            };
        }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
            Pure: Iterable<number> & {
                length: number;
            };
            Object: import("@mysten/bcs").EnumInputShape<{
                ImmOrOwnedObject: readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }];
                SharedObject: {
                    id: Iterable<number> & {
                        length: number;
                    };
                    initial_shared_version: string | number | bigint;
                    mutability: import("@mysten/bcs").EnumInputShape<{
                        Immutable: unknown;
                        Mutable: unknown;
                        NonExclusiveWrite: unknown;
                    }>;
                };
                Receiving: readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }];
            }>;
            FundsWithdrawal: {
                reservation: {
                    MaxAmountU64: string | number | bigint;
                };
                type_arg: {
                    Balance: unknown;
                };
                withdraw_from: import("@mysten/bcs").EnumInputShape<{
                    Sender: unknown;
                    Sponsor: unknown;
                }>;
            };
        }>> & {
            length: number;
        }, string>;
        commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
            MoveCall: {
                package: number[];
                module: string;
                function: string;
                type_arguments: unknown[];
                arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
            };
            TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
            SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
            MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
            Publish: [number[][], number[][]];
            MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
            Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: [number, number];
            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
        }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
            MoveCall: {
                package: Iterable<number> & {
                    length: number;
                };
                module: string;
                function: string;
                type_arguments: Iterable<unknown> & {
                    length: number;
                };
                arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                };
            };
            TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>];
            SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }];
            MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }];
            Publish: readonly [Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }];
            MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>> & {
                length: number;
            }];
            Upgrade: readonly [Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<number> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                GasCoin: unknown;
                Input: number;
                Result: number;
                NestedResult: readonly [number, number];
            }>];
        }>> & {
            length: number;
        }, string>;
    }, string>;
}, "TransactionKind">;
export const GasData: import("@mysten/bcs").BcsStruct<{
    payment: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    }, string>;
    owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    price: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    budget: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, string>;
export const TransactionExpiration: import("@mysten/bcs").BcsEnum<{
    None: any;
    Epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    ValidDuring: import("@mysten/bcs").BcsStruct<{
        min_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
        max_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
        min_timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
        max_timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
        chain: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">;
        nonce: import("@mysten/bcs").BcsType<number, number, "u32">;
    }, string>;
}, "TransactionExpiration">;
export const TransactionDataV1: import("@mysten/bcs").BcsStruct<{
    kind: import("@mysten/bcs").BcsEnum<{
        ProgrammableTransaction: import("@mysten/bcs").BcsStruct<{
            inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Pure: number[];
                Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ImmOrOwnedObject: [number[], string, number[]];
                    SharedObject: {
                        id: number[];
                        initial_shared_version: string;
                        mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Immutable: unknown;
                            Mutable: unknown;
                            NonExclusiveWrite: unknown;
                        }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                    };
                    Receiving: [number[], string, number[]];
                }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                FundsWithdrawal: {
                    reservation: {
                        MaxAmountU64: string;
                        $kind: "MaxAmountU64";
                    };
                    type_arg: {
                        Balance: unknown;
                        $kind: "Balance";
                    };
                    withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Sender: unknown;
                        Sponsor: unknown;
                    }, "Sender" | "Sponsor">;
                };
            }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                Pure: Iterable<number> & {
                    length: number;
                };
                Object: import("@mysten/bcs").EnumInputShape<{
                    ImmOrOwnedObject: readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                    SharedObject: {
                        id: Iterable<number> & {
                            length: number;
                        };
                        initial_shared_version: string | number | bigint;
                        mutability: import("@mysten/bcs").EnumInputShape<{
                            Immutable: unknown;
                            Mutable: unknown;
                            NonExclusiveWrite: unknown;
                        }>;
                    };
                    Receiving: readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                }>;
                FundsWithdrawal: {
                    reservation: {
                        MaxAmountU64: string | number | bigint;
                    };
                    type_arg: {
                        Balance: unknown;
                    };
                    withdraw_from: import("@mysten/bcs").EnumInputShape<{
                        Sender: unknown;
                        Sponsor: unknown;
                    }>;
                };
            }>> & {
                length: number;
            }, string>;
            commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                MoveCall: {
                    package: number[];
                    module: string;
                    function: string;
                    type_arguments: unknown[];
                    arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                };
                TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                Publish: [number[][], number[][]];
                MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">];
            }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                MoveCall: {
                    package: Iterable<number> & {
                        length: number;
                    };
                    module: string;
                    function: string;
                    type_arguments: Iterable<unknown> & {
                        length: number;
                    };
                    arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    };
                };
                TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>];
                SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }];
                MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }];
                Publish: readonly [Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }];
                MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }];
                Upgrade: readonly [Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<number> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>];
            }>> & {
                length: number;
            }, string>;
        }, string>;
        ChangeEpoch: import("@mysten/bcs").BcsStruct<{
            epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            protocol_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            storage_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            computation_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            storage_rebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            non_refundable_storage_fee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            epoch_start_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            system_packages: import("@mysten/bcs").BcsType<[string, number[][], number[][]][], Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
        }, string>;
        Genesis: import("@mysten/bcs").BcsStruct<{
            objects: import("@mysten/bcs").BcsType<{
                RawObject: {
                    data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Move: {
                            type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Other: {
                                    address: number[];
                                    module: string;
                                    name: string;
                                    type_args: unknown[];
                                };
                                GasCoin: unknown;
                                StakedSui: unknown;
                                Coin: unknown;
                                SuiBalanceAccumulatorField: unknown;
                                BalanceAccumulatorField: unknown;
                            }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                            has_public_transfer: boolean;
                            version: string;
                            contents: number[];
                        };
                        Package: {
                            id: number[];
                            version: string;
                            module_map: Map<string, number[]>;
                            type_origin_table: {
                                module_name: string;
                                datatype_name: string;
                                package: number[];
                            }[];
                            linkage_table: Map<number[], {
                                upgraded_id: number[];
                                upgraded_version: string;
                            }>;
                        };
                    }, "Move" | "Package">;
                    owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        AddressOwner: number[];
                        ObjectOwner: number[];
                        Shared: {
                            initial_shared_version: string;
                        };
                        Immutable: unknown;
                        ConsensusAddressOwner: {
                            start_version: string;
                            owner: number[];
                        };
                    }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
                };
                $kind: "RawObject";
            }[], Iterable<{
                RawObject: {
                    data: import("@mysten/bcs").EnumInputShape<{
                        Move: {
                            type: import("@mysten/bcs").EnumInputShape<{
                                Other: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    module: string;
                                    name: string;
                                    type_args: Iterable<unknown> & {
                                        length: number;
                                    };
                                };
                                GasCoin: unknown;
                                StakedSui: unknown;
                                Coin: unknown;
                                SuiBalanceAccumulatorField: unknown;
                                BalanceAccumulatorField: unknown;
                            }>;
                            has_public_transfer: boolean;
                            version: string | number | bigint;
                            contents: Iterable<number> & {
                                length: number;
                            };
                        };
                        Package: {
                            id: Iterable<number> & {
                                length: number;
                            };
                            version: string | number | bigint;
                            module_map: Map<string, Iterable<number> & {
                                length: number;
                            }>;
                            type_origin_table: Iterable<{
                                module_name: string;
                                datatype_name: string;
                                package: Iterable<number> & {
                                    length: number;
                                };
                            }> & {
                                length: number;
                            };
                            linkage_table: Map<Iterable<number> & {
                                length: number;
                            }, {
                                upgraded_id: Iterable<number> & {
                                    length: number;
                                };
                                upgraded_version: string | number | bigint;
                            }>;
                        };
                    }>;
                    owner: import("@mysten/bcs").EnumInputShape<{
                        AddressOwner: Iterable<number> & {
                            length: number;
                        };
                        ObjectOwner: Iterable<number> & {
                            length: number;
                        };
                        Shared: {
                            initial_shared_version: string | number | bigint;
                        };
                        Immutable: unknown;
                        ConsensusAddressOwner: {
                            start_version: string | number | bigint;
                            owner: Iterable<number> & {
                                length: number;
                            };
                        };
                    }>;
                };
            }> & {
                length: number;
            }, string>;
        }, string>;
        ConsensusCommitPrologue: import("@mysten/bcs").BcsStruct<{
            epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        AuthenticatorStateUpdate: import("@mysten/bcs").BcsStruct<{
            epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            new_active_jwks: import("@mysten/bcs").BcsType<{
                jwk_id: {
                    iss: string;
                    kid: string;
                };
                jwk: {
                    kty: string;
                    e: string;
                    n: string;
                    alg: string;
                };
                epoch: string;
            }[], Iterable<{
                jwk_id: {
                    iss: string;
                    kid: string;
                };
                jwk: {
                    kty: string;
                    e: string;
                    n: string;
                    alg: string;
                };
                epoch: string | number | bigint;
            }> & {
                length: number;
            }, string>;
            authenticator_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        EndOfEpochTransaction: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
            ChangeEpoch: {
                epoch: string;
                protocol_version: string;
                storage_charge: string;
                computation_charge: string;
                storage_rebate: string;
                non_refundable_storage_fee: string;
                epoch_start_timestamp_ms: string;
                system_packages: [string, number[][], number[][]][];
            };
            AuthenticatorStateCreate: unknown;
            AuthenticatorStateExpire: {
                min_epoch: string;
                authenticator_obj_initial_shared_version: string;
            };
            RandomnessStateCreate: unknown;
            DenyListStateCreate: unknown;
            BridgeStateCreate: number[];
            BridgeCommitteeInit: string;
            StoreExecutionTimeObservations: {
                V1: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    MoveEntryPoint: {
                        package: number[];
                        module: string;
                        function: string;
                        type_arguments: unknown[];
                    };
                    TransferObjects: unknown;
                    SplitCoins: unknown;
                    MergeCoins: unknown;
                    Publish: unknown;
                    MakeMoveVec: unknown;
                    Upgrade: unknown;
                }, "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade" | "MoveEntryPoint">, [number[], {
                    secs: string;
                    nanos: number;
                }][]][];
                $kind: "V1";
            };
            AccumulatorRootCreate: unknown;
            CoinRegistryCreate: unknown;
            DisplayRegistryCreate: unknown;
            AddressAliasStateCreate: unknown;
            WriteAccumulatorStorageCost: {
                storage_cost: string;
            };
        }, "AuthenticatorStateExpire" | "ChangeEpoch" | "WriteAccumulatorStorageCost" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit" | "StoreExecutionTimeObservations" | "AccumulatorRootCreate" | "CoinRegistryCreate" | "DisplayRegistryCreate" | "AddressAliasStateCreate">[], Iterable<import("@mysten/bcs").EnumInputShape<{
            ChangeEpoch: {
                epoch: string | number | bigint;
                protocol_version: string | number | bigint;
                storage_charge: string | number | bigint;
                computation_charge: string | number | bigint;
                storage_rebate: string | number | bigint;
                non_refundable_storage_fee: string | number | bigint;
                epoch_start_timestamp_ms: string | number | bigint;
                system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }]> & {
                    length: number;
                };
            };
            AuthenticatorStateCreate: unknown;
            AuthenticatorStateExpire: {
                min_epoch: string | number | bigint;
                authenticator_obj_initial_shared_version: string | number | bigint;
            };
            RandomnessStateCreate: unknown;
            DenyListStateCreate: unknown;
            BridgeStateCreate: Iterable<number> & {
                length: number;
            };
            BridgeCommitteeInit: string | number | bigint;
            StoreExecutionTimeObservations: {
                V1: Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
                    MoveEntryPoint: {
                        package: Iterable<number> & {
                            length: number;
                        };
                        module: string;
                        function: string;
                        type_arguments: Iterable<unknown> & {
                            length: number;
                        };
                    };
                    TransferObjects: unknown;
                    SplitCoins: unknown;
                    MergeCoins: unknown;
                    Publish: unknown;
                    MakeMoveVec: unknown;
                    Upgrade: unknown;
                }>, Iterable<readonly [Iterable<number> & {
                    length: number;
                }, {
                    secs: string | number | bigint;
                    nanos: number;
                }]> & {
                    length: number;
                }]> & {
                    length: number;
                };
            };
            AccumulatorRootCreate: unknown;
            CoinRegistryCreate: unknown;
            DisplayRegistryCreate: unknown;
            AddressAliasStateCreate: unknown;
            WriteAccumulatorStorageCost: {
                storage_cost: string | number | bigint;
            };
        }>> & {
            length: number;
        }, string>;
        RandomnessStateUpdate: import("@mysten/bcs").BcsStruct<{
            epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            randomness_round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            random_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            randomness_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        ConsensusCommitPrologueV2: import("@mysten/bcs").BcsStruct<{
            epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">;
        }, string>;
        ConsensusCommitPrologueV3: import("@mysten/bcs").BcsStruct<{
            epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
            commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">;
            consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
                CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
                    length: number;
                }, Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint]> & {
                    length: number;
                }]> & {
                    length: number;
                }, string>;
                CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
                    length: number;
                }, Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint], string | number | bigint]> & {
                    length: number;
                }]> & {
                    length: number;
                }, string>;
            }, "ConsensusDeterminedVersionAssignments">;
        }, string>;
        ConsensusCommitPrologueV4: import("@mysten/bcs").BcsStruct<{
            epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
            commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">;
            consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
                CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
                    length: number;
                }, Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint]> & {
                    length: number;
                }]> & {
                    length: number;
                }, string>;
                CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
                    length: number;
                }, Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint], string | number | bigint]> & {
                    length: number;
                }]> & {
                    length: number;
                }, string>;
            }, "ConsensusDeterminedVersionAssignments">;
            additional_state_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">;
        }, string>;
        ProgrammableSystemTransaction: import("@mysten/bcs").BcsStruct<{
            inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Pure: number[];
                Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ImmOrOwnedObject: [number[], string, number[]];
                    SharedObject: {
                        id: number[];
                        initial_shared_version: string;
                        mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Immutable: unknown;
                            Mutable: unknown;
                            NonExclusiveWrite: unknown;
                        }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                    };
                    Receiving: [number[], string, number[]];
                }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                FundsWithdrawal: {
                    reservation: {
                        MaxAmountU64: string;
                        $kind: "MaxAmountU64";
                    };
                    type_arg: {
                        Balance: unknown;
                        $kind: "Balance";
                    };
                    withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Sender: unknown;
                        Sponsor: unknown;
                    }, "Sender" | "Sponsor">;
                };
            }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                Pure: Iterable<number> & {
                    length: number;
                };
                Object: import("@mysten/bcs").EnumInputShape<{
                    ImmOrOwnedObject: readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                    SharedObject: {
                        id: Iterable<number> & {
                            length: number;
                        };
                        initial_shared_version: string | number | bigint;
                        mutability: import("@mysten/bcs").EnumInputShape<{
                            Immutable: unknown;
                            Mutable: unknown;
                            NonExclusiveWrite: unknown;
                        }>;
                    };
                    Receiving: readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                }>;
                FundsWithdrawal: {
                    reservation: {
                        MaxAmountU64: string | number | bigint;
                    };
                    type_arg: {
                        Balance: unknown;
                    };
                    withdraw_from: import("@mysten/bcs").EnumInputShape<{
                        Sender: unknown;
                        Sponsor: unknown;
                    }>;
                };
            }>> & {
                length: number;
            }, string>;
            commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                MoveCall: {
                    package: number[];
                    module: string;
                    function: string;
                    type_arguments: unknown[];
                    arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                };
                TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                Publish: [number[][], number[][]];
                MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: [number, number];
                }, "GasCoin" | "Input" | "Result" | "NestedResult">];
            }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                MoveCall: {
                    package: Iterable<number> & {
                        length: number;
                    };
                    module: string;
                    function: string;
                    type_arguments: Iterable<unknown> & {
                        length: number;
                    };
                    arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    };
                };
                TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>];
                SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }];
                MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }];
                Publish: readonly [Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }];
                MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>> & {
                    length: number;
                }];
                Upgrade: readonly [Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<number> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    GasCoin: unknown;
                    Input: number;
                    Result: number;
                    NestedResult: readonly [number, number];
                }>];
            }>> & {
                length: number;
            }, string>;
        }, string>;
    }, "TransactionKind">;
    sender: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    gas_data: import("@mysten/bcs").BcsStruct<{
        payment: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
        owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        price: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        budget: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    expiration: import("@mysten/bcs").BcsEnum<{
        None: any;
        Epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        ValidDuring: import("@mysten/bcs").BcsStruct<{
            min_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
            max_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
            min_timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
            max_timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
            chain: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">;
            nonce: import("@mysten/bcs").BcsType<number, number, "u32">;
        }, string>;
    }, "TransactionExpiration">;
}, string>;
export const TransactionData: import("@mysten/bcs").BcsEnum<{
    V1: import("@mysten/bcs").BcsStruct<{
        kind: import("@mysten/bcs").BcsEnum<{
            ProgrammableTransaction: import("@mysten/bcs").BcsStruct<{
                inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Pure: number[];
                    Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        ImmOrOwnedObject: [number[], string, number[]];
                        SharedObject: {
                            id: number[];
                            initial_shared_version: string;
                            mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Immutable: unknown;
                                Mutable: unknown;
                                NonExclusiveWrite: unknown;
                            }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                        };
                        Receiving: [number[], string, number[]];
                    }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                    FundsWithdrawal: {
                        reservation: {
                            MaxAmountU64: string;
                            $kind: "MaxAmountU64";
                        };
                        type_arg: {
                            Balance: unknown;
                            $kind: "Balance";
                        };
                        withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Sender: unknown;
                            Sponsor: unknown;
                        }, "Sender" | "Sponsor">;
                    };
                }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                    Pure: Iterable<number> & {
                        length: number;
                    };
                    Object: import("@mysten/bcs").EnumInputShape<{
                        ImmOrOwnedObject: readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint, Iterable<number> & {
                            length: number;
                        }];
                        SharedObject: {
                            id: Iterable<number> & {
                                length: number;
                            };
                            initial_shared_version: string | number | bigint;
                            mutability: import("@mysten/bcs").EnumInputShape<{
                                Immutable: unknown;
                                Mutable: unknown;
                                NonExclusiveWrite: unknown;
                            }>;
                        };
                        Receiving: readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint, Iterable<number> & {
                            length: number;
                        }];
                    }>;
                    FundsWithdrawal: {
                        reservation: {
                            MaxAmountU64: string | number | bigint;
                        };
                        type_arg: {
                            Balance: unknown;
                        };
                        withdraw_from: import("@mysten/bcs").EnumInputShape<{
                            Sender: unknown;
                            Sponsor: unknown;
                        }>;
                    };
                }>> & {
                    length: number;
                }, string>;
                commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    MoveCall: {
                        package: number[];
                        module: string;
                        function: string;
                        type_arguments: unknown[];
                        arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                    };
                    TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                    SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                    MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                    Publish: [number[][], number[][]];
                    MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                    Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                    MoveCall: {
                        package: Iterable<number> & {
                            length: number;
                        };
                        module: string;
                        function: string;
                        type_arguments: Iterable<unknown> & {
                            length: number;
                        };
                        arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        };
                    };
                    TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }, import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>];
                    SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }];
                    MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }];
                    Publish: readonly [Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }];
                    MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }];
                    Upgrade: readonly [Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<number> & {
                        length: number;
                    }, import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>];
                }>> & {
                    length: number;
                }, string>;
            }, string>;
            ChangeEpoch: import("@mysten/bcs").BcsStruct<{
                epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                protocol_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                storage_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                computation_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                storage_rebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                non_refundable_storage_fee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                epoch_start_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                system_packages: import("@mysten/bcs").BcsType<[string, number[][], number[][]][], Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }]> & {
                    length: number;
                }, string>;
            }, string>;
            Genesis: import("@mysten/bcs").BcsStruct<{
                objects: import("@mysten/bcs").BcsType<{
                    RawObject: {
                        data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Move: {
                                type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Other: {
                                        address: number[];
                                        module: string;
                                        name: string;
                                        type_args: unknown[];
                                    };
                                    GasCoin: unknown;
                                    StakedSui: unknown;
                                    Coin: unknown;
                                    SuiBalanceAccumulatorField: unknown;
                                    BalanceAccumulatorField: unknown;
                                }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                                has_public_transfer: boolean;
                                version: string;
                                contents: number[];
                            };
                            Package: {
                                id: number[];
                                version: string;
                                module_map: Map<string, number[]>;
                                type_origin_table: {
                                    module_name: string;
                                    datatype_name: string;
                                    package: number[];
                                }[];
                                linkage_table: Map<number[], {
                                    upgraded_id: number[];
                                    upgraded_version: string;
                                }>;
                            };
                        }, "Move" | "Package">;
                        owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            AddressOwner: number[];
                            ObjectOwner: number[];
                            Shared: {
                                initial_shared_version: string;
                            };
                            Immutable: unknown;
                            ConsensusAddressOwner: {
                                start_version: string;
                                owner: number[];
                            };
                        }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
                    };
                    $kind: "RawObject";
                }[], Iterable<{
                    RawObject: {
                        data: import("@mysten/bcs").EnumInputShape<{
                            Move: {
                                type: import("@mysten/bcs").EnumInputShape<{
                                    Other: {
                                        address: Iterable<number> & {
                                            length: number;
                                        };
                                        module: string;
                                        name: string;
                                        type_args: Iterable<unknown> & {
                                            length: number;
                                        };
                                    };
                                    GasCoin: unknown;
                                    StakedSui: unknown;
                                    Coin: unknown;
                                    SuiBalanceAccumulatorField: unknown;
                                    BalanceAccumulatorField: unknown;
                                }>;
                                has_public_transfer: boolean;
                                version: string | number | bigint;
                                contents: Iterable<number> & {
                                    length: number;
                                };
                            };
                            Package: {
                                id: Iterable<number> & {
                                    length: number;
                                };
                                version: string | number | bigint;
                                module_map: Map<string, Iterable<number> & {
                                    length: number;
                                }>;
                                type_origin_table: Iterable<{
                                    module_name: string;
                                    datatype_name: string;
                                    package: Iterable<number> & {
                                        length: number;
                                    };
                                }> & {
                                    length: number;
                                };
                                linkage_table: Map<Iterable<number> & {
                                    length: number;
                                }, {
                                    upgraded_id: Iterable<number> & {
                                        length: number;
                                    };
                                    upgraded_version: string | number | bigint;
                                }>;
                            };
                        }>;
                        owner: import("@mysten/bcs").EnumInputShape<{
                            AddressOwner: Iterable<number> & {
                                length: number;
                            };
                            ObjectOwner: Iterable<number> & {
                                length: number;
                            };
                            Shared: {
                                initial_shared_version: string | number | bigint;
                            };
                            Immutable: unknown;
                            ConsensusAddressOwner: {
                                start_version: string | number | bigint;
                                owner: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>;
                    };
                }> & {
                    length: number;
                }, string>;
            }, string>;
            ConsensusCommitPrologue: import("@mysten/bcs").BcsStruct<{
                epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            AuthenticatorStateUpdate: import("@mysten/bcs").BcsStruct<{
                epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                new_active_jwks: import("@mysten/bcs").BcsType<{
                    jwk_id: {
                        iss: string;
                        kid: string;
                    };
                    jwk: {
                        kty: string;
                        e: string;
                        n: string;
                        alg: string;
                    };
                    epoch: string;
                }[], Iterable<{
                    jwk_id: {
                        iss: string;
                        kid: string;
                    };
                    jwk: {
                        kty: string;
                        e: string;
                        n: string;
                        alg: string;
                    };
                    epoch: string | number | bigint;
                }> & {
                    length: number;
                }, string>;
                authenticator_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            EndOfEpochTransaction: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                ChangeEpoch: {
                    epoch: string;
                    protocol_version: string;
                    storage_charge: string;
                    computation_charge: string;
                    storage_rebate: string;
                    non_refundable_storage_fee: string;
                    epoch_start_timestamp_ms: string;
                    system_packages: [string, number[][], number[][]][];
                };
                AuthenticatorStateCreate: unknown;
                AuthenticatorStateExpire: {
                    min_epoch: string;
                    authenticator_obj_initial_shared_version: string;
                };
                RandomnessStateCreate: unknown;
                DenyListStateCreate: unknown;
                BridgeStateCreate: number[];
                BridgeCommitteeInit: string;
                StoreExecutionTimeObservations: {
                    V1: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        MoveEntryPoint: {
                            package: number[];
                            module: string;
                            function: string;
                            type_arguments: unknown[];
                        };
                        TransferObjects: unknown;
                        SplitCoins: unknown;
                        MergeCoins: unknown;
                        Publish: unknown;
                        MakeMoveVec: unknown;
                        Upgrade: unknown;
                    }, "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade" | "MoveEntryPoint">, [number[], {
                        secs: string;
                        nanos: number;
                    }][]][];
                    $kind: "V1";
                };
                AccumulatorRootCreate: unknown;
                CoinRegistryCreate: unknown;
                DisplayRegistryCreate: unknown;
                AddressAliasStateCreate: unknown;
                WriteAccumulatorStorageCost: {
                    storage_cost: string;
                };
            }, "AuthenticatorStateExpire" | "ChangeEpoch" | "WriteAccumulatorStorageCost" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit" | "StoreExecutionTimeObservations" | "AccumulatorRootCreate" | "CoinRegistryCreate" | "DisplayRegistryCreate" | "AddressAliasStateCreate">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                ChangeEpoch: {
                    epoch: string | number | bigint;
                    protocol_version: string | number | bigint;
                    storage_charge: string | number | bigint;
                    computation_charge: string | number | bigint;
                    storage_rebate: string | number | bigint;
                    non_refundable_storage_fee: string | number | bigint;
                    epoch_start_timestamp_ms: string | number | bigint;
                    system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }]> & {
                        length: number;
                    };
                };
                AuthenticatorStateCreate: unknown;
                AuthenticatorStateExpire: {
                    min_epoch: string | number | bigint;
                    authenticator_obj_initial_shared_version: string | number | bigint;
                };
                RandomnessStateCreate: unknown;
                DenyListStateCreate: unknown;
                BridgeStateCreate: Iterable<number> & {
                    length: number;
                };
                BridgeCommitteeInit: string | number | bigint;
                StoreExecutionTimeObservations: {
                    V1: Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
                        MoveEntryPoint: {
                            package: Iterable<number> & {
                                length: number;
                            };
                            module: string;
                            function: string;
                            type_arguments: Iterable<unknown> & {
                                length: number;
                            };
                        };
                        TransferObjects: unknown;
                        SplitCoins: unknown;
                        MergeCoins: unknown;
                        Publish: unknown;
                        MakeMoveVec: unknown;
                        Upgrade: unknown;
                    }>, Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, {
                        secs: string | number | bigint;
                        nanos: number;
                    }]> & {
                        length: number;
                    }]> & {
                        length: number;
                    };
                };
                AccumulatorRootCreate: unknown;
                CoinRegistryCreate: unknown;
                DisplayRegistryCreate: unknown;
                AddressAliasStateCreate: unknown;
                WriteAccumulatorStorageCost: {
                    storage_cost: string | number | bigint;
                };
            }>> & {
                length: number;
            }, string>;
            RandomnessStateUpdate: import("@mysten/bcs").BcsStruct<{
                epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                randomness_round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                random_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                randomness_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            ConsensusCommitPrologueV2: import("@mysten/bcs").BcsStruct<{
                epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, "vector<u8>">;
            }, string>;
            ConsensusCommitPrologueV3: import("@mysten/bcs").BcsStruct<{
                epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, "vector<u8>">;
                consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
                    CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint]> & {
                        length: number;
                    }]> & {
                        length: number;
                    }, string>;
                    CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, Iterable<readonly [readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint], string | number | bigint]> & {
                        length: number;
                    }]> & {
                        length: number;
                    }, string>;
                }, "ConsensusDeterminedVersionAssignments">;
            }, string>;
            ConsensusCommitPrologueV4: import("@mysten/bcs").BcsStruct<{
                epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, "vector<u8>">;
                consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
                    CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint]> & {
                        length: number;
                    }]> & {
                        length: number;
                    }, string>;
                    CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, Iterable<readonly [readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint], string | number | bigint]> & {
                        length: number;
                    }]> & {
                        length: number;
                    }, string>;
                }, "ConsensusDeterminedVersionAssignments">;
                additional_state_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, "vector<u8>">;
            }, string>;
            ProgrammableSystemTransaction: import("@mysten/bcs").BcsStruct<{
                inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Pure: number[];
                    Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        ImmOrOwnedObject: [number[], string, number[]];
                        SharedObject: {
                            id: number[];
                            initial_shared_version: string;
                            mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Immutable: unknown;
                                Mutable: unknown;
                                NonExclusiveWrite: unknown;
                            }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                        };
                        Receiving: [number[], string, number[]];
                    }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                    FundsWithdrawal: {
                        reservation: {
                            MaxAmountU64: string;
                            $kind: "MaxAmountU64";
                        };
                        type_arg: {
                            Balance: unknown;
                            $kind: "Balance";
                        };
                        withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Sender: unknown;
                            Sponsor: unknown;
                        }, "Sender" | "Sponsor">;
                    };
                }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                    Pure: Iterable<number> & {
                        length: number;
                    };
                    Object: import("@mysten/bcs").EnumInputShape<{
                        ImmOrOwnedObject: readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint, Iterable<number> & {
                            length: number;
                        }];
                        SharedObject: {
                            id: Iterable<number> & {
                                length: number;
                            };
                            initial_shared_version: string | number | bigint;
                            mutability: import("@mysten/bcs").EnumInputShape<{
                                Immutable: unknown;
                                Mutable: unknown;
                                NonExclusiveWrite: unknown;
                            }>;
                        };
                        Receiving: readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint, Iterable<number> & {
                            length: number;
                        }];
                    }>;
                    FundsWithdrawal: {
                        reservation: {
                            MaxAmountU64: string | number | bigint;
                        };
                        type_arg: {
                            Balance: unknown;
                        };
                        withdraw_from: import("@mysten/bcs").EnumInputShape<{
                            Sender: unknown;
                            Sponsor: unknown;
                        }>;
                    };
                }>> & {
                    length: number;
                }, string>;
                commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    MoveCall: {
                        package: number[];
                        module: string;
                        function: string;
                        type_arguments: unknown[];
                        arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                    };
                    TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                    SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                    MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                    Publish: [number[][], number[][]];
                    MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                    Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: [number, number];
                    }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                    MoveCall: {
                        package: Iterable<number> & {
                            length: number;
                        };
                        module: string;
                        function: string;
                        type_arguments: Iterable<unknown> & {
                            length: number;
                        };
                        arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        };
                    };
                    TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }, import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>];
                    SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }];
                    MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }];
                    Publish: readonly [Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }];
                    MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>> & {
                        length: number;
                    }];
                    Upgrade: readonly [Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<number> & {
                        length: number;
                    }, import("@mysten/bcs").EnumInputShape<{
                        GasCoin: unknown;
                        Input: number;
                        Result: number;
                        NestedResult: readonly [number, number];
                    }>];
                }>> & {
                    length: number;
                }, string>;
            }, string>;
        }, "TransactionKind">;
        sender: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        gas_data: import("@mysten/bcs").BcsStruct<{
            payment: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            price: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            budget: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        expiration: import("@mysten/bcs").BcsEnum<{
            None: any;
            Epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            ValidDuring: import("@mysten/bcs").BcsStruct<{
                min_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                max_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                min_timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                max_timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                chain: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, "vector<u8>">;
                nonce: import("@mysten/bcs").BcsType<number, number, "u32">;
            }, string>;
        }, "TransactionExpiration">;
    }, string>;
}, "TransactionData">;
export const IntentMessage: import("@mysten/bcs").BcsStruct<{
    intent: import("@mysten/bcs").BcsStruct<{
        scope: import("@mysten/bcs").BcsType<number, number, "u8">;
        version: import("@mysten/bcs").BcsType<number, number, "u8">;
        app_id: import("@mysten/bcs").BcsType<number, number, "u8">;
    }, string>;
    value: import("@mysten/bcs").BcsEnum<{
        V1: import("@mysten/bcs").BcsStruct<{
            kind: import("@mysten/bcs").BcsEnum<{
                ProgrammableTransaction: import("@mysten/bcs").BcsStruct<{
                    inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Pure: number[];
                        Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            ImmOrOwnedObject: [number[], string, number[]];
                            SharedObject: {
                                id: number[];
                                initial_shared_version: string;
                                mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Immutable: unknown;
                                    Mutable: unknown;
                                    NonExclusiveWrite: unknown;
                                }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                            };
                            Receiving: [number[], string, number[]];
                        }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                        FundsWithdrawal: {
                            reservation: {
                                MaxAmountU64: string;
                                $kind: "MaxAmountU64";
                            };
                            type_arg: {
                                Balance: unknown;
                                $kind: "Balance";
                            };
                            withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Sender: unknown;
                                Sponsor: unknown;
                            }, "Sender" | "Sponsor">;
                        };
                    }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                        Pure: Iterable<number> & {
                            length: number;
                        };
                        Object: import("@mysten/bcs").EnumInputShape<{
                            ImmOrOwnedObject: readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint, Iterable<number> & {
                                length: number;
                            }];
                            SharedObject: {
                                id: Iterable<number> & {
                                    length: number;
                                };
                                initial_shared_version: string | number | bigint;
                                mutability: import("@mysten/bcs").EnumInputShape<{
                                    Immutable: unknown;
                                    Mutable: unknown;
                                    NonExclusiveWrite: unknown;
                                }>;
                            };
                            Receiving: readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint, Iterable<number> & {
                                length: number;
                            }];
                        }>;
                        FundsWithdrawal: {
                            reservation: {
                                MaxAmountU64: string | number | bigint;
                            };
                            type_arg: {
                                Balance: unknown;
                            };
                            withdraw_from: import("@mysten/bcs").EnumInputShape<{
                                Sender: unknown;
                                Sponsor: unknown;
                            }>;
                        };
                    }>> & {
                        length: number;
                    }, string>;
                    commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        MoveCall: {
                            package: number[];
                            module: string;
                            function: string;
                            type_arguments: unknown[];
                            arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                        };
                        TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                        SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                        MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                        Publish: [number[][], number[][]];
                        MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                        Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                    }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                        MoveCall: {
                            package: Iterable<number> & {
                                length: number;
                            };
                            module: string;
                            function: string;
                            type_arguments: Iterable<unknown> & {
                                length: number;
                            };
                            arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            };
                        };
                        TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }, import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>];
                        SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }];
                        MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }];
                        Publish: readonly [Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }];
                        MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }];
                        Upgrade: readonly [Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<number> & {
                            length: number;
                        }, import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>];
                    }>> & {
                        length: number;
                    }, string>;
                }, string>;
                ChangeEpoch: import("@mysten/bcs").BcsStruct<{
                    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    protocol_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    storage_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    computation_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    storage_rebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    non_refundable_storage_fee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    epoch_start_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    system_packages: import("@mysten/bcs").BcsType<[string, number[][], number[][]][], Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }]> & {
                        length: number;
                    }, string>;
                }, string>;
                Genesis: import("@mysten/bcs").BcsStruct<{
                    objects: import("@mysten/bcs").BcsType<{
                        RawObject: {
                            data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Move: {
                                    type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        Other: {
                                            address: number[];
                                            module: string;
                                            name: string;
                                            type_args: unknown[];
                                        };
                                        GasCoin: unknown;
                                        StakedSui: unknown;
                                        Coin: unknown;
                                        SuiBalanceAccumulatorField: unknown;
                                        BalanceAccumulatorField: unknown;
                                    }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                                    has_public_transfer: boolean;
                                    version: string;
                                    contents: number[];
                                };
                                Package: {
                                    id: number[];
                                    version: string;
                                    module_map: Map<string, number[]>;
                                    type_origin_table: {
                                        module_name: string;
                                        datatype_name: string;
                                        package: number[];
                                    }[];
                                    linkage_table: Map<number[], {
                                        upgraded_id: number[];
                                        upgraded_version: string;
                                    }>;
                                };
                            }, "Move" | "Package">;
                            owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                AddressOwner: number[];
                                ObjectOwner: number[];
                                Shared: {
                                    initial_shared_version: string;
                                };
                                Immutable: unknown;
                                ConsensusAddressOwner: {
                                    start_version: string;
                                    owner: number[];
                                };
                            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
                        };
                        $kind: "RawObject";
                    }[], Iterable<{
                        RawObject: {
                            data: import("@mysten/bcs").EnumInputShape<{
                                Move: {
                                    type: import("@mysten/bcs").EnumInputShape<{
                                        Other: {
                                            address: Iterable<number> & {
                                                length: number;
                                            };
                                            module: string;
                                            name: string;
                                            type_args: Iterable<unknown> & {
                                                length: number;
                                            };
                                        };
                                        GasCoin: unknown;
                                        StakedSui: unknown;
                                        Coin: unknown;
                                        SuiBalanceAccumulatorField: unknown;
                                        BalanceAccumulatorField: unknown;
                                    }>;
                                    has_public_transfer: boolean;
                                    version: string | number | bigint;
                                    contents: Iterable<number> & {
                                        length: number;
                                    };
                                };
                                Package: {
                                    id: Iterable<number> & {
                                        length: number;
                                    };
                                    version: string | number | bigint;
                                    module_map: Map<string, Iterable<number> & {
                                        length: number;
                                    }>;
                                    type_origin_table: Iterable<{
                                        module_name: string;
                                        datatype_name: string;
                                        package: Iterable<number> & {
                                            length: number;
                                        };
                                    }> & {
                                        length: number;
                                    };
                                    linkage_table: Map<Iterable<number> & {
                                        length: number;
                                    }, {
                                        upgraded_id: Iterable<number> & {
                                            length: number;
                                        };
                                        upgraded_version: string | number | bigint;
                                    }>;
                                };
                            }>;
                            owner: import("@mysten/bcs").EnumInputShape<{
                                AddressOwner: Iterable<number> & {
                                    length: number;
                                };
                                ObjectOwner: Iterable<number> & {
                                    length: number;
                                };
                                Shared: {
                                    initial_shared_version: string | number | bigint;
                                };
                                Immutable: unknown;
                                ConsensusAddressOwner: {
                                    start_version: string | number | bigint;
                                    owner: Iterable<number> & {
                                        length: number;
                                    };
                                };
                            }>;
                        };
                    }> & {
                        length: number;
                    }, string>;
                }, string>;
                ConsensusCommitPrologue: import("@mysten/bcs").BcsStruct<{
                    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                AuthenticatorStateUpdate: import("@mysten/bcs").BcsStruct<{
                    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    new_active_jwks: import("@mysten/bcs").BcsType<{
                        jwk_id: {
                            iss: string;
                            kid: string;
                        };
                        jwk: {
                            kty: string;
                            e: string;
                            n: string;
                            alg: string;
                        };
                        epoch: string;
                    }[], Iterable<{
                        jwk_id: {
                            iss: string;
                            kid: string;
                        };
                        jwk: {
                            kty: string;
                            e: string;
                            n: string;
                            alg: string;
                        };
                        epoch: string | number | bigint;
                    }> & {
                        length: number;
                    }, string>;
                    authenticator_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                EndOfEpochTransaction: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ChangeEpoch: {
                        epoch: string;
                        protocol_version: string;
                        storage_charge: string;
                        computation_charge: string;
                        storage_rebate: string;
                        non_refundable_storage_fee: string;
                        epoch_start_timestamp_ms: string;
                        system_packages: [string, number[][], number[][]][];
                    };
                    AuthenticatorStateCreate: unknown;
                    AuthenticatorStateExpire: {
                        min_epoch: string;
                        authenticator_obj_initial_shared_version: string;
                    };
                    RandomnessStateCreate: unknown;
                    DenyListStateCreate: unknown;
                    BridgeStateCreate: number[];
                    BridgeCommitteeInit: string;
                    StoreExecutionTimeObservations: {
                        V1: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            MoveEntryPoint: {
                                package: number[];
                                module: string;
                                function: string;
                                type_arguments: unknown[];
                            };
                            TransferObjects: unknown;
                            SplitCoins: unknown;
                            MergeCoins: unknown;
                            Publish: unknown;
                            MakeMoveVec: unknown;
                            Upgrade: unknown;
                        }, "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade" | "MoveEntryPoint">, [number[], {
                            secs: string;
                            nanos: number;
                        }][]][];
                        $kind: "V1";
                    };
                    AccumulatorRootCreate: unknown;
                    CoinRegistryCreate: unknown;
                    DisplayRegistryCreate: unknown;
                    AddressAliasStateCreate: unknown;
                    WriteAccumulatorStorageCost: {
                        storage_cost: string;
                    };
                }, "AuthenticatorStateExpire" | "ChangeEpoch" | "WriteAccumulatorStorageCost" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit" | "StoreExecutionTimeObservations" | "AccumulatorRootCreate" | "CoinRegistryCreate" | "DisplayRegistryCreate" | "AddressAliasStateCreate">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                    ChangeEpoch: {
                        epoch: string | number | bigint;
                        protocol_version: string | number | bigint;
                        storage_charge: string | number | bigint;
                        computation_charge: string | number | bigint;
                        storage_rebate: string | number | bigint;
                        non_refundable_storage_fee: string | number | bigint;
                        epoch_start_timestamp_ms: string | number | bigint;
                        system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }]> & {
                            length: number;
                        };
                    };
                    AuthenticatorStateCreate: unknown;
                    AuthenticatorStateExpire: {
                        min_epoch: string | number | bigint;
                        authenticator_obj_initial_shared_version: string | number | bigint;
                    };
                    RandomnessStateCreate: unknown;
                    DenyListStateCreate: unknown;
                    BridgeStateCreate: Iterable<number> & {
                        length: number;
                    };
                    BridgeCommitteeInit: string | number | bigint;
                    StoreExecutionTimeObservations: {
                        V1: Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
                            MoveEntryPoint: {
                                package: Iterable<number> & {
                                    length: number;
                                };
                                module: string;
                                function: string;
                                type_arguments: Iterable<unknown> & {
                                    length: number;
                                };
                            };
                            TransferObjects: unknown;
                            SplitCoins: unknown;
                            MergeCoins: unknown;
                            Publish: unknown;
                            MakeMoveVec: unknown;
                            Upgrade: unknown;
                        }>, Iterable<readonly [Iterable<number> & {
                            length: number;
                        }, {
                            secs: string | number | bigint;
                            nanos: number;
                        }]> & {
                            length: number;
                        }]> & {
                            length: number;
                        };
                    };
                    AccumulatorRootCreate: unknown;
                    CoinRegistryCreate: unknown;
                    DisplayRegistryCreate: unknown;
                    AddressAliasStateCreate: unknown;
                    WriteAccumulatorStorageCost: {
                        storage_cost: string | number | bigint;
                    };
                }>> & {
                    length: number;
                }, string>;
                RandomnessStateUpdate: import("@mysten/bcs").BcsStruct<{
                    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    randomness_round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    random_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                    randomness_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                ConsensusCommitPrologueV2: import("@mysten/bcs").BcsStruct<{
                    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, "vector<u8>">;
                }, string>;
                ConsensusCommitPrologueV3: import("@mysten/bcs").BcsStruct<{
                    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                    commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, "vector<u8>">;
                    consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
                        CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
                            length: number;
                        }, Iterable<readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint]> & {
                            length: number;
                        }]> & {
                            length: number;
                        }, string>;
                        CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
                            length: number;
                        }, Iterable<readonly [readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint], string | number | bigint]> & {
                            length: number;
                        }]> & {
                            length: number;
                        }, string>;
                    }, "ConsensusDeterminedVersionAssignments">;
                }, string>;
                ConsensusCommitPrologueV4: import("@mysten/bcs").BcsStruct<{
                    epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                    commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, "vector<u8>">;
                    consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
                        CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
                            length: number;
                        }, Iterable<readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint]> & {
                            length: number;
                        }]> & {
                            length: number;
                        }, string>;
                        CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
                            length: number;
                        }, Iterable<readonly [readonly [Iterable<number> & {
                            length: number;
                        }, string | number | bigint], string | number | bigint]> & {
                            length: number;
                        }]> & {
                            length: number;
                        }, string>;
                    }, "ConsensusDeterminedVersionAssignments">;
                    additional_state_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, "vector<u8>">;
                }, string>;
                ProgrammableSystemTransaction: import("@mysten/bcs").BcsStruct<{
                    inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Pure: number[];
                        Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            ImmOrOwnedObject: [number[], string, number[]];
                            SharedObject: {
                                id: number[];
                                initial_shared_version: string;
                                mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Immutable: unknown;
                                    Mutable: unknown;
                                    NonExclusiveWrite: unknown;
                                }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                            };
                            Receiving: [number[], string, number[]];
                        }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                        FundsWithdrawal: {
                            reservation: {
                                MaxAmountU64: string;
                                $kind: "MaxAmountU64";
                            };
                            type_arg: {
                                Balance: unknown;
                                $kind: "Balance";
                            };
                            withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Sender: unknown;
                                Sponsor: unknown;
                            }, "Sender" | "Sponsor">;
                        };
                    }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                        Pure: Iterable<number> & {
                            length: number;
                        };
                        Object: import("@mysten/bcs").EnumInputShape<{
                            ImmOrOwnedObject: readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint, Iterable<number> & {
                                length: number;
                            }];
                            SharedObject: {
                                id: Iterable<number> & {
                                    length: number;
                                };
                                initial_shared_version: string | number | bigint;
                                mutability: import("@mysten/bcs").EnumInputShape<{
                                    Immutable: unknown;
                                    Mutable: unknown;
                                    NonExclusiveWrite: unknown;
                                }>;
                            };
                            Receiving: readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint, Iterable<number> & {
                                length: number;
                            }];
                        }>;
                        FundsWithdrawal: {
                            reservation: {
                                MaxAmountU64: string | number | bigint;
                            };
                            type_arg: {
                                Balance: unknown;
                            };
                            withdraw_from: import("@mysten/bcs").EnumInputShape<{
                                Sender: unknown;
                                Sponsor: unknown;
                            }>;
                        };
                    }>> & {
                        length: number;
                    }, string>;
                    commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        MoveCall: {
                            package: number[];
                            module: string;
                            function: string;
                            type_arguments: unknown[];
                            arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                        };
                        TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                        SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                        MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                        Publish: [number[][], number[][]];
                        MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                        Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: [number, number];
                        }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                    }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                        MoveCall: {
                            package: Iterable<number> & {
                                length: number;
                            };
                            module: string;
                            function: string;
                            type_arguments: Iterable<unknown> & {
                                length: number;
                            };
                            arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            };
                        };
                        TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }, import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>];
                        SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }];
                        MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }];
                        Publish: readonly [Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }];
                        MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>> & {
                            length: number;
                        }];
                        Upgrade: readonly [Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<number> & {
                            length: number;
                        }, import("@mysten/bcs").EnumInputShape<{
                            GasCoin: unknown;
                            Input: number;
                            Result: number;
                            NestedResult: readonly [number, number];
                        }>];
                    }>> & {
                        length: number;
                    }, string>;
                }, string>;
            }, "TransactionKind">;
            sender: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            gas_data: import("@mysten/bcs").BcsStruct<{
                payment: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                }, string>;
                owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                price: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                budget: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            expiration: import("@mysten/bcs").BcsEnum<{
                None: any;
                Epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                ValidDuring: import("@mysten/bcs").BcsStruct<{
                    min_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                    max_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                    min_timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                    max_timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                    chain: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, "vector<u8>">;
                    nonce: import("@mysten/bcs").BcsType<number, number, "u32">;
                }, string>;
            }, "TransactionExpiration">;
        }, string>;
    }, "TransactionData">;
}, string>;
export const SenderSignedTransaction: import("@mysten/bcs").BcsStruct<{
    intent_message: import("@mysten/bcs").BcsStruct<{
        intent: import("@mysten/bcs").BcsStruct<{
            scope: import("@mysten/bcs").BcsType<number, number, "u8">;
            version: import("@mysten/bcs").BcsType<number, number, "u8">;
            app_id: import("@mysten/bcs").BcsType<number, number, "u8">;
        }, string>;
        value: import("@mysten/bcs").BcsEnum<{
            V1: import("@mysten/bcs").BcsStruct<{
                kind: import("@mysten/bcs").BcsEnum<{
                    ProgrammableTransaction: import("@mysten/bcs").BcsStruct<{
                        inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Pure: number[];
                            Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                ImmOrOwnedObject: [number[], string, number[]];
                                SharedObject: {
                                    id: number[];
                                    initial_shared_version: string;
                                    mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        Immutable: unknown;
                                        Mutable: unknown;
                                        NonExclusiveWrite: unknown;
                                    }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                                };
                                Receiving: [number[], string, number[]];
                            }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                            FundsWithdrawal: {
                                reservation: {
                                    MaxAmountU64: string;
                                    $kind: "MaxAmountU64";
                                };
                                type_arg: {
                                    Balance: unknown;
                                    $kind: "Balance";
                                };
                                withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Sender: unknown;
                                    Sponsor: unknown;
                                }, "Sender" | "Sponsor">;
                            };
                        }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                            Pure: Iterable<number> & {
                                length: number;
                            };
                            Object: import("@mysten/bcs").EnumInputShape<{
                                ImmOrOwnedObject: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                                SharedObject: {
                                    id: Iterable<number> & {
                                        length: number;
                                    };
                                    initial_shared_version: string | number | bigint;
                                    mutability: import("@mysten/bcs").EnumInputShape<{
                                        Immutable: unknown;
                                        Mutable: unknown;
                                        NonExclusiveWrite: unknown;
                                    }>;
                                };
                                Receiving: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                            }>;
                            FundsWithdrawal: {
                                reservation: {
                                    MaxAmountU64: string | number | bigint;
                                };
                                type_arg: {
                                    Balance: unknown;
                                };
                                withdraw_from: import("@mysten/bcs").EnumInputShape<{
                                    Sender: unknown;
                                    Sponsor: unknown;
                                }>;
                            };
                        }>> & {
                            length: number;
                        }, string>;
                        commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            MoveCall: {
                                package: number[];
                                module: string;
                                function: string;
                                type_arguments: unknown[];
                                arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                            };
                            TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                            SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Publish: [number[][], number[][]];
                            MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                        }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                            MoveCall: {
                                package: Iterable<number> & {
                                    length: number;
                                };
                                module: string;
                                function: string;
                                type_arguments: Iterable<unknown> & {
                                    length: number;
                                };
                                arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>> & {
                                    length: number;
                                };
                            };
                            TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                            SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Publish: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }];
                            MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Upgrade: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<number> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                        }>> & {
                            length: number;
                        }, string>;
                    }, string>;
                    ChangeEpoch: import("@mysten/bcs").BcsStruct<{
                        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        protocol_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        storage_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        computation_charge: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        storage_rebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        non_refundable_storage_fee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        epoch_start_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        system_packages: import("@mysten/bcs").BcsType<[string, number[][], number[][]][], Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }]> & {
                            length: number;
                        }, string>;
                    }, string>;
                    Genesis: import("@mysten/bcs").BcsStruct<{
                        objects: import("@mysten/bcs").BcsType<{
                            RawObject: {
                                data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Move: {
                                        type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            Other: {
                                                address: number[];
                                                module: string;
                                                name: string;
                                                type_args: unknown[];
                                            };
                                            GasCoin: unknown;
                                            StakedSui: unknown;
                                            Coin: unknown;
                                            SuiBalanceAccumulatorField: unknown;
                                            BalanceAccumulatorField: unknown;
                                        }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                                        has_public_transfer: boolean;
                                        version: string;
                                        contents: number[];
                                    };
                                    Package: {
                                        id: number[];
                                        version: string;
                                        module_map: Map<string, number[]>;
                                        type_origin_table: {
                                            module_name: string;
                                            datatype_name: string;
                                            package: number[];
                                        }[];
                                        linkage_table: Map<number[], {
                                            upgraded_id: number[];
                                            upgraded_version: string;
                                        }>;
                                    };
                                }, "Move" | "Package">;
                                owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    AddressOwner: number[];
                                    ObjectOwner: number[];
                                    Shared: {
                                        initial_shared_version: string;
                                    };
                                    Immutable: unknown;
                                    ConsensusAddressOwner: {
                                        start_version: string;
                                        owner: number[];
                                    };
                                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
                            };
                            $kind: "RawObject";
                        }[], Iterable<{
                            RawObject: {
                                data: import("@mysten/bcs").EnumInputShape<{
                                    Move: {
                                        type: import("@mysten/bcs").EnumInputShape<{
                                            Other: {
                                                address: Iterable<number> & {
                                                    length: number;
                                                };
                                                module: string;
                                                name: string;
                                                type_args: Iterable<unknown> & {
                                                    length: number;
                                                };
                                            };
                                            GasCoin: unknown;
                                            StakedSui: unknown;
                                            Coin: unknown;
                                            SuiBalanceAccumulatorField: unknown;
                                            BalanceAccumulatorField: unknown;
                                        }>;
                                        has_public_transfer: boolean;
                                        version: string | number | bigint;
                                        contents: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    Package: {
                                        id: Iterable<number> & {
                                            length: number;
                                        };
                                        version: string | number | bigint;
                                        module_map: Map<string, Iterable<number> & {
                                            length: number;
                                        }>;
                                        type_origin_table: Iterable<{
                                            module_name: string;
                                            datatype_name: string;
                                            package: Iterable<number> & {
                                                length: number;
                                            };
                                        }> & {
                                            length: number;
                                        };
                                        linkage_table: Map<Iterable<number> & {
                                            length: number;
                                        }, {
                                            upgraded_id: Iterable<number> & {
                                                length: number;
                                            };
                                            upgraded_version: string | number | bigint;
                                        }>;
                                    };
                                }>;
                                owner: import("@mysten/bcs").EnumInputShape<{
                                    AddressOwner: Iterable<number> & {
                                        length: number;
                                    };
                                    ObjectOwner: Iterable<number> & {
                                        length: number;
                                    };
                                    Shared: {
                                        initial_shared_version: string | number | bigint;
                                    };
                                    Immutable: unknown;
                                    ConsensusAddressOwner: {
                                        start_version: string | number | bigint;
                                        owner: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                }>;
                            };
                        }> & {
                            length: number;
                        }, string>;
                    }, string>;
                    ConsensusCommitPrologue: import("@mysten/bcs").BcsStruct<{
                        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    AuthenticatorStateUpdate: import("@mysten/bcs").BcsStruct<{
                        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        new_active_jwks: import("@mysten/bcs").BcsType<{
                            jwk_id: {
                                iss: string;
                                kid: string;
                            };
                            jwk: {
                                kty: string;
                                e: string;
                                n: string;
                                alg: string;
                            };
                            epoch: string;
                        }[], Iterable<{
                            jwk_id: {
                                iss: string;
                                kid: string;
                            };
                            jwk: {
                                kty: string;
                                e: string;
                                n: string;
                                alg: string;
                            };
                            epoch: string | number | bigint;
                        }> & {
                            length: number;
                        }, string>;
                        authenticator_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    EndOfEpochTransaction: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        ChangeEpoch: {
                            epoch: string;
                            protocol_version: string;
                            storage_charge: string;
                            computation_charge: string;
                            storage_rebate: string;
                            non_refundable_storage_fee: string;
                            epoch_start_timestamp_ms: string;
                            system_packages: [string, number[][], number[][]][];
                        };
                        AuthenticatorStateCreate: unknown;
                        AuthenticatorStateExpire: {
                            min_epoch: string;
                            authenticator_obj_initial_shared_version: string;
                        };
                        RandomnessStateCreate: unknown;
                        DenyListStateCreate: unknown;
                        BridgeStateCreate: number[];
                        BridgeCommitteeInit: string;
                        StoreExecutionTimeObservations: {
                            V1: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                MoveEntryPoint: {
                                    package: number[];
                                    module: string;
                                    function: string;
                                    type_arguments: unknown[];
                                };
                                TransferObjects: unknown;
                                SplitCoins: unknown;
                                MergeCoins: unknown;
                                Publish: unknown;
                                MakeMoveVec: unknown;
                                Upgrade: unknown;
                            }, "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade" | "MoveEntryPoint">, [number[], {
                                secs: string;
                                nanos: number;
                            }][]][];
                            $kind: "V1";
                        };
                        AccumulatorRootCreate: unknown;
                        CoinRegistryCreate: unknown;
                        DisplayRegistryCreate: unknown;
                        AddressAliasStateCreate: unknown;
                        WriteAccumulatorStorageCost: {
                            storage_cost: string;
                        };
                    }, "AuthenticatorStateExpire" | "ChangeEpoch" | "WriteAccumulatorStorageCost" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit" | "StoreExecutionTimeObservations" | "AccumulatorRootCreate" | "CoinRegistryCreate" | "DisplayRegistryCreate" | "AddressAliasStateCreate">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                        ChangeEpoch: {
                            epoch: string | number | bigint;
                            protocol_version: string | number | bigint;
                            storage_charge: string | number | bigint;
                            computation_charge: string | number | bigint;
                            storage_rebate: string | number | bigint;
                            non_refundable_storage_fee: string | number | bigint;
                            epoch_start_timestamp_ms: string | number | bigint;
                            system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        };
                        AuthenticatorStateCreate: unknown;
                        AuthenticatorStateExpire: {
                            min_epoch: string | number | bigint;
                            authenticator_obj_initial_shared_version: string | number | bigint;
                        };
                        RandomnessStateCreate: unknown;
                        DenyListStateCreate: unknown;
                        BridgeStateCreate: Iterable<number> & {
                            length: number;
                        };
                        BridgeCommitteeInit: string | number | bigint;
                        StoreExecutionTimeObservations: {
                            V1: Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
                                MoveEntryPoint: {
                                    package: Iterable<number> & {
                                        length: number;
                                    };
                                    module: string;
                                    function: string;
                                    type_arguments: Iterable<unknown> & {
                                        length: number;
                                    };
                                };
                                TransferObjects: unknown;
                                SplitCoins: unknown;
                                MergeCoins: unknown;
                                Publish: unknown;
                                MakeMoveVec: unknown;
                                Upgrade: unknown;
                            }>, Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, {
                                secs: string | number | bigint;
                                nanos: number;
                            }]> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        };
                        AccumulatorRootCreate: unknown;
                        CoinRegistryCreate: unknown;
                        DisplayRegistryCreate: unknown;
                        AddressAliasStateCreate: unknown;
                        WriteAccumulatorStorageCost: {
                            storage_cost: string | number | bigint;
                        };
                    }>> & {
                        length: number;
                    }, string>;
                    RandomnessStateUpdate: import("@mysten/bcs").BcsStruct<{
                        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        randomness_round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        random_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                        randomness_obj_initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    ConsensusCommitPrologueV2: import("@mysten/bcs").BcsStruct<{
                        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, "vector<u8>">;
                    }, string>;
                    ConsensusCommitPrologueV3: import("@mysten/bcs").BcsStruct<{
                        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                        commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, "vector<u8>">;
                        consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
                            CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint]> & {
                                length: number;
                            }]> & {
                                length: number;
                            }, string>;
                            CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, Iterable<readonly [readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint], string | number | bigint]> & {
                                length: number;
                            }]> & {
                                length: number;
                            }, string>;
                        }, "ConsensusDeterminedVersionAssignments">;
                    }, string>;
                    ConsensusCommitPrologueV4: import("@mysten/bcs").BcsStruct<{
                        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        sub_dag_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                        commit_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        consensus_commit_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, "vector<u8>">;
                        consensus_determined_version_assignments: import("@mysten/bcs").BcsEnum<{
                            CancelledTransactions: import("@mysten/bcs").BcsType<[number[], [number[], string][]][], Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint]> & {
                                length: number;
                            }]> & {
                                length: number;
                            }, string>;
                            CancelledTransactionsV2: import("@mysten/bcs").BcsType<[number[], [[number[], string], string][]][], Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, Iterable<readonly [readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint], string | number | bigint]> & {
                                length: number;
                            }]> & {
                                length: number;
                            }, string>;
                        }, "ConsensusDeterminedVersionAssignments">;
                        additional_state_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, "vector<u8>">;
                    }, string>;
                    ProgrammableSystemTransaction: import("@mysten/bcs").BcsStruct<{
                        inputs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Pure: number[];
                            Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                ImmOrOwnedObject: [number[], string, number[]];
                                SharedObject: {
                                    id: number[];
                                    initial_shared_version: string;
                                    mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        Immutable: unknown;
                                        Mutable: unknown;
                                        NonExclusiveWrite: unknown;
                                    }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                                };
                                Receiving: [number[], string, number[]];
                            }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                            FundsWithdrawal: {
                                reservation: {
                                    MaxAmountU64: string;
                                    $kind: "MaxAmountU64";
                                };
                                type_arg: {
                                    Balance: unknown;
                                    $kind: "Balance";
                                };
                                withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Sender: unknown;
                                    Sponsor: unknown;
                                }, "Sender" | "Sponsor">;
                            };
                        }, "Pure" | "Object" | "FundsWithdrawal">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                            Pure: Iterable<number> & {
                                length: number;
                            };
                            Object: import("@mysten/bcs").EnumInputShape<{
                                ImmOrOwnedObject: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                                SharedObject: {
                                    id: Iterable<number> & {
                                        length: number;
                                    };
                                    initial_shared_version: string | number | bigint;
                                    mutability: import("@mysten/bcs").EnumInputShape<{
                                        Immutable: unknown;
                                        Mutable: unknown;
                                        NonExclusiveWrite: unknown;
                                    }>;
                                };
                                Receiving: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                            }>;
                            FundsWithdrawal: {
                                reservation: {
                                    MaxAmountU64: string | number | bigint;
                                };
                                type_arg: {
                                    Balance: unknown;
                                };
                                withdraw_from: import("@mysten/bcs").EnumInputShape<{
                                    Sender: unknown;
                                    Sponsor: unknown;
                                }>;
                            };
                        }>> & {
                            length: number;
                        }, string>;
                        commands: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            MoveCall: {
                                package: number[];
                                module: string;
                                function: string;
                                type_arguments: unknown[];
                                arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                            };
                            TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                            SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Publish: [number[][], number[][]];
                            MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                        }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[], Iterable<import("@mysten/bcs").EnumInputShape<{
                            MoveCall: {
                                package: Iterable<number> & {
                                    length: number;
                                };
                                module: string;
                                function: string;
                                type_arguments: Iterable<unknown> & {
                                    length: number;
                                };
                                arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>> & {
                                    length: number;
                                };
                            };
                            TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                            SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Publish: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }];
                            MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Upgrade: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<number> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                        }>> & {
                            length: number;
                        }, string>;
                    }, string>;
                }, "TransactionKind">;
                sender: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                gas_data: import("@mysten/bcs").BcsStruct<{
                    payment: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint, Iterable<number> & {
                        length: number;
                    }]> & {
                        length: number;
                    }, string>;
                    owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                    price: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    budget: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                expiration: import("@mysten/bcs").BcsEnum<{
                    None: any;
                    Epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    ValidDuring: import("@mysten/bcs").BcsStruct<{
                        min_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                        max_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                        min_timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                        max_timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                        chain: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, "vector<u8>">;
                        nonce: import("@mysten/bcs").BcsType<number, number, "u32">;
                    }, string>;
                }, "TransactionExpiration">;
            }, string>;
        }, "TransactionData">;
    }, string>;
    tx_signatures: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, string>;
}, string>;
export const SenderSignedData: import("@mysten/bcs").BcsType<{
    intent_message: {
        intent: {
            scope: number;
            version: number;
            app_id: number;
        };
        value: {
            V1: {
                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ProgrammableTransaction: {
                        inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Pure: number[];
                            Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                ImmOrOwnedObject: [number[], string, number[]];
                                SharedObject: {
                                    id: number[];
                                    initial_shared_version: string;
                                    mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        Immutable: unknown;
                                        Mutable: unknown;
                                        NonExclusiveWrite: unknown;
                                    }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                                };
                                Receiving: [number[], string, number[]];
                            }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                            FundsWithdrawal: {
                                reservation: {
                                    MaxAmountU64: string;
                                    $kind: "MaxAmountU64";
                                };
                                type_arg: {
                                    Balance: unknown;
                                    $kind: "Balance";
                                };
                                withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Sender: unknown;
                                    Sponsor: unknown;
                                }, "Sender" | "Sponsor">;
                            };
                        }, "Pure" | "Object" | "FundsWithdrawal">[];
                        commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            MoveCall: {
                                package: number[];
                                module: string;
                                function: string;
                                type_arguments: unknown[];
                                arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                            };
                            TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                            SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Publish: [number[][], number[][]];
                            MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                        }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
                    };
                    ChangeEpoch: {
                        epoch: string;
                        protocol_version: string;
                        storage_charge: string;
                        computation_charge: string;
                        storage_rebate: string;
                        non_refundable_storage_fee: string;
                        epoch_start_timestamp_ms: string;
                        system_packages: [string, number[][], number[][]][];
                    };
                    Genesis: {
                        objects: {
                            RawObject: {
                                data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Move: {
                                        type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                            Other: {
                                                address: number[];
                                                module: string;
                                                name: string;
                                                type_args: unknown[];
                                            };
                                            GasCoin: unknown;
                                            StakedSui: unknown;
                                            Coin: unknown;
                                            SuiBalanceAccumulatorField: unknown;
                                            BalanceAccumulatorField: unknown;
                                        }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                                        has_public_transfer: boolean;
                                        version: string;
                                        contents: number[];
                                    };
                                    Package: {
                                        id: number[];
                                        version: string;
                                        module_map: Map<string, number[]>;
                                        type_origin_table: {
                                            module_name: string;
                                            datatype_name: string;
                                            package: number[];
                                        }[];
                                        linkage_table: Map<number[], {
                                            upgraded_id: number[];
                                            upgraded_version: string;
                                        }>;
                                    };
                                }, "Move" | "Package">;
                                owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    AddressOwner: number[];
                                    ObjectOwner: number[];
                                    Shared: {
                                        initial_shared_version: string;
                                    };
                                    Immutable: unknown;
                                    ConsensusAddressOwner: {
                                        start_version: string;
                                        owner: number[];
                                    };
                                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
                            };
                            $kind: "RawObject";
                        }[];
                    };
                    ConsensusCommitPrologue: {
                        epoch: string;
                        round: string;
                        commit_timestamp_ms: string;
                    };
                    AuthenticatorStateUpdate: {
                        epoch: string;
                        round: string;
                        new_active_jwks: {
                            jwk_id: {
                                iss: string;
                                kid: string;
                            };
                            jwk: {
                                kty: string;
                                e: string;
                                n: string;
                                alg: string;
                            };
                            epoch: string;
                        }[];
                        authenticator_obj_initial_shared_version: string;
                    };
                    EndOfEpochTransaction: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        ChangeEpoch: {
                            epoch: string;
                            protocol_version: string;
                            storage_charge: string;
                            computation_charge: string;
                            storage_rebate: string;
                            non_refundable_storage_fee: string;
                            epoch_start_timestamp_ms: string;
                            system_packages: [string, number[][], number[][]][];
                        };
                        AuthenticatorStateCreate: unknown;
                        AuthenticatorStateExpire: {
                            min_epoch: string;
                            authenticator_obj_initial_shared_version: string;
                        };
                        RandomnessStateCreate: unknown;
                        DenyListStateCreate: unknown;
                        BridgeStateCreate: number[];
                        BridgeCommitteeInit: string;
                        StoreExecutionTimeObservations: {
                            V1: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                MoveEntryPoint: {
                                    package: number[];
                                    module: string;
                                    function: string;
                                    type_arguments: unknown[];
                                };
                                TransferObjects: unknown;
                                SplitCoins: unknown;
                                MergeCoins: unknown;
                                Publish: unknown;
                                MakeMoveVec: unknown;
                                Upgrade: unknown;
                            }, "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade" | "MoveEntryPoint">, [number[], {
                                secs: string;
                                nanos: number;
                            }][]][];
                            $kind: "V1";
                        };
                        AccumulatorRootCreate: unknown;
                        CoinRegistryCreate: unknown;
                        DisplayRegistryCreate: unknown;
                        AddressAliasStateCreate: unknown;
                        WriteAccumulatorStorageCost: {
                            storage_cost: string;
                        };
                    }, "AuthenticatorStateExpire" | "ChangeEpoch" | "WriteAccumulatorStorageCost" | "AuthenticatorStateCreate" | "RandomnessStateCreate" | "DenyListStateCreate" | "BridgeStateCreate" | "BridgeCommitteeInit" | "StoreExecutionTimeObservations" | "AccumulatorRootCreate" | "CoinRegistryCreate" | "DisplayRegistryCreate" | "AddressAliasStateCreate">[];
                    RandomnessStateUpdate: {
                        epoch: string;
                        randomness_round: string;
                        random_bytes: number[];
                        randomness_obj_initial_shared_version: string;
                    };
                    ConsensusCommitPrologueV2: {
                        epoch: string;
                        round: string;
                        commit_timestamp_ms: string;
                        consensus_commit_digest: number[];
                    };
                    ConsensusCommitPrologueV3: {
                        epoch: string;
                        round: string;
                        sub_dag_index: string;
                        commit_timestamp_ms: string;
                        consensus_commit_digest: number[];
                        consensus_determined_version_assignments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            CancelledTransactions: [number[], [number[], string][]][];
                            CancelledTransactionsV2: [number[], [[number[], string], string][]][];
                        }, "CancelledTransactions" | "CancelledTransactionsV2">;
                    };
                    ConsensusCommitPrologueV4: {
                        epoch: string;
                        round: string;
                        sub_dag_index: string;
                        commit_timestamp_ms: string;
                        consensus_commit_digest: number[];
                        consensus_determined_version_assignments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            CancelledTransactions: [number[], [number[], string][]][];
                            CancelledTransactionsV2: [number[], [[number[], string], string][]][];
                        }, "CancelledTransactions" | "CancelledTransactionsV2">;
                        additional_state_digest: number[];
                    };
                    ProgrammableSystemTransaction: {
                        inputs: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Pure: number[];
                            Object: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                ImmOrOwnedObject: [number[], string, number[]];
                                SharedObject: {
                                    id: number[];
                                    initial_shared_version: string;
                                    mutability: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                        Immutable: unknown;
                                        Mutable: unknown;
                                        NonExclusiveWrite: unknown;
                                    }, "Immutable" | "Mutable" | "NonExclusiveWrite">;
                                };
                                Receiving: [number[], string, number[]];
                            }, "ImmOrOwnedObject" | "SharedObject" | "Receiving">;
                            FundsWithdrawal: {
                                reservation: {
                                    MaxAmountU64: string;
                                    $kind: "MaxAmountU64";
                                };
                                type_arg: {
                                    Balance: unknown;
                                    $kind: "Balance";
                                };
                                withdraw_from: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    Sender: unknown;
                                    Sponsor: unknown;
                                }, "Sender" | "Sponsor">;
                            };
                        }, "Pure" | "Object" | "FundsWithdrawal">[];
                        commands: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            MoveCall: {
                                package: number[];
                                module: string;
                                function: string;
                                type_arguments: unknown[];
                                arguments: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: [number, number];
                                }, "GasCoin" | "Input" | "Result" | "NestedResult">[];
                            };
                            TransferObjects: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                            SplitCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            MergeCoins: [import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Publish: [number[][], number[][]];
                            MakeMoveVec: [unknown, import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">[]];
                            Upgrade: [number[][], number[][], number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: [number, number];
                            }, "GasCoin" | "Input" | "Result" | "NestedResult">];
                        }, "MoveCall" | "TransferObjects" | "SplitCoins" | "MergeCoins" | "Publish" | "MakeMoveVec" | "Upgrade">[];
                    };
                }, "AuthenticatorStateUpdate" | "ChangeEpoch" | "ProgrammableTransaction" | "ConsensusCommitPrologue" | "RandomnessStateUpdate" | "ConsensusCommitPrologueV2" | "ConsensusCommitPrologueV3" | "ConsensusCommitPrologueV4" | "Genesis" | "EndOfEpochTransaction" | "ProgrammableSystemTransaction">;
                sender: number[];
                gas_data: {
                    payment: [number[], string, number[]][];
                    owner: number[];
                    price: string;
                    budget: string;
                };
                expiration: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    None: unknown;
                    Epoch: string;
                    ValidDuring: {
                        min_epoch: string;
                        max_epoch: string;
                        min_timestamp: string;
                        max_timestamp: string;
                        chain: number[];
                        nonce: number;
                    };
                }, "None" | "Epoch" | "ValidDuring">;
            };
            $kind: "V1";
        };
    };
    tx_signatures: number[][];
}[], Iterable<{
    intent_message: {
        intent: {
            scope: number;
            version: number;
            app_id: number;
        };
        value: {
            V1: {
                kind: import("@mysten/bcs").EnumInputShape<{
                    ProgrammableTransaction: {
                        inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
                            Pure: Iterable<number> & {
                                length: number;
                            };
                            Object: import("@mysten/bcs").EnumInputShape<{
                                ImmOrOwnedObject: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                                SharedObject: {
                                    id: Iterable<number> & {
                                        length: number;
                                    };
                                    initial_shared_version: string | number | bigint;
                                    mutability: import("@mysten/bcs").EnumInputShape<{
                                        Immutable: unknown;
                                        Mutable: unknown;
                                        NonExclusiveWrite: unknown;
                                    }>;
                                };
                                Receiving: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                            }>;
                            FundsWithdrawal: {
                                reservation: {
                                    MaxAmountU64: string | number | bigint;
                                };
                                type_arg: {
                                    Balance: unknown;
                                };
                                withdraw_from: import("@mysten/bcs").EnumInputShape<{
                                    Sender: unknown;
                                    Sponsor: unknown;
                                }>;
                            };
                        }>> & {
                            length: number;
                        };
                        commands: Iterable<import("@mysten/bcs").EnumInputShape<{
                            MoveCall: {
                                package: Iterable<number> & {
                                    length: number;
                                };
                                module: string;
                                function: string;
                                type_arguments: Iterable<unknown> & {
                                    length: number;
                                };
                                arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>> & {
                                    length: number;
                                };
                            };
                            TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                            SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Publish: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }];
                            MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Upgrade: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<number> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                        }>> & {
                            length: number;
                        };
                    };
                    ChangeEpoch: {
                        epoch: string | number | bigint;
                        protocol_version: string | number | bigint;
                        storage_charge: string | number | bigint;
                        computation_charge: string | number | bigint;
                        storage_rebate: string | number | bigint;
                        non_refundable_storage_fee: string | number | bigint;
                        epoch_start_timestamp_ms: string | number | bigint;
                        system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }]> & {
                            length: number;
                        };
                    };
                    Genesis: {
                        objects: Iterable<{
                            RawObject: {
                                data: import("@mysten/bcs").EnumInputShape<{
                                    Move: {
                                        type: import("@mysten/bcs").EnumInputShape<{
                                            Other: {
                                                address: Iterable<number> & {
                                                    length: number;
                                                };
                                                module: string;
                                                name: string;
                                                type_args: Iterable<unknown> & {
                                                    length: number;
                                                };
                                            };
                                            GasCoin: unknown;
                                            StakedSui: unknown;
                                            Coin: unknown;
                                            SuiBalanceAccumulatorField: unknown;
                                            BalanceAccumulatorField: unknown;
                                        }>;
                                        has_public_transfer: boolean;
                                        version: string | number | bigint;
                                        contents: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    Package: {
                                        id: Iterable<number> & {
                                            length: number;
                                        };
                                        version: string | number | bigint;
                                        module_map: Map<string, Iterable<number> & {
                                            length: number;
                                        }>;
                                        type_origin_table: Iterable<{
                                            module_name: string;
                                            datatype_name: string;
                                            package: Iterable<number> & {
                                                length: number;
                                            };
                                        }> & {
                                            length: number;
                                        };
                                        linkage_table: Map<Iterable<number> & {
                                            length: number;
                                        }, {
                                            upgraded_id: Iterable<number> & {
                                                length: number;
                                            };
                                            upgraded_version: string | number | bigint;
                                        }>;
                                    };
                                }>;
                                owner: import("@mysten/bcs").EnumInputShape<{
                                    AddressOwner: Iterable<number> & {
                                        length: number;
                                    };
                                    ObjectOwner: Iterable<number> & {
                                        length: number;
                                    };
                                    Shared: {
                                        initial_shared_version: string | number | bigint;
                                    };
                                    Immutable: unknown;
                                    ConsensusAddressOwner: {
                                        start_version: string | number | bigint;
                                        owner: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                }>;
                            };
                        }> & {
                            length: number;
                        };
                    };
                    ConsensusCommitPrologue: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        commit_timestamp_ms: string | number | bigint;
                    };
                    AuthenticatorStateUpdate: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        new_active_jwks: Iterable<{
                            jwk_id: {
                                iss: string;
                                kid: string;
                            };
                            jwk: {
                                kty: string;
                                e: string;
                                n: string;
                                alg: string;
                            };
                            epoch: string | number | bigint;
                        }> & {
                            length: number;
                        };
                        authenticator_obj_initial_shared_version: string | number | bigint;
                    };
                    EndOfEpochTransaction: Iterable<import("@mysten/bcs").EnumInputShape<{
                        ChangeEpoch: {
                            epoch: string | number | bigint;
                            protocol_version: string | number | bigint;
                            storage_charge: string | number | bigint;
                            computation_charge: string | number | bigint;
                            storage_rebate: string | number | bigint;
                            non_refundable_storage_fee: string | number | bigint;
                            epoch_start_timestamp_ms: string | number | bigint;
                            system_packages: Iterable<readonly [string | number | bigint, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        };
                        AuthenticatorStateCreate: unknown;
                        AuthenticatorStateExpire: {
                            min_epoch: string | number | bigint;
                            authenticator_obj_initial_shared_version: string | number | bigint;
                        };
                        RandomnessStateCreate: unknown;
                        DenyListStateCreate: unknown;
                        BridgeStateCreate: Iterable<number> & {
                            length: number;
                        };
                        BridgeCommitteeInit: string | number | bigint;
                        StoreExecutionTimeObservations: {
                            V1: Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
                                MoveEntryPoint: {
                                    package: Iterable<number> & {
                                        length: number;
                                    };
                                    module: string;
                                    function: string;
                                    type_arguments: Iterable<unknown> & {
                                        length: number;
                                    };
                                };
                                TransferObjects: unknown;
                                SplitCoins: unknown;
                                MergeCoins: unknown;
                                Publish: unknown;
                                MakeMoveVec: unknown;
                                Upgrade: unknown;
                            }>, Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, {
                                secs: string | number | bigint;
                                nanos: number;
                            }]> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        };
                        AccumulatorRootCreate: unknown;
                        CoinRegistryCreate: unknown;
                        DisplayRegistryCreate: unknown;
                        AddressAliasStateCreate: unknown;
                        WriteAccumulatorStorageCost: {
                            storage_cost: string | number | bigint;
                        };
                    }>> & {
                        length: number;
                    };
                    RandomnessStateUpdate: {
                        epoch: string | number | bigint;
                        randomness_round: string | number | bigint;
                        random_bytes: Iterable<number> & {
                            length: number;
                        };
                        randomness_obj_initial_shared_version: string | number | bigint;
                    };
                    ConsensusCommitPrologueV2: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        commit_timestamp_ms: string | number | bigint;
                        consensus_commit_digest: Iterable<number> & {
                            length: number;
                        };
                    };
                    ConsensusCommitPrologueV3: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        sub_dag_index: string | number | bigint;
                        commit_timestamp_ms: string | number | bigint;
                        consensus_commit_digest: Iterable<number> & {
                            length: number;
                        };
                        consensus_determined_version_assignments: import("@mysten/bcs").EnumInputShape<{
                            CancelledTransactions: Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint]> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                            CancelledTransactionsV2: Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, Iterable<readonly [readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint], string | number | bigint]> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        }>;
                    };
                    ConsensusCommitPrologueV4: {
                        epoch: string | number | bigint;
                        round: string | number | bigint;
                        sub_dag_index: string | number | bigint;
                        commit_timestamp_ms: string | number | bigint;
                        consensus_commit_digest: Iterable<number> & {
                            length: number;
                        };
                        consensus_determined_version_assignments: import("@mysten/bcs").EnumInputShape<{
                            CancelledTransactions: Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint]> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                            CancelledTransactionsV2: Iterable<readonly [Iterable<number> & {
                                length: number;
                            }, Iterable<readonly [readonly [Iterable<number> & {
                                length: number;
                            }, string | number | bigint], string | number | bigint]> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        }>;
                        additional_state_digest: Iterable<number> & {
                            length: number;
                        };
                    };
                    ProgrammableSystemTransaction: {
                        inputs: Iterable<import("@mysten/bcs").EnumInputShape<{
                            Pure: Iterable<number> & {
                                length: number;
                            };
                            Object: import("@mysten/bcs").EnumInputShape<{
                                ImmOrOwnedObject: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                                SharedObject: {
                                    id: Iterable<number> & {
                                        length: number;
                                    };
                                    initial_shared_version: string | number | bigint;
                                    mutability: import("@mysten/bcs").EnumInputShape<{
                                        Immutable: unknown;
                                        Mutable: unknown;
                                        NonExclusiveWrite: unknown;
                                    }>;
                                };
                                Receiving: readonly [Iterable<number> & {
                                    length: number;
                                }, string | number | bigint, Iterable<number> & {
                                    length: number;
                                }];
                            }>;
                            FundsWithdrawal: {
                                reservation: {
                                    MaxAmountU64: string | number | bigint;
                                };
                                type_arg: {
                                    Balance: unknown;
                                };
                                withdraw_from: import("@mysten/bcs").EnumInputShape<{
                                    Sender: unknown;
                                    Sponsor: unknown;
                                }>;
                            };
                        }>> & {
                            length: number;
                        };
                        commands: Iterable<import("@mysten/bcs").EnumInputShape<{
                            MoveCall: {
                                package: Iterable<number> & {
                                    length: number;
                                };
                                module: string;
                                function: string;
                                type_arguments: Iterable<unknown> & {
                                    length: number;
                                };
                                arguments: Iterable<import("@mysten/bcs").EnumInputShape<{
                                    GasCoin: unknown;
                                    Input: number;
                                    Result: number;
                                    NestedResult: readonly [number, number];
                                }>> & {
                                    length: number;
                                };
                            };
                            TransferObjects: readonly [Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                            SplitCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            MergeCoins: readonly [import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Publish: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }];
                            MakeMoveVec: readonly [unknown, Iterable<import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>> & {
                                length: number;
                            }];
                            Upgrade: readonly [Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, Iterable<number> & {
                                length: number;
                            }, import("@mysten/bcs").EnumInputShape<{
                                GasCoin: unknown;
                                Input: number;
                                Result: number;
                                NestedResult: readonly [number, number];
                            }>];
                        }>> & {
                            length: number;
                        };
                    };
                }>;
                sender: Iterable<number> & {
                    length: number;
                };
                gas_data: {
                    payment: Iterable<readonly [Iterable<number> & {
                        length: number;
                    }, string | number | bigint, Iterable<number> & {
                        length: number;
                    }]> & {
                        length: number;
                    };
                    owner: Iterable<number> & {
                        length: number;
                    };
                    price: string | number | bigint;
                    budget: string | number | bigint;
                };
                expiration: import("@mysten/bcs").EnumInputShape<{
                    None: unknown;
                    Epoch: string | number | bigint;
                    ValidDuring: {
                        min_epoch: string | number | bigint;
                        max_epoch: string | number | bigint;
                        min_timestamp: string | number | bigint;
                        max_timestamp: string | number | bigint;
                        chain: Iterable<number> & {
                            length: number;
                        };
                        nonce: number;
                    };
                }>;
            };
        };
    };
    tx_signatures: Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    };
}> & {
    length: number;
}, `vector<${string}>`>;
export const EmptySignInfo: import("@mysten/bcs").BcsStruct<{}, string>;
export const ModuleId: import("@mysten/bcs").BcsStruct<{
    address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    name: import("@mysten/bcs").BcsType<string, string, "string">;
}, string>;
export const MoveLocation: import("@mysten/bcs").BcsStruct<{
    module: import("@mysten/bcs").BcsStruct<{
        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        name: import("@mysten/bcs").BcsType<string, string, "string">;
    }, string>;
    function: import("@mysten/bcs").BcsType<number, number, "u16">;
    instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
    function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
}, string>;
export const MoveLocationOpt: import("@mysten/bcs").BcsType<{
    module: {
        address: number[];
        name: string;
    };
    function: number;
    instruction: number;
    function_name: string;
}, {
    module: {
        address: Iterable<number> & {
            length: number;
        };
        name: string;
    };
    function: number;
    instruction: number;
    function_name: string;
}, `Option<${string}>`>;
export const CommandArgumentError: import("@mysten/bcs").BcsEnum<{
    TypeMismatch: any;
    InvalidBCSBytes: any;
    InvalidUsageOfPureArg: any;
    InvalidArgumentToPrivateEntryFunction: any;
    IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
        idx: import("@mysten/bcs").BcsType<number, number, "u16">;
    }, string>;
    SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
        result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
        secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
    }, string>;
    InvalidResultArity: import("@mysten/bcs").BcsStruct<{
        result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
    }, string>;
    InvalidGasCoinUsage: any;
    InvalidValueUsage: any;
    InvalidObjectByValue: any;
    InvalidObjectByMutRef: any;
    SharedObjectOperationNotAllowed: any;
    InvalidArgumentArity: any;
    InvalidTransferObject: any;
    InvalidMakeMoveVecNonObjectArgument: any;
    ArgumentWithoutValue: any;
    CannotMoveBorrowedValue: any;
    CannotWriteToExtendedReference: any;
    InvalidReferenceArgument: any;
}, "CommandArgumentError">;
export const TypeArgumentError: import("@mysten/bcs").BcsEnum<{
    TypeNotFound: any;
    ConstraintNotSatisfied: any;
}, "TypeArgumentError">;
export const PackageUpgradeError: import("@mysten/bcs").BcsEnum<{
    UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
        package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
    }, string>;
    NotAPackage: import("@mysten/bcs").BcsStruct<{
        object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
    }, string>;
    IncompatibleUpgrade: any;
    DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
        digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
    }, string>;
    UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
        policy: import("@mysten/bcs").BcsType<number, number, "u8">;
    }, string>;
    PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
        package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
    }, string>;
}, "PackageUpgradeError">;
export const CongestedObjects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
    length: number;
}> & {
    length: number;
}, `vector<${string}>`>;
export const ExecutionErrorKind: import("@mysten/bcs").BcsEnum<{
    InsufficientGas: any;
    InvalidGasObject: any;
    InvariantViolation: any;
    FeatureNotYetSupported: any;
    MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
        object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
        object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
        object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
    }, string>;
    InsufficientCoinBalance: any;
    CoinBalanceOverflow: any;
    PublishErrorNonZeroAddress: any;
    SuiMoveVerificationError: any;
    MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
        module: {
            address: number[];
            name: string;
        };
        function: number;
        instruction: number;
        function_name: string;
    }, {
        module: {
            address: Iterable<number> & {
                length: number;
            };
            name: string;
        };
        function: number;
        instruction: number;
        function_name: string;
    }, `Option<${string}>`>;
    MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
        module: import("@mysten/bcs").BcsStruct<{
            address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            name: import("@mysten/bcs").BcsType<string, string, "string">;
        }, string>;
        function: import("@mysten/bcs").BcsType<number, number, "u16">;
        instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
        function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
    }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
    VMVerificationOrDeserializationError: any;
    VMInvariantViolation: any;
    FunctionNotFound: any;
    ArityMismatch: any;
    TypeArityMismatch: any;
    NonEntryFunctionInvoked: any;
    CommandArgumentError: import("@mysten/bcs").BcsStruct<{
        arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
        kind: import("@mysten/bcs").BcsEnum<{
            TypeMismatch: any;
            InvalidBCSBytes: any;
            InvalidUsageOfPureArg: any;
            InvalidArgumentToPrivateEntryFunction: any;
            IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                idx: import("@mysten/bcs").BcsType<number, number, "u16">;
            }, string>;
            SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
            }, string>;
            InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
            }, string>;
            InvalidGasCoinUsage: any;
            InvalidValueUsage: any;
            InvalidObjectByValue: any;
            InvalidObjectByMutRef: any;
            SharedObjectOperationNotAllowed: any;
            InvalidArgumentArity: any;
            InvalidTransferObject: any;
            InvalidMakeMoveVecNonObjectArgument: any;
            ArgumentWithoutValue: any;
            CannotMoveBorrowedValue: any;
            CannotWriteToExtendedReference: any;
            InvalidReferenceArgument: any;
        }, "CommandArgumentError">;
    }, string>;
    TypeArgumentError: import("@mysten/bcs").BcsStruct<{
        argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
        kind: import("@mysten/bcs").BcsEnum<{
            TypeNotFound: any;
            ConstraintNotSatisfied: any;
        }, "TypeArgumentError">;
    }, string>;
    UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
        result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
        secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
    }, string>;
    InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
        idx: import("@mysten/bcs").BcsType<number, number, "u16">;
    }, string>;
    InvalidTransferObject: any;
    EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
        current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    PublishUpgradeMissingDependency: any;
    PublishUpgradeDependencyDowngrade: any;
    PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
        upgrade_error: import("@mysten/bcs").BcsEnum<{
            UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            NotAPackage: import("@mysten/bcs").BcsStruct<{
                object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            IncompatibleUpgrade: any;
            DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                policy: import("@mysten/bcs").BcsType<number, number, "u8">;
            }, string>;
            PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, "PackageUpgradeError">;
    }, string>;
    WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
        current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    CertificateDenied: any;
    SuiMoveVerificationTimedout: any;
    SharedObjectOperationNotAllowed: any;
    InputObjectDeleted: any;
    ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
        congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, `vector<${string}>`>;
    }, string>;
    AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
    }, string>;
    CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
        coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
    }, string>;
    ExecutionCancelledDueToRandomnessUnavailable: any;
    MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
        value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
        value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    InvalidLinkage: any;
    InsufficientFundsForWithdraw: any;
    NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
        id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
    }, string>;
}, "ExecutionErrorKind">;
export const ExecutionFailure: import("@mysten/bcs").BcsStruct<{
    error: import("@mysten/bcs").BcsEnum<{
        InsufficientGas: any;
        InvalidGasObject: any;
        InvariantViolation: any;
        FeatureNotYetSupported: any;
        MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
            object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
            object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
            object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
        InsufficientCoinBalance: any;
        CoinBalanceOverflow: any;
        PublishErrorNonZeroAddress: any;
        SuiMoveVerificationError: any;
        MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
            module: {
                address: number[];
                name: string;
            };
            function: number;
            instruction: number;
            function_name: string;
        }, {
            module: {
                address: Iterable<number> & {
                    length: number;
                };
                name: string;
            };
            function: number;
            instruction: number;
            function_name: string;
        }, `Option<${string}>`>;
        MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
            module: import("@mysten/bcs").BcsStruct<{
                address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                name: import("@mysten/bcs").BcsType<string, string, "string">;
            }, string>;
            function: import("@mysten/bcs").BcsType<number, number, "u16">;
            instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
            function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
        }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
        VMVerificationOrDeserializationError: any;
        VMInvariantViolation: any;
        FunctionNotFound: any;
        ArityMismatch: any;
        TypeArityMismatch: any;
        NonEntryFunctionInvoked: any;
        CommandArgumentError: import("@mysten/bcs").BcsStruct<{
            arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
            kind: import("@mysten/bcs").BcsEnum<{
                TypeMismatch: any;
                InvalidBCSBytes: any;
                InvalidUsageOfPureArg: any;
                InvalidArgumentToPrivateEntryFunction: any;
                IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                    idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                }, string>;
                SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                }, string>;
                InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                }, string>;
                InvalidGasCoinUsage: any;
                InvalidValueUsage: any;
                InvalidObjectByValue: any;
                InvalidObjectByMutRef: any;
                SharedObjectOperationNotAllowed: any;
                InvalidArgumentArity: any;
                InvalidTransferObject: any;
                InvalidMakeMoveVecNonObjectArgument: any;
                ArgumentWithoutValue: any;
                CannotMoveBorrowedValue: any;
                CannotWriteToExtendedReference: any;
                InvalidReferenceArgument: any;
            }, "CommandArgumentError">;
        }, string>;
        TypeArgumentError: import("@mysten/bcs").BcsStruct<{
            argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
            kind: import("@mysten/bcs").BcsEnum<{
                TypeNotFound: any;
                ConstraintNotSatisfied: any;
            }, "TypeArgumentError">;
        }, string>;
        UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
            result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
            secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
        }, string>;
        InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
            idx: import("@mysten/bcs").BcsType<number, number, "u16">;
        }, string>;
        InvalidTransferObject: any;
        EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
            current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        PublishUpgradeMissingDependency: any;
        PublishUpgradeDependencyDowngrade: any;
        PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
            upgrade_error: import("@mysten/bcs").BcsEnum<{
                UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
                NotAPackage: import("@mysten/bcs").BcsStruct<{
                    object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
                IncompatibleUpgrade: any;
                DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                    digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
                UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                    policy: import("@mysten/bcs").BcsType<number, number, "u8">;
                }, string>;
                PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                    ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
            }, "PackageUpgradeError">;
        }, string>;
        WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
            current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        CertificateDenied: any;
        SuiMoveVerificationTimedout: any;
        SharedObjectOperationNotAllowed: any;
        InputObjectDeleted: any;
        ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
            congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, `vector<${string}>`>;
        }, string>;
        AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
            address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
        }, string>;
        CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
            coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
        }, string>;
        ExecutionCancelledDueToRandomnessUnavailable: any;
        MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
            value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
            value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        InvalidLinkage: any;
        InsufficientFundsForWithdraw: any;
        NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }, "ExecutionErrorKind">;
    command: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
}, string>;
export const ExecutionStatus: import("@mysten/bcs").BcsEnum<{
    Success: any;
    Failure: import("@mysten/bcs").BcsStruct<{
        error: import("@mysten/bcs").BcsEnum<{
            InsufficientGas: any;
            InvalidGasObject: any;
            InvariantViolation: any;
            FeatureNotYetSupported: any;
            MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
                object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
                object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
                object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            InsufficientCoinBalance: any;
            CoinBalanceOverflow: any;
            PublishErrorNonZeroAddress: any;
            SuiMoveVerificationError: any;
            MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
                module: {
                    address: number[];
                    name: string;
                };
                function: number;
                instruction: number;
                function_name: string;
            }, {
                module: {
                    address: Iterable<number> & {
                        length: number;
                    };
                    name: string;
                };
                function: number;
                instruction: number;
                function_name: string;
            }, `Option<${string}>`>;
            MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
                module: import("@mysten/bcs").BcsStruct<{
                    address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                    name: import("@mysten/bcs").BcsType<string, string, "string">;
                }, string>;
                function: import("@mysten/bcs").BcsType<number, number, "u16">;
                instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
                function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
            }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
            VMVerificationOrDeserializationError: any;
            VMInvariantViolation: any;
            FunctionNotFound: any;
            ArityMismatch: any;
            TypeArityMismatch: any;
            NonEntryFunctionInvoked: any;
            CommandArgumentError: import("@mysten/bcs").BcsStruct<{
                arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                kind: import("@mysten/bcs").BcsEnum<{
                    TypeMismatch: any;
                    InvalidBCSBytes: any;
                    InvalidUsageOfPureArg: any;
                    InvalidArgumentToPrivateEntryFunction: any;
                    IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                        idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    }, string>;
                    SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                        result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    }, string>;
                    InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                        result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    }, string>;
                    InvalidGasCoinUsage: any;
                    InvalidValueUsage: any;
                    InvalidObjectByValue: any;
                    InvalidObjectByMutRef: any;
                    SharedObjectOperationNotAllowed: any;
                    InvalidArgumentArity: any;
                    InvalidTransferObject: any;
                    InvalidMakeMoveVecNonObjectArgument: any;
                    ArgumentWithoutValue: any;
                    CannotMoveBorrowedValue: any;
                    CannotWriteToExtendedReference: any;
                    InvalidReferenceArgument: any;
                }, "CommandArgumentError">;
            }, string>;
            TypeArgumentError: import("@mysten/bcs").BcsStruct<{
                argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                kind: import("@mysten/bcs").BcsEnum<{
                    TypeNotFound: any;
                    ConstraintNotSatisfied: any;
                }, "TypeArgumentError">;
            }, string>;
            UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
                result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
            }, string>;
            InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
                idx: import("@mysten/bcs").BcsType<number, number, "u16">;
            }, string>;
            InvalidTransferObject: any;
            EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
                current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            PublishUpgradeMissingDependency: any;
            PublishUpgradeDependencyDowngrade: any;
            PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
                upgrade_error: import("@mysten/bcs").BcsEnum<{
                    UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                        package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                    }, string>;
                    NotAPackage: import("@mysten/bcs").BcsStruct<{
                        object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                    }, string>;
                    IncompatibleUpgrade: any;
                    DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                        digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                    }, string>;
                    UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                        policy: import("@mysten/bcs").BcsType<number, number, "u8">;
                    }, string>;
                    PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                        package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                        ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                    }, string>;
                }, "PackageUpgradeError">;
            }, string>;
            WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
                current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            CertificateDenied: any;
            SuiMoveVerificationTimedout: any;
            SharedObjectOperationNotAllowed: any;
            InputObjectDeleted: any;
            ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
                congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                }, `vector<${string}>`>;
            }, string>;
            AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
                address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
            }, string>;
            CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
                coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
            }, string>;
            ExecutionCancelledDueToRandomnessUnavailable: any;
            MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
                value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
                value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            InvalidLinkage: any;
            InsufficientFundsForWithdraw: any;
            NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, "ExecutionErrorKind">;
        command: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
    }, string>;
}, "ExecutionStatus">;
export const TransactionEventsDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const TransactionEffectsV1: import("@mysten/bcs").BcsStruct<{
    status: import("@mysten/bcs").BcsEnum<{
        Success: any;
        Failure: import("@mysten/bcs").BcsStruct<{
            error: import("@mysten/bcs").BcsEnum<{
                InsufficientGas: any;
                InvalidGasObject: any;
                InvariantViolation: any;
                FeatureNotYetSupported: any;
                MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
                    object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
                    object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
                    object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
                InsufficientCoinBalance: any;
                CoinBalanceOverflow: any;
                PublishErrorNonZeroAddress: any;
                SuiMoveVerificationError: any;
                MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
                    module: {
                        address: number[];
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                }, {
                    module: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                }, `Option<${string}>`>;
                MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
                    module: import("@mysten/bcs").BcsStruct<{
                        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                        name: import("@mysten/bcs").BcsType<string, string, "string">;
                    }, string>;
                    function: import("@mysten/bcs").BcsType<number, number, "u16">;
                    instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
                    function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
                }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
                VMVerificationOrDeserializationError: any;
                VMInvariantViolation: any;
                FunctionNotFound: any;
                ArityMismatch: any;
                TypeArityMismatch: any;
                NonEntryFunctionInvoked: any;
                CommandArgumentError: import("@mysten/bcs").BcsStruct<{
                    arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    kind: import("@mysten/bcs").BcsEnum<{
                        TypeMismatch: any;
                        InvalidBCSBytes: any;
                        InvalidUsageOfPureArg: any;
                        InvalidArgumentToPrivateEntryFunction: any;
                        IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                            idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                            result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                            result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidGasCoinUsage: any;
                        InvalidValueUsage: any;
                        InvalidObjectByValue: any;
                        InvalidObjectByMutRef: any;
                        SharedObjectOperationNotAllowed: any;
                        InvalidArgumentArity: any;
                        InvalidTransferObject: any;
                        InvalidMakeMoveVecNonObjectArgument: any;
                        ArgumentWithoutValue: any;
                        CannotMoveBorrowedValue: any;
                        CannotWriteToExtendedReference: any;
                        InvalidReferenceArgument: any;
                    }, "CommandArgumentError">;
                }, string>;
                TypeArgumentError: import("@mysten/bcs").BcsStruct<{
                    argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    kind: import("@mysten/bcs").BcsEnum<{
                        TypeNotFound: any;
                        ConstraintNotSatisfied: any;
                    }, "TypeArgumentError">;
                }, string>;
                UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                }, string>;
                InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
                    idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                }, string>;
                InvalidTransferObject: any;
                EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
                    current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                PublishUpgradeMissingDependency: any;
                PublishUpgradeDependencyDowngrade: any;
                PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
                    upgrade_error: import("@mysten/bcs").BcsEnum<{
                        UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                            package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                        NotAPackage: import("@mysten/bcs").BcsStruct<{
                            object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                        IncompatibleUpgrade: any;
                        DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                            digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                        UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                            policy: import("@mysten/bcs").BcsType<number, number, "u8">;
                        }, string>;
                        PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                            package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                            ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                    }, "PackageUpgradeError">;
                }, string>;
                WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
                    current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                CertificateDenied: any;
                SuiMoveVerificationTimedout: any;
                SharedObjectOperationNotAllowed: any;
                InputObjectDeleted: any;
                ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
                    congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, `vector<${string}>`>;
                }, string>;
                AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
                    address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                    coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                }, string>;
                CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
                    coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                }, string>;
                ExecutionCancelledDueToRandomnessUnavailable: any;
                MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
                    value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
                    value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                InvalidLinkage: any;
                InsufficientFundsForWithdraw: any;
                NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
                    id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
            }, "ExecutionErrorKind">;
            command: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
        }, string>;
    }, "ExecutionStatus">;
    executed_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    gas_used: import("@mysten/bcs").BcsStruct<{
        computationCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        storageCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        storageRebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        nonRefundableStorageFee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    modified_at_versions: import("@mysten/bcs").BcsType<[number[], string][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint]> & {
        length: number;
    }, string>;
    shared_objects: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    }, string>;
    transaction_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
    created: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        AddressOwner: number[];
        ObjectOwner: number[];
        Shared: {
            initial_shared_version: string;
        };
        Immutable: unknown;
        ConsensusAddressOwner: {
            start_version: string;
            owner: number[];
        };
    }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }], import("@mysten/bcs").EnumInputShape<{
        AddressOwner: Iterable<number> & {
            length: number;
        };
        ObjectOwner: Iterable<number> & {
            length: number;
        };
        Shared: {
            initial_shared_version: string | number | bigint;
        };
        Immutable: unknown;
        ConsensusAddressOwner: {
            start_version: string | number | bigint;
            owner: Iterable<number> & {
                length: number;
            };
        };
    }>]> & {
        length: number;
    }, string>;
    mutated: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        AddressOwner: number[];
        ObjectOwner: number[];
        Shared: {
            initial_shared_version: string;
        };
        Immutable: unknown;
        ConsensusAddressOwner: {
            start_version: string;
            owner: number[];
        };
    }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }], import("@mysten/bcs").EnumInputShape<{
        AddressOwner: Iterable<number> & {
            length: number;
        };
        ObjectOwner: Iterable<number> & {
            length: number;
        };
        Shared: {
            initial_shared_version: string | number | bigint;
        };
        Immutable: unknown;
        ConsensusAddressOwner: {
            start_version: string | number | bigint;
            owner: Iterable<number> & {
                length: number;
            };
        };
    }>]> & {
        length: number;
    }, string>;
    unwrapped: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        AddressOwner: number[];
        ObjectOwner: number[];
        Shared: {
            initial_shared_version: string;
        };
        Immutable: unknown;
        ConsensusAddressOwner: {
            start_version: string;
            owner: number[];
        };
    }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }], import("@mysten/bcs").EnumInputShape<{
        AddressOwner: Iterable<number> & {
            length: number;
        };
        ObjectOwner: Iterable<number> & {
            length: number;
        };
        Shared: {
            initial_shared_version: string | number | bigint;
        };
        Immutable: unknown;
        ConsensusAddressOwner: {
            start_version: string | number | bigint;
            owner: Iterable<number> & {
                length: number;
            };
        };
    }>]> & {
        length: number;
    }, string>;
    deleted: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    }, string>;
    unwrapped_then_deleted: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    }, string>;
    wrapped: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, string | number | bigint, Iterable<number> & {
        length: number;
    }]> & {
        length: number;
    }, string>;
    gas_object: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">], string>, import("@mysten/bcs").BcsEnum<{
        AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        Shared: import("@mysten/bcs").BcsStruct<{
            initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        Immutable: any;
        ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
            start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }, "Owner">], string>;
    events_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "Option<vector<u8>>">;
    dependencies: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, string>;
}, string>;
export const ObjectIn: import("@mysten/bcs").BcsEnum<{
    NotExist: any;
    Exist: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">], string>, import("@mysten/bcs").BcsEnum<{
        AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        Shared: import("@mysten/bcs").BcsStruct<{
            initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        Immutable: any;
        ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
            start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }, "Owner">], string>;
}, "ObjectIn">;
export const ObjectOut: import("@mysten/bcs").BcsEnum<{
    NotExist: any;
    ObjectWrite: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">, import("@mysten/bcs").BcsEnum<{
        AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        Shared: import("@mysten/bcs").BcsStruct<{
            initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        Immutable: any;
        ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
            start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }, "Owner">], string>;
    PackageWrite: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">], string>;
    AccumulatorWriteV1: import("@mysten/bcs").BcsStruct<{
        address: import("@mysten/bcs").BcsStruct<{
            address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            ty: any;
        }, string>;
        operation: import("@mysten/bcs").BcsEnum<{
            Merge: any;
            Split: any;
        }, "AccumulatorOperation">;
        value: import("@mysten/bcs").BcsEnum<{
            Integer: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            IntegerTuple: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
            EventDigest: import("@mysten/bcs").BcsType<[string, number[]][], Iterable<readonly [string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
        }, "AccumulatorValue">;
    }, string>;
}, "ObjectOut">;
export const IDOperation: import("@mysten/bcs").BcsEnum<{
    None: any;
    Created: any;
    Deleted: any;
}, "IDOperation">;
export const EffectsObjectChange: import("@mysten/bcs").BcsStruct<{
    input_state: import("@mysten/bcs").BcsEnum<{
        NotExist: any;
        Exist: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">], string>, import("@mysten/bcs").BcsEnum<{
            AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            Shared: import("@mysten/bcs").BcsStruct<{
                initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            Immutable: any;
            ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
                start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, "Owner">], string>;
    }, "ObjectIn">;
    output_state: import("@mysten/bcs").BcsEnum<{
        NotExist: any;
        ObjectWrite: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">, import("@mysten/bcs").BcsEnum<{
            AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            Shared: import("@mysten/bcs").BcsStruct<{
                initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            Immutable: any;
            ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
                start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, "Owner">], string>;
        PackageWrite: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">], string>;
        AccumulatorWriteV1: import("@mysten/bcs").BcsStruct<{
            address: import("@mysten/bcs").BcsStruct<{
                address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                ty: any;
            }, string>;
            operation: import("@mysten/bcs").BcsEnum<{
                Merge: any;
                Split: any;
            }, "AccumulatorOperation">;
            value: import("@mysten/bcs").BcsEnum<{
                Integer: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                IntegerTuple: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
                EventDigest: import("@mysten/bcs").BcsType<[string, number[]][], Iterable<readonly [string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                }, string>;
            }, "AccumulatorValue">;
        }, string>;
    }, "ObjectOut">;
    id_operation: import("@mysten/bcs").BcsEnum<{
        None: any;
        Created: any;
        Deleted: any;
    }, "IDOperation">;
}, string>;
export const UnchangedConsensusKind: import("@mysten/bcs").BcsEnum<{
    ReadOnlyRoot: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">], string>;
    MutateConsensusStreamEnded: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    ReadConsensusStreamEnded: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    Cancelled: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    PerEpochConfig: any;
}, "UnchangedConsensusKind">;
export const EffectsAuxDataDigest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const TransactionEffectsV2: import("@mysten/bcs").BcsStruct<{
    status: import("@mysten/bcs").BcsEnum<{
        Success: any;
        Failure: import("@mysten/bcs").BcsStruct<{
            error: import("@mysten/bcs").BcsEnum<{
                InsufficientGas: any;
                InvalidGasObject: any;
                InvariantViolation: any;
                FeatureNotYetSupported: any;
                MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
                    object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
                    object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
                    object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
                InsufficientCoinBalance: any;
                CoinBalanceOverflow: any;
                PublishErrorNonZeroAddress: any;
                SuiMoveVerificationError: any;
                MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
                    module: {
                        address: number[];
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                }, {
                    module: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        name: string;
                    };
                    function: number;
                    instruction: number;
                    function_name: string;
                }, `Option<${string}>`>;
                MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
                    module: import("@mysten/bcs").BcsStruct<{
                        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                        name: import("@mysten/bcs").BcsType<string, string, "string">;
                    }, string>;
                    function: import("@mysten/bcs").BcsType<number, number, "u16">;
                    instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
                    function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
                }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
                VMVerificationOrDeserializationError: any;
                VMInvariantViolation: any;
                FunctionNotFound: any;
                ArityMismatch: any;
                TypeArityMismatch: any;
                NonEntryFunctionInvoked: any;
                CommandArgumentError: import("@mysten/bcs").BcsStruct<{
                    arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    kind: import("@mysten/bcs").BcsEnum<{
                        TypeMismatch: any;
                        InvalidBCSBytes: any;
                        InvalidUsageOfPureArg: any;
                        InvalidArgumentToPrivateEntryFunction: any;
                        IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                            idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                            result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                            result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidGasCoinUsage: any;
                        InvalidValueUsage: any;
                        InvalidObjectByValue: any;
                        InvalidObjectByMutRef: any;
                        SharedObjectOperationNotAllowed: any;
                        InvalidArgumentArity: any;
                        InvalidTransferObject: any;
                        InvalidMakeMoveVecNonObjectArgument: any;
                        ArgumentWithoutValue: any;
                        CannotMoveBorrowedValue: any;
                        CannotWriteToExtendedReference: any;
                        InvalidReferenceArgument: any;
                    }, "CommandArgumentError">;
                }, string>;
                TypeArgumentError: import("@mysten/bcs").BcsStruct<{
                    argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    kind: import("@mysten/bcs").BcsEnum<{
                        TypeNotFound: any;
                        ConstraintNotSatisfied: any;
                    }, "TypeArgumentError">;
                }, string>;
                UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                }, string>;
                InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
                    idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                }, string>;
                InvalidTransferObject: any;
                EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
                    current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                PublishUpgradeMissingDependency: any;
                PublishUpgradeDependencyDowngrade: any;
                PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
                    upgrade_error: import("@mysten/bcs").BcsEnum<{
                        UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                            package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                        NotAPackage: import("@mysten/bcs").BcsStruct<{
                            object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                        IncompatibleUpgrade: any;
                        DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                            digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                        UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                            policy: import("@mysten/bcs").BcsType<number, number, "u8">;
                        }, string>;
                        PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                            package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                            ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                    }, "PackageUpgradeError">;
                }, string>;
                WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
                    current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                CertificateDenied: any;
                SuiMoveVerificationTimedout: any;
                SharedObjectOperationNotAllowed: any;
                InputObjectDeleted: any;
                ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
                    congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                        length: number;
                    }> & {
                        length: number;
                    }, `vector<${string}>`>;
                }, string>;
                AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
                    address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                    coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                }, string>;
                CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
                    coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                }, string>;
                ExecutionCancelledDueToRandomnessUnavailable: any;
                MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
                    value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
                    value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                InvalidLinkage: any;
                InsufficientFundsForWithdraw: any;
                NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
                    id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
            }, "ExecutionErrorKind">;
            command: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
        }, string>;
    }, "ExecutionStatus">;
    executed_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    gas_used: import("@mysten/bcs").BcsStruct<{
        computationCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        storageCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        storageRebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        nonRefundableStorageFee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
    transaction_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
    gas_object_index: import("@mysten/bcs").BcsType<number, number, "Option<u32>">;
    events_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "Option<vector<u8>>">;
    dependencies: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }, string>;
    lamport_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    changed_objects: import("@mysten/bcs").BcsType<[number[], {
        input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            NotExist: unknown;
            Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
        }, "NotExist" | "Exist">;
        output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            NotExist: unknown;
            ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
            PackageWrite: [string, number[]];
            AccumulatorWriteV1: {
                address: {
                    address: number[];
                    ty: unknown;
                };
                operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Merge: unknown;
                    Split: unknown;
                }, "Merge" | "Split">;
                value: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Integer: string;
                    IntegerTuple: [string, string];
                    EventDigest: [string, number[]][];
                }, "Integer" | "IntegerTuple" | "EventDigest">;
            };
        }, "AccumulatorWriteV1" | "NotExist" | "ObjectWrite" | "PackageWrite">;
        id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            None: unknown;
            Created: unknown;
            Deleted: unknown;
        }, "None" | "Created" | "Deleted">;
    }][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, {
        input_state: import("@mysten/bcs").EnumInputShape<{
            NotExist: unknown;
            Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>];
        }>;
        output_state: import("@mysten/bcs").EnumInputShape<{
            NotExist: unknown;
            ObjectWrite: readonly [Iterable<number> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>];
            PackageWrite: readonly [string | number | bigint, Iterable<number> & {
                length: number;
            }];
            AccumulatorWriteV1: {
                address: {
                    address: Iterable<number> & {
                        length: number;
                    };
                    ty: unknown;
                };
                operation: import("@mysten/bcs").EnumInputShape<{
                    Merge: unknown;
                    Split: unknown;
                }>;
                value: import("@mysten/bcs").EnumInputShape<{
                    Integer: string | number | bigint;
                    IntegerTuple: readonly [string | number | bigint, string | number | bigint];
                    EventDigest: Iterable<readonly [string | number | bigint, Iterable<number> & {
                        length: number;
                    }]> & {
                        length: number;
                    };
                }>;
            };
        }>;
        id_operation: import("@mysten/bcs").EnumInputShape<{
            None: unknown;
            Created: unknown;
            Deleted: unknown;
        }>;
    }]> & {
        length: number;
    }, string>;
    unchanged_consensus_objects: import("@mysten/bcs").BcsType<[number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
        ReadOnlyRoot: [string, number[]];
        MutateConsensusStreamEnded: string;
        ReadConsensusStreamEnded: string;
        Cancelled: string;
        PerEpochConfig: unknown;
    }, "ReadOnlyRoot" | "MutateConsensusStreamEnded" | "ReadConsensusStreamEnded" | "Cancelled" | "PerEpochConfig">][], Iterable<readonly [Iterable<number> & {
        length: number;
    }, import("@mysten/bcs").EnumInputShape<{
        ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
            length: number;
        }];
        MutateConsensusStreamEnded: string | number | bigint;
        ReadConsensusStreamEnded: string | number | bigint;
        Cancelled: string | number | bigint;
        PerEpochConfig: unknown;
    }>]> & {
        length: number;
    }, string>;
    aux_data_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "Option<vector<u8>>">;
}, string>;
export const TransactionEffects: import("@mysten/bcs").BcsEnum<{
    V1: import("@mysten/bcs").BcsStruct<{
        status: import("@mysten/bcs").BcsEnum<{
            Success: any;
            Failure: import("@mysten/bcs").BcsStruct<{
                error: import("@mysten/bcs").BcsEnum<{
                    InsufficientGas: any;
                    InvalidGasObject: any;
                    InvariantViolation: any;
                    FeatureNotYetSupported: any;
                    MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
                        object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
                        object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
                        object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                    }, string>;
                    InsufficientCoinBalance: any;
                    CoinBalanceOverflow: any;
                    PublishErrorNonZeroAddress: any;
                    SuiMoveVerificationError: any;
                    MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
                        module: {
                            address: number[];
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    }, {
                        module: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    }, `Option<${string}>`>;
                    MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
                        module: import("@mysten/bcs").BcsStruct<{
                            address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                            name: import("@mysten/bcs").BcsType<string, string, "string">;
                        }, string>;
                        function: import("@mysten/bcs").BcsType<number, number, "u16">;
                        instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
                        function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
                    }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
                    VMVerificationOrDeserializationError: any;
                    VMInvariantViolation: any;
                    FunctionNotFound: any;
                    ArityMismatch: any;
                    TypeArityMismatch: any;
                    NonEntryFunctionInvoked: any;
                    CommandArgumentError: import("@mysten/bcs").BcsStruct<{
                        arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        kind: import("@mysten/bcs").BcsEnum<{
                            TypeMismatch: any;
                            InvalidBCSBytes: any;
                            InvalidUsageOfPureArg: any;
                            InvalidArgumentToPrivateEntryFunction: any;
                            IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            }, string>;
                            SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            }, string>;
                            InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                                result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            }, string>;
                            InvalidGasCoinUsage: any;
                            InvalidValueUsage: any;
                            InvalidObjectByValue: any;
                            InvalidObjectByMutRef: any;
                            SharedObjectOperationNotAllowed: any;
                            InvalidArgumentArity: any;
                            InvalidTransferObject: any;
                            InvalidMakeMoveVecNonObjectArgument: any;
                            ArgumentWithoutValue: any;
                            CannotMoveBorrowedValue: any;
                            CannotWriteToExtendedReference: any;
                            InvalidReferenceArgument: any;
                        }, "CommandArgumentError">;
                    }, string>;
                    TypeArgumentError: import("@mysten/bcs").BcsStruct<{
                        argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        kind: import("@mysten/bcs").BcsEnum<{
                            TypeNotFound: any;
                            ConstraintNotSatisfied: any;
                        }, "TypeArgumentError">;
                    }, string>;
                    UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
                        result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    }, string>;
                    InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
                        idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    }, string>;
                    InvalidTransferObject: any;
                    EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
                        current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    PublishUpgradeMissingDependency: any;
                    PublishUpgradeDependencyDowngrade: any;
                    PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
                        upgrade_error: import("@mysten/bcs").BcsEnum<{
                            UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                                package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                            }, string>;
                            NotAPackage: import("@mysten/bcs").BcsStruct<{
                                object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                            }, string>;
                            IncompatibleUpgrade: any;
                            DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                            }, string>;
                            UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                                policy: import("@mysten/bcs").BcsType<number, number, "u8">;
                            }, string>;
                            PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                                ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                            }, string>;
                        }, "PackageUpgradeError">;
                    }, string>;
                    WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
                        current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    CertificateDenied: any;
                    SuiMoveVerificationTimedout: any;
                    SharedObjectOperationNotAllowed: any;
                    InputObjectDeleted: any;
                    ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
                        congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, `vector<${string}>`>;
                    }, string>;
                    AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
                        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                        coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                    }, string>;
                    CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
                        coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                    }, string>;
                    ExecutionCancelledDueToRandomnessUnavailable: any;
                    MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
                        value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
                        value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    InvalidLinkage: any;
                    InsufficientFundsForWithdraw: any;
                    NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
                        id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                    }, string>;
                }, "ExecutionErrorKind">;
                command: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
            }, string>;
        }, "ExecutionStatus">;
        executed_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        gas_used: import("@mysten/bcs").BcsStruct<{
            computationCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            storageCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            storageRebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            nonRefundableStorageFee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        modified_at_versions: import("@mysten/bcs").BcsType<[number[], string][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint]> & {
            length: number;
        }, string>;
        shared_objects: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
        transaction_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">;
        created: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
            ConsensusAddressOwner: {
                start_version: string;
                owner: number[];
            };
        }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }], import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
            ConsensusAddressOwner: {
                start_version: string | number | bigint;
                owner: Iterable<number> & {
                    length: number;
                };
            };
        }>]> & {
            length: number;
        }, string>;
        mutated: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
            ConsensusAddressOwner: {
                start_version: string;
                owner: number[];
            };
        }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }], import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
            ConsensusAddressOwner: {
                start_version: string | number | bigint;
                owner: Iterable<number> & {
                    length: number;
                };
            };
        }>]> & {
            length: number;
        }, string>;
        unwrapped: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
            ConsensusAddressOwner: {
                start_version: string;
                owner: number[];
            };
        }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }], import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
            ConsensusAddressOwner: {
                start_version: string | number | bigint;
                owner: Iterable<number> & {
                    length: number;
                };
            };
        }>]> & {
            length: number;
        }, string>;
        deleted: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
        unwrapped_then_deleted: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
        wrapped: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, string | number | bigint, Iterable<number> & {
            length: number;
        }]> & {
            length: number;
        }, string>;
        gas_object: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">], string>, import("@mysten/bcs").BcsEnum<{
            AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            Shared: import("@mysten/bcs").BcsStruct<{
                initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            Immutable: any;
            ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
                start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, "Owner">], string>;
        events_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "Option<vector<u8>>">;
        dependencies: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, string>;
    }, string>;
    V2: import("@mysten/bcs").BcsStruct<{
        status: import("@mysten/bcs").BcsEnum<{
            Success: any;
            Failure: import("@mysten/bcs").BcsStruct<{
                error: import("@mysten/bcs").BcsEnum<{
                    InsufficientGas: any;
                    InvalidGasObject: any;
                    InvariantViolation: any;
                    FeatureNotYetSupported: any;
                    MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
                        object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
                        object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
                        object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                    }, string>;
                    InsufficientCoinBalance: any;
                    CoinBalanceOverflow: any;
                    PublishErrorNonZeroAddress: any;
                    SuiMoveVerificationError: any;
                    MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
                        module: {
                            address: number[];
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    }, {
                        module: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            name: string;
                        };
                        function: number;
                        instruction: number;
                        function_name: string;
                    }, `Option<${string}>`>;
                    MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
                        module: import("@mysten/bcs").BcsStruct<{
                            address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                            name: import("@mysten/bcs").BcsType<string, string, "string">;
                        }, string>;
                        function: import("@mysten/bcs").BcsType<number, number, "u16">;
                        instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
                        function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
                    }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
                    VMVerificationOrDeserializationError: any;
                    VMInvariantViolation: any;
                    FunctionNotFound: any;
                    ArityMismatch: any;
                    TypeArityMismatch: any;
                    NonEntryFunctionInvoked: any;
                    CommandArgumentError: import("@mysten/bcs").BcsStruct<{
                        arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        kind: import("@mysten/bcs").BcsEnum<{
                            TypeMismatch: any;
                            InvalidBCSBytes: any;
                            InvalidUsageOfPureArg: any;
                            InvalidArgumentToPrivateEntryFunction: any;
                            IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            }, string>;
                            SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            }, string>;
                            InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                                result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            }, string>;
                            InvalidGasCoinUsage: any;
                            InvalidValueUsage: any;
                            InvalidObjectByValue: any;
                            InvalidObjectByMutRef: any;
                            SharedObjectOperationNotAllowed: any;
                            InvalidArgumentArity: any;
                            InvalidTransferObject: any;
                            InvalidMakeMoveVecNonObjectArgument: any;
                            ArgumentWithoutValue: any;
                            CannotMoveBorrowedValue: any;
                            CannotWriteToExtendedReference: any;
                            InvalidReferenceArgument: any;
                        }, "CommandArgumentError">;
                    }, string>;
                    TypeArgumentError: import("@mysten/bcs").BcsStruct<{
                        argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        kind: import("@mysten/bcs").BcsEnum<{
                            TypeNotFound: any;
                            ConstraintNotSatisfied: any;
                        }, "TypeArgumentError">;
                    }, string>;
                    UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
                        result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    }, string>;
                    InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
                        idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                    }, string>;
                    InvalidTransferObject: any;
                    EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
                        current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    PublishUpgradeMissingDependency: any;
                    PublishUpgradeDependencyDowngrade: any;
                    PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
                        upgrade_error: import("@mysten/bcs").BcsEnum<{
                            UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                                package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                            }, string>;
                            NotAPackage: import("@mysten/bcs").BcsStruct<{
                                object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                            }, string>;
                            IncompatibleUpgrade: any;
                            DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                            }, string>;
                            UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                                policy: import("@mysten/bcs").BcsType<number, number, "u8">;
                            }, string>;
                            PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                                ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                            }, string>;
                        }, "PackageUpgradeError">;
                    }, string>;
                    WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
                        current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    CertificateDenied: any;
                    SuiMoveVerificationTimedout: any;
                    SharedObjectOperationNotAllowed: any;
                    InputObjectDeleted: any;
                    ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
                        congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                            length: number;
                        }> & {
                            length: number;
                        }, `vector<${string}>`>;
                    }, string>;
                    AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
                        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                        coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                    }, string>;
                    CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
                        coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                    }, string>;
                    ExecutionCancelledDueToRandomnessUnavailable: any;
                    MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
                        value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
                        value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    }, string>;
                    InvalidLinkage: any;
                    InsufficientFundsForWithdraw: any;
                    NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
                        id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                            length: number;
                        }, string>;
                    }, string>;
                }, "ExecutionErrorKind">;
                command: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
            }, string>;
        }, "ExecutionStatus">;
        executed_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        gas_used: import("@mysten/bcs").BcsStruct<{
            computationCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            storageCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            storageRebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            nonRefundableStorageFee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        transaction_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "vector<u8>">;
        gas_object_index: import("@mysten/bcs").BcsType<number, number, "Option<u32>">;
        events_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "Option<vector<u8>>">;
        dependencies: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
            length: number;
        }> & {
            length: number;
        }, string>;
        lamport_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        changed_objects: import("@mysten/bcs").BcsType<[number[], {
            input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                NotExist: unknown;
                Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
            }, "NotExist" | "Exist">;
            output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                NotExist: unknown;
                ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                PackageWrite: [string, number[]];
                AccumulatorWriteV1: {
                    address: {
                        address: number[];
                        ty: unknown;
                    };
                    operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Merge: unknown;
                        Split: unknown;
                    }, "Merge" | "Split">;
                    value: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Integer: string;
                        IntegerTuple: [string, string];
                        EventDigest: [string, number[]][];
                    }, "Integer" | "IntegerTuple" | "EventDigest">;
                };
            }, "AccumulatorWriteV1" | "NotExist" | "ObjectWrite" | "PackageWrite">;
            id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                None: unknown;
                Created: unknown;
                Deleted: unknown;
            }, "None" | "Created" | "Deleted">;
        }][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, {
            input_state: import("@mysten/bcs").EnumInputShape<{
                NotExist: unknown;
                Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>];
            }>;
            output_state: import("@mysten/bcs").EnumInputShape<{
                NotExist: unknown;
                ObjectWrite: readonly [Iterable<number> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>];
                PackageWrite: readonly [string | number | bigint, Iterable<number> & {
                    length: number;
                }];
                AccumulatorWriteV1: {
                    address: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        ty: unknown;
                    };
                    operation: import("@mysten/bcs").EnumInputShape<{
                        Merge: unknown;
                        Split: unknown;
                    }>;
                    value: import("@mysten/bcs").EnumInputShape<{
                        Integer: string | number | bigint;
                        IntegerTuple: readonly [string | number | bigint, string | number | bigint];
                        EventDigest: Iterable<readonly [string | number | bigint, Iterable<number> & {
                            length: number;
                        }]> & {
                            length: number;
                        };
                    }>;
                };
            }>;
            id_operation: import("@mysten/bcs").EnumInputShape<{
                None: unknown;
                Created: unknown;
                Deleted: unknown;
            }>;
        }]> & {
            length: number;
        }, string>;
        unchanged_consensus_objects: import("@mysten/bcs").BcsType<[number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
            ReadOnlyRoot: [string, number[]];
            MutateConsensusStreamEnded: string;
            ReadConsensusStreamEnded: string;
            Cancelled: string;
            PerEpochConfig: unknown;
        }, "ReadOnlyRoot" | "MutateConsensusStreamEnded" | "ReadConsensusStreamEnded" | "Cancelled" | "PerEpochConfig">][], Iterable<readonly [Iterable<number> & {
            length: number;
        }, import("@mysten/bcs").EnumInputShape<{
            ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
                length: number;
            }];
            MutateConsensusStreamEnded: string | number | bigint;
            ReadConsensusStreamEnded: string | number | bigint;
            Cancelled: string | number | bigint;
            PerEpochConfig: unknown;
        }>]> & {
            length: number;
        }, string>;
        aux_data_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, "Option<vector<u8>>">;
    }, string>;
}, "TransactionEffects">;
export const Event: import("@mysten/bcs").BcsStruct<{
    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    transaction_module: import("@mysten/bcs").BcsType<string, string, "string">;
    sender: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    type: import("@mysten/bcs").BcsStruct<{
        address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        module: import("@mysten/bcs").BcsType<string, string, "string">;
        name: import("@mysten/bcs").BcsType<string, string, "string">;
        type_args: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
            length: number;
        }, string>;
    }, string>;
    contents: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
}, string>;
export const TransactionEvents: import("@mysten/bcs").BcsStruct<{
    data: import("@mysten/bcs").BcsType<{
        package_id: number[];
        transaction_module: string;
        sender: number[];
        type: {
            address: number[];
            module: string;
            name: string;
            type_args: unknown[];
        };
        contents: number[];
    }[], Iterable<{
        package_id: Iterable<number> & {
            length: number;
        };
        transaction_module: string;
        sender: Iterable<number> & {
            length: number;
        };
        type: {
            address: Iterable<number> & {
                length: number;
            };
            module: string;
            name: string;
            type_args: Iterable<unknown> & {
                length: number;
            };
        };
        contents: Iterable<number> & {
            length: number;
        };
    }> & {
        length: number;
    }, string>;
}, string>;
export const Object: import("@mysten/bcs").BcsStruct<{
    data: import("@mysten/bcs").BcsEnum<{
        Move: import("@mysten/bcs").BcsStruct<{
            type: import("@mysten/bcs").BcsEnum<{
                Other: import("@mysten/bcs").BcsStruct<{
                    address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                    module: import("@mysten/bcs").BcsType<string, string, "string">;
                    name: import("@mysten/bcs").BcsType<string, string, "string">;
                    type_args: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                        length: number;
                    }, string>;
                }, string>;
                GasCoin: any;
                StakedSui: any;
                Coin: any;
                SuiBalanceAccumulatorField: any;
                BalanceAccumulatorField: any;
            }, "MoveObjectType_">;
            has_public_transfer: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
            version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            contents: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
        Package: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            module_map: import("@mysten/bcs").BcsType<Map<string, number[]>, Map<string, Iterable<number> & {
                length: number;
            }>, "Map<string, vector<u8>>">;
            type_origin_table: import("@mysten/bcs").BcsType<{
                module_name: string;
                datatype_name: string;
                package: number[];
            }[], Iterable<{
                module_name: string;
                datatype_name: string;
                package: Iterable<number> & {
                    length: number;
                };
            }> & {
                length: number;
            }, string>;
            linkage_table: import("@mysten/bcs").BcsType<Map<number[], {
                upgraded_id: number[];
                upgraded_version: string;
            }>, Map<Iterable<number> & {
                length: number;
            }, {
                upgraded_id: Iterable<number> & {
                    length: number;
                };
                upgraded_version: string | number | bigint;
            }>, `Map<${string}, ${string}>`>;
        }, string>;
    }, "Data">;
    owner: import("@mysten/bcs").BcsEnum<{
        AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        Shared: import("@mysten/bcs").BcsStruct<{
            initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        Immutable: any;
        ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
            start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }, "Owner">;
    previous_transaction: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
    storage_rebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, string>;
export const CheckpointTransaction: import("@mysten/bcs").BcsStruct<{
    transaction: import("@mysten/bcs").BcsStruct<{
        data: any;
        auth_signature: any;
    }, string>;
    effects: import("@mysten/bcs").BcsEnum<{
        V1: import("@mysten/bcs").BcsStruct<{
            status: import("@mysten/bcs").BcsEnum<{
                Success: any;
                Failure: import("@mysten/bcs").BcsStruct<{
                    error: import("@mysten/bcs").BcsEnum<{
                        InsufficientGas: any;
                        InvalidGasObject: any;
                        InvariantViolation: any;
                        FeatureNotYetSupported: any;
                        MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
                            object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
                            object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
                            object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                        InsufficientCoinBalance: any;
                        CoinBalanceOverflow: any;
                        PublishErrorNonZeroAddress: any;
                        SuiMoveVerificationError: any;
                        MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
                            module: {
                                address: number[];
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, {
                            module: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, `Option<${string}>`>;
                        MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
                            module: import("@mysten/bcs").BcsStruct<{
                                address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                                name: import("@mysten/bcs").BcsType<string, string, "string">;
                            }, string>;
                            function: import("@mysten/bcs").BcsType<number, number, "u16">;
                            instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
                            function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
                        }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
                        VMVerificationOrDeserializationError: any;
                        VMInvariantViolation: any;
                        FunctionNotFound: any;
                        ArityMismatch: any;
                        TypeArityMismatch: any;
                        NonEntryFunctionInvoked: any;
                        CommandArgumentError: import("@mysten/bcs").BcsStruct<{
                            arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            kind: import("@mysten/bcs").BcsEnum<{
                                TypeMismatch: any;
                                InvalidBCSBytes: any;
                                InvalidUsageOfPureArg: any;
                                InvalidArgumentToPrivateEntryFunction: any;
                                IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                    idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                    secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                InvalidGasCoinUsage: any;
                                InvalidValueUsage: any;
                                InvalidObjectByValue: any;
                                InvalidObjectByMutRef: any;
                                SharedObjectOperationNotAllowed: any;
                                InvalidArgumentArity: any;
                                InvalidTransferObject: any;
                                InvalidMakeMoveVecNonObjectArgument: any;
                                ArgumentWithoutValue: any;
                                CannotMoveBorrowedValue: any;
                                CannotWriteToExtendedReference: any;
                                InvalidReferenceArgument: any;
                            }, "CommandArgumentError">;
                        }, string>;
                        TypeArgumentError: import("@mysten/bcs").BcsStruct<{
                            argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            kind: import("@mysten/bcs").BcsEnum<{
                                TypeNotFound: any;
                                ConstraintNotSatisfied: any;
                            }, "TypeArgumentError">;
                        }, string>;
                        UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
                            result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
                            idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidTransferObject: any;
                        EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
                            current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        PublishUpgradeMissingDependency: any;
                        PublishUpgradeDependencyDowngrade: any;
                        PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
                            upgrade_error: import("@mysten/bcs").BcsEnum<{
                                UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                                    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                NotAPackage: import("@mysten/bcs").BcsStruct<{
                                    object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                IncompatibleUpgrade: any;
                                DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                    digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                                    policy: import("@mysten/bcs").BcsType<number, number, "u8">;
                                }, string>;
                                PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                    ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                            }, "PackageUpgradeError">;
                        }, string>;
                        WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
                            current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        CertificateDenied: any;
                        SuiMoveVerificationTimedout: any;
                        SharedObjectOperationNotAllowed: any;
                        InputObjectDeleted: any;
                        ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
                            congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, `vector<${string}>`>;
                        }, string>;
                        AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
                            address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                            coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                        }, string>;
                        CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
                            coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                        }, string>;
                        ExecutionCancelledDueToRandomnessUnavailable: any;
                        MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
                            value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
                            value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        InvalidLinkage: any;
                        InsufficientFundsForWithdraw: any;
                        NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
                            id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                    }, "ExecutionErrorKind">;
                    command: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                }, string>;
            }, "ExecutionStatus">;
            executed_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            gas_used: import("@mysten/bcs").BcsStruct<{
                computationCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                storageCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                storageRebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                nonRefundableStorageFee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            modified_at_versions: import("@mysten/bcs").BcsType<[number[], string][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint]> & {
                length: number;
            }, string>;
            shared_objects: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            transaction_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">;
            created: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>]> & {
                length: number;
            }, string>;
            mutated: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>]> & {
                length: number;
            }, string>;
            unwrapped: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>]> & {
                length: number;
            }, string>;
            deleted: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            unwrapped_then_deleted: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            wrapped: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            gas_object: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">], string>, import("@mysten/bcs").BcsEnum<{
                AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                Shared: import("@mysten/bcs").BcsStruct<{
                    initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                Immutable: any;
                ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
                    start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
            }, "Owner">], string>;
            events_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "Option<vector<u8>>">;
            dependencies: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, string>;
        }, string>;
        V2: import("@mysten/bcs").BcsStruct<{
            status: import("@mysten/bcs").BcsEnum<{
                Success: any;
                Failure: import("@mysten/bcs").BcsStruct<{
                    error: import("@mysten/bcs").BcsEnum<{
                        InsufficientGas: any;
                        InvalidGasObject: any;
                        InvariantViolation: any;
                        FeatureNotYetSupported: any;
                        MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
                            object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
                            object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
                            object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                        InsufficientCoinBalance: any;
                        CoinBalanceOverflow: any;
                        PublishErrorNonZeroAddress: any;
                        SuiMoveVerificationError: any;
                        MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
                            module: {
                                address: number[];
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, {
                            module: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, `Option<${string}>`>;
                        MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
                            module: import("@mysten/bcs").BcsStruct<{
                                address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                                name: import("@mysten/bcs").BcsType<string, string, "string">;
                            }, string>;
                            function: import("@mysten/bcs").BcsType<number, number, "u16">;
                            instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
                            function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
                        }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
                        VMVerificationOrDeserializationError: any;
                        VMInvariantViolation: any;
                        FunctionNotFound: any;
                        ArityMismatch: any;
                        TypeArityMismatch: any;
                        NonEntryFunctionInvoked: any;
                        CommandArgumentError: import("@mysten/bcs").BcsStruct<{
                            arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            kind: import("@mysten/bcs").BcsEnum<{
                                TypeMismatch: any;
                                InvalidBCSBytes: any;
                                InvalidUsageOfPureArg: any;
                                InvalidArgumentToPrivateEntryFunction: any;
                                IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                    idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                    secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                InvalidGasCoinUsage: any;
                                InvalidValueUsage: any;
                                InvalidObjectByValue: any;
                                InvalidObjectByMutRef: any;
                                SharedObjectOperationNotAllowed: any;
                                InvalidArgumentArity: any;
                                InvalidTransferObject: any;
                                InvalidMakeMoveVecNonObjectArgument: any;
                                ArgumentWithoutValue: any;
                                CannotMoveBorrowedValue: any;
                                CannotWriteToExtendedReference: any;
                                InvalidReferenceArgument: any;
                            }, "CommandArgumentError">;
                        }, string>;
                        TypeArgumentError: import("@mysten/bcs").BcsStruct<{
                            argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            kind: import("@mysten/bcs").BcsEnum<{
                                TypeNotFound: any;
                                ConstraintNotSatisfied: any;
                            }, "TypeArgumentError">;
                        }, string>;
                        UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
                            result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
                            idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidTransferObject: any;
                        EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
                            current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        PublishUpgradeMissingDependency: any;
                        PublishUpgradeDependencyDowngrade: any;
                        PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
                            upgrade_error: import("@mysten/bcs").BcsEnum<{
                                UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                                    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                NotAPackage: import("@mysten/bcs").BcsStruct<{
                                    object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                IncompatibleUpgrade: any;
                                DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                    digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                                    policy: import("@mysten/bcs").BcsType<number, number, "u8">;
                                }, string>;
                                PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                    ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                            }, "PackageUpgradeError">;
                        }, string>;
                        WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
                            current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        CertificateDenied: any;
                        SuiMoveVerificationTimedout: any;
                        SharedObjectOperationNotAllowed: any;
                        InputObjectDeleted: any;
                        ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
                            congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, `vector<${string}>`>;
                        }, string>;
                        AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
                            address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                            coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                        }, string>;
                        CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
                            coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                        }, string>;
                        ExecutionCancelledDueToRandomnessUnavailable: any;
                        MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
                            value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
                            value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        InvalidLinkage: any;
                        InsufficientFundsForWithdraw: any;
                        NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
                            id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                    }, "ExecutionErrorKind">;
                    command: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                }, string>;
            }, "ExecutionStatus">;
            executed_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            gas_used: import("@mysten/bcs").BcsStruct<{
                computationCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                storageCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                storageRebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                nonRefundableStorageFee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            transaction_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">;
            gas_object_index: import("@mysten/bcs").BcsType<number, number, "Option<u32>">;
            events_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "Option<vector<u8>>">;
            dependencies: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, string>;
            lamport_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            changed_objects: import("@mysten/bcs").BcsType<[number[], {
                input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    NotExist: unknown;
                    Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        AddressOwner: number[];
                        ObjectOwner: number[];
                        Shared: {
                            initial_shared_version: string;
                        };
                        Immutable: unknown;
                        ConsensusAddressOwner: {
                            start_version: string;
                            owner: number[];
                        };
                    }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                }, "NotExist" | "Exist">;
                output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    NotExist: unknown;
                    ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        AddressOwner: number[];
                        ObjectOwner: number[];
                        Shared: {
                            initial_shared_version: string;
                        };
                        Immutable: unknown;
                        ConsensusAddressOwner: {
                            start_version: string;
                            owner: number[];
                        };
                    }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                    PackageWrite: [string, number[]];
                    AccumulatorWriteV1: {
                        address: {
                            address: number[];
                            ty: unknown;
                        };
                        operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Merge: unknown;
                            Split: unknown;
                        }, "Merge" | "Split">;
                        value: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Integer: string;
                            IntegerTuple: [string, string];
                            EventDigest: [string, number[]][];
                        }, "Integer" | "IntegerTuple" | "EventDigest">;
                    };
                }, "AccumulatorWriteV1" | "NotExist" | "ObjectWrite" | "PackageWrite">;
                id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    None: unknown;
                    Created: unknown;
                    Deleted: unknown;
                }, "None" | "Created" | "Deleted">;
            }][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, {
                input_state: import("@mysten/bcs").EnumInputShape<{
                    NotExist: unknown;
                    Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
                        length: number;
                    }], import("@mysten/bcs").EnumInputShape<{
                        AddressOwner: Iterable<number> & {
                            length: number;
                        };
                        ObjectOwner: Iterable<number> & {
                            length: number;
                        };
                        Shared: {
                            initial_shared_version: string | number | bigint;
                        };
                        Immutable: unknown;
                        ConsensusAddressOwner: {
                            start_version: string | number | bigint;
                            owner: Iterable<number> & {
                                length: number;
                            };
                        };
                    }>];
                }>;
                output_state: import("@mysten/bcs").EnumInputShape<{
                    NotExist: unknown;
                    ObjectWrite: readonly [Iterable<number> & {
                        length: number;
                    }, import("@mysten/bcs").EnumInputShape<{
                        AddressOwner: Iterable<number> & {
                            length: number;
                        };
                        ObjectOwner: Iterable<number> & {
                            length: number;
                        };
                        Shared: {
                            initial_shared_version: string | number | bigint;
                        };
                        Immutable: unknown;
                        ConsensusAddressOwner: {
                            start_version: string | number | bigint;
                            owner: Iterable<number> & {
                                length: number;
                            };
                        };
                    }>];
                    PackageWrite: readonly [string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                    AccumulatorWriteV1: {
                        address: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            ty: unknown;
                        };
                        operation: import("@mysten/bcs").EnumInputShape<{
                            Merge: unknown;
                            Split: unknown;
                        }>;
                        value: import("@mysten/bcs").EnumInputShape<{
                            Integer: string | number | bigint;
                            IntegerTuple: readonly [string | number | bigint, string | number | bigint];
                            EventDigest: Iterable<readonly [string | number | bigint, Iterable<number> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        }>;
                    };
                }>;
                id_operation: import("@mysten/bcs").EnumInputShape<{
                    None: unknown;
                    Created: unknown;
                    Deleted: unknown;
                }>;
            }]> & {
                length: number;
            }, string>;
            unchanged_consensus_objects: import("@mysten/bcs").BcsType<[number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                ReadOnlyRoot: [string, number[]];
                MutateConsensusStreamEnded: string;
                ReadConsensusStreamEnded: string;
                Cancelled: string;
                PerEpochConfig: unknown;
            }, "ReadOnlyRoot" | "MutateConsensusStreamEnded" | "ReadConsensusStreamEnded" | "Cancelled" | "PerEpochConfig">][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
                    length: number;
                }];
                MutateConsensusStreamEnded: string | number | bigint;
                ReadConsensusStreamEnded: string | number | bigint;
                Cancelled: string | number | bigint;
                PerEpochConfig: unknown;
            }>]> & {
                length: number;
            }, string>;
            aux_data_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "Option<vector<u8>>">;
        }, string>;
    }, "TransactionEffects">;
    events: import("@mysten/bcs").BcsType<{
        data: {
            package_id: number[];
            transaction_module: string;
            sender: number[];
            type: {
                address: number[];
                module: string;
                name: string;
                type_args: unknown[];
            };
            contents: number[];
        }[];
    }, {
        data: Iterable<{
            package_id: Iterable<number> & {
                length: number;
            };
            transaction_module: string;
            sender: Iterable<number> & {
                length: number;
            };
            type: {
                address: Iterable<number> & {
                    length: number;
                };
                module: string;
                name: string;
                type_args: Iterable<unknown> & {
                    length: number;
                };
            };
            contents: Iterable<number> & {
                length: number;
            };
        }> & {
            length: number;
        };
    }, `Option<${string}>`>;
    input_objects: import("@mysten/bcs").BcsType<{
        data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Move: {
                type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Other: {
                        address: number[];
                        module: string;
                        name: string;
                        type_args: unknown[];
                    };
                    GasCoin: unknown;
                    StakedSui: unknown;
                    Coin: unknown;
                    SuiBalanceAccumulatorField: unknown;
                    BalanceAccumulatorField: unknown;
                }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                has_public_transfer: boolean;
                version: string;
                contents: number[];
            };
            Package: {
                id: number[];
                version: string;
                module_map: Map<string, number[]>;
                type_origin_table: {
                    module_name: string;
                    datatype_name: string;
                    package: number[];
                }[];
                linkage_table: Map<number[], {
                    upgraded_id: number[];
                    upgraded_version: string;
                }>;
            };
        }, "Move" | "Package">;
        owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
            ConsensusAddressOwner: {
                start_version: string;
                owner: number[];
            };
        }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
        previous_transaction: number[];
        storage_rebate: string;
    }[], Iterable<{
        data: import("@mysten/bcs").EnumInputShape<{
            Move: {
                type: import("@mysten/bcs").EnumInputShape<{
                    Other: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        module: string;
                        name: string;
                        type_args: Iterable<unknown> & {
                            length: number;
                        };
                    };
                    GasCoin: unknown;
                    StakedSui: unknown;
                    Coin: unknown;
                    SuiBalanceAccumulatorField: unknown;
                    BalanceAccumulatorField: unknown;
                }>;
                has_public_transfer: boolean;
                version: string | number | bigint;
                contents: Iterable<number> & {
                    length: number;
                };
            };
            Package: {
                id: Iterable<number> & {
                    length: number;
                };
                version: string | number | bigint;
                module_map: Map<string, Iterable<number> & {
                    length: number;
                }>;
                type_origin_table: Iterable<{
                    module_name: string;
                    datatype_name: string;
                    package: Iterable<number> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                linkage_table: Map<Iterable<number> & {
                    length: number;
                }, {
                    upgraded_id: Iterable<number> & {
                        length: number;
                    };
                    upgraded_version: string | number | bigint;
                }>;
            };
        }>;
        owner: import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
            ConsensusAddressOwner: {
                start_version: string | number | bigint;
                owner: Iterable<number> & {
                    length: number;
                };
            };
        }>;
        previous_transaction: Iterable<number> & {
            length: number;
        };
        storage_rebate: string | number | bigint;
    }> & {
        length: number;
    }, string>;
    output_objects: import("@mysten/bcs").BcsType<{
        data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Move: {
                type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Other: {
                        address: number[];
                        module: string;
                        name: string;
                        type_args: unknown[];
                    };
                    GasCoin: unknown;
                    StakedSui: unknown;
                    Coin: unknown;
                    SuiBalanceAccumulatorField: unknown;
                    BalanceAccumulatorField: unknown;
                }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                has_public_transfer: boolean;
                version: string;
                contents: number[];
            };
            Package: {
                id: number[];
                version: string;
                module_map: Map<string, number[]>;
                type_origin_table: {
                    module_name: string;
                    datatype_name: string;
                    package: number[];
                }[];
                linkage_table: Map<number[], {
                    upgraded_id: number[];
                    upgraded_version: string;
                }>;
            };
        }, "Move" | "Package">;
        owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            AddressOwner: number[];
            ObjectOwner: number[];
            Shared: {
                initial_shared_version: string;
            };
            Immutable: unknown;
            ConsensusAddressOwner: {
                start_version: string;
                owner: number[];
            };
        }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
        previous_transaction: number[];
        storage_rebate: string;
    }[], Iterable<{
        data: import("@mysten/bcs").EnumInputShape<{
            Move: {
                type: import("@mysten/bcs").EnumInputShape<{
                    Other: {
                        address: Iterable<number> & {
                            length: number;
                        };
                        module: string;
                        name: string;
                        type_args: Iterable<unknown> & {
                            length: number;
                        };
                    };
                    GasCoin: unknown;
                    StakedSui: unknown;
                    Coin: unknown;
                    SuiBalanceAccumulatorField: unknown;
                    BalanceAccumulatorField: unknown;
                }>;
                has_public_transfer: boolean;
                version: string | number | bigint;
                contents: Iterable<number> & {
                    length: number;
                };
            };
            Package: {
                id: Iterable<number> & {
                    length: number;
                };
                version: string | number | bigint;
                module_map: Map<string, Iterable<number> & {
                    length: number;
                }>;
                type_origin_table: Iterable<{
                    module_name: string;
                    datatype_name: string;
                    package: Iterable<number> & {
                        length: number;
                    };
                }> & {
                    length: number;
                };
                linkage_table: Map<Iterable<number> & {
                    length: number;
                }, {
                    upgraded_id: Iterable<number> & {
                        length: number;
                    };
                    upgraded_version: string | number | bigint;
                }>;
            };
        }>;
        owner: import("@mysten/bcs").EnumInputShape<{
            AddressOwner: Iterable<number> & {
                length: number;
            };
            ObjectOwner: Iterable<number> & {
                length: number;
            };
            Shared: {
                initial_shared_version: string | number | bigint;
            };
            Immutable: unknown;
            ConsensusAddressOwner: {
                start_version: string | number | bigint;
                owner: Iterable<number> & {
                    length: number;
                };
            };
        }>;
        previous_transaction: Iterable<number> & {
            length: number;
        };
        storage_rebate: string | number | bigint;
    }> & {
        length: number;
    }, string>;
}, string>;
export const CheckpointData: import("@mysten/bcs").BcsStruct<{
    checkpoint_summary: import("@mysten/bcs").BcsStruct<{
        data: any;
        auth_signature: any;
    }, string>;
    checkpoint_contents: import("@mysten/bcs").BcsEnum<{
        V1: import("@mysten/bcs").BcsStruct<{
            transactions: import("@mysten/bcs").BcsType<{
                transaction: number[];
                effects: number[];
            }[], Iterable<{
                transaction: Iterable<number> & {
                    length: number;
                };
                effects: Iterable<number> & {
                    length: number;
                };
            }> & {
                length: number;
            }, string>;
            user_signatures: import("@mysten/bcs").BcsType<number[][][], Iterable<Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }> & {
                length: number;
            }, string>;
        }, string>;
        V2: import("@mysten/bcs").BcsStruct<{
            transactions: import("@mysten/bcs").BcsType<{
                digest: {
                    transaction: number[];
                    effects: number[];
                };
                user_signatures: [number[], string][];
            }[], Iterable<{
                digest: {
                    transaction: Iterable<number> & {
                        length: number;
                    };
                    effects: Iterable<number> & {
                        length: number;
                    };
                };
                user_signatures: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint]> & {
                    length: number;
                };
            }> & {
                length: number;
            }, string>;
        }, string>;
    }, "CheckpointContents">;
    transactions: import("@mysten/bcs").BcsType<{
        transaction: {
            data: unknown;
            auth_signature: unknown;
        };
        effects: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            V1: {
                status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            MovePackageTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            CircularObjectOwnership: {
                                object: number[];
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: [{
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                    InvalidArgumentArity: unknown;
                                    InvalidTransferObject: unknown;
                                    InvalidMakeMoveVecNonObjectArgument: unknown;
                                    ArgumentWithoutValue: unknown;
                                    CannotMoveBorrowedValue: unknown;
                                    CannotWriteToExtendedReference: unknown;
                                    InvalidReferenceArgument: unknown;
                                }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed" | "InvalidArgumentArity" | "InvalidTransferObject" | "InvalidMakeMoveVecNonObjectArgument" | "ArgumentWithoutValue" | "CannotMoveBorrowedValue" | "CannotWriteToExtendedReference" | "InvalidReferenceArgument">;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }, "TypeNotFound" | "ConstraintNotSatisfied">;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    UnableToFetchPackage: {
                                        package_id: number[];
                                    };
                                    NotAPackage: {
                                        object_id: number[];
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: number[];
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: number[];
                                        ticket_id: number[];
                                    };
                                }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: number[][];
                            };
                            AddressDeniedForCoin: {
                                address: number[];
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                            MoveVectorElemTooBig: {
                                value_size: string;
                                max_scaled_size: string;
                            };
                            MoveRawValueTooBig: {
                                value_size: string;
                                max_scaled_size: string;
                            };
                            InvalidLinkage: unknown;
                            InsufficientFundsForWithdraw: unknown;
                            NonExclusiveWriteInputObjectModified: {
                                id: number[];
                            };
                        }, "CommandArgumentError" | "SharedObjectOperationNotAllowed" | "InvalidTransferObject" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable" | "MoveVectorElemTooBig" | "MoveRawValueTooBig" | "InvalidLinkage" | "InsufficientFundsForWithdraw" | "NonExclusiveWriteInputObjectModified">;
                        command: string;
                    };
                }, "Success" | "Failure">;
                executed_epoch: string;
                gas_used: {
                    computationCost: string;
                    storageCost: string;
                    storageRebate: string;
                    nonRefundableStorageFee: string;
                };
                modified_at_versions: [number[], string][];
                shared_objects: [number[], string, number[]][];
                transaction_digest: number[];
                created: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][];
                mutated: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][];
                unwrapped: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][];
                deleted: [number[], string, number[]][];
                unwrapped_then_deleted: [number[], string, number[]][];
                wrapped: [number[], string, number[]][];
                gas_object: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                events_digest: number[];
                dependencies: number[][];
            };
            V2: {
                status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            MovePackageTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            CircularObjectOwnership: {
                                object: number[];
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: [{
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                    InvalidArgumentArity: unknown;
                                    InvalidTransferObject: unknown;
                                    InvalidMakeMoveVecNonObjectArgument: unknown;
                                    ArgumentWithoutValue: unknown;
                                    CannotMoveBorrowedValue: unknown;
                                    CannotWriteToExtendedReference: unknown;
                                    InvalidReferenceArgument: unknown;
                                }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed" | "InvalidArgumentArity" | "InvalidTransferObject" | "InvalidMakeMoveVecNonObjectArgument" | "ArgumentWithoutValue" | "CannotMoveBorrowedValue" | "CannotWriteToExtendedReference" | "InvalidReferenceArgument">;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }, "TypeNotFound" | "ConstraintNotSatisfied">;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    UnableToFetchPackage: {
                                        package_id: number[];
                                    };
                                    NotAPackage: {
                                        object_id: number[];
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: number[];
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: number[];
                                        ticket_id: number[];
                                    };
                                }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: number[][];
                            };
                            AddressDeniedForCoin: {
                                address: number[];
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                            MoveVectorElemTooBig: {
                                value_size: string;
                                max_scaled_size: string;
                            };
                            MoveRawValueTooBig: {
                                value_size: string;
                                max_scaled_size: string;
                            };
                            InvalidLinkage: unknown;
                            InsufficientFundsForWithdraw: unknown;
                            NonExclusiveWriteInputObjectModified: {
                                id: number[];
                            };
                        }, "CommandArgumentError" | "SharedObjectOperationNotAllowed" | "InvalidTransferObject" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable" | "MoveVectorElemTooBig" | "MoveRawValueTooBig" | "InvalidLinkage" | "InsufficientFundsForWithdraw" | "NonExclusiveWriteInputObjectModified">;
                        command: string;
                    };
                }, "Success" | "Failure">;
                executed_epoch: string;
                gas_used: {
                    computationCost: string;
                    storageCost: string;
                    storageRebate: string;
                    nonRefundableStorageFee: string;
                };
                transaction_digest: number[];
                gas_object_index: number;
                events_digest: number[];
                dependencies: number[][];
                lamport_version: string;
                changed_objects: [number[], {
                    input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        NotExist: unknown;
                        Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            AddressOwner: number[];
                            ObjectOwner: number[];
                            Shared: {
                                initial_shared_version: string;
                            };
                            Immutable: unknown;
                            ConsensusAddressOwner: {
                                start_version: string;
                                owner: number[];
                            };
                        }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                    }, "NotExist" | "Exist">;
                    output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        NotExist: unknown;
                        ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            AddressOwner: number[];
                            ObjectOwner: number[];
                            Shared: {
                                initial_shared_version: string;
                            };
                            Immutable: unknown;
                            ConsensusAddressOwner: {
                                start_version: string;
                                owner: number[];
                            };
                        }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                        PackageWrite: [string, number[]];
                        AccumulatorWriteV1: {
                            address: {
                                address: number[];
                                ty: unknown;
                            };
                            operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Merge: unknown;
                                Split: unknown;
                            }, "Merge" | "Split">;
                            value: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Integer: string;
                                IntegerTuple: [string, string];
                                EventDigest: [string, number[]][];
                            }, "Integer" | "IntegerTuple" | "EventDigest">;
                        };
                    }, "AccumulatorWriteV1" | "NotExist" | "ObjectWrite" | "PackageWrite">;
                    id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        None: unknown;
                        Created: unknown;
                        Deleted: unknown;
                    }, "None" | "Created" | "Deleted">;
                }][];
                unchanged_consensus_objects: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ReadOnlyRoot: [string, number[]];
                    MutateConsensusStreamEnded: string;
                    ReadConsensusStreamEnded: string;
                    Cancelled: string;
                    PerEpochConfig: unknown;
                }, "ReadOnlyRoot" | "MutateConsensusStreamEnded" | "ReadConsensusStreamEnded" | "Cancelled" | "PerEpochConfig">][];
                aux_data_digest: number[];
            };
        }, "V1" | "V2">;
        events: {
            data: {
                package_id: number[];
                transaction_module: string;
                sender: number[];
                type: {
                    address: number[];
                    module: string;
                    name: string;
                    type_args: unknown[];
                };
                contents: number[];
            }[];
        };
        input_objects: {
            data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Move: {
                    type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Other: {
                            address: number[];
                            module: string;
                            name: string;
                            type_args: unknown[];
                        };
                        GasCoin: unknown;
                        StakedSui: unknown;
                        Coin: unknown;
                        SuiBalanceAccumulatorField: unknown;
                        BalanceAccumulatorField: unknown;
                    }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                    has_public_transfer: boolean;
                    version: string;
                    contents: number[];
                };
                Package: {
                    id: number[];
                    version: string;
                    module_map: Map<string, number[]>;
                    type_origin_table: {
                        module_name: string;
                        datatype_name: string;
                        package: number[];
                    }[];
                    linkage_table: Map<number[], {
                        upgraded_id: number[];
                        upgraded_version: string;
                    }>;
                };
            }, "Move" | "Package">;
            owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
            previous_transaction: number[];
            storage_rebate: string;
        }[];
        output_objects: {
            data: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Move: {
                    type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        Other: {
                            address: number[];
                            module: string;
                            name: string;
                            type_args: unknown[];
                        };
                        GasCoin: unknown;
                        StakedSui: unknown;
                        Coin: unknown;
                        SuiBalanceAccumulatorField: unknown;
                        BalanceAccumulatorField: unknown;
                    }, "GasCoin" | "Other" | "StakedSui" | "Coin" | "SuiBalanceAccumulatorField" | "BalanceAccumulatorField">;
                    has_public_transfer: boolean;
                    version: string;
                    contents: number[];
                };
                Package: {
                    id: number[];
                    version: string;
                    module_map: Map<string, number[]>;
                    type_origin_table: {
                        module_name: string;
                        datatype_name: string;
                        package: number[];
                    }[];
                    linkage_table: Map<number[], {
                        upgraded_id: number[];
                        upgraded_version: string;
                    }>;
                };
            }, "Move" | "Package">;
            owner: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">;
            previous_transaction: number[];
            storage_rebate: string;
        }[];
    }[], Iterable<{
        transaction: {
            data: unknown;
            auth_signature: unknown;
        };
        effects: import("@mysten/bcs").EnumInputShape<{
            V1: {
                status: import("@mysten/bcs").EnumInputShape<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumInputShape<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            MovePackageTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            CircularObjectOwnership: {
                                object: Iterable<number> & {
                                    length: number;
                                };
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: readonly [{
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string | number | bigint];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                    InvalidArgumentArity: unknown;
                                    InvalidTransferObject: unknown;
                                    InvalidMakeMoveVecNonObjectArgument: unknown;
                                    ArgumentWithoutValue: unknown;
                                    CannotMoveBorrowedValue: unknown;
                                    CannotWriteToExtendedReference: unknown;
                                    InvalidReferenceArgument: unknown;
                                }>;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }>;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumInputShape<{
                                    UnableToFetchPackage: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    NotAPackage: {
                                        object_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                        ticket_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                }>;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                };
                            };
                            AddressDeniedForCoin: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                            MoveVectorElemTooBig: {
                                value_size: string | number | bigint;
                                max_scaled_size: string | number | bigint;
                            };
                            MoveRawValueTooBig: {
                                value_size: string | number | bigint;
                                max_scaled_size: string | number | bigint;
                            };
                            InvalidLinkage: unknown;
                            InsufficientFundsForWithdraw: unknown;
                            NonExclusiveWriteInputObjectModified: {
                                id: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>;
                        command: string | number | bigint;
                    };
                }>;
                executed_epoch: string | number | bigint;
                gas_used: {
                    computationCost: string | number | bigint;
                    storageCost: string | number | bigint;
                    storageRebate: string | number | bigint;
                    nonRefundableStorageFee: string | number | bigint;
                };
                modified_at_versions: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint]> & {
                    length: number;
                };
                shared_objects: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                transaction_digest: Iterable<number> & {
                    length: number;
                };
                created: Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>]> & {
                    length: number;
                };
                mutated: Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>]> & {
                    length: number;
                };
                unwrapped: Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>]> & {
                    length: number;
                };
                deleted: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                unwrapped_then_deleted: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                wrapped: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                gas_object: readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>];
                events_digest: Iterable<number> & {
                    length: number;
                };
                dependencies: Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                };
            };
            V2: {
                status: import("@mysten/bcs").EnumInputShape<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumInputShape<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            MovePackageTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            CircularObjectOwnership: {
                                object: Iterable<number> & {
                                    length: number;
                                };
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: readonly [{
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string | number | bigint];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                    InvalidArgumentArity: unknown;
                                    InvalidTransferObject: unknown;
                                    InvalidMakeMoveVecNonObjectArgument: unknown;
                                    ArgumentWithoutValue: unknown;
                                    CannotMoveBorrowedValue: unknown;
                                    CannotWriteToExtendedReference: unknown;
                                    InvalidReferenceArgument: unknown;
                                }>;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }>;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumInputShape<{
                                    UnableToFetchPackage: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    NotAPackage: {
                                        object_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                        ticket_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                }>;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                };
                            };
                            AddressDeniedForCoin: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                            MoveVectorElemTooBig: {
                                value_size: string | number | bigint;
                                max_scaled_size: string | number | bigint;
                            };
                            MoveRawValueTooBig: {
                                value_size: string | number | bigint;
                                max_scaled_size: string | number | bigint;
                            };
                            InvalidLinkage: unknown;
                            InsufficientFundsForWithdraw: unknown;
                            NonExclusiveWriteInputObjectModified: {
                                id: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>;
                        command: string | number | bigint;
                    };
                }>;
                executed_epoch: string | number | bigint;
                gas_used: {
                    computationCost: string | number | bigint;
                    storageCost: string | number | bigint;
                    storageRebate: string | number | bigint;
                    nonRefundableStorageFee: string | number | bigint;
                };
                transaction_digest: Iterable<number> & {
                    length: number;
                };
                gas_object_index: number;
                events_digest: Iterable<number> & {
                    length: number;
                };
                dependencies: Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                };
                lamport_version: string | number | bigint;
                changed_objects: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, {
                    input_state: import("@mysten/bcs").EnumInputShape<{
                        NotExist: unknown;
                        Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
                            length: number;
                        }], import("@mysten/bcs").EnumInputShape<{
                            AddressOwner: Iterable<number> & {
                                length: number;
                            };
                            ObjectOwner: Iterable<number> & {
                                length: number;
                            };
                            Shared: {
                                initial_shared_version: string | number | bigint;
                            };
                            Immutable: unknown;
                            ConsensusAddressOwner: {
                                start_version: string | number | bigint;
                                owner: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>];
                    }>;
                    output_state: import("@mysten/bcs").EnumInputShape<{
                        NotExist: unknown;
                        ObjectWrite: readonly [Iterable<number> & {
                            length: number;
                        }, import("@mysten/bcs").EnumInputShape<{
                            AddressOwner: Iterable<number> & {
                                length: number;
                            };
                            ObjectOwner: Iterable<number> & {
                                length: number;
                            };
                            Shared: {
                                initial_shared_version: string | number | bigint;
                            };
                            Immutable: unknown;
                            ConsensusAddressOwner: {
                                start_version: string | number | bigint;
                                owner: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>];
                        PackageWrite: readonly [string | number | bigint, Iterable<number> & {
                            length: number;
                        }];
                        AccumulatorWriteV1: {
                            address: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                ty: unknown;
                            };
                            operation: import("@mysten/bcs").EnumInputShape<{
                                Merge: unknown;
                                Split: unknown;
                            }>;
                            value: import("@mysten/bcs").EnumInputShape<{
                                Integer: string | number | bigint;
                                IntegerTuple: readonly [string | number | bigint, string | number | bigint];
                                EventDigest: Iterable<readonly [string | number | bigint, Iterable<number> & {
                                    length: number;
                                }]> & {
                                    length: number;
                                };
                            }>;
                        };
                    }>;
                    id_operation: import("@mysten/bcs").EnumInputShape<{
                        None: unknown;
                        Created: unknown;
                        Deleted: unknown;
                    }>;
                }]> & {
                    length: number;
                };
                unchanged_consensus_objects: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                    MutateConsensusStreamEnded: string | number | bigint;
                    ReadConsensusStreamEnded: string | number | bigint;
                    Cancelled: string | number | bigint;
                    PerEpochConfig: unknown;
                }>]> & {
                    length: number;
                };
                aux_data_digest: Iterable<number> & {
                    length: number;
                };
            };
        }>;
        events: {
            data: Iterable<{
                package_id: Iterable<number> & {
                    length: number;
                };
                transaction_module: string;
                sender: Iterable<number> & {
                    length: number;
                };
                type: {
                    address: Iterable<number> & {
                        length: number;
                    };
                    module: string;
                    name: string;
                    type_args: Iterable<unknown> & {
                        length: number;
                    };
                };
                contents: Iterable<number> & {
                    length: number;
                };
            }> & {
                length: number;
            };
        };
        input_objects: Iterable<{
            data: import("@mysten/bcs").EnumInputShape<{
                Move: {
                    type: import("@mysten/bcs").EnumInputShape<{
                        Other: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            module: string;
                            name: string;
                            type_args: Iterable<unknown> & {
                                length: number;
                            };
                        };
                        GasCoin: unknown;
                        StakedSui: unknown;
                        Coin: unknown;
                        SuiBalanceAccumulatorField: unknown;
                        BalanceAccumulatorField: unknown;
                    }>;
                    has_public_transfer: boolean;
                    version: string | number | bigint;
                    contents: Iterable<number> & {
                        length: number;
                    };
                };
                Package: {
                    id: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    module_map: Map<string, Iterable<number> & {
                        length: number;
                    }>;
                    type_origin_table: Iterable<{
                        module_name: string;
                        datatype_name: string;
                        package: Iterable<number> & {
                            length: number;
                        };
                    }> & {
                        length: number;
                    };
                    linkage_table: Map<Iterable<number> & {
                        length: number;
                    }, {
                        upgraded_id: Iterable<number> & {
                            length: number;
                        };
                        upgraded_version: string | number | bigint;
                    }>;
                };
            }>;
            owner: import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>;
            previous_transaction: Iterable<number> & {
                length: number;
            };
            storage_rebate: string | number | bigint;
        }> & {
            length: number;
        };
        output_objects: Iterable<{
            data: import("@mysten/bcs").EnumInputShape<{
                Move: {
                    type: import("@mysten/bcs").EnumInputShape<{
                        Other: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            module: string;
                            name: string;
                            type_args: Iterable<unknown> & {
                                length: number;
                            };
                        };
                        GasCoin: unknown;
                        StakedSui: unknown;
                        Coin: unknown;
                        SuiBalanceAccumulatorField: unknown;
                        BalanceAccumulatorField: unknown;
                    }>;
                    has_public_transfer: boolean;
                    version: string | number | bigint;
                    contents: Iterable<number> & {
                        length: number;
                    };
                };
                Package: {
                    id: Iterable<number> & {
                        length: number;
                    };
                    version: string | number | bigint;
                    module_map: Map<string, Iterable<number> & {
                        length: number;
                    }>;
                    type_origin_table: Iterable<{
                        module_name: string;
                        datatype_name: string;
                        package: Iterable<number> & {
                            length: number;
                        };
                    }> & {
                        length: number;
                    };
                    linkage_table: Map<Iterable<number> & {
                        length: number;
                    }, {
                        upgraded_id: Iterable<number> & {
                            length: number;
                        };
                        upgraded_version: string | number | bigint;
                    }>;
                };
            }>;
            owner: import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>;
            previous_transaction: Iterable<number> & {
                length: number;
            };
            storage_rebate: string | number | bigint;
        }> & {
            length: number;
        };
    }> & {
        length: number;
    }, string>;
}, string>;
export const ZkLoginAuthenticatorAsBytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const CompressedSignature: import("@mysten/bcs").BcsEnum<{
    Ed25519: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    Secp256k1: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    Secp256r1: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    ZkLogin: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
}, "CompressedSignature">;
export const DeleteKind: import("@mysten/bcs").BcsEnum<{
    Normal: any;
    UnwrapThenDelete: any;
    Wrap: any;
}, "DeleteKind">;
export const ExecutionData: import("@mysten/bcs").BcsStruct<{
    transaction: import("@mysten/bcs").BcsStruct<{
        data: any;
        auth_signature: any;
    }, string>;
    effects: import("@mysten/bcs").BcsEnum<{
        V1: import("@mysten/bcs").BcsStruct<{
            status: import("@mysten/bcs").BcsEnum<{
                Success: any;
                Failure: import("@mysten/bcs").BcsStruct<{
                    error: import("@mysten/bcs").BcsEnum<{
                        InsufficientGas: any;
                        InvalidGasObject: any;
                        InvariantViolation: any;
                        FeatureNotYetSupported: any;
                        MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
                            object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
                            object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
                            object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                        InsufficientCoinBalance: any;
                        CoinBalanceOverflow: any;
                        PublishErrorNonZeroAddress: any;
                        SuiMoveVerificationError: any;
                        MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
                            module: {
                                address: number[];
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, {
                            module: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, `Option<${string}>`>;
                        MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
                            module: import("@mysten/bcs").BcsStruct<{
                                address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                                name: import("@mysten/bcs").BcsType<string, string, "string">;
                            }, string>;
                            function: import("@mysten/bcs").BcsType<number, number, "u16">;
                            instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
                            function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
                        }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
                        VMVerificationOrDeserializationError: any;
                        VMInvariantViolation: any;
                        FunctionNotFound: any;
                        ArityMismatch: any;
                        TypeArityMismatch: any;
                        NonEntryFunctionInvoked: any;
                        CommandArgumentError: import("@mysten/bcs").BcsStruct<{
                            arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            kind: import("@mysten/bcs").BcsEnum<{
                                TypeMismatch: any;
                                InvalidBCSBytes: any;
                                InvalidUsageOfPureArg: any;
                                InvalidArgumentToPrivateEntryFunction: any;
                                IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                    idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                    secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                InvalidGasCoinUsage: any;
                                InvalidValueUsage: any;
                                InvalidObjectByValue: any;
                                InvalidObjectByMutRef: any;
                                SharedObjectOperationNotAllowed: any;
                                InvalidArgumentArity: any;
                                InvalidTransferObject: any;
                                InvalidMakeMoveVecNonObjectArgument: any;
                                ArgumentWithoutValue: any;
                                CannotMoveBorrowedValue: any;
                                CannotWriteToExtendedReference: any;
                                InvalidReferenceArgument: any;
                            }, "CommandArgumentError">;
                        }, string>;
                        TypeArgumentError: import("@mysten/bcs").BcsStruct<{
                            argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            kind: import("@mysten/bcs").BcsEnum<{
                                TypeNotFound: any;
                                ConstraintNotSatisfied: any;
                            }, "TypeArgumentError">;
                        }, string>;
                        UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
                            result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
                            idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidTransferObject: any;
                        EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
                            current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        PublishUpgradeMissingDependency: any;
                        PublishUpgradeDependencyDowngrade: any;
                        PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
                            upgrade_error: import("@mysten/bcs").BcsEnum<{
                                UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                                    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                NotAPackage: import("@mysten/bcs").BcsStruct<{
                                    object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                IncompatibleUpgrade: any;
                                DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                    digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                                    policy: import("@mysten/bcs").BcsType<number, number, "u8">;
                                }, string>;
                                PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                    ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                            }, "PackageUpgradeError">;
                        }, string>;
                        WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
                            current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        CertificateDenied: any;
                        SuiMoveVerificationTimedout: any;
                        SharedObjectOperationNotAllowed: any;
                        InputObjectDeleted: any;
                        ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
                            congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, `vector<${string}>`>;
                        }, string>;
                        AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
                            address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                            coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                        }, string>;
                        CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
                            coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                        }, string>;
                        ExecutionCancelledDueToRandomnessUnavailable: any;
                        MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
                            value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
                            value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        InvalidLinkage: any;
                        InsufficientFundsForWithdraw: any;
                        NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
                            id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                    }, "ExecutionErrorKind">;
                    command: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                }, string>;
            }, "ExecutionStatus">;
            executed_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            gas_used: import("@mysten/bcs").BcsStruct<{
                computationCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                storageCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                storageRebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                nonRefundableStorageFee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            modified_at_versions: import("@mysten/bcs").BcsType<[number[], string][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint]> & {
                length: number;
            }, string>;
            shared_objects: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            transaction_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">;
            created: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>]> & {
                length: number;
            }, string>;
            mutated: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>]> & {
                length: number;
            }, string>;
            unwrapped: import("@mysten/bcs").BcsType<[[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                AddressOwner: number[];
                ObjectOwner: number[];
                Shared: {
                    initial_shared_version: string;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string;
                    owner: number[];
                };
            }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][], Iterable<readonly [readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }], import("@mysten/bcs").EnumInputShape<{
                AddressOwner: Iterable<number> & {
                    length: number;
                };
                ObjectOwner: Iterable<number> & {
                    length: number;
                };
                Shared: {
                    initial_shared_version: string | number | bigint;
                };
                Immutable: unknown;
                ConsensusAddressOwner: {
                    start_version: string | number | bigint;
                    owner: Iterable<number> & {
                        length: number;
                    };
                };
            }>]> & {
                length: number;
            }, string>;
            deleted: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            unwrapped_then_deleted: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            wrapped: import("@mysten/bcs").BcsType<[number[], string, number[]][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, string | number | bigint, Iterable<number> & {
                length: number;
            }]> & {
                length: number;
            }, string>;
            gas_object: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">, import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">], string>, import("@mysten/bcs").BcsEnum<{
                AddressOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                ObjectOwner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
                Shared: import("@mysten/bcs").BcsStruct<{
                    initial_shared_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                }, string>;
                Immutable: any;
                ConsensusAddressOwner: import("@mysten/bcs").BcsStruct<{
                    start_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                    owner: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
            }, "Owner">], string>;
            events_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "Option<vector<u8>>">;
            dependencies: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, string>;
        }, string>;
        V2: import("@mysten/bcs").BcsStruct<{
            status: import("@mysten/bcs").BcsEnum<{
                Success: any;
                Failure: import("@mysten/bcs").BcsStruct<{
                    error: import("@mysten/bcs").BcsEnum<{
                        InsufficientGas: any;
                        InvalidGasObject: any;
                        InvariantViolation: any;
                        FeatureNotYetSupported: any;
                        MoveObjectTooBig: import("@mysten/bcs").BcsStruct<{
                            object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        MovePackageTooBig: import("@mysten/bcs").BcsStruct<{
                            object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_object_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        CircularObjectOwnership: import("@mysten/bcs").BcsStruct<{
                            object: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                        InsufficientCoinBalance: any;
                        CoinBalanceOverflow: any;
                        PublishErrorNonZeroAddress: any;
                        SuiMoveVerificationError: any;
                        MovePrimitiveRuntimeError: import("@mysten/bcs").BcsType<{
                            module: {
                                address: number[];
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, {
                            module: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                name: string;
                            };
                            function: number;
                            instruction: number;
                            function_name: string;
                        }, `Option<${string}>`>;
                        MoveAbort: import("@mysten/bcs").BcsTuple<readonly [import("@mysten/bcs").BcsStruct<{
                            module: import("@mysten/bcs").BcsStruct<{
                                address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                    length: number;
                                }, string>;
                                name: import("@mysten/bcs").BcsType<string, string, "string">;
                            }, string>;
                            function: import("@mysten/bcs").BcsType<number, number, "u16">;
                            instruction: import("@mysten/bcs").BcsType<number, number, "u16">;
                            function_name: import("@mysten/bcs").BcsType<string, string, "Option<string>">;
                        }, string>, import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">], string>;
                        VMVerificationOrDeserializationError: any;
                        VMInvariantViolation: any;
                        FunctionNotFound: any;
                        ArityMismatch: any;
                        TypeArityMismatch: any;
                        NonEntryFunctionInvoked: any;
                        CommandArgumentError: import("@mysten/bcs").BcsStruct<{
                            arg_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            kind: import("@mysten/bcs").BcsEnum<{
                                TypeMismatch: any;
                                InvalidBCSBytes: any;
                                InvalidUsageOfPureArg: any;
                                InvalidArgumentToPrivateEntryFunction: any;
                                IndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                    idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                SecondaryIndexOutOfBounds: import("@mysten/bcs").BcsStruct<{
                                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                    secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                InvalidResultArity: import("@mysten/bcs").BcsStruct<{
                                    result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                                }, string>;
                                InvalidGasCoinUsage: any;
                                InvalidValueUsage: any;
                                InvalidObjectByValue: any;
                                InvalidObjectByMutRef: any;
                                SharedObjectOperationNotAllowed: any;
                                InvalidArgumentArity: any;
                                InvalidTransferObject: any;
                                InvalidMakeMoveVecNonObjectArgument: any;
                                ArgumentWithoutValue: any;
                                CannotMoveBorrowedValue: any;
                                CannotWriteToExtendedReference: any;
                                InvalidReferenceArgument: any;
                            }, "CommandArgumentError">;
                        }, string>;
                        TypeArgumentError: import("@mysten/bcs").BcsStruct<{
                            argument_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            kind: import("@mysten/bcs").BcsEnum<{
                                TypeNotFound: any;
                                ConstraintNotSatisfied: any;
                            }, "TypeArgumentError">;
                        }, string>;
                        UnusedValueWithoutDrop: import("@mysten/bcs").BcsStruct<{
                            result_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                            secondary_idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidPublicFunctionReturnType: import("@mysten/bcs").BcsStruct<{
                            idx: import("@mysten/bcs").BcsType<number, number, "u16">;
                        }, string>;
                        InvalidTransferObject: any;
                        EffectsTooLarge: import("@mysten/bcs").BcsStruct<{
                            current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        PublishUpgradeMissingDependency: any;
                        PublishUpgradeDependencyDowngrade: any;
                        PackageUpgradeError: import("@mysten/bcs").BcsStruct<{
                            upgrade_error: import("@mysten/bcs").BcsEnum<{
                                UnableToFetchPackage: import("@mysten/bcs").BcsStruct<{
                                    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                NotAPackage: import("@mysten/bcs").BcsStruct<{
                                    object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                IncompatibleUpgrade: any;
                                DigestDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                    digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                                UnknownUpgradePolicy: import("@mysten/bcs").BcsStruct<{
                                    policy: import("@mysten/bcs").BcsType<number, number, "u8">;
                                }, string>;
                                PackageIDDoesNotMatch: import("@mysten/bcs").BcsStruct<{
                                    package_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                    ticket_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                        length: number;
                                    }, string>;
                                }, string>;
                            }, "PackageUpgradeError">;
                        }, string>;
                        WrittenObjectsTooLarge: import("@mysten/bcs").BcsStruct<{
                            current_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        CertificateDenied: any;
                        SuiMoveVerificationTimedout: any;
                        SharedObjectOperationNotAllowed: any;
                        InputObjectDeleted: any;
                        ExecutionCancelledDueToSharedObjectCongestion: import("@mysten/bcs").BcsStruct<{
                            congested_objects: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                                length: number;
                            }> & {
                                length: number;
                            }, `vector<${string}>`>;
                        }, string>;
                        AddressDeniedForCoin: import("@mysten/bcs").BcsStruct<{
                            address: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                            coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                        }, string>;
                        CoinTypeGlobalPause: import("@mysten/bcs").BcsStruct<{
                            coin_type: import("@mysten/bcs").BcsType<string, string, "string">;
                        }, string>;
                        ExecutionCancelledDueToRandomnessUnavailable: any;
                        MoveVectorElemTooBig: import("@mysten/bcs").BcsStruct<{
                            value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        MoveRawValueTooBig: import("@mysten/bcs").BcsStruct<{
                            value_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                            max_scaled_size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                        }, string>;
                        InvalidLinkage: any;
                        InsufficientFundsForWithdraw: any;
                        NonExclusiveWriteInputObjectModified: import("@mysten/bcs").BcsStruct<{
                            id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                                length: number;
                            }, string>;
                        }, string>;
                    }, "ExecutionErrorKind">;
                    command: import("@mysten/bcs").BcsType<string, string | number | bigint, "Option<u64>">;
                }, string>;
            }, "ExecutionStatus">;
            executed_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            gas_used: import("@mysten/bcs").BcsStruct<{
                computationCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                storageCost: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                storageRebate: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                nonRefundableStorageFee: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            transaction_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "vector<u8>">;
            gas_object_index: import("@mysten/bcs").BcsType<number, number, "Option<u32>">;
            events_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "Option<vector<u8>>">;
            dependencies: import("@mysten/bcs").BcsType<number[][], Iterable<Iterable<number> & {
                length: number;
            }> & {
                length: number;
            }, string>;
            lamport_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            changed_objects: import("@mysten/bcs").BcsType<[number[], {
                input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    NotExist: unknown;
                    Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        AddressOwner: number[];
                        ObjectOwner: number[];
                        Shared: {
                            initial_shared_version: string;
                        };
                        Immutable: unknown;
                        ConsensusAddressOwner: {
                            start_version: string;
                            owner: number[];
                        };
                    }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                }, "NotExist" | "Exist">;
                output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    NotExist: unknown;
                    ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        AddressOwner: number[];
                        ObjectOwner: number[];
                        Shared: {
                            initial_shared_version: string;
                        };
                        Immutable: unknown;
                        ConsensusAddressOwner: {
                            start_version: string;
                            owner: number[];
                        };
                    }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                    PackageWrite: [string, number[]];
                    AccumulatorWriteV1: {
                        address: {
                            address: number[];
                            ty: unknown;
                        };
                        operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Merge: unknown;
                            Split: unknown;
                        }, "Merge" | "Split">;
                        value: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            Integer: string;
                            IntegerTuple: [string, string];
                            EventDigest: [string, number[]][];
                        }, "Integer" | "IntegerTuple" | "EventDigest">;
                    };
                }, "AccumulatorWriteV1" | "NotExist" | "ObjectWrite" | "PackageWrite">;
                id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    None: unknown;
                    Created: unknown;
                    Deleted: unknown;
                }, "None" | "Created" | "Deleted">;
            }][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, {
                input_state: import("@mysten/bcs").EnumInputShape<{
                    NotExist: unknown;
                    Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
                        length: number;
                    }], import("@mysten/bcs").EnumInputShape<{
                        AddressOwner: Iterable<number> & {
                            length: number;
                        };
                        ObjectOwner: Iterable<number> & {
                            length: number;
                        };
                        Shared: {
                            initial_shared_version: string | number | bigint;
                        };
                        Immutable: unknown;
                        ConsensusAddressOwner: {
                            start_version: string | number | bigint;
                            owner: Iterable<number> & {
                                length: number;
                            };
                        };
                    }>];
                }>;
                output_state: import("@mysten/bcs").EnumInputShape<{
                    NotExist: unknown;
                    ObjectWrite: readonly [Iterable<number> & {
                        length: number;
                    }, import("@mysten/bcs").EnumInputShape<{
                        AddressOwner: Iterable<number> & {
                            length: number;
                        };
                        ObjectOwner: Iterable<number> & {
                            length: number;
                        };
                        Shared: {
                            initial_shared_version: string | number | bigint;
                        };
                        Immutable: unknown;
                        ConsensusAddressOwner: {
                            start_version: string | number | bigint;
                            owner: Iterable<number> & {
                                length: number;
                            };
                        };
                    }>];
                    PackageWrite: readonly [string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                    AccumulatorWriteV1: {
                        address: {
                            address: Iterable<number> & {
                                length: number;
                            };
                            ty: unknown;
                        };
                        operation: import("@mysten/bcs").EnumInputShape<{
                            Merge: unknown;
                            Split: unknown;
                        }>;
                        value: import("@mysten/bcs").EnumInputShape<{
                            Integer: string | number | bigint;
                            IntegerTuple: readonly [string | number | bigint, string | number | bigint];
                            EventDigest: Iterable<readonly [string | number | bigint, Iterable<number> & {
                                length: number;
                            }]> & {
                                length: number;
                            };
                        }>;
                    };
                }>;
                id_operation: import("@mysten/bcs").EnumInputShape<{
                    None: unknown;
                    Created: unknown;
                    Deleted: unknown;
                }>;
            }]> & {
                length: number;
            }, string>;
            unchanged_consensus_objects: import("@mysten/bcs").BcsType<[number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                ReadOnlyRoot: [string, number[]];
                MutateConsensusStreamEnded: string;
                ReadConsensusStreamEnded: string;
                Cancelled: string;
                PerEpochConfig: unknown;
            }, "ReadOnlyRoot" | "MutateConsensusStreamEnded" | "ReadConsensusStreamEnded" | "Cancelled" | "PerEpochConfig">][], Iterable<readonly [Iterable<number> & {
                length: number;
            }, import("@mysten/bcs").EnumInputShape<{
                ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
                    length: number;
                }];
                MutateConsensusStreamEnded: string | number | bigint;
                ReadConsensusStreamEnded: string | number | bigint;
                Cancelled: string | number | bigint;
                PerEpochConfig: unknown;
            }>]> & {
                length: number;
            }, string>;
            aux_data_digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, "Option<vector<u8>>">;
        }, string>;
    }, "TransactionEffects">;
}, string>;
export const FullCheckpointContents: import("@mysten/bcs").BcsStruct<{
    transactions: import("@mysten/bcs").BcsType<{
        transaction: {
            data: unknown;
            auth_signature: unknown;
        };
        effects: import("@mysten/bcs").EnumOutputShapeWithKeys<{
            V1: {
                status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            MovePackageTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            CircularObjectOwnership: {
                                object: number[];
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: [{
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                    InvalidArgumentArity: unknown;
                                    InvalidTransferObject: unknown;
                                    InvalidMakeMoveVecNonObjectArgument: unknown;
                                    ArgumentWithoutValue: unknown;
                                    CannotMoveBorrowedValue: unknown;
                                    CannotWriteToExtendedReference: unknown;
                                    InvalidReferenceArgument: unknown;
                                }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed" | "InvalidArgumentArity" | "InvalidTransferObject" | "InvalidMakeMoveVecNonObjectArgument" | "ArgumentWithoutValue" | "CannotMoveBorrowedValue" | "CannotWriteToExtendedReference" | "InvalidReferenceArgument">;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }, "TypeNotFound" | "ConstraintNotSatisfied">;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    UnableToFetchPackage: {
                                        package_id: number[];
                                    };
                                    NotAPackage: {
                                        object_id: number[];
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: number[];
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: number[];
                                        ticket_id: number[];
                                    };
                                }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: number[][];
                            };
                            AddressDeniedForCoin: {
                                address: number[];
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                            MoveVectorElemTooBig: {
                                value_size: string;
                                max_scaled_size: string;
                            };
                            MoveRawValueTooBig: {
                                value_size: string;
                                max_scaled_size: string;
                            };
                            InvalidLinkage: unknown;
                            InsufficientFundsForWithdraw: unknown;
                            NonExclusiveWriteInputObjectModified: {
                                id: number[];
                            };
                        }, "CommandArgumentError" | "SharedObjectOperationNotAllowed" | "InvalidTransferObject" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable" | "MoveVectorElemTooBig" | "MoveRawValueTooBig" | "InvalidLinkage" | "InsufficientFundsForWithdraw" | "NonExclusiveWriteInputObjectModified">;
                        command: string;
                    };
                }, "Success" | "Failure">;
                executed_epoch: string;
                gas_used: {
                    computationCost: string;
                    storageCost: string;
                    storageRebate: string;
                    nonRefundableStorageFee: string;
                };
                modified_at_versions: [number[], string][];
                shared_objects: [number[], string, number[]][];
                transaction_digest: number[];
                created: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][];
                mutated: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][];
                unwrapped: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">][];
                deleted: [number[], string, number[]][];
                unwrapped_then_deleted: [number[], string, number[]][];
                wrapped: [number[], string, number[]][];
                gas_object: [[number[], string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    AddressOwner: number[];
                    ObjectOwner: number[];
                    Shared: {
                        initial_shared_version: string;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string;
                        owner: number[];
                    };
                }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                events_digest: number[];
                dependencies: number[][];
            };
            V2: {
                status: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            MovePackageTooBig: {
                                object_size: string;
                                max_object_size: string;
                            };
                            CircularObjectOwnership: {
                                object: number[];
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: [{
                                module: {
                                    address: number[];
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                    InvalidArgumentArity: unknown;
                                    InvalidTransferObject: unknown;
                                    InvalidMakeMoveVecNonObjectArgument: unknown;
                                    ArgumentWithoutValue: unknown;
                                    CannotMoveBorrowedValue: unknown;
                                    CannotWriteToExtendedReference: unknown;
                                    InvalidReferenceArgument: unknown;
                                }, "TypeMismatch" | "InvalidBCSBytes" | "InvalidUsageOfPureArg" | "InvalidArgumentToPrivateEntryFunction" | "IndexOutOfBounds" | "SecondaryIndexOutOfBounds" | "InvalidResultArity" | "InvalidGasCoinUsage" | "InvalidValueUsage" | "InvalidObjectByValue" | "InvalidObjectByMutRef" | "SharedObjectOperationNotAllowed" | "InvalidArgumentArity" | "InvalidTransferObject" | "InvalidMakeMoveVecNonObjectArgument" | "ArgumentWithoutValue" | "CannotMoveBorrowedValue" | "CannotWriteToExtendedReference" | "InvalidReferenceArgument">;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }, "TypeNotFound" | "ConstraintNotSatisfied">;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                    UnableToFetchPackage: {
                                        package_id: number[];
                                    };
                                    NotAPackage: {
                                        object_id: number[];
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: number[];
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: number[];
                                        ticket_id: number[];
                                    };
                                }, "UnableToFetchPackage" | "NotAPackage" | "IncompatibleUpgrade" | "DigestDoesNotMatch" | "UnknownUpgradePolicy" | "PackageIDDoesNotMatch">;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string;
                                max_size: string;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: number[][];
                            };
                            AddressDeniedForCoin: {
                                address: number[];
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                            MoveVectorElemTooBig: {
                                value_size: string;
                                max_scaled_size: string;
                            };
                            MoveRawValueTooBig: {
                                value_size: string;
                                max_scaled_size: string;
                            };
                            InvalidLinkage: unknown;
                            InsufficientFundsForWithdraw: unknown;
                            NonExclusiveWriteInputObjectModified: {
                                id: number[];
                            };
                        }, "CommandArgumentError" | "SharedObjectOperationNotAllowed" | "InvalidTransferObject" | "TypeArgumentError" | "PackageUpgradeError" | "InsufficientGas" | "InvalidGasObject" | "InvariantViolation" | "FeatureNotYetSupported" | "MoveObjectTooBig" | "MovePackageTooBig" | "CircularObjectOwnership" | "InsufficientCoinBalance" | "CoinBalanceOverflow" | "PublishErrorNonZeroAddress" | "SuiMoveVerificationError" | "MovePrimitiveRuntimeError" | "MoveAbort" | "VMVerificationOrDeserializationError" | "VMInvariantViolation" | "FunctionNotFound" | "ArityMismatch" | "TypeArityMismatch" | "NonEntryFunctionInvoked" | "UnusedValueWithoutDrop" | "InvalidPublicFunctionReturnType" | "EffectsTooLarge" | "PublishUpgradeMissingDependency" | "PublishUpgradeDependencyDowngrade" | "WrittenObjectsTooLarge" | "CertificateDenied" | "SuiMoveVerificationTimedout" | "InputObjectDeleted" | "ExecutionCancelledDueToSharedObjectCongestion" | "AddressDeniedForCoin" | "CoinTypeGlobalPause" | "ExecutionCancelledDueToRandomnessUnavailable" | "MoveVectorElemTooBig" | "MoveRawValueTooBig" | "InvalidLinkage" | "InsufficientFundsForWithdraw" | "NonExclusiveWriteInputObjectModified">;
                        command: string;
                    };
                }, "Success" | "Failure">;
                executed_epoch: string;
                gas_used: {
                    computationCost: string;
                    storageCost: string;
                    storageRebate: string;
                    nonRefundableStorageFee: string;
                };
                transaction_digest: number[];
                gas_object_index: number;
                events_digest: number[];
                dependencies: number[][];
                lamport_version: string;
                changed_objects: [number[], {
                    input_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        NotExist: unknown;
                        Exist: [[string, number[]], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            AddressOwner: number[];
                            ObjectOwner: number[];
                            Shared: {
                                initial_shared_version: string;
                            };
                            Immutable: unknown;
                            ConsensusAddressOwner: {
                                start_version: string;
                                owner: number[];
                            };
                        }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                    }, "NotExist" | "Exist">;
                    output_state: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        NotExist: unknown;
                        ObjectWrite: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                            AddressOwner: number[];
                            ObjectOwner: number[];
                            Shared: {
                                initial_shared_version: string;
                            };
                            Immutable: unknown;
                            ConsensusAddressOwner: {
                                start_version: string;
                                owner: number[];
                            };
                        }, "Immutable" | "AddressOwner" | "ObjectOwner" | "Shared" | "ConsensusAddressOwner">];
                        PackageWrite: [string, number[]];
                        AccumulatorWriteV1: {
                            address: {
                                address: number[];
                                ty: unknown;
                            };
                            operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Merge: unknown;
                                Split: unknown;
                            }, "Merge" | "Split">;
                            value: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                                Integer: string;
                                IntegerTuple: [string, string];
                                EventDigest: [string, number[]][];
                            }, "Integer" | "IntegerTuple" | "EventDigest">;
                        };
                    }, "AccumulatorWriteV1" | "NotExist" | "ObjectWrite" | "PackageWrite">;
                    id_operation: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                        None: unknown;
                        Created: unknown;
                        Deleted: unknown;
                    }, "None" | "Created" | "Deleted">;
                }][];
                unchanged_consensus_objects: [number[], import("@mysten/bcs").EnumOutputShapeWithKeys<{
                    ReadOnlyRoot: [string, number[]];
                    MutateConsensusStreamEnded: string;
                    ReadConsensusStreamEnded: string;
                    Cancelled: string;
                    PerEpochConfig: unknown;
                }, "ReadOnlyRoot" | "MutateConsensusStreamEnded" | "ReadConsensusStreamEnded" | "Cancelled" | "PerEpochConfig">][];
                aux_data_digest: number[];
            };
        }, "V1" | "V2">;
    }[], Iterable<{
        transaction: {
            data: unknown;
            auth_signature: unknown;
        };
        effects: import("@mysten/bcs").EnumInputShape<{
            V1: {
                status: import("@mysten/bcs").EnumInputShape<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumInputShape<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            MovePackageTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            CircularObjectOwnership: {
                                object: Iterable<number> & {
                                    length: number;
                                };
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: readonly [{
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string | number | bigint];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                    InvalidArgumentArity: unknown;
                                    InvalidTransferObject: unknown;
                                    InvalidMakeMoveVecNonObjectArgument: unknown;
                                    ArgumentWithoutValue: unknown;
                                    CannotMoveBorrowedValue: unknown;
                                    CannotWriteToExtendedReference: unknown;
                                    InvalidReferenceArgument: unknown;
                                }>;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }>;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumInputShape<{
                                    UnableToFetchPackage: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    NotAPackage: {
                                        object_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                        ticket_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                }>;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                };
                            };
                            AddressDeniedForCoin: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                            MoveVectorElemTooBig: {
                                value_size: string | number | bigint;
                                max_scaled_size: string | number | bigint;
                            };
                            MoveRawValueTooBig: {
                                value_size: string | number | bigint;
                                max_scaled_size: string | number | bigint;
                            };
                            InvalidLinkage: unknown;
                            InsufficientFundsForWithdraw: unknown;
                            NonExclusiveWriteInputObjectModified: {
                                id: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>;
                        command: string | number | bigint;
                    };
                }>;
                executed_epoch: string | number | bigint;
                gas_used: {
                    computationCost: string | number | bigint;
                    storageCost: string | number | bigint;
                    storageRebate: string | number | bigint;
                    nonRefundableStorageFee: string | number | bigint;
                };
                modified_at_versions: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint]> & {
                    length: number;
                };
                shared_objects: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                transaction_digest: Iterable<number> & {
                    length: number;
                };
                created: Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>]> & {
                    length: number;
                };
                mutated: Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>]> & {
                    length: number;
                };
                unwrapped: Iterable<readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>]> & {
                    length: number;
                };
                deleted: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                unwrapped_then_deleted: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                wrapped: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }]> & {
                    length: number;
                };
                gas_object: readonly [readonly [Iterable<number> & {
                    length: number;
                }, string | number | bigint, Iterable<number> & {
                    length: number;
                }], import("@mysten/bcs").EnumInputShape<{
                    AddressOwner: Iterable<number> & {
                        length: number;
                    };
                    ObjectOwner: Iterable<number> & {
                        length: number;
                    };
                    Shared: {
                        initial_shared_version: string | number | bigint;
                    };
                    Immutable: unknown;
                    ConsensusAddressOwner: {
                        start_version: string | number | bigint;
                        owner: Iterable<number> & {
                            length: number;
                        };
                    };
                }>];
                events_digest: Iterable<number> & {
                    length: number;
                };
                dependencies: Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                };
            };
            V2: {
                status: import("@mysten/bcs").EnumInputShape<{
                    Success: unknown;
                    Failure: {
                        error: import("@mysten/bcs").EnumInputShape<{
                            InsufficientGas: unknown;
                            InvalidGasObject: unknown;
                            InvariantViolation: unknown;
                            FeatureNotYetSupported: unknown;
                            MoveObjectTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            MovePackageTooBig: {
                                object_size: string | number | bigint;
                                max_object_size: string | number | bigint;
                            };
                            CircularObjectOwnership: {
                                object: Iterable<number> & {
                                    length: number;
                                };
                            };
                            InsufficientCoinBalance: unknown;
                            CoinBalanceOverflow: unknown;
                            PublishErrorNonZeroAddress: unknown;
                            SuiMoveVerificationError: unknown;
                            MovePrimitiveRuntimeError: {
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            };
                            MoveAbort: readonly [{
                                module: {
                                    address: Iterable<number> & {
                                        length: number;
                                    };
                                    name: string;
                                };
                                function: number;
                                instruction: number;
                                function_name: string;
                            }, string | number | bigint];
                            VMVerificationOrDeserializationError: unknown;
                            VMInvariantViolation: unknown;
                            FunctionNotFound: unknown;
                            ArityMismatch: unknown;
                            TypeArityMismatch: unknown;
                            NonEntryFunctionInvoked: unknown;
                            CommandArgumentError: {
                                arg_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeMismatch: unknown;
                                    InvalidBCSBytes: unknown;
                                    InvalidUsageOfPureArg: unknown;
                                    InvalidArgumentToPrivateEntryFunction: unknown;
                                    IndexOutOfBounds: {
                                        idx: number;
                                    };
                                    SecondaryIndexOutOfBounds: {
                                        result_idx: number;
                                        secondary_idx: number;
                                    };
                                    InvalidResultArity: {
                                        result_idx: number;
                                    };
                                    InvalidGasCoinUsage: unknown;
                                    InvalidValueUsage: unknown;
                                    InvalidObjectByValue: unknown;
                                    InvalidObjectByMutRef: unknown;
                                    SharedObjectOperationNotAllowed: unknown;
                                    InvalidArgumentArity: unknown;
                                    InvalidTransferObject: unknown;
                                    InvalidMakeMoveVecNonObjectArgument: unknown;
                                    ArgumentWithoutValue: unknown;
                                    CannotMoveBorrowedValue: unknown;
                                    CannotWriteToExtendedReference: unknown;
                                    InvalidReferenceArgument: unknown;
                                }>;
                            };
                            TypeArgumentError: {
                                argument_idx: number;
                                kind: import("@mysten/bcs").EnumInputShape<{
                                    TypeNotFound: unknown;
                                    ConstraintNotSatisfied: unknown;
                                }>;
                            };
                            UnusedValueWithoutDrop: {
                                result_idx: number;
                                secondary_idx: number;
                            };
                            InvalidPublicFunctionReturnType: {
                                idx: number;
                            };
                            InvalidTransferObject: unknown;
                            EffectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            PublishUpgradeMissingDependency: unknown;
                            PublishUpgradeDependencyDowngrade: unknown;
                            PackageUpgradeError: {
                                upgrade_error: import("@mysten/bcs").EnumInputShape<{
                                    UnableToFetchPackage: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    NotAPackage: {
                                        object_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    IncompatibleUpgrade: unknown;
                                    DigestDoesNotMatch: {
                                        digest: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                    UnknownUpgradePolicy: {
                                        policy: number;
                                    };
                                    PackageIDDoesNotMatch: {
                                        package_id: Iterable<number> & {
                                            length: number;
                                        };
                                        ticket_id: Iterable<number> & {
                                            length: number;
                                        };
                                    };
                                }>;
                            };
                            WrittenObjectsTooLarge: {
                                current_size: string | number | bigint;
                                max_size: string | number | bigint;
                            };
                            CertificateDenied: unknown;
                            SuiMoveVerificationTimedout: unknown;
                            SharedObjectOperationNotAllowed: unknown;
                            InputObjectDeleted: unknown;
                            ExecutionCancelledDueToSharedObjectCongestion: {
                                congested_objects: Iterable<Iterable<number> & {
                                    length: number;
                                }> & {
                                    length: number;
                                };
                            };
                            AddressDeniedForCoin: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                coin_type: string;
                            };
                            CoinTypeGlobalPause: {
                                coin_type: string;
                            };
                            ExecutionCancelledDueToRandomnessUnavailable: unknown;
                            MoveVectorElemTooBig: {
                                value_size: string | number | bigint;
                                max_scaled_size: string | number | bigint;
                            };
                            MoveRawValueTooBig: {
                                value_size: string | number | bigint;
                                max_scaled_size: string | number | bigint;
                            };
                            InvalidLinkage: unknown;
                            InsufficientFundsForWithdraw: unknown;
                            NonExclusiveWriteInputObjectModified: {
                                id: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>;
                        command: string | number | bigint;
                    };
                }>;
                executed_epoch: string | number | bigint;
                gas_used: {
                    computationCost: string | number | bigint;
                    storageCost: string | number | bigint;
                    storageRebate: string | number | bigint;
                    nonRefundableStorageFee: string | number | bigint;
                };
                transaction_digest: Iterable<number> & {
                    length: number;
                };
                gas_object_index: number;
                events_digest: Iterable<number> & {
                    length: number;
                };
                dependencies: Iterable<Iterable<number> & {
                    length: number;
                }> & {
                    length: number;
                };
                lamport_version: string | number | bigint;
                changed_objects: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, {
                    input_state: import("@mysten/bcs").EnumInputShape<{
                        NotExist: unknown;
                        Exist: readonly [readonly [string | number | bigint, Iterable<number> & {
                            length: number;
                        }], import("@mysten/bcs").EnumInputShape<{
                            AddressOwner: Iterable<number> & {
                                length: number;
                            };
                            ObjectOwner: Iterable<number> & {
                                length: number;
                            };
                            Shared: {
                                initial_shared_version: string | number | bigint;
                            };
                            Immutable: unknown;
                            ConsensusAddressOwner: {
                                start_version: string | number | bigint;
                                owner: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>];
                    }>;
                    output_state: import("@mysten/bcs").EnumInputShape<{
                        NotExist: unknown;
                        ObjectWrite: readonly [Iterable<number> & {
                            length: number;
                        }, import("@mysten/bcs").EnumInputShape<{
                            AddressOwner: Iterable<number> & {
                                length: number;
                            };
                            ObjectOwner: Iterable<number> & {
                                length: number;
                            };
                            Shared: {
                                initial_shared_version: string | number | bigint;
                            };
                            Immutable: unknown;
                            ConsensusAddressOwner: {
                                start_version: string | number | bigint;
                                owner: Iterable<number> & {
                                    length: number;
                                };
                            };
                        }>];
                        PackageWrite: readonly [string | number | bigint, Iterable<number> & {
                            length: number;
                        }];
                        AccumulatorWriteV1: {
                            address: {
                                address: Iterable<number> & {
                                    length: number;
                                };
                                ty: unknown;
                            };
                            operation: import("@mysten/bcs").EnumInputShape<{
                                Merge: unknown;
                                Split: unknown;
                            }>;
                            value: import("@mysten/bcs").EnumInputShape<{
                                Integer: string | number | bigint;
                                IntegerTuple: readonly [string | number | bigint, string | number | bigint];
                                EventDigest: Iterable<readonly [string | number | bigint, Iterable<number> & {
                                    length: number;
                                }]> & {
                                    length: number;
                                };
                            }>;
                        };
                    }>;
                    id_operation: import("@mysten/bcs").EnumInputShape<{
                        None: unknown;
                        Created: unknown;
                        Deleted: unknown;
                    }>;
                }]> & {
                    length: number;
                };
                unchanged_consensus_objects: Iterable<readonly [Iterable<number> & {
                    length: number;
                }, import("@mysten/bcs").EnumInputShape<{
                    ReadOnlyRoot: readonly [string | number | bigint, Iterable<number> & {
                        length: number;
                    }];
                    MutateConsensusStreamEnded: string | number | bigint;
                    ReadConsensusStreamEnded: string | number | bigint;
                    Cancelled: string | number | bigint;
                    PerEpochConfig: unknown;
                }>]> & {
                    length: number;
                };
                aux_data_digest: Iterable<number> & {
                    length: number;
                };
            };
        }>;
    }> & {
        length: number;
    }, string>;
    user_signatures: import("@mysten/bcs").BcsType<number[][][], Iterable<Iterable<Iterable<number> & {
        length: number;
    }> & {
        length: number;
    }> & {
        length: number;
    }, string>;
}, string>;
export const ZkLoginPublicIdentifier: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
    length: number;
}, "vector<u8>">;
export const PublicKey: import("@mysten/bcs").BcsEnum<{
    Ed25519: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    Secp256k1: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    Secp256r1: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, string>;
    ZkLogin: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
        length: number;
    }, "vector<u8>">;
}, "PublicKey">;
export const MultiSigPublicKey: import("@mysten/bcs").BcsStruct<{
    pk_map: import("@mysten/bcs").BcsType<[import("@mysten/bcs").EnumOutputShapeWithKeys<{
        Ed25519: number[];
        Secp256k1: number[];
        Secp256r1: number[];
        ZkLogin: number[];
    }, "Ed25519" | "Secp256k1" | "Secp256r1" | "ZkLogin">, number][], Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
        Ed25519: Iterable<number> & {
            length: number;
        };
        Secp256k1: Iterable<number> & {
            length: number;
        };
        Secp256r1: Iterable<number> & {
            length: number;
        };
        ZkLogin: Iterable<number> & {
            length: number;
        };
    }>, number]> & {
        length: number;
    }, string>;
    threshold: import("@mysten/bcs").BcsType<number, number, "u16">;
}, string>;
export const MultiSig: import("@mysten/bcs").BcsStruct<{
    sigs: import("@mysten/bcs").BcsType<import("@mysten/bcs").EnumOutputShapeWithKeys<{
        Ed25519: number[];
        Secp256k1: number[];
        Secp256r1: number[];
        ZkLogin: number[];
    }, "Ed25519" | "Secp256k1" | "Secp256r1" | "ZkLogin">[], Iterable<import("@mysten/bcs").EnumInputShape<{
        Ed25519: Iterable<number> & {
            length: number;
        };
        Secp256k1: Iterable<number> & {
            length: number;
        };
        Secp256r1: Iterable<number> & {
            length: number;
        };
        ZkLogin: Iterable<number> & {
            length: number;
        };
    }>> & {
        length: number;
    }, string>;
    bitmap: import("@mysten/bcs").BcsType<number, number, "u16">;
    multisig_pk: import("@mysten/bcs").BcsStruct<{
        pk_map: import("@mysten/bcs").BcsType<[import("@mysten/bcs").EnumOutputShapeWithKeys<{
            Ed25519: number[];
            Secp256k1: number[];
            Secp256r1: number[];
            ZkLogin: number[];
        }, "Ed25519" | "Secp256k1" | "Secp256r1" | "ZkLogin">, number][], Iterable<readonly [import("@mysten/bcs").EnumInputShape<{
            Ed25519: Iterable<number> & {
                length: number;
            };
            Secp256k1: Iterable<number> & {
                length: number;
            };
            Secp256r1: Iterable<number> & {
                length: number;
            };
            ZkLogin: Iterable<number> & {
                length: number;
            };
        }>, number]> & {
            length: number;
        }, string>;
        threshold: import("@mysten/bcs").BcsType<number, number, "u16">;
    }, string>;
}, string>;
export const ObjectInfoRequestKind: import("@mysten/bcs").BcsEnum<{
    LatestObjectInfo: any;
    PastObjectInfoDebug: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
}, "ObjectInfoRequestKind">;
