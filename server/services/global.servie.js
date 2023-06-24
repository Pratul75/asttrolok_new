const AstrologerConsultation = require("../models/Astrologers/AstrologerConsultation");
const purchaseHistory = require("../models/common/purchaseHistory");
const ratingsReview = require("../models/users/ratingsReview");
const AppError = require("../utils/AppError");
const ResponseTemp = require("../utils/ResponseTemp");

class GlobalService {
  async checkTheParams(params, defaultMessage) {
    // if params is undefined
    
    if(!params  || (params.length) || (!Object.keys(params))){
  
      throw new AppError(
        false,
        defaultMessage ? defaultMessage : "No data",
        false,
        404
      ); 
    }
    else return true
  }

  async allConsultationOfUser(userId, astrologerId) {
    try {
      const data = await AstrologerConsultation.find({ userId });

      if (!data) {
        return {
          success: false,
          message: "did not found any wallet",
          error: false,
          errorCode: 404,
        };
      } else {
        return {
          success: true,
          message: "all the consultation between astrologer and user",
          error: false,
          errorCode: 200,
          data: data,
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: true,
        errorCode: 500,
        data: "",
      };
    }
  }

  async createPurchaseHistory(data) {
    try {
      const { transactionId, amount } = data;
      if (!transactionId || !amount) {
        return {
          success: false,
          message: "transactionId or amount not found",
          error: false,
          errorCode: 404,
          data: "",
        };
      } else {
        const purchaseAlreadyMade = await purchaseHistory.findOne({
          transactionId,
        });

        if (purchaseAlreadyMade) {
          return {
            success: false,
            error: false,
            errorCode: 400,
            message: "purchase failed as transaction id already present in db",
            data: purchaseAlreadyMade,
          };
        } else {
          const newPurchaseCreated = await purchaseHistory.create(data);

          await newPurchaseCreated.save();

          await newPurchaseCreated.save();
          const createdEntryData = await purchaseHistory.findOne({
            transactionId,
          });

          if (!createdEntryData) {
            return {
              success: false,
              error: false,
              message: "Transaction is not created",
              errorCode: 400,
              data: "",
            };
          }

          return {
            success: true,
            error: false,
            message: createdEntryData?.status,
            errorCode: 200,
            data: createdEntryData,
          };
        }
      }
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
        errorCode: 500,
        data: "",
      };
    }
  }

  
 
}

module.exports = GlobalService;
