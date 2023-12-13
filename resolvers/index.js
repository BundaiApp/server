import UserResolver from './User.resolver.js';

export default {
  Query: {
    me: UserResolver.me,
  },
  Mutation: {
    signUp: UserResolver.signUp,
    logIn: UserResolver.logIn,
    forgetPassword: UserResolver.forgetPassword,
    updatePassword: UserResolver.updatePassword,
  },
};
