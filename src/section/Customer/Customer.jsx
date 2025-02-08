import CustomerSlider from "../../components/CustomerSlider/CustomerSlider";
import classes from "./Customer.module.css";

const Customer = () => {
  return (
    <section className={`container ${classes.cusContainer}`}>
      <CustomerSlider />
    </section>
  );
};

export default Customer;
