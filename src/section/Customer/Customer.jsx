import CustomerSlider from "../../components/CustomerSlider/CustomerSlider";
import Heading from "../../components/Heading/Heading";
import LogoSlider from "../../components/LogoSlider/LogoSlider";
import classes from "./Customer.module.css";

const Customer = () => {
  return (
    <section className={`container container-padding`}>
      <Heading title={"What our customers say"} />
      <div className={`${classes.cusContainer}`}>
        <CustomerSlider />
        <LogoSlider />
      </div>
    </section>
  );
};

export default Customer;
