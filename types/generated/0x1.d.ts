declare namespace _default {
    namespace ascii {
        let Char: import("@mysten/bcs").BcsStruct<{
            byte: import("@mysten/bcs").BcsType<number, number, "u8">;
        }, string>;
        let String: import("@mysten/bcs").BcsStruct<{
            bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
    }
    namespace bit_vector {
        let BitVector: import("@mysten/bcs").BcsStruct<{
            length: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
            bit_field: import("@mysten/bcs").BcsType<boolean[], Iterable<boolean> & {
                length: number;
            }, string>;
        }, string>;
    }
    namespace fixed_point32 {
        let FixedPoint32: import("@mysten/bcs").BcsStruct<{
            value: import("@mysten/bcs").BcsType<string, string | number | bigint, "u64">;
        }, string>;
    }
    namespace option {
        function Option(T0: any): import("@mysten/bcs").BcsStruct<{
            vec: import("@mysten/bcs").BcsType<unknown[], Iterable<unknown> & {
                length: number;
            }, string>;
        }, string>;
    }
    namespace string {
        let String_1: import("@mysten/bcs").BcsStruct<{
            bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                length: number;
            }, string>;
        }, string>;
        export { String_1 as String };
    }
    namespace type_name {
        let TypeName: import("@mysten/bcs").BcsStruct<{
            name: import("@mysten/bcs").BcsStruct<{
                bytes: import("@mysten/bcs").BcsType<number[], Iterable<number> & {
                    length: number;
                }, string>;
            }, string>;
        }, string>;
    }
}
export default _default;
