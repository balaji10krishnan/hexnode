import CustomersSlider from "../../components/CustomersSlider/CustomersSlider";
import Heading from "../../components/Heading/Heading";
import LogoSlider from "../../components/LogoSlider/LogoSlider";
import classes from "./Customer.module.css";

const Customer = () => {
  return (
    <section className={`container container-padding`} id="cus-sec">
      <Heading title={"What our customers say"} />
      <div className={`${classes.cusContainer}`}>
        <CustomersSlider />
        <LogoSlider />
      </div>
    </section>
  );
};

export default Customer;
