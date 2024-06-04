import React from "react";
import "../Content/Content.css";
import ContentCard1 from "./ContentCard1";
import image1 from "../Content/contentImages/l.jpg";
import image2 from "../Content/contentImages/n.jpg";
import image3 from "../Content/contentImages/m.jpg";
import ContentCard2 from "../Content/ContentCard2";

const Content = () => {
  return (
    <>
      <ContentCard1
        image1={image1}
        image2={image2}
        image3={image3}
        title="CICS Week MLBB Tournament | Day 2"
        postedTime="Posted 1hr ago"
        paragraph="Best of 3 series - Semi Finals: DBTP faces
        off against WN.Stay tuned for more exciting 
        action and intense competition as 
        these teams....."
      />
      <hr />
      <ContentCard2
           image1={image1}
           image2={image2}
           image3={image3}
           title="CICS Week MLBB Tournament | Day 2"
           postedTime="Posted 1hr ago"
           paragraph="Best of 3 series - Semi Finals: DBTP faces
           off against WN.Stay tuned for more exciting 
           action and intense competition as 
           these teams....."
      />
    </>
  );
};

export default Content;
