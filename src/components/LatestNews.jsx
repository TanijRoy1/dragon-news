import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div>
      <div className="p-3 flex gap-3 bg-base-200 items-center shadow-md">
        <div className="btn btn-secondary">Latest</div>
        <Marquee pauseOnHover={true} speed={70} className="flex gap-3">
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
