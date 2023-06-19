const AstrologerModel = require("../models/Astrologers/AstrologerPersonalDetailModel");
const Admindetails = require("../models/admin/Admindetails");
const Usermodel = require("../models/users/Usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const { tryCatch } = require("../utils/tryCatch");
const ResponseTemp = require("../utils/ResponseTemp");

class AuthService {
  // in check details if user or astrologer is already present then we will not send the data to controller we will do diect response to clint from here
  async checkdetails(data, res) {
    try {
      const { email, role } = data;
      if (!role) {
        return res.status(404).json({
          success: false,
          message: "role does not found",
        });
      }
      if (role === "user") {
        const userAlreadyExist = await Usermodel.find({ email });

        if (!userAlreadyExist.length) {
          return "user not present";
        } else {
          return res.status(400).json({
            success: false,
            message: "user already registerd",
            data: userAlreadyExist,
          });
        }
      } else {
        const astologerAlreadyExist = await AstrologerModel.find({ email });

        if (!astologerAlreadyExist.length) {
          return "astrologer not present";
        } else {
          return res.status(400).json({
            success: false,
            message: "astrologer already registerd",
            data: astologerAlreadyExist,
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error,
      });
    }
  }

  async createNewUser(data, res) {
    try {
      // generate password
      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(data.password, salt);
      data.password = hashedPassword;

      // store in db
      const newUser = await Usermodel.create(data);

      await newUser.save();
      return newUser;
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async createNewAstrologer(data, res) {
    try {
      // generate password
      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(data.password, salt);
      data.password = hashedPassword;

      // store in db
      const newUser = await new AstrologerModel(data);
      await newUser.save();
      return newUser;
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error,
      });
    }
  }

  async findUserbyEmail(email, model) {
    const userExist = await model.findOne({ email });
    if (userExist) {
      return userExist;
    } else {
      throw new AppError(false, "user not found", false, 404);
    }
  }

  async login(password, loginPerson) {
    if (await bcrypt.compare(password, loginPerson.password)) {
      const token = jwt.sign(
        { id: loginPerson._id, role: loginPerson.role },
        process.env.SECRET_KEY,
        { expiresIn: "2h" }
      );
      loginPerson.password = undefined;
      // userDetails.token = token

      const options = {
        // i am currently removing domain as in postman it is not creating token in cookies
        // domain: process.env.REACT_APP_URL,
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

     return new ResponseTemp(true, "login is granted", false, 200, {
        token: token,
        options: options,
        success: true,
        id: loginPerson._id,
        role: loginPerson.role,
      });
    } else {
      return new ResponseTemp(false, "password is incorrect", false, 404);
    }
  }
}

module.exports = AuthService;
