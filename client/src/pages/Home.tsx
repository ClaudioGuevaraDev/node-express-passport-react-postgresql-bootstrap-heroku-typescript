import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";

import Zoro from "../assets/zoro.jpg";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container p-4">
        <h2 className="h2 mb-4">
          <strong>Reviews</strong>
        </h2>

        <div className="row gy-3 gx-3">
          <ReviewCard
            author="Claudio Guevara"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique?"
            image={Zoro}
            title="Roronoa Zoro"
          />
          <ReviewCard
            author="Claudio Guevara"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique?"
            image={Zoro}
            title="Roronoa Zoro"
          />
          <ReviewCard
            author="Claudio Guevara"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique?"
            image={Zoro}
            title="Roronoa Zoro"
          />
          <ReviewCard
            author="Claudio Guevara"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique?"
            image={Zoro}
            title="Roronoa Zoro"
          />
          <ReviewCard
            author="Claudio Guevara"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique?"
            image={Zoro}
            title="Roronoa Zoro"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
