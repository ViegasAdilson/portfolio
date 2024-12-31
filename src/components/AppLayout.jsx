import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <div className="contents">
        <LeftSide />
        <RightSide />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
