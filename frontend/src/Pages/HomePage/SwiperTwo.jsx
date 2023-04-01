import styles from "./SwiperTwo.module.css";
import { Link } from "react-router-dom";

export function MyCard({ src, cap }) {
  return (
    <div
      style={{
        minWidth: "230px",
        maxWidth: "300px",
        height: "311px",
        marginRight: "25px",
        color: "white",
        position: "relative",
        marginLeft: "-10px",
        border: "1px solid lightgray",
        borderRadius: "10px",
      }}
    >
      <img
        src={src}
        alt="i"
        style={{  height: "100%", width:"100%", margin: "auto" }}
      />
      <div className={styles.myCardCaption}>
        <Link to="/">{cap}</Link>
      </div>
    </div>
  );
}

export function SwiperTwo() {
  const btnpressprev = () => {
    let box = document.querySelector(".productContainerrrr");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainerrrr");
    box.scrollLeft += 300;
  };

  return (
    <div>
      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>⇐</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>⇒</p>
        </button>
        <div
          className="productContainerrrr"
          style={{
            padding: "0 10px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
         <Link to="/store?filter=MacBook+Air&filter=MacBook+Pro">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4139952400010_000_b?$an-category$&qlt=80&fit=constrain"
              cap="Reformation Silk Dress"
            />
          </Link>
          <Link to="/store?filter=iPhone">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4139952400027_037_b2?$an-category$&qlt=80&fit=constrain"
              cap="Jeffrey Campbell Dress"
            />
          </Link>
          <Link to="/store?filter=iPad">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4139952400005_060_b?$an-category$&qlt=80&fit=constrain"
              cap="Reformation Frankie Dress"
            />
          </Link>
          <Link to="/store?filter=Watch">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/83226613_048_b?$an-category$&qlt=80&fit=constrain"
              cap="Ruffled V-Neck Dress"
            />
          </Link>
          <Link to="/store?filter=Airpods">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4130024090114_266_b2?$an-category$&qlt=80&fit=constrain"
              cap="Farm Summer Dress"
            />
          </Link>
          <Link to="/store?filter=Tv+%26+Home">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4130916210153_009_b2?$an-category$&qlt=80&fit=constrain"
              cap="Maeve Drop-Waist Dress"
            />
          </Link>
          <Link to="/store?filter=Entertainment">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/83227934_048_b?$an-category$&qlt=80&fit=constrain"
              cap="Maeve Racerback Tank"
            />
          </Link>
          <Link to="/store?filter=Accessorires">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/60058286_021_b2?$an-category$&qlt=80&fit=constrain"
              cap="Babydoll Top"
            />
          </Link>

          <Link to="/store?filter=Accessorires">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/82260787_070_b2?$an-category$&qlt=80&fit=constrain"
              cap="Robin Tiered Mini Dress "
            />
          </Link>

          <Link to="/store?filter=Accessorires">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4130572650057_082_b2?$an-category$&qlt=80&fit=constrain"
              cap="Reformation Frankie Dress"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
