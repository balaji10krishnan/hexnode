import classes from "./Heading.module.css";
const Heading = ({ title, subTitle }) => {
  return (
    <div className={`${classes["heading"]}`}>
      <p className={`${classes["title"]}`}>{title}</p>
      {subTitle && (
        <p className={`${classes["sib-title"]} f-xxm`}>{subTitle}</p>
      )}
    </div>
  );
};
export default Heading;
