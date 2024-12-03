// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file gluon/spot/query.proto (package gluon.spot, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Params } from "./params_pb";
import { file_gluon_spot_params } from "./params_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import { file_google_api_annotations } from "../../google/api/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file gluon/spot/query.proto.
 */
export const file_gluon_spot_query: GenFile = /*@__PURE__*/
  fileDesc("ChZnbHVvbi9zcG90L3F1ZXJ5LnByb3RvEgpnbHVvbi5zcG90IhQKElF1ZXJ5UGFyYW1zUmVxdWVzdCI/ChNRdWVyeVBhcmFtc1Jlc3BvbnNlEigKBnBhcmFtcxgBIAEoCzISLmdsdW9uLnNwb3QuUGFyYW1zQgTI3h8AMm4KBVF1ZXJ5EmUKBlBhcmFtcxIeLmdsdW9uLnNwb3QuUXVlcnlQYXJhbXNSZXF1ZXN0Gh8uZ2x1b24uc3BvdC5RdWVyeVBhcmFtc1Jlc3BvbnNlIhqC0+STAhQSEi9nbHVvbi9zcG90L3BhcmFtc0J5Cg5jb20uZ2x1b24uc3BvdEIKUXVlcnlQcm90b1ABWhJnbHVvbi94L3Nwb3QvdHlwZXOiAgNHU1iqAgpHbHVvbi5TcG90ygIKR2x1b25cU3BvdOICFkdsdW9uXFNwb3RcR1BCTWV0YWRhdGHqAgtHbHVvbjo6U3BvdGIGcHJvdG8z", [file_gluon_spot_params, file_gogoproto_gogo, file_google_api_annotations]);

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message gluon.spot.QueryParamsRequest
 */
export type QueryParamsRequest = Message<"gluon.spot.QueryParamsRequest"> & {
};

/**
 * Describes the message gluon.spot.QueryParamsRequest.
 * Use `create(QueryParamsRequestSchema)` to create a new message.
 */
export const QueryParamsRequestSchema: GenMessage<QueryParamsRequest> = /*@__PURE__*/
  messageDesc(file_gluon_spot_query, 0);

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message gluon.spot.QueryParamsResponse
 */
export type QueryParamsResponse = Message<"gluon.spot.QueryParamsResponse"> & {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: gluon.spot.Params params = 1;
   */
  params?: Params;
};

/**
 * Describes the message gluon.spot.QueryParamsResponse.
 * Use `create(QueryParamsResponseSchema)` to create a new message.
 */
export const QueryParamsResponseSchema: GenMessage<QueryParamsResponse> = /*@__PURE__*/
  messageDesc(file_gluon_spot_query, 1);

/**
 * Query defines the gRPC querier service.
 *
 * @generated from service gluon.spot.Query
 */
export const Query: GenService<{
  /**
   * Parameters queries the parameters of the module.
   *
   * @generated from rpc gluon.spot.Query.Params
   */
  params: {
    methodKind: "unary";
    input: typeof QueryParamsRequestSchema;
    output: typeof QueryParamsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_gluon_spot_query, 0);

