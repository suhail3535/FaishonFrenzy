import styles from "./Swiper.module.css";
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

export function Swiper() {
  const btnpressprev = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer");
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
          className="productContainer"
          style={{
            padding: "0 10px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <Link to="/store?filter=MacBook+Air&filter=MacBook+Pro">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4130578570023_041_b2?$an-category$&qlt=80&fit=constrain"
              cap="Somerset Maxi Dress"
            />
          </Link>
          <Link to="/store?filter=iPhone">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4123650590242_010_b2?$an-category$&qlt=80&fit=constrain"
              cap="Ophelia Puff-Sleeve"
            />
          </Link>
          <Link to="/store?filter=iPad">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4130646420009_085_b2?$an-category$&qlt=80&fit=constrain"
              cap="Colette Wide-Leg Pants"
            />
          </Link>
          <Link to="/store?filter=Watch">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4123650590131_070_b?$an-category$&qlt=80&fit=constrain"
              cap="Wide-Leg Flare Pants"
            />
          </Link>
          <Link to="/store?filter=Airpods">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/35388685_020_b27?$an-category$&qlt=80&fit=constrain"
              cap="Gleaming Primrose Mirror"
            />
          </Link>
          <Link to="/store?filter=Tv+%26+Home">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4130647160161_001_b2?$an-category$&qlt=80&fit=constrain"
              cap="Faulkner Strapless Dress"
            />
          </Link>
          <Link to="/store?filter=Entertainment">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4122900970121_093_b2?$an-category$&qlt=80&fit=constrain"
              cap="Colette Wide-Leg Pants"
            />
          </Link>
          <Link to="/store?filter=Accessorires">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4130084320097_085_b15?$an-category$&qlt=80&fit=constrain"
              cap="Ruffle-Strap-Slit Midi Dress"
            />
          </Link>

          <Link to="/store?filter=Accessorires">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/4130360680079_066_b2?$an-category$&qlt=80&fit=constrain"
              cap="Porridge Long-Sleeve Dress"
            />
          </Link>

          <Link to="/store?filter=Accessorires">
            <MyCard
              src="https://images.urbndata.com/is/image/Anthropologie/67117135_040_b?$an-category$&qlt=80&fit=constrain"
              cap="Ruffle-Strap Midi Dress"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
