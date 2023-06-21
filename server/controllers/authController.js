require("dotenv").config;

const AstrologerAccountModel = require("../models/Astrologers/AstrologerAccountModel");
const AstrologerPersonalDetailModel = require("../models/Astrologers/AstrologerPersonalDetailModel");
const Admindetails = require("../models/admin/Admindetails");
const Usermodel = require("../models/users/Usermodel");
//importing class of auth Service
const AuthService = require("../services/auth.service");
const BaseService = require("../services/base.service");
const GlobalService = require("../services/global.servie");
const UserService = require("../services/user.service");
const { tryCatch } = require("../utils/tryCatch");

class AuthController {
  authSeriviceInstance = new AuthService();
  userServiceInstance = new UserService();
  globalServiceInstance = new GlobalService();
  BaseServiceInstance = new BaseService();

  register = async (req, res) => {
    try {
      // here this keyword will point to authService
      // console.log("iam this",this);
      const response = await this.authSeriviceInstance.checkdetails(
        req.body,
        res
      );

      if (response === "user not present") {
        const newUserCreated = await this.authSeriviceInstance.createNewUser(
          req.body,
          res
        );

        if (newUserCreated) {
          // here we will create a wallet
          const newWalletCreated =
            await this.userServiceInstance.createNewWallet(newUserCreated?._id);
          console.log(newWalletCreated);

          return res.status(newWalletCreated?.errorCode).json(newWalletCreated);
        } else {
          return res.status(404).json({
            success: false,
            message: "user not created",
          });
        }
      } else if (response === "astrologer not present") {
        const newAstrologerCreated =
          await this.authSeriviceInstance.createNewAstrologer(req.body, res);

        if (newAstrologerCreated) {
          return res.status(200).json({
            success: true,
            message: newAstrologerCreated,
          });
        } else {
          return res.status(404).json({
            success: false,
            message: "astrologer not created",
          });
        }
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  login = async (req, res) => {
    const { userName, password } = req.body;
    const email = userName;

    // checking the given values
    await this.globalServiceInstance.checkTheParams({ userName, password });

    const arr = [Usermodel, AstrologerPersonalDetailModel, Admindetails];

    let logindetails;
    for (let i = 0; i < arr.length; i++) {
      logindetails = await this.BaseServiceInstance.findOneByEmail(
        email,
        arr[i]
      );

      if (logindetails?.success) {
        logindetails = await this.authSeriviceInstance.login(
          password,
          logindetails?.data
        );
        break;
      }
    }
    return res.status(logindetails?.errorCode).json(logindetails);
  };

  changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    if (
      await this.globalServiceInstance.checkTheParams({
        currentPassword,
        newPassword,
      })
    ) {
      let model;
      if (req.user.role === "user") {
        model = Usermodel;
      } else if (req.user.role === "astrologer") {
        model = AstrologerPersonalDetailModel;
      } else if (req.user.role === "admin") {
        model = Admindetails;
      }
      const data = await this.authSeriviceInstance.changePassword(
        req.user._id,
        req.user.password,
        currentPassword,
        newPassword,
        model
      );

      return res.status(data?.errorCode).json(data);
    }
  };
}

module.exports = AuthController;
