import User from '../models/user.model.js';
import Chance from 'chance';
import nodemailer from 'nodemailer';
import { hashSync } from 'bcrypt-nodejs';
// util
import htmlEmail from '../util/emailHTML.js';

export default {
  signUp: async (_, { email, password, username }) => {
    const user = await User.findOne({ email: email.toLowerCase() });
    let chance = new Chance();
    const passCode = chance.prime({ min: 1000, max: 9999 });

    let userObject = {
      token: null,
      user: null,
      errorMessage: null,
    };

    if (!user) {
      let checkMail = validateEmail(email);

      //if (checkMail) {
      //send verification mail or verification code in phone number
      // let transporter = nodemailer.createTransport({
      //   service: 'SendGrid',
      //   auth: {
      //     user: 'apikey',
      //     pass: process.env.EMAIL_PASS,
      //   },
      // });

      //   let options = {
      //     from: ' Bundai <kaiyes.ansary@gmail.com>',
      //     to: `${email}`, // list of receivers
      //     subject: 'Please verify your email address', // Subject line
      //     text: 'Please enter the number in the app to verify', // plain text body
      //     html: htmlEmail(passCode),
      //   };
      //   await transporter.sendMail(options);
      // }

      const user = await User.create({
        email: email.toLowerCase(),
        password,
        name: username,
        avatar: null, //give em auto avatars
        isVerified: false,
        hasPaid: false,
      });

      userObject = {
        token: user.createToken(),
        errorMessage: null,
        user,
      };
    } else {
      userObject = {
        user,
        token: null,
        errorMessage: 'User Already Exists',
      };
      return userObject;
    }

    return userObject;
  },

  // verify => claim
  verify: async (_, { passCode, userId }) => {
    const user = await User.findOne({ _id: userId });
    if (user.passCode == passCode) {
      const userObject = {
        token: user.createToken(),
        user,
      };
      await User.updateOne(
        { _id: userId },
        { $set: { verified: true, userStatus: 'PRO' } }
      );
      return userObject;
    } else {
      return {
        token: null,
        user: null,
        errorMessage: 'Pass Code does not match',
      };
    }
  },

  resendVerification: async (_, { userId }) => {
    let chance = new Chance();
    const passCode = chance.prime({ min: 1000, max: 9999 });
    await User.updateOne({ _id: userId }, { passCode });
    let user = await User.findOne({ _id: userId });
    let userObject = {
      token: user.createToken(),
      user,
      errorMessage: null,
    };

    let checkMail = validateEmail(user.email);

    if (checkMail) {
      //send verification mail
      let transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'apikey',
          pass: process.env.EMAIL_PASS,
        },
      });
      let options = {
        from: 'Bundai <kaiyes.ansary@gmail.com>',
        to: `${user.email}`, // list of receivers
        subject: 'Please verify your email address', // Subject line
        text: 'Please enter the number in the app to verify', // plain text body
        html: htmlEmail(passCode),
      };
      await transporter.sendMail(options);
    }
    return userObject;
  },

  // forget password
  forgetPassword: async (_, { email }) => {
    const user = await User.findOne({ email: email.toLowerCase() });
    let chance = new Chance();
    if (!user) {
      return { token: null, user: null, errorMessage: 'User not found' };
    } else {
      let password = chance.prime({ min: 1000, max: 9999 });
      // create & set a new password
      // hash password
      await User.updateOne(
        { email: email.toLowerCase() },
        { $set: { password: hashSync(password) } }
      );
      // mail him the password

      let checkMail = validateEmail(email);
      if (checkMail) {
        //send verification mail
        let transporter = nodemailer.createTransport({
          service: 'SendGrid',
          auth: {
            user: 'apikey',
            pass: process.env.EMAIL_PASS,
          },
        });
        let options = {
          from: 'Basement Sports <Tech@blabsventures.com>', // sender address should change to x@basementsports.com
          to: `${email}`, // list of receivers
          subject: 'Here is your new password', // Subject line
          text: `Here is your new password ${password}`, // plain text body
        };
        await transporter.sendMail(options);
      }

      return { token: user.createToken(), user, errorMessage: null };
    }
  },

  updatePassword: async (_, { id, password }) => {
    // Find user
    const user = await User.findOne({ _id: id });
    if (!user) {
      return { token: null, user: null, errorMessage: 'User not found' };
    }
    await User.updateOne(
      { _id: user._id },
      { $set: { password: hashSync(password) } }
    );
    return { token: user.createToken(), user, errorMessage: null };
  },

  logIn: async (_, { email, password }) => {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return { token: null, user: null, errorMessage: 'User not found' };
    }
    if (!user.authenticateUser(password)) {
      return {
        token: null,
        user: null,
        errorMessage: 'Password and user do not match',
      };
    }
    return { token: user.createToken(), user, errorMessage: null };
  },

  me: async (_, { _id }) => {
    let user = await User.findOne({ _id });
    return user;
  },
};

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
