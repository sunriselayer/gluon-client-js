// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file gluon/order/query.proto (package gluon.order, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb";
import { file_cosmos_base_query_v1beta1_pagination } from "../../cosmos/base/query/v1beta1/pagination_pb";
import type { Order } from "./order_pb";
import { file_gluon_order_order } from "./order_pb";
import type { Params } from "./params_pb";
import { file_gluon_order_params } from "./params_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import { file_google_api_annotations } from "../../google/api/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file gluon/order/query.proto.
 */
export const file_gluon_order_query: GenFile = /*@__PURE__*/
  fileDesc("ChdnbHVvbi9vcmRlci9xdWVyeS5wcm90bxILZ2x1b24ub3JkZXIiFAoSUXVlcnlQYXJhbXNSZXF1ZXN0IkAKE1F1ZXJ5UGFyYW1zUmVzcG9uc2USKQoGcGFyYW1zGAEgASgLMhMuZ2x1b24ub3JkZXIuUGFyYW1zQgTI3h8AIjAKEVF1ZXJ5T3JkZXJSZXF1ZXN0Eg0KBW93bmVyGAEgASgJEgwKBGhhc2gYAiABKAkiPQoSUXVlcnlPcmRlclJlc3BvbnNlEicKBW9yZGVyGAEgASgLMhIuZ2x1b24ub3JkZXIuT3JkZXJCBMjeHwAiXwoSUXVlcnlPcmRlcnNSZXF1ZXN0Eg0KBW93bmVyGAEgASgJEjoKCnBhZ2luYXRpb24YAiABKAsyJi5jb3Ntb3MuYmFzZS5xdWVyeS52MWJldGExLlBhZ2VSZXF1ZXN0InwKE1F1ZXJ5T3JkZXJzUmVzcG9uc2USKAoGb3JkZXJzGAEgAygLMhIuZ2x1b24ub3JkZXIuT3JkZXJCBMjeHwASOwoKcGFnaW5hdGlvbhgCIAEoCzInLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlc3BvbnNlMtkCCgVRdWVyeRJoCgZQYXJhbXMSHy5nbHVvbi5vcmRlci5RdWVyeVBhcmFtc1JlcXVlc3QaIC5nbHVvbi5vcmRlci5RdWVyeVBhcmFtc1Jlc3BvbnNlIhuC0+STAhUSEy9nbHVvbi9vcmRlci9wYXJhbXMSdAoFT3JkZXISHi5nbHVvbi5vcmRlci5RdWVyeU9yZGVyUmVxdWVzdBofLmdsdW9uLm9yZGVyLlF1ZXJ5T3JkZXJSZXNwb25zZSIqgtPkkwIkEiIvZ2x1b24vb3JkZXIvb3JkZXJzL3tvd25lcn0ve2hhc2h9EnAKBk9yZGVycxIfLmdsdW9uLm9yZGVyLlF1ZXJ5T3JkZXJzUmVxdWVzdBogLmdsdW9uLm9yZGVyLlF1ZXJ5T3JkZXJzUmVzcG9uc2UiI4LT5JMCHRIbL2dsdW9uL29yZGVyL29yZGVycy97b3duZXJ9Qn8KD2NvbS5nbHVvbi5vcmRlckIKUXVlcnlQcm90b1ABWhNnbHVvbi94L29yZGVyL3R5cGVzogIDR09YqgILR2x1b24uT3JkZXLKAgtHbHVvblxPcmRlcuICF0dsdW9uXE9yZGVyXEdQQk1ldGFkYXRh6gIMR2x1b246Ok9yZGVyYgZwcm90bzM", [file_cosmos_base_query_v1beta1_pagination, file_gluon_order_order, file_gluon_order_params, file_gogoproto_gogo, file_google_api_annotations]);

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message gluon.order.QueryParamsRequest
 */
export type QueryParamsRequest = Message<"gluon.order.QueryParamsRequest"> & {
};

/**
 * Describes the message gluon.order.QueryParamsRequest.
 * Use `create(QueryParamsRequestSchema)` to create a new message.
 */
export const QueryParamsRequestSchema: GenMessage<QueryParamsRequest> = /*@__PURE__*/
  messageDesc(file_gluon_order_query, 0);

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message gluon.order.QueryParamsResponse
 */
export type QueryParamsResponse = Message<"gluon.order.QueryParamsResponse"> & {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: gluon.order.Params params = 1;
   */
  params?: Params;
};

/**
 * Describes the message gluon.order.QueryParamsResponse.
 * Use `create(QueryParamsResponseSchema)` to create a new message.
 */
export const QueryParamsResponseSchema: GenMessage<QueryParamsResponse> = /*@__PURE__*/
  messageDesc(file_gluon_order_query, 1);

/**
 * QueryOrderRequest
 *
 * @generated from message gluon.order.QueryOrderRequest
 */
export type QueryOrderRequest = Message<"gluon.order.QueryOrderRequest"> & {
  /**
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * @generated from field: string hash = 2;
   */
  hash: string;
};

/**
 * Describes the message gluon.order.QueryOrderRequest.
 * Use `create(QueryOrderRequestSchema)` to create a new message.
 */
export const QueryOrderRequestSchema: GenMessage<QueryOrderRequest> = /*@__PURE__*/
  messageDesc(file_gluon_order_query, 2);

/**
 * QueryOrderResponse
 *
 * @generated from message gluon.order.QueryOrderResponse
 */
export type QueryOrderResponse = Message<"gluon.order.QueryOrderResponse"> & {
  /**
   * @generated from field: gluon.order.Order order = 1;
   */
  order?: Order;
};

/**
 * Describes the message gluon.order.QueryOrderResponse.
 * Use `create(QueryOrderResponseSchema)` to create a new message.
 */
export const QueryOrderResponseSchema: GenMessage<QueryOrderResponse> = /*@__PURE__*/
  messageDesc(file_gluon_order_query, 3);

/**
 * QueryOrdersRequest
 *
 * @generated from message gluon.order.QueryOrdersRequest
 */
export type QueryOrdersRequest = Message<"gluon.order.QueryOrdersRequest"> & {
  /**
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message gluon.order.QueryOrdersRequest.
 * Use `create(QueryOrdersRequestSchema)` to create a new message.
 */
export const QueryOrdersRequestSchema: GenMessage<QueryOrdersRequest> = /*@__PURE__*/
  messageDesc(file_gluon_order_query, 4);

/**
 * QueryOrdersResponse
 *
 * @generated from message gluon.order.QueryOrdersResponse
 */
export type QueryOrdersResponse = Message<"gluon.order.QueryOrdersResponse"> & {
  /**
   * @generated from field: repeated gluon.order.Order orders = 1;
   */
  orders: Order[];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message gluon.order.QueryOrdersResponse.
 * Use `create(QueryOrdersResponseSchema)` to create a new message.
 */
export const QueryOrdersResponseSchema: GenMessage<QueryOrdersResponse> = /*@__PURE__*/
  messageDesc(file_gluon_order_query, 5);

/**
 * Query defines the gRPC querier service.
 *
 * @generated from service gluon.order.Query
 */
export const Query: GenService<{
  /**
   * Parameters queries the parameters of the module.
   *
   * @generated from rpc gluon.order.Query.Params
   */
  params: {
    methodKind: "unary";
    input: typeof QueryParamsRequestSchema;
    output: typeof QueryParamsResponseSchema;
  },
  /**
   * Order
   *
   * @generated from rpc gluon.order.Query.Order
   */
  order: {
    methodKind: "unary";
    input: typeof QueryOrderRequestSchema;
    output: typeof QueryOrderResponseSchema;
  },
  /**
   * Orders
   *
   * @generated from rpc gluon.order.Query.Orders
   */
  orders: {
    methodKind: "unary";
    input: typeof QueryOrdersRequestSchema;
    output: typeof QueryOrdersResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_gluon_order_query, 0);

