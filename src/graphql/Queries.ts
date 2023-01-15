import { gql } from "@apollo/client"

export const LOAD_TOTAL_SPONSORS = gql`
    query Query($first: Int!) {
        sponsors(first: $first) {
            totalCount
        }
    }
`