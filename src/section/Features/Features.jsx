import classes from "./Features.module.css";
//img
import feature1 from "../../assets/png/feature-1.webp";
import feature2 from "../../assets/png/feature-2.webp";
import feature3 from "../../assets/png/feature-3.webp";
import feature4 from "../../assets/png/feature-4.webp";
import feature5 from "../../assets/png/feature-5.webp";
import feature6 from "../../assets/png/feature-6.webp";
import Heading from "../../components/Heading/Heading";
const Features = () => {
  const featuresObj = [
    {
      heading: "Zero-touch Enrollment",
      text: "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
      img: feature6,
    },
    {
      heading: "Automation",
      text: "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
      img: feature2,
    },
    {
      heading: "Remote Access Management",
      text: "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
      img: feature5,
    },
    {
      heading: "Endpoint Security and Compliance",
      text: "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
      img: feature3,
    },
    {
      heading: "Integrations",
      text: "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
      img: feature4,
    },
    {
      heading: "App Management",
      text: "Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.",
      img: feature1,
    },
  ];
  return (
    <section className={`container container-padding ${classes["feature"]}`}>
      <Heading
        title={"Powerful endpoint management, built for the devices you choose"}
      />
      <div className={`${classes["feature-grid"]}`}>
        {featuresObj?.map((item, i) => (
          <div key={i} className={`${classes["feature-item"]}`}>
            <div key={i} className={`${classes["feature-img"]}`}>
              <img src={item.img} />
            </div>
            <div key={i} className={`${classes["feature-head"]}`}>
              <p className={`f-xl fw-s`}>{item.heading}</p>
            </div>
            <div key={i} className={`${classes["feature-text"]}`}>
              <p className={`f-xxm`}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
