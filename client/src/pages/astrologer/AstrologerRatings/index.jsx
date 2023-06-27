import { useEffect } from "react";
import { API_WRAPPER } from "../../../api";
import AstrologerRatingsBanner from "../../../assets/astrologerProfileBanner.png";
import { Header, ReviewCard } from "../../../components";

const AstrologerRatings = () => {

  const fetchUserRatings =async ()=>{
    try {
      const data = await API_WRAPPER.get(`api/astrologer/ratingsReviewByAstrologer`)
        if(data){
          console.log('AstrologerAccount.jsx', data);
        }
    } catch (error) {
      console.log('AstrologerAccount.jsx',"error", error);
    }
  }

  useEffect(()=>{
    fetchUserRatings();
  },[])




  return (
    <div>
      <Header
        bannerImage={AstrologerRatingsBanner}
        primaryText="Reviews"
        secondaryText="Astrologer Ratings and Reviews"
      />
      {/* sub header */}
      <div className="w-full flex justify-between p-4">
        <h4 className="text-[19.87px] font-semibold">Reviews</h4>
        <div className="flex justify-end gap-4">
          <button className="btn btn-info text-white">Edit</button>
          <button className="btn btn-error text-white btn-outline">
            Delete
          </button>
        </div>
      </div>
      {/* review cards */}
      <div className="flex mt-6 flex-col gap-4">
        <ReviewCard
          name="Vishesh Bajpayee"
          rating={3}
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ratione
          alias, sequi itaque, totam dicta quos, omnis fuga tempore doloremque
          quibusdam rem ducimus odit dolorum facilis ullam delectus sapiente
          unde?"
        />
        <ReviewCard
          name="Random User"
          rating={4}
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto alias, sequi itaque, totam dicta quos, omnis fuga tempore doloremque
          quibusdam rem ducimus odit dolorum facilis ullam delectus sapiente
          unde? sequi itaque, totam dicta quos, omnis fuga tempore doloremque
          quibusdam rem ducimus odit dolorum facilis ullam delectus sapiente
          unde?ratione
          "
        />
        <ReviewCard
          name="Random User"
          rating={4}
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto alias, sequi itaque, totam dicta quos, omnis fuga tempore doloremque
          quibusdam rem ducimus odit dolorum facilis ullam delectus sapiente
          unde? sequi itaque, totam dicta quos, omnis fuga tempore doloremque
          quibusdam rem ducimus odit dolorum facilis ullam delectus sapiente
          unde?ratione
          "
        />
        <ReviewCard
          name="Vishesh Bajpayee"
          rating={5}
          review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ratione 
         "
        />
      </div>
    </div>
  );
};

export default AstrologerRatings;
