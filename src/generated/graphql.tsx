import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Roles {
  Employee = 'EMPLOYEE',
  Manager = 'MANAGER'
}

export type Auth = {
  __typename?: 'Auth';
  role: Roles;
  access_token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  username: Scalars['String'];
  role: Roles;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Auth;
  register: User;
  addEntry?: Maybe<Entry>;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Roles>;
};


export type MutationAddEntryArgs = {
  date: Scalars['String'];
  value: Moods;
};

export enum Moods {
  Bad = 'BAD',
  Neutral = 'NEUTRAL',
  Good = 'GOOD'
}

export type Entry = {
  __typename?: 'Entry';
  _id: Scalars['String'];
  date: Scalars['String'];
  value: Moods;
};

export type Query = {
  __typename?: 'Query';
  getEntry?: Maybe<Entry>;
  getAllEntries?: Maybe<Array<Maybe<Entry>>>;
};


export type QueryGetEntryArgs = {
  entryID: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'access_token' | 'role'>
  ) }
);

export type AddEntryMutationVariables = Exact<{
  date: Scalars['String'];
  value: Moods;
}>;


export type AddEntryMutation = (
  { __typename?: 'Mutation' }
  & { addEntry?: Maybe<(
    { __typename?: 'Entry' }
    & Pick<Entry, 'date' | 'value'>
  )> }
);


export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    access_token
    role
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const AddEntryDocument = gql`
    mutation addEntry($date: String!, $value: Moods!) {
  addEntry(date: $date, value: $value) {
    date
    value
  }
}
    `;
export type AddEntryMutationFn = Apollo.MutationFunction<AddEntryMutation, AddEntryMutationVariables>;

/**
 * __useAddEntryMutation__
 *
 * To run a mutation, you first call `useAddEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEntryMutation, { data, loading, error }] = useAddEntryMutation({
 *   variables: {
 *      date: // value for 'date'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useAddEntryMutation(baseOptions?: Apollo.MutationHookOptions<AddEntryMutation, AddEntryMutationVariables>) {
        return Apollo.useMutation<AddEntryMutation, AddEntryMutationVariables>(AddEntryDocument, baseOptions);
      }
export type AddEntryMutationHookResult = ReturnType<typeof useAddEntryMutation>;
export type AddEntryMutationResult = Apollo.MutationResult<AddEntryMutation>;
export type AddEntryMutationOptions = Apollo.BaseMutationOptions<AddEntryMutation, AddEntryMutationVariables>;