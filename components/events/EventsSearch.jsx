import { useRef } from "react";
import Button from "../ui/Button";
import styles from "./EventSearch.module.css";

const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.valueOf();
    const selectedMonth = monthInputRef.current.valueOf();

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year"></label>
            <select id="year" ref={yearInputRef}>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select name="" id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button oncl>Find Events</Button>
    </form>
  );
};

export default EventsSearch;