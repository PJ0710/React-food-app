import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Order food in a ZAP!</h2>
      <div className={classes.body}>
        <p>Freshly cooked delivered at your doorstep</p>
        <p>
          Pick your favourite dish from our extensive menu of options, then
          savour a delectable lunch or dinner at home.
        </p>
        <p>
          All of our meals are prepared by skilled chefs using top-notch
          ingredients at the perfect time.
        </p>
      </div>
    </section>
  );
};

export default MealSummary;
