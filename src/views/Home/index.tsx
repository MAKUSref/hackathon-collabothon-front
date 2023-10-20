import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import GlassBox from "../../components/GlassBox/GlassBox";

const Home = () => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.session.token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <GlassBox>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        error ratione sapiente minima placeat aspernatur labore tempora rem
        repellat iure, vel quas molestias quod excepturi dolorem, autem esse
        cupiditate tempore. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Temporibus error ratione sapiente minima placeat aspernatur labore
        tempora rem repellat iure, vel quas molestias quod excepturi dolorem,
        autem esse cupiditate tempore.
      </GlassBox>
    </>
  );
};

export default Home;
