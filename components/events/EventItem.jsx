import Link from "next/link";
import style from "./EventItem.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("es-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={style.item}>
      <img src={"/" + image} alt={title}/>
      <div className={style.content}>
        <div className={style.summary}>
          <h2>{title}</h2>
          <div className={style.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={style.address}>
            <address>{formattedAddress}</address>
          </div>
          <div className={style.actions}>
            <Link href={exploreLink}>Explore Event</Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;