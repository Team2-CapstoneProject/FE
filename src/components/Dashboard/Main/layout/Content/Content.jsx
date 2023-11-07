import ContentMain from "../../ContentMain/ContentMain";
import ContentTop from "../../ContentTop/ContentTop";
import "./Content.css";

const Content = () => {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain />
    </div>
  );
};

export default Content;
