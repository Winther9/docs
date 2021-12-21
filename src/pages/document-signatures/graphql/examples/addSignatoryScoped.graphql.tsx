import React from 'react';
import GraphQLExplorer, {getExampleData} from '../../../../components/GraphQLExplorer';
import { AddSignatoryInput } from "../../../../../graphql-signatures-types";

export const query = /* Signatures GraphQL */`
mutation exampleAddSignatoryScoped(
  $input: AddSignatoryInput!
) {
  addSignatory(input: $input) {
    signatory {
      id
      href
    }
  }
}
`;

export const variables = () : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: getExampleData()['signatureOrder.id'] || "[signatureOrder.id]",
    documents: [
      {
        id: "[REQUIRED]"
      },
      {
        id: "[LEAVE OUT DOCUMENT ID TO REMOVE FOR SIGNATORY]"
      }
    ]
  }
});

export function Explorer() {
  return (
    <GraphQLExplorer query={query.trim()} variables={variables()} />
  )
}