import Link from "next/link";
import style from "./Button.module.css";


const Button = (props) => {
  return (
    <Link href={props.link} className={style.btn}>
      {props.children}
    </Link>
  );
};

export default Button;