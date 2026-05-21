declare namespace _default {
    export namespace authenticator_state {
        let ActiveJwk: import("@mysten/bcs").BcsStruct<{
            jwk_id: import("@mysten/bcs").BcsStruct<{
                iss: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
                kid: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
            }, string>;
            jwk: import("@mysten/bcs").BcsStruct<{
                kty: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
                e: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
                n: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
                alg: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                        length: number;
                    }, string>;
                }, string>;
            }, string>;
            epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        let AuthenticatorState: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        let AuthenticatorStateInner: import("@mysten/bcs").BcsStruct<{
            version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            active_jwks: import("@mysten/bcs").BcsType<{
                jwk_id: {
                    iss: {
                        bytes: number[];
                    };
                    kid: {
                        bytes: number[];
                    };
                };
                jwk: {
                    kty: {
                        bytes: number[];
                    };
                    e: {
                        bytes: number[];
                    };
                    n: {
                        bytes: number[];
                    };
                    alg: {
                        bytes: number[];
                    };
                };
                epoch: string;
            }[], Iterable<{
                jwk_id: {
                    iss: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                    kid: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                };
                jwk: {
                    kty: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                    e: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                    n: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                    alg: {
                        bytes: Iterable<number> & {
                            length: number;
                        };
                    };
                };
                epoch: string | number | bigint;
            }> & {
                length: number;
            }, string>;
        }, string>;
        let JWK: import("@mysten/bcs").BcsStruct<{
            kty: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            e: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            n: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            alg: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
        let JwkId: import("@mysten/bcs").BcsStruct<{
            iss: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            kid: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
    }
    export namespace bag {
        let Bag: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    export namespace balance {
        function Balance(T0: any): import("@mysten/bcs").BcsStruct<{
            value: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        function Supply(T0: any): import("@mysten/bcs").BcsStruct<{
            value: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    export namespace bcs {
        let BCS: import("@mysten/bcs").BcsStruct<{
            bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }
    export namespace bls12381 {
        let G1: import("@mysten/bcs").BcsStruct<{
            dummy_field: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        let G2: import("@mysten/bcs").BcsStruct<{
            dummy_field: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        let GT: import("@mysten/bcs").BcsStruct<{
            dummy_field: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        let Scalar: import("@mysten/bcs").BcsStruct<{
            dummy_field: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        let UncompressedG1: import("@mysten/bcs").BcsStruct<{
            dummy_field: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
    }
    export namespace borrow {
        let Borrow: import("@mysten/bcs").BcsStruct<{
            ref: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            obj: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        function Referent(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            value: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
    }
    export namespace clock {
        let Clock: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    export namespace coin {
        function Coin(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            balance: import("@mysten/bcs").BcsStruct<{
                value: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
        }, string>;
        function CoinMetadata(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            decimals: import("@mysten/bcs").BcsType<number, number, "u8">;
            name: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            symbol: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            description: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            icon_url: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
        function CurrencyCreated(T0: any): import("@mysten/bcs").BcsStruct<{
            decimals: import("@mysten/bcs").BcsType<number, number, "u8">;
        }, string>;
        function DenyCap(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
        }, string>;
        function DenyCapV2(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            allow_global_pause: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        function RegulatedCoinMetadata(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            coin_metadata_object: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            deny_cap_object: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        function TreasuryCap(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            total_supply: import("@mysten/bcs").BcsStruct<{
                value: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
        }, string>;
    }
    export namespace config {
        function Config(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
        }, string>;
        function Setting(T0: any): import("@mysten/bcs").BcsStruct<{
            data: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
        function SettingData(T0: any): import("@mysten/bcs").BcsStruct<{
            newer_value_epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            newer_value: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
            older_value_opt: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
    }
    export namespace deny_list {
        let AddressKey: import("@mysten/bcs").BcsStruct<{
            pos0: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
        }, string>;
        let ConfigKey: import("@mysten/bcs").BcsStruct<{
            per_type_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            per_type_key: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
        let ConfigWriteCap: import("@mysten/bcs").BcsStruct<{
            dummy_field: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        let DenyList: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            lists: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    id: import("@mysten/bcs").BcsStruct<{
                        bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                    }, string>;
                }, string>;
                size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
        }, string>;
        let GlobalPauseKey: import("@mysten/bcs").BcsStruct<{
            dummy_field: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        let PerTypeConfigCreated: import("@mysten/bcs").BcsStruct<{
            key: import("@mysten/bcs").BcsStruct<{
                per_type_index: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
                per_type_key: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            config_id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        let PerTypeList: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            denied_count: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    id: import("@mysten/bcs").BcsStruct<{
                        bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                    }, string>;
                }, string>;
                size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            denied_addresses: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    id: import("@mysten/bcs").BcsStruct<{
                        bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                    }, string>;
                }, string>;
                size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
        }, string>;
    }
    export namespace display {
        function Display(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            fields: import("@mysten/bcs").BcsStruct<{
                contents: import("@mysten/bcs").BcsType<{
                    key: unknown;
                    value: unknown;
                }[], Iterable<{
                    key: unknown;
                    value: unknown;
                }> & {
                    length: number;
                }, string>;
            }, string>;
            version: import("@mysten/bcs").BcsType<number, number, "u16">;
        }, string>;
        function DisplayCreated(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        function VersionUpdated(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            version: import("@mysten/bcs").BcsType<number, number, "u16">;
            fields: import("@mysten/bcs").BcsStruct<{
                contents: import("@mysten/bcs").BcsType<{
                    key: unknown;
                    value: unknown;
                }[], Iterable<{
                    key: unknown;
                    value: unknown;
                }> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
    }
    export namespace dynamic_field {
        function Field(T0: any, T1: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            name: any;
            value: any;
        }, string>;
    }
    export namespace dynamic_object_field {
        function Wrapper(T0: any): import("@mysten/bcs").BcsStruct<{
            name: any;
        }, string>;
    }
    export namespace groth16 {
        let Curve: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsType<number, number, "u8">;
        }, string>;
        let PreparedVerifyingKey: import("@mysten/bcs").BcsStruct<{
            vk_gamma_abc_g1_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            alpha_g1_beta_g2_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            gamma_g2_neg_pc_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            delta_g2_neg_pc_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
        let ProofPoints: import("@mysten/bcs").BcsStruct<{
            bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
        let PublicProofInputs: import("@mysten/bcs").BcsStruct<{
            bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }
    export namespace group_ops {
        function Element(T0: any): import("@mysten/bcs").BcsStruct<{
            bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }
    export namespace kiosk {
        let Borrow_1: import("@mysten/bcs").BcsStruct<{
            kiosk_id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            item_id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        export { Borrow_1 as Borrow };
        export let Item: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        export function ItemDelisted(T0: any): import("@mysten/bcs").BcsStruct<{
            kiosk: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        export function ItemListed(T0: any): import("@mysten/bcs").BcsStruct<{
            kiosk: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            price: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        export function ItemPurchased(T0: any): import("@mysten/bcs").BcsStruct<{
            kiosk: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            price: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        export let Kiosk: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            profits: import("@mysten/bcs").BcsStruct<{
                value: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            owner: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            item_count: import("@mysten/bcs").BcsType<number, number, "u32">;
            allow_extensions: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        export let KioskOwnerCap: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            for: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        export let Listing: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            is_exclusive: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        export let Lock: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        export function PurchaseCap(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            kiosk_id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            item_id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            min_price: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    export namespace kiosk_extension {
        let Extension: import("@mysten/bcs").BcsStruct<{
            storage: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    id: import("@mysten/bcs").BcsStruct<{
                        bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                    }, string>;
                }, string>;
                size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            permissions: import("@mysten/bcs").BcsType<string, string | number | bigint, "u128">;
            is_enabled: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        function ExtensionKey(T0: any): import("@mysten/bcs").BcsStruct<{
            dummy_field: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
    }
    export namespace linked_table {
        function LinkedTable(T0: any, T1: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            head: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
            tail: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
        function Node(T0: any, T1: any): import("@mysten/bcs").BcsStruct<{
            prev: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
            next: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
            value: any;
        }, string>;
    }
    export namespace nitro_attestation {
        let NitroAttestationDocument: import("@mysten/bcs").BcsStruct<{
            module_id: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            timestamp: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            pcrs: import("@mysten/bcs").BcsType<{
                index: number;
                value: number[];
            }[], Iterable<{
                index: number;
                value: Iterable<number> & {
                    length: number;
                };
            }> & {
                length: number;
            }, string>;
            public_key: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
            user_data: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
            nonce: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
        let PCREntry: import("@mysten/bcs").BcsStruct<{
            index: import("@mysten/bcs").BcsType<number, number, "u8">;
            value: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }
    export namespace object {
        let ID: import("@mysten/bcs").BcsStruct<{
            bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
        }, string>;
        let UID: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
    }
    export namespace object_bag {
        let ObjectBag: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    export namespace object_table {
        function ObjectTable(T0: any, T1: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    export namespace _package {
        let Publisher: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            package: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            module_name: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
        let UpgradeCap: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            package: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            policy: import("@mysten/bcs").BcsType<number, number, "u8">;
        }, string>;
        let UpgradeReceipt: import("@mysten/bcs").BcsStruct<{
            cap: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            package: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        let UpgradeTicket: import("@mysten/bcs").BcsStruct<{
            cap: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            package: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            policy: import("@mysten/bcs").BcsType<number, number, "u8">;
            digest: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }
    export { _package as package };
    export namespace priority_queue {
        function Entry(T0: any): import("@mysten/bcs").BcsStruct<{
            priority: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            value: any;
        }, string>;
        function PriorityQueue(T0: any): import("@mysten/bcs").BcsStruct<{
            entries: import("@mysten/bcs").BcsType<{
                key: unknown;
                value: unknown;
            }[], Iterable<{
                key: unknown;
                value: unknown;
            }> & {
                length: number;
            }, string>;
        }, string>;
    }
    export namespace random {
        let Random: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            inner: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    id: import("@mysten/bcs").BcsStruct<{
                        bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                    }, string>;
                }, string>;
                version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
        }, string>;
        let RandomGenerator: import("@mysten/bcs").BcsStruct<{
            seed: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            counter: import("@mysten/bcs").BcsType<number, number, "u16">;
            buffer: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
        let RandomInner: import("@mysten/bcs").BcsStruct<{
            version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            randomness_round: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            random_bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }
    export namespace sui {
        let SUI: import("@mysten/bcs").BcsStruct<{
            dummy_field: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
    }
    export namespace table {
        function Table(T0: any, T1: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    export namespace table_vec {
        function TableVec(T0: any): import("@mysten/bcs").BcsStruct<{
            contents: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    id: import("@mysten/bcs").BcsStruct<{
                        bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                    }, string>;
                }, string>;
                size: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
        }, string>;
    }
    export namespace token {
        function ActionRequest(T0: any): import("@mysten/bcs").BcsStruct<{
            name: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            amount: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            sender: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            recipient: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
            spent_balance: import("@mysten/bcs").BcsStruct<{
                vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
            approvals: import("@mysten/bcs").BcsStruct<{
                contents: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
        function RuleKey(T0: any): import("@mysten/bcs").BcsStruct<{
            is_protected: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        function Token(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            balance: import("@mysten/bcs").BcsStruct<{
                value: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
        }, string>;
        function TokenPolicy(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            spent_balance: import("@mysten/bcs").BcsStruct<{
                value: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            rules: import("@mysten/bcs").BcsStruct<{
                contents: import("@mysten/bcs").BcsType<{
                    key: unknown;
                    value: unknown;
                }[], Iterable<{
                    key: unknown;
                    value: unknown;
                }> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
        function TokenPolicyCap(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            for: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        function TokenPolicyCreated(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            is_mutable: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
    }
    export namespace transfer {
        function Receiving(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    export namespace transfer_policy {
        export function RuleKey_1(T0: any): import("@mysten/bcs").BcsStruct<{
            dummy_field: import("@mysten/bcs").BcsType<boolean, boolean, "bool">;
        }, string>;
        export { RuleKey_1 as RuleKey };
        export function TransferPolicy(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            balance: import("@mysten/bcs").BcsStruct<{
                value: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            }, string>;
            rules: import("@mysten/bcs").BcsStruct<{
                contents: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
        export function TransferPolicyCap(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            policy_id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        export function TransferPolicyCreated(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        export function TransferPolicyDestroyed(T0: any): import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
        }, string>;
        export function TransferRequest(T0: any): import("@mysten/bcs").BcsStruct<{
            item: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            paid: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            from: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            receipts: import("@mysten/bcs").BcsStruct<{
                contents: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
    }
    export namespace tx_context {
        let TxContext: import("@mysten/bcs").BcsStruct<{
            sender: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            tx_hash: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
            epoch: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            epoch_timestamp_ms: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            ids_created: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    export namespace url {
        let Url: import("@mysten/bcs").BcsStruct<{
            url: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
    }
    export namespace vec_map {
        export function Entry_1(T0: any, T1: any): import("@mysten/bcs").BcsStruct<{
            key: any;
            value: any;
        }, string>;
        export { Entry_1 as Entry };
        export function VecMap(T0: any, T1: any): import("@mysten/bcs").BcsStruct<{
            contents: import("@mysten/bcs").BcsType<{
                key: unknown;
                value: unknown;
            }[], Iterable<{
                key: unknown;
                value: unknown;
            }> & {
                length: number;
            }, string>;
        }, string>;
    }
    export namespace vec_set {
        function VecSet(T0: any): import("@mysten/bcs").BcsStruct<{
            contents: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                length: number;
            }, string>;
        }, string>;
    }
    export namespace versioned {
        let VersionChangeCap: import("@mysten/bcs").BcsStruct<{
            versioned_id: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            }, string>;
            old_version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
        let Versioned: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            version: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    export namespace zklogin_verified_id {
        let VerifiedID: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            owner: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            key_claim_name: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            key_claim_value: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            issuer: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
            audience: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
    }
    export namespace zklogin_verified_issuer {
        let VerifiedIssuer: import("@mysten/bcs").BcsStruct<{
            id: import("@mysten/bcs").BcsStruct<{
                id: import("@mysten/bcs").BcsStruct<{
                    bytes: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
                }, string>;
            }, string>;
            owner: import("@mysten/bcs").BcsType<string, string, "bytes[32]">;
            issuer: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
    }
}
export default _default;
