import { Outlet } from "react-router-dom";

function RightSide() {
  return (
    <section className="sectioSide">
      <Outlet />
    </section>
  );
}

export default RightSide;
