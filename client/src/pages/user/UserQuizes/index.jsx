import QuizBanner from "../../../assets/QuizesBanner.png";
import { Header } from "../../../components";
const UserQuizes = () => {
  return (
    <div>
      <Header
        bannerImage={QuizBanner}
        primaryText="My Quizzes"
        secondaryText="List of Quizzes"
      />
    </div>
  );
};

export default UserQuizes;
