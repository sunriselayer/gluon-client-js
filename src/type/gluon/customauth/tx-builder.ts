import {
  create,
  fromJson,
  Message,
  MessageInitShape,
  MessageJsonType,
  toBinary,
} from "@bufbuild/protobuf";
import {
  AuthInfo,
  AuthInfoSchema,
  Fee,
  FeeSchema,
  ModeInfo,
  ModeInfo_MultiSchema,
  ModeInfo_SingleSchema,
  ModeInfoSchema,
  SignDocSchema,
  SignerInfo,
  SignerInfoSchema,
  Tx,
  TxBody,
  TxBodySchema,
  TxRaw,
  TxRawSchema,
  TxSchema,
} from "../../cosmos/tx/v1beta1/tx_pb";
import { Any, AnySchema } from "@bufbuild/protobuf/wkt";
import { GenMessage } from "@bufbuild/protobuf/codegenv1";
import { CoinSchema } from "../../cosmos/base/v1beta1/coin_pb";

export function packAny<T extends Message>(
  schema: GenMessage<T>,
  message: MessageInitShape<GenMessage<T>>
): Any {
  return create(AnySchema, {
    typeUrl: `/${schema.typeName}`,
    value: toBinary(schema, create(schema, message)),
  });
}

export function createTxBody(
  messages: Any[],
  memo?: string,
  timeoutHeight?: bigint
): TxBody {
  return create(TxBodySchema, {
    messages,
    memo,
    timeoutHeight,
  });
}

export function createModeInfo(
  value:
    | MessageInitShape<typeof ModeInfo_SingleSchema>
    | MessageInitShape<typeof ModeInfo_MultiSchema>
): ModeInfo {
  return create(ModeInfoSchema, {
    sum: (() => {
      switch (value.$typeName) {
        case "cosmos.tx.v1beta1.ModeInfo.Single":
          return {
            case: "single" as "single",
            value: value,
          };
        case "cosmos.tx.v1beta1.ModeInfo.Multi":
          return {
            case: "multi" as "multi",
            value: value,
          };
        default:
          return {};
      }
    })(),
  });
}

export function createSignerInfo(
  publicKey: Any,
  modeInfo: ModeInfo,
  sequence: bigint
): SignerInfo {
  return create(SignerInfoSchema, {
    publicKey,
    modeInfo,
    sequence,
  });
}

export function createFee(
  amount: MessageInitShape<typeof CoinSchema>[],
  gasLimit: bigint,
  payer?: string,
  granter?: string
): Fee {
  return create(FeeSchema, {
    amount,
    gasLimit,
    payer,
    granter,
  });
}

export function createAuthInfo(signerInfos: SignerInfo[], fee: Fee): AuthInfo {
  return create(AuthInfoSchema, {
    signerInfos,
    fee,
  });
}

export function getTxSignMessageDirect(
  body: TxBody,
  authInfo: AuthInfo,
  chainId: string,
  accountNumber: bigint
): Uint8Array {
  return toBinary(
    SignDocSchema,
    create(SignDocSchema, {
      bodyBytes: toBinary(TxBodySchema, body),
      authInfoBytes: toBinary(AuthInfoSchema, authInfo),
      chainId,
      accountNumber,
    })
  );
}

export function createTx(
  body: TxBody,
  authInfo: AuthInfo,
  signatures: Uint8Array[]
): Tx {
  return create(TxSchema, {
    body,
    authInfo,
    signatures,
  });
}

export function createTxRaw(
  body: TxBody,
  authInfo: AuthInfo,
  signatures: Uint8Array[]
): TxRaw {
  return create(TxRawSchema, {
    bodyBytes: toBinary(TxBodySchema, body),
    authInfoBytes: toBinary(AuthInfoSchema, authInfo),
    signatures: signatures,
  });
}
