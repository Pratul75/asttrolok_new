const AstrologerConsultation = require("../models/Astrologers/AstrologerConsultation");
const purchaseHistory = require("../models/common/purchaseHistory");
const ratingsReview = require("../models/users/ratingsReview");
const AppError = require("../utils/AppError");
const ResponseTemp = require("../utils/ResponseTemp");

class BaseService {
  async findOneByEmail(email, model) {
    const userExist = await model.findOne({ email });
    if (userExist) {
      return new ResponseTemp(true, "Email found", false, 200, userExist);
    } else {
      return new ResponseTemp(false, "Email not found", false, 404);
    }
  }

  async findByIdAndUpdate(id, data, model) {
    
      if (!id) {
        throw new AppError(false, "id did not found", false, 404);
      } 
      else {
        const userDetails = await model.findByIdAndUpdate(id, data,{ returnOriginal: false});

        if (!userDetails) {
          throw new AppError(false, "user not found", false, 404);
        } 
        else {
            return new ResponseTemp(true, "user found", false, 200,userDetails);
        }
      }
  }


  async findOneByUserId(userId,model){
    const data = await model.findOne({ userId });
    if (!data) {
      return new ResponseTemp(false, "not found", false, 404);
    } else {
      return new ResponseTemp(true, " successful ", false, 200);
    }
  }

  async findAllByUserId(userId,model){
    const data = await model.find({ userId });
    if (!data) {
      return new ResponseTemp(false, "not found", false, 404);
    } else {
      return new ResponseTemp(true, " successful ", false, 200,data);
    }
  }
  async findOneByAstrologerId(AstrologerId,model){
    const data = await model.findOne({ AstrologerId });
    if (!data) {
      return new ResponseTemp(false, "not found", false, 404);
    } else {
      return new ResponseTemp(true, " successful ", false, 200,data);
    }
  }
  async findOneByAstrologerIdandUpdate(AstrologerId,data,model){

    const resp = await model.findOneAndUpdate({AstrologerId} ,data,{ returnOriginal: false});
     
    if (!resp) {

      return new ResponseTemp(false, "not found", false, 404);
    } else {
      return new ResponseTemp(true, " successful ", false, 200,resp);
    }
  }
  


  async findById(id, model) {

    if (!id) {
      return new ResponseTemp(false, "id did not found", false, 404);
    } else {
      
      const userDetails = await model.findById(id);

      if (!userDetails) {
          return new ResponseTemp(false, "user not found", false, 404);
      }
      else{
        return new ResponseTemp(true, "user found", false, 200,userDetails)
      }
    }
  }

  async createNewData(data, model){
  
    const resp = await model.create(data)
    if (!resp) {
      return new ResponseTemp(false, "New Data not created", false, 404);
  }
  else{
    return new ResponseTemp(true, "New Data created", false, 200,resp)
  }
  }
}

module.exports = BaseService;
