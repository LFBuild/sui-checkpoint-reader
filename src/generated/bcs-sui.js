import { bcs } from '@mysten/bcs'
const Envelope = (type_name, data, auth_signature) =>
  bcs.struct(type_name, {
    data,
    auth_signature,
  })

export const AccountAddress = bcs.fixedArray(32, bcs.u8())
export const SuiAddress = bcs.fixedArray(32, bcs.u8())
export const StructTag = bcs.lazy(() =>
  bcs.struct('StructTag', {
    address: AccountAddress,
    module: bcs.string(),
    name: bcs.string(),
    type_args: bcs.vector(TypeTag),
  }),
)
export const TypeTag = bcs.lazy(() =>
  bcs.enum('TypeTag', {
    Bool: null,
    U8: null,
    U64: null,
    U128: null,
    Address: null,
    Signer: null,
    Vector: bcs.lazy(() => TypeTag),
    struct: StructTag,
    U16: null,
    U32: null,
    U256: null,
  }),
)
export const AccumulatorAddress = bcs.lazy(() =>
  bcs.struct('AccumulatorAddress', { address: SuiAddress, ty: TypeTag }),
)
export const AccumulatorOperation = bcs.enum('AccumulatorOperation', {
  Merge: null,
  Split: null,
})
export const Digest = bcs.vector(bcs.u8())
export const AccumulatorValue = bcs.enum('AccumulatorValue', {
  Integer: bcs.u64(),
  IntegerTuple: bcs.tuple([bcs.u64(), bcs.u64()]),
  EventDigest: bcs.tuple([bcs.u64(), Digest]),
})
export const AccumulatorWriteV1 = bcs.struct('AccumulatorWriteV1', {
  address: AccumulatorAddress,
  operation: AccumulatorOperation,
  value: AccumulatorValue,
})
export const JwkId = bcs.struct('JwkId', {
  iss: bcs.string(),
  kid: bcs.string(),
})
export const JWK = bcs.struct('JWK', {
  kty: bcs.string(),
  e: bcs.string(),
  n: bcs.string(),
  alg: bcs.string(),
})
export const ActiveJwk = bcs.struct('ActiveJwk', {
  jwk_id: JwkId,
  jwk: JWK,
  epoch: bcs.u64(),
})
export const AdditionalConsensusStateDigest = Digest
export const Argument = bcs.enum('Argument', {
  GasCoin: null,
  Input: bcs.u16(),
  Result: bcs.u16(),
  NestedResult: bcs.tuple([bcs.u16(), bcs.u16()]),
})
export const SequenceNumber = bcs.u64()
export const AuthenticatorStateExpire = bcs.struct('AuthenticatorStateExpire', {
  min_epoch: bcs.u64(),
  authenticator_obj_initial_shared_version: SequenceNumber,
})
export const AuthenticatorStateUpdate = bcs.struct('AuthenticatorStateUpdate', {
  epoch: bcs.u64(),
  round: bcs.u64(),
  new_active_jwks: bcs.vector(ActiveJwk),
  authenticator_obj_initial_shared_version: SequenceNumber,
})
export const AuthorityPublicKeyBytes = bcs.vector(bcs.u8())
export const AuthorityQuorumSignInfo = bcs.struct('AuthorityQuorumSignInfo', {
  epoch: bcs.u64(),
  signature: bcs.fixedArray(48, bcs.u8()),
  signers_map: bcs.vector(bcs.u8()),
})
export const ObjectID = AccountAddress
export const ObjectDigest = Digest
export const SharedObjectMutability = bcs.enum('SharedObjectMutability', {
  Immutable: null,
  Mutable: null,
  NonExclusiveWrite: null,
})
export const ObjectArg = bcs.enum('ObjectArg', {
  ImmOrOwnedObject: bcs.tuple([ObjectID, SequenceNumber, ObjectDigest]),
  SharedObject: bcs.struct('ObjectArg', {
    id: ObjectID,
    initial_shared_version: SequenceNumber,
    mutability: SharedObjectMutability,
  }),
  Receiving: bcs.tuple([ObjectID, SequenceNumber, ObjectDigest]),
})
export const Reservation = bcs.enum('Reservation', {
  EntireBalance: null,
  MaxAmountU64: bcs.u64(),
})
export const StructInput = bcs.lazy(() =>
  bcs.struct('StructInput', {
    address: AccountAddress,
    module: bcs.string(),
    name: bcs.string(),
    type_args: bcs.vector(TypeInput),
  }),
)
export const TypeInput = bcs.lazy(() =>
  bcs.enum('TypeInput', {
    bool: null,
    U8: null,
    U64: null,
    U128: null,
    Address: null,
    Signer: null,
    Vector: bcs.lazy(() => TypeInput),
    Struct: StructInput,
    U16: null,
    U32: null,
    U256: null,
  }),
)
export const WithdrawalTypeArg = bcs.lazy(() =>
  bcs.enum('WithdrawalTypeArg', { Balance: TypeInput }),
)
export const WithdrawFrom = bcs.enum('WithdrawFrom', {
  Sender: null,
  Sponsor: null,
})
export const FundsWithdrawalArg = bcs.lazy(() =>
  bcs.struct('FundsWithdrawalArg', {
    reservation: Reservation,
    type_arg: WithdrawalTypeArg,
    withdraw_from: WithdrawFrom,
  }),
)
export const CallArg = bcs.lazy(() =>
  bcs.enum('CallArg', {
    Pure: bcs.vector(bcs.u8()),
    Object: ObjectArg,
    FundsWithdrawal: FundsWithdrawalArg,
  }),
)
export const CheckpointDigest = Digest
export const ChainIdentifier = CheckpointDigest
export const ProtocolVersion = bcs.u64()
export const ChangeEpoch = bcs.struct('ChangeEpoch', {
  epoch: bcs.u64(),
  protocol_version: ProtocolVersion,
  storage_charge: bcs.u64(),
  computation_charge: bcs.u64(),
  storage_rebate: bcs.u64(),
  non_refundable_storage_fee: bcs.u64(),
  epoch_start_timestamp_ms: bcs.u64(),
  system_packages: bcs.vector(
    bcs.tuple([
      SequenceNumber,
      bcs.vector(bcs.vector(bcs.u8())),
      bcs.vector(ObjectID),
    ]),
  ),
})
export const CheckpointArtifactsDigest = Digest
export const ECMHLiveObjectSetDigest = bcs.struct('ECMHLiveObjectSetDigest', {
  digest: Digest,
})
export const CheckpointCommitment = bcs.enum('CheckpointCommitment', {
  ECMHLiveObjectSetDigest,
  CheckpointArtifactsDigest,
})
export const TransactionDigest = Digest
export const TransactionEffectsDigest = Digest
export const ExecutionDigests = bcs.struct('ExecutionDigests', {
  transaction: TransactionDigest,
  effects: TransactionEffectsDigest,
})
export const GenericSignature = bcs.vector(bcs.u8())
export const CheckpointContentsV1 = bcs.struct('CheckpointContentsV1', {
  transactions: bcs.vector(ExecutionDigests),
  user_signatures: bcs.vector(bcs.vector(GenericSignature)),
})
export const CheckpointContents = bcs.enum('CheckpointContents', {
  V1: CheckpointContentsV1,
})
export const CheckpointContentsDigest = Digest
export const GasCostSummary = bcs.struct('GasCostSummary', {
  computationCost: bcs.u64(),
  storageCost: bcs.u64(),
  storageRebate: bcs.u64(),
  nonRefundableStorageFee: bcs.u64(),
})
export const EndOfEpochData = bcs.struct('EndOfEpochData', {
  nextEpochCommittee: bcs.vector(
    bcs.tuple([AuthorityPublicKeyBytes, bcs.u64()]),
  ),
  nextEpochProtocolVersion: ProtocolVersion,
  epochCommitments: bcs.vector(CheckpointCommitment),
})
export const CheckpointSummary = bcs.struct('CheckpointSummary', {
  epoch: bcs.u64(),
  sequence_number: bcs.u64(),
  network_total_transactions: bcs.u64(),
  content_digest: CheckpointContentsDigest,
  previous_digest: bcs.option(CheckpointDigest),
  epoch_rolling_gas_cost_summary: GasCostSummary,
  timestamp_ms: bcs.u64(),
  checkpoint_commitments: bcs.vector(CheckpointCommitment),
  end_of_epoch_data: bcs.option(EndOfEpochData),
  version_specific_data: bcs.vector(bcs.u8()),
})
export const Intent = bcs.struct('Intent', {
  scope: bcs.u8(),
  version: bcs.u8(),
  app_id: bcs.u8(),
})
export const ProgrammableMoveCall = bcs.struct('ProgrammableMoveCall', {
  package: ObjectID,
  module: bcs.string(),
  function: bcs.string(),
  type_arguments: bcs.vector(TypeInput),
  arguments: bcs.vector(Argument),
})
export const Command = bcs.enum('Command', {
  MoveCall: ProgrammableMoveCall,
  TransferObjects: bcs.tuple([bcs.vector(Argument), Argument]),
  SplitCoins: bcs.tuple([Argument, bcs.vector(Argument)]),
  MergeCoins: bcs.tuple([Argument, bcs.vector(Argument)]),
  Publish: bcs.tuple([bcs.vector(bcs.vector(bcs.u8())), bcs.vector(ObjectID)]),
  MakeMoveVec: bcs.tuple([bcs.option(TypeInput), bcs.vector(Argument)]),
  Upgrade: bcs.tuple([
    bcs.vector(bcs.vector(bcs.u8())),
    bcs.vector(ObjectID),
    ObjectID,
    Argument,
  ]),
})
export const ProgrammableTransaction = bcs.struct('ProgrammableTransaction', {
  inputs: bcs.vector(CallArg),
  commands: bcs.vector(Command),
})
export const MoveObjectType_ = bcs.enum('MoveObjectType_', {
  Other: StructTag,
  GasCoin: null,
  StakedSui: null,
  Coin: TypeTag,
  SuiBalanceAccumulatorField: null,
  BalanceAccumulatorField: TypeTag,
})
export const MoveObjectType = MoveObjectType_
export const MoveObject = bcs.struct('MoveObject', {
  type: MoveObjectType,
  has_public_transfer: bcs.bool(),
  version: SequenceNumber,
  contents: bcs.vector(bcs.u8()),
})
export const TypeOrigin = bcs.struct('TypeOrigin', {
  module_name: bcs.string(),
  datatype_name: bcs.string(),
  package: ObjectID,
})
export const UpgradeInfo = bcs.struct('UpgradeInfo', {
  upgraded_id: ObjectID,
  upgraded_version: SequenceNumber,
})
export const MovePackage = bcs.struct('MovePackage', {
  id: ObjectID,
  version: SequenceNumber,
  module_map: bcs.map(bcs.string(), bcs.vector(bcs.u8())),
  type_origin_table: bcs.vector(TypeOrigin),
  linkage_table: bcs.map(ObjectID, UpgradeInfo),
})
export const Data = bcs.enum('Data', { Move: MoveObject, Package: MovePackage })
export const Owner = bcs.enum('Owner', {
  AddressOwner: SuiAddress,
  ObjectOwner: SuiAddress,
  Shared: bcs.struct('Owner', { initial_shared_version: SequenceNumber }),
  Immutable: null,
  ConsensusAddressOwner: bcs.struct('Owner', {
    start_version: SequenceNumber,
    owner: SuiAddress,
  }),
})
export const GenesisObject = bcs.enum('GenesisObject', {
  RawObject: bcs.struct('GenesisObject', { data: Data, owner: Owner }),
})
export const GenesisTransaction = bcs.struct('GenesisTransaction', {
  objects: bcs.vector(GenesisObject),
})
export const ConsensusCommitPrologue = bcs.struct('ConsensusCommitPrologue', {
  epoch: bcs.u64(),
  round: bcs.u64(),
  commit_timestamp_ms: bcs.u64(),
})
export const ExecutionTimeObservationKey = bcs.enum(
  'ExecutionTimeObservationKey',
  {
    MoveEntryPoint: bcs.struct('ExecutionTimeObservationKey', {
      package: ObjectID,
      module: bcs.string(),
      function: bcs.string(),
      type_arguments: bcs.vector(TypeInput),
    }),
    TransferObjects: null,
    SplitCoins: null,
    MergeCoins: null,
    Publish: null,
    MakeMoveVec: null,
    Upgrade: null,
  },
)
export const Duration = bcs.struct('Duration', {
  secs: bcs.u64(),
  nanos: bcs.u32(),
})
export const StoredExecutionTimeObservations = bcs.enum(
  'StoredExecutionTimeObservations',
  {
    V1: bcs.vector(
      bcs.tuple([
        ExecutionTimeObservationKey,
        bcs.vector(bcs.tuple([AuthorityPublicKeyBytes, Duration])),
      ]),
    ),
  },
)
export const EndOfEpochTransactionKind = bcs.enum('EndOfEpochTransactionKind', {
  ChangeEpoch,
  AuthenticatorStateCreate: null,
  AuthenticatorStateExpire,
  RandomnessStateCreate: null,
  DenyListStateCreate: null,
  BridgeStateCreate: ChainIdentifier,
  BridgeCommitteeInit: SequenceNumber,
  StoreExecutionTimeObservations: StoredExecutionTimeObservations,
  AccumulatorRootCreate: null,
  CoinRegistryCreate: null,
  DisplayRegistryCreate: null,
})
export const RandomnessRound = bcs.u64()
export const RandomnessStateUpdate = bcs.struct('RandomnessStateUpdate', {
  epoch: bcs.u64(),
  randomness_round: RandomnessRound,
  random_bytes: bcs.vector(bcs.u8()),
  randomness_obj_initial_shared_version: SequenceNumber,
})
export const ConsensusCommitDigest = Digest
export const ConsensusCommitPrologueV2 = bcs.struct(
  'ConsensusCommitPrologueV2',
  {
    epoch: bcs.u64(),
    round: bcs.u64(),
    commit_timestamp_ms: bcs.u64(),
    consensus_commit_digest: ConsensusCommitDigest,
  },
)
export const ConsensusDeterminedVersionAssignments = bcs.enum(
  'ConsensusDeterminedVersionAssignments',
  {
    CancelledTransactions: bcs.vector(
      bcs.tuple([
        TransactionDigest,
        bcs.vector(bcs.tuple([ObjectID, SequenceNumber])),
      ]),
    ),
    CancelledTransactionsV2: bcs.vector(
      bcs.tuple([
        TransactionDigest,
        bcs.vector(
          bcs.tuple([bcs.tuple([ObjectID, SequenceNumber]), SequenceNumber]),
        ),
      ]),
    ),
  },
)
export const ConsensusCommitPrologueV3 = bcs.struct(
  'ConsensusCommitPrologueV3',
  {
    epoch: bcs.u64(),
    round: bcs.u64(),
    sub_dag_index: bcs.option(bcs.u64()),
    commit_timestamp_ms: bcs.u64(),
    consensus_commit_digest: ConsensusCommitDigest,
    consensus_determined_version_assignments:
      ConsensusDeterminedVersionAssignments,
  },
)
export const ConsensusCommitPrologueV4 = bcs.struct(
  'ConsensusCommitPrologueV4',
  {
    epoch: bcs.u64(),
    round: bcs.u64(),
    sub_dag_index: bcs.option(bcs.u64()),
    commit_timestamp_ms: bcs.u64(),
    consensus_commit_digest: ConsensusCommitDigest,
    consensus_determined_version_assignments:
      ConsensusDeterminedVersionAssignments,
    additional_state_digest: AdditionalConsensusStateDigest,
  },
)
export const TransactionKind = bcs.enum('TransactionKind', {
  ProgrammableTransaction,
  ChangeEpoch,
  Genesis: GenesisTransaction,
  ConsensusCommitPrologue,
  AuthenticatorStateUpdate,
  EndOfEpochTransaction: bcs.vector(EndOfEpochTransactionKind),
  RandomnessStateUpdate,
  ConsensusCommitPrologueV2,
  ConsensusCommitPrologueV3,
  ConsensusCommitPrologueV4,
  ProgrammableSystemTransaction: ProgrammableTransaction,
})
export const GasData = bcs.struct('GasData', {
  payment: bcs.vector(bcs.tuple([ObjectID, SequenceNumber, ObjectDigest])),
  owner: SuiAddress,
  price: bcs.u64(),
  budget: bcs.u64(),
})
export const TransactionExpiration = bcs.enum('TransactionExpiration', {
  None: null,
  Epoch: bcs.u64(),
  ValidDuring: bcs.struct('TransactionExpiration', {
    min_epoch: bcs.option(bcs.u64()),
    max_epoch: bcs.option(bcs.u64()),
    min_timestamp_seconds: bcs.option(bcs.u64()),
    max_timestamp_seconds: bcs.option(bcs.u64()),
    chain: ChainIdentifier,
    nonce: bcs.u32(),
  }),
})
export const TransactionDataV1 = bcs.struct('TransactionDataV1', {
  kind: TransactionKind,
  sender: SuiAddress,
  gas_data: GasData,
  expiration: TransactionExpiration,
})
export const TransactionData = bcs.enum('TransactionData', {
  V1: TransactionDataV1,
})
export const IntentMessage = bcs.struct('IntentMessage', {
  intent: Intent,
  value: TransactionData,
})
export const SenderSignedTransaction = bcs.struct('SenderSignedTransaction', {
  intent_message: IntentMessage,
  tx_signatures: bcs.vector(GenericSignature),
})
export const SenderSignedData = bcs.vector(SenderSignedTransaction)
export const EmptySignInfo = bcs.struct('EmptySignInfo', {})
export const ModuleId = bcs.struct('ModuleId', {
  address: AccountAddress,
  name: bcs.string(),
})
export const MoveLocation = bcs.struct('MoveLocation', {
  module: ModuleId,
  function: bcs.u16(),
  instruction: bcs.u16(),
  function_name: bcs.option(bcs.string()),
})
export const MoveLocationOpt = bcs.option(MoveLocation)
export const CommandArgumentError = bcs.enum('CommandArgumentError', {
  TypeMismatch: null,
  InvalidBCSBytes: null,
  InvalidUsageOfPureArg: null,
  InvalidArgumentToPrivateEntryFunction: null,
  IndexOutOfBounds: bcs.struct('CommandArgumentError', { idx: bcs.u16() }),
  SecondaryIndexOutOfBounds: bcs.struct('CommandArgumentError', {
    result_idx: bcs.u16(),
    secondary_idx: bcs.u16(),
  }),
  InvalidResultArity: bcs.struct('CommandArgumentError', {
    result_idx: bcs.u16(),
  }),
  InvalidGasCoinUsage: null,
  InvalidValueUsage: null,
  InvalidObjectByValue: null,
  InvalidObjectByMutRef: null,
  SharedObjectOperationNotAllowed: null,
  InvalidArgumentArity: null,
  InvalidTransferObject: null,
  InvalidMakeMoveVecNonObjectArgument: null,
  ArgumentWithoutValue: null,
  CannotMoveBorrowedValue: null,
  CannotWriteToExtendedReference: null,
  InvalidReferenceArgument: null,
})
export const TypeArgumentError = bcs.enum('TypeArgumentError', {
  TypeNotFound: null,
  ConstraintNotSatisfied: null,
})
export const PackageUpgradeError = bcs.enum('PackageUpgradeError', {
  UnableToFetchPackage: bcs.struct('PackageUpgradeError', {
    package_id: ObjectID,
  }),
  NotAPackage: bcs.struct('PackageUpgradeError', { object_id: ObjectID }),
  IncompatibleUpgrade: null,
  DigestDoesNotMatch: bcs.struct('PackageUpgradeError', {
    digest: bcs.vector(bcs.u8()),
  }),
  UnknownUpgradePolicy: bcs.struct('PackageUpgradeError', { policy: bcs.u8() }),
  PackageIDDoesNotMatch: bcs.struct('PackageUpgradeError', {
    package_id: ObjectID,
    ticket_id: ObjectID,
  }),
})
export const CongestedObjects = bcs.vector(ObjectID)
export const ExecutionFailureStatus = bcs.enum('ExecutionFailureStatus', {
  InsufficientGas: null,
  InvalidGasObject: null,
  InvariantViolation: null,
  FeatureNotYetSupported: null,
  MoveObjectTooBig: bcs.struct('ExecutionFailureStatus', {
    object_size: bcs.u64(),
    max_object_size: bcs.u64(),
  }),
  MovePackageTooBig: bcs.struct('ExecutionFailureStatus', {
    object_size: bcs.u64(),
    max_object_size: bcs.u64(),
  }),
  CircularObjectOwnership: bcs.struct('ExecutionFailureStatus', {
    object: ObjectID,
  }),
  InsufficientCoinBalance: null,
  CoinBalanceOverflow: null,
  PublishErrorNonZeroAddress: null,
  SuiMoveVerificationError: null,
  MovePrimitiveRuntimeError: MoveLocationOpt,
  MoveAbort: bcs.tuple([MoveLocation, bcs.u64()]),
  VMVerificationOrDeserializationError: null,
  VMInvariantViolation: null,
  FunctionNotFound: null,
  ArityMismatch: null,
  TypeArityMismatch: null,
  NonEntryFunctionInvoked: null,
  CommandArgumentError: bcs.struct('ExecutionFailureStatus', {
    arg_idx: bcs.u16(),
    kind: CommandArgumentError,
  }),
  TypeArgumentError: bcs.struct('ExecutionFailureStatus', {
    argument_idx: bcs.u16(),
    kind: TypeArgumentError,
  }),
  UnusedValueWithoutDrop: bcs.struct('ExecutionFailureStatus', {
    result_idx: bcs.u16(),
    secondary_idx: bcs.u16(),
  }),
  InvalidPublicFunctionReturnType: bcs.struct('ExecutionFailureStatus', {
    idx: bcs.u16(),
  }),
  InvalidTransferObject: null,
  EffectsTooLarge: bcs.struct('ExecutionFailureStatus', {
    current_size: bcs.u64(),
    max_size: bcs.u64(),
  }),
  PublishUpgradeMissingDependency: null,
  PublishUpgradeDependencyDowngrade: null,
  PackageUpgradeError: bcs.struct('ExecutionFailureStatus', {
    upgrade_error: PackageUpgradeError,
  }),
  WrittenObjectsTooLarge: bcs.struct('ExecutionFailureStatus', {
    current_size: bcs.u64(),
    max_size: bcs.u64(),
  }),
  CertificateDenied: null,
  SuiMoveVerificationTimedout: null,
  SharedObjectOperationNotAllowed: null,
  InputObjectDeleted: null,
  ExecutionCancelledDueToSharedObjectCongestion: bcs.struct(
    'ExecutionFailureStatus',
    { congested_objects: CongestedObjects },
  ),
  AddressDeniedForCoin: bcs.struct('ExecutionFailureStatus', {
    address: SuiAddress,
    coin_type: bcs.string(),
  }),
  CoinTypeGlobalPause: bcs.struct('ExecutionFailureStatus', {
    coin_type: bcs.string(),
  }),
  ExecutionCancelledDueToRandomnessUnavailable: null,
  MoveVectorElemTooBig: bcs.struct('ExecutionFailureStatus', {
    value_size: bcs.u64(),
    max_scaled_size: bcs.u64(),
  }),
  MoveRawValueTooBig: bcs.struct('ExecutionFailureStatus', {
    value_size: bcs.u64(),
    max_scaled_size: bcs.u64(),
  }),
  InvalidLinkage: null,
  InsufficientBalanceForWithdraw: null,
  NonExclusiveWriteInputObjectModified: bcs.struct('ExecutionFailureStatus', {
    id: ObjectID,
  }),
})
export const ExecutionStatus = bcs.enum('ExecutionStatus', {
  Success: null,
  Failure: bcs.struct('ExecutionStatus', {
    error: ExecutionFailureStatus,
    command: bcs.option(bcs.u64()),
  }),
})
export const TransactionEventsDigest = Digest
export const TransactionEffectsV1 = bcs.struct('TransactionEffectsV1', {
  status: ExecutionStatus,
  executed_epoch: bcs.u64(),
  gas_used: GasCostSummary,
  modified_at_versions: bcs.vector(bcs.tuple([ObjectID, SequenceNumber])),
  shared_objects: bcs.vector(
    bcs.tuple([ObjectID, SequenceNumber, ObjectDigest]),
  ),
  transaction_digest: TransactionDigest,
  created: bcs.vector(
    bcs.tuple([bcs.tuple([ObjectID, SequenceNumber, ObjectDigest]), Owner]),
  ),
  mutated: bcs.vector(
    bcs.tuple([bcs.tuple([ObjectID, SequenceNumber, ObjectDigest]), Owner]),
  ),
  unwrapped: bcs.vector(
    bcs.tuple([bcs.tuple([ObjectID, SequenceNumber, ObjectDigest]), Owner]),
  ),
  deleted: bcs.vector(bcs.tuple([ObjectID, SequenceNumber, ObjectDigest])),
  unwrapped_then_deleted: bcs.vector(
    bcs.tuple([ObjectID, SequenceNumber, ObjectDigest]),
  ),
  wrapped: bcs.vector(bcs.tuple([ObjectID, SequenceNumber, ObjectDigest])),
  gas_object: bcs.tuple([
    bcs.tuple([ObjectID, SequenceNumber, ObjectDigest]),
    Owner,
  ]),
  events_digest: bcs.option(TransactionEventsDigest),
  dependencies: bcs.vector(TransactionDigest),
})
export const ObjectIn = bcs.enum('ObjectIn', {
  NotExist: null,
  Exist: bcs.tuple([bcs.tuple([SequenceNumber, ObjectDigest]), Owner]),
})
export const ObjectOut = bcs.enum('ObjectOut', {
  NotExist: null,
  ObjectWrite: bcs.tuple([ObjectDigest, Owner]),
  PackageWrite: bcs.tuple([SequenceNumber, ObjectDigest]),
  AccumulatorWriteV1,
})
export const IDOperation = bcs.enum('IDOperation', {
  None: null,
  Created: null,
  Deleted: null,
})
export const EffectsObjectChange = bcs.struct('EffectsObjectChange', {
  input_state: ObjectIn,
  output_state: ObjectOut,
  id_operation: IDOperation,
})
export const UnchangedConsensusKind = bcs.enum('UnchangedConsensusKind', {
  ReadOnlyRoot: bcs.tuple([SequenceNumber, ObjectDigest]),
  MutateConsensusStreamEnded: SequenceNumber,
  ReadConsensusStreamEnded: SequenceNumber,
  Cancelled: SequenceNumber,
  PerEpochConfig: null,
})
export const EffectsAuxDataDigest = Digest
export const TransactionEffectsV2 = bcs.struct('TransactionEffectsV2', {
  status: ExecutionStatus,
  executed_epoch: bcs.u64(),
  gas_used: GasCostSummary,
  transaction_digest: TransactionDigest,
  gas_object_index: bcs.option(bcs.u32()),
  events_digest: bcs.option(TransactionEventsDigest),
  dependencies: bcs.vector(TransactionDigest),
  lamport_version: SequenceNumber,
  changed_objects: bcs.vector(bcs.tuple([ObjectID, EffectsObjectChange])),
  unchanged_consensus_objects: bcs.vector(
    bcs.tuple([ObjectID, UnchangedConsensusKind]),
  ),
  aux_data_digest: bcs.option(EffectsAuxDataDigest),
})
export const TransactionEffects = bcs.enum('TransactionEffects', {
  V1: TransactionEffectsV1,
  V2: TransactionEffectsV2,
})
export const Event = bcs.struct('Event', {
  package_id: ObjectID,
  transaction_module: bcs.string(),
  sender: SuiAddress,
  type: StructTag,
  contents: bcs.vector(bcs.u8()),
})
export const TransactionEvents = bcs.struct('TransactionEvents', {
  data: bcs.vector(Event),
})
export const Object = bcs.struct('Object', {
  data: Data,
  owner: Owner,
  previous_transaction: TransactionDigest,
  storage_rebate: bcs.u64(),
})
export const CheckpointTransaction = bcs.struct('CheckpointTransaction', {
  transaction: Envelope(
    'CheckpointTransaction',
    SenderSignedData,
    EmptySignInfo,
  ),
  effects: TransactionEffects,
  events: bcs.option(TransactionEvents),
  input_objects: bcs.vector(Object),
  output_objects: bcs.vector(Object),
})
export const CheckpointData = bcs.struct('CheckpointData', {
  checkpoint_summary: Envelope(
    'CheckpointData',
    CheckpointSummary,
    AuthorityQuorumSignInfo,
  ),
  checkpoint_contents: CheckpointContents,
  transactions: bcs.vector(CheckpointTransaction),
})
export const ZkLoginAuthenticatorAsBytes = bcs.vector(bcs.u8())
export const CompressedSignature = bcs.enum('CompressedSignature', {
  Ed25519: bcs.fixedArray(64, bcs.u8()),
  Secp256k1: bcs.fixedArray(64, bcs.u8()),
  Secp256r1: bcs.fixedArray(64, bcs.u8()),
  ZkLogin: ZkLoginAuthenticatorAsBytes,
})
export const DeleteKind = bcs.enum('DeleteKind', {
  Normal: null,
  UnwrapThenDelete: null,
  Wrap: null,
})
export const ExecutionData = bcs.struct('ExecutionData', {
  transaction: Envelope('ExecutionData', SenderSignedData, EmptySignInfo),
  effects: TransactionEffects,
})
export const FullCheckpointContents = bcs.struct('FullCheckpointContents', {
  transactions: bcs.vector(ExecutionData),
  user_signatures: bcs.vector(bcs.vector(GenericSignature)),
})
export const ZkLoginPublicIdentifier = bcs.vector(bcs.u8())
export const PublicKey = bcs.enum('PublicKey', {
  Ed25519: bcs.fixedArray(32, bcs.u8()),
  Secp256k1: bcs.fixedArray(33, bcs.u8()),
  Secp256r1: bcs.fixedArray(33, bcs.u8()),
  ZkLogin: ZkLoginPublicIdentifier,
})
export const MultiSigPublicKey = bcs.struct('MultiSigPublicKey', {
  pk_map: bcs.vector(bcs.tuple([PublicKey, bcs.u8()])),
  threshold: bcs.u16(),
})
export const MultiSig = bcs.struct('MultiSig', {
  sigs: bcs.vector(CompressedSignature),
  bitmap: bcs.u16(),
  multisig_pk: MultiSigPublicKey,
})
export const ObjectInfoRequestKind = bcs.enum('ObjectInfoRequestKind', {
  LatestObjectInfo: null,
  PastObjectInfoDebug: SequenceNumber,
})
export const TypedStoreError = bcs.enum('TypedStoreError', {
  RocksDBError: bcs.string(),
  SerializationError: bcs.string(),
  UnregisteredColumn: bcs.string(),
  CrossDBBatch: null,
  MetricsReporting: null,
  RetryableTransactionError: null,
})
