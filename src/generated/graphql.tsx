import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type LoginInput = {
  password: Scalars["String"];
  usernameOrEmail: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPost: Post;
  deletePost?: Maybe<Scalars["Boolean"]>;
  loginUser: Scalars["Boolean"];
  registerUser: UserResponse;
  updatePost?: Maybe<Scalars["Boolean"]>;
};

export type MutationCreatePostArgs = {
  body: Scalars["String"];
  title: Scalars["String"];
};

export type MutationDeletePostArgs = {
  id: Scalars["Float"];
};

export type MutationLoginUserArgs = {
  loginInput: LoginInput;
};

export type MutationRegisterUserArgs = {
  userInput: UserInput;
};

export type MutationUpdatePostArgs = {
  id: Scalars["Float"];
  newBody?: Maybe<Scalars["String"]>;
  newTitle: Scalars["String"];
};

export type Post = {
  __typename?: "Post";
  body: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["Float"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type Query = {
  __typename?: "Query";
  getPost?: Maybe<Post>;
  listPosts: Array<Post>;
  listUser: Array<User>;
};

export type QueryGetPostArgs = {
  id: Scalars["Float"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["Float"];
  username: Scalars["String"];
};

export type UserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegisterMutationVariables = Exact<{
  email: Scalars["String"];
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  registerUser: {
    __typename?: "UserResponse";
    errors?: Maybe<
      Array<{ __typename?: "FieldError"; field: string; message: string }>
    >;
    user?: Maybe<{
      __typename?: "User";
      id: number;
      username: string;
      email: string;
    }>;
  };
};

export const RegisterDocument = gql`
  mutation Register($email: String!, $username: String!, $password: String!) {
    registerUser(
      userInput: { email: $email, username: $username, password: $password }
    ) {
      errors {
        field
        message
      }
      user {
        id
        username
        email
      }
    }
  }
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
