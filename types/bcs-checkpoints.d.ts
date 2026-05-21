export function IntentMessage(value: any): import("@mysten/bcs").BcsStruct<{
    intent: import("@mysten/bcs").BcsStruct<{
        scope: import("@mysten/bcs").BcsType<number, number, "u8">;
        version: import("@mysten/bcs").BcsType<number, number, "u8">;
        app_id: import("@mysten/bcs").BcsType<number, number, "u8">;
    }, string>;
    value: any;
}, string>;
export const LiveObject: import("@mysten/bcs").BcsEnum<{
    Normal: import("@mysten/bcs").BcsStruct<{
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
    Wrapped: import("@mysten/bcs").BcsStruct<{
        object_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
            length: number;
        }, string>;
        version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
}, "LiveObject">;
export const Manifest: import("@mysten/bcs").BcsEnum<{
    V1: import("@mysten/bcs").BcsStruct<{
        snapshot_version: import("@mysten/bcs").BcsType<number, number, "u8">;
        address_length: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        file_metadata: import("@mysten/bcs").BcsType<{
            file_type: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                Object: unknown;
                Reference: unknown;
            }, "Object" | "Reference">;
            bucket_num: number;
            part_num: number;
            file_compression: import("@mysten/bcs").EnumOutputShapeWithKeys<{
                None: unknown;
                Zstd: unknown;
            }, "None" | "Zstd">;
            sha3_digest: number[];
        }[], Iterable<{
            file_type: import("@mysten/bcs").EnumInputShape<{
                Object: unknown;
                Reference: unknown;
            }>;
            bucket_num: number;
            part_num: number;
            file_compression: import("@mysten/bcs").EnumInputShape<{
                None: unknown;
                Zstd: unknown;
            }>;
            sha3_digest: Iterable<number> & {
                length: number;
            };
        }> & {
            length: number;
        }, string>;
        epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
    }, string>;
}, "Manifest">;
