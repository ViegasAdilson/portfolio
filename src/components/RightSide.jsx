import { Outlet } from "react-router";

function RightSide() {
  return (
    <section className="sectioSide">
      <Outlet />
    </section>
  );
}

export default RightSide;
