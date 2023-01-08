import { Link } from "react-router-dom";
import Button from "../../components/button";

const ErrorPage = () => {
  return (
    <div className="error_mainBody">
      <div class="moon"></div>
      <div class="moon__crater moon__crater1"></div>
      <div class="moon__crater moon__crater2"></div>
      <div class="moon__crater moon__crater3"></div>

      <div class="star star1"></div>
      <div class="star star2"></div>
      <div class="star star3"></div>
      <div class="star star4"></div>
      <div class="star star5"></div>

      <div class="error ">
        <div class="error__title">404</div>
        <div class="error__subtitle">Hmmm...</div>
        <div class="error__description mb-3">It looks like you lost</div>
        <Link to={"/"}>
          <Button text={"Back Home"} />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
