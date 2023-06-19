const purchaseHistory = require("../models/common/purchaseHistory");
const Usermodel = require("../models/users/Usermodel");
const ratingsReview = require("../models/users/ratingsReview");
const wallet = require("../models/users/wallet");
const ResponseTemp = require("../utils/ResponseTemp");
const BaseService = require("./base.service");
const GlobalService = require("./global.servie");

class UserService extends BaseService {
  globalServiceInstance = new GlobalService();

  async createNewWallet(userId) {
    const walletAlreadyExist = await wallet.findOne({ userId });

    if (walletAlreadyExist) {
      return new ResponseTemp(
        false,
        "user already has Wallet, No new wallet is created",
        false,
        400,
        walletAlreadyExist
      );
    } else {
      const createdNewWallet = await wallet.create({
        userId,
      });
      if (!createdNewWallet) {
        return new ResponseTemp(false, "did not create wallet", false, 400);
      } else {
        await createdNewWallet.save();

        // as the money is added to wallet we need to make the transaction record
        return new ResponseTemp(true, "created new wallet", false, 200);
      }
    }
  }

  async addMoneyToWallet(userId, amount) {
    const data = await wallet.findOne({ userId });

    if (!data) {
      return {
        success: false,
        error: false,
        errorCode: 404,
        message: "did not found wallet",
        data: "",
      };
    }

    // Update the amount field with the new value
    data.amount = data.amount + amount;
    // Save the changes to the database
    const updatedData = await data.save();
    try {
      if (!updatedData) {
        return {
          success: false,
          error: false,
          errorCode: 404,
          message: "Amount did not added to wallet",
          data: "",
        };
      } else {
        return {
          success: true,
          error: false,
          errorCode: 200,
          message: "Wallet updated",
          data: updatedData,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: true,
        errorCode: 500,
        message: error.message,
        data: "",
      };
    }
  }

  async createNewRatingAndReview(rating, review, userId, astrologerId, status) {
    const isExist = await this.findOneByUserId(userId, ratingsReview);

    if (isExist?.success || isExist?.error) {
      return isExist;
    } else {
      const newRatingAndReview = await ratingsReview.create({
        rating,
        review,
        userId,
        astrologerId,
        status,
      });
      if (!newRatingAndReview) {
        return {
          success: false,
          message: "New Ratings and review not created",
          errorCode: 400,
          error: false,
          data: "",
        };
      } else {
        await newRatingAndReview.save();
        return new ResponseTemp(
          true,
          "created new Entry",
          false,
          200,
          newRatingAndReview
        );
      }
    }
  }

  async getRatingAndReviewByuser(userId) {
    
    const alreadyRatingAndReview = await ratingsReview.find({userId});

    if (alreadyRatingAndReview) {
      return new ResponseTemp(true,"found rating and Review", false, 200, alreadyRatingAndReview)
    } else {
      return new ResponseTemp(false,"Not found", false, 404)
    }

}
 
}

module.exports = UserService;
