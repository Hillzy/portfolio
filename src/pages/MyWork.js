import React from "react";
import "./mywork.css";

import WorkCard from "../components/WorkCard";
import dentalOneNoGap from "../assets/images/dentalone-nogap.png";
import dentalOneLocations from "../assets/images/dentalone-locations.png";
import dentaloneContact from "../assets/images/dentalone-contact.png";
import ciscoSpark from "../assets/images/cisco-spark.png";
import signalGroup from "../assets/images/signal-group.png";
import singleProduct from "../assets/images/single-product-page.png";
import hillzyCommerce from "../assets/images/hillzy-commerce.png";

const MyWork = () => {
  return (
    <div className="MyWork">
      <div className="Work-row-1">
        <WorkCard
          title="Dental One - Info page"
          skills={["Wordpress", "HTML", "CSS"]}
          imageSRC={dentalOneNoGap}
          URL="http://www.dental1.com.au/no-gap-dentistry/"
        />
        <WorkCard
          title="Dental One - Locations page"
          skills={["Wordpress", "HTML", "CSS"]}
          imageSRC={dentalOneLocations}
          URL="http://www.dental1.com.au/craigieburn/"
        />
        <WorkCard
          title="Dental One - Contact Form"
          skills={["PHP", "HTML", "CSS", "Contact-form 7"]}
          imageSRC={dentaloneContact}
          URL="http://www.dental1.com.au/contact-us/"
        />
        <WorkCard
          title="Cisco Spark Landing Page"
          skills={["HTML", "CSS", "PHP", "*Not my design"]}
          imageSRC={ciscoSpark}
          URL="http://spark.melbourneglobal.com/"
        />
        <WorkCard
          title="Signal Group - E-Commerce"
          skills={["Intial setup", "Wordpress", "PHP/CSS", "*Not my design"]}
          imageSRC={signalGroup}
          URL="https://signalgroup.com.au/"
        />
        <WorkCard
          title="Mobile Ecommerce Single Product"
          skills={["Adobe XD", "HTML", "CSS", "Woocommerce"]}
          imageSRC={singleProduct}
        />
        <WorkCard
          title="Hillzy - E-Commerce"
          skills={["Design", "Woocommerce", "HTML", "CSS"]}
          imageSRC={hillzyCommerce}
        />
      </div>
    </div>
  );
};
export default MyWork;
