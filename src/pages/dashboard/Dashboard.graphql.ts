import { gql } from "@apollo/client";

export const Dashboard = gql`
  mutation addEntry($date: String!, $value: Moods!) {
    addEntry(date: $date, value: $value) {
      date
      value
    }
  }
  query getAllEntries($from: String, $to: String) {
    getAllEntries(from: $from, to: $to) {
      date
      value
    }
  }
`;
