import React, { useEffect, useState } from "react";
import "./SingleProduct.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Swiper } from "../HomePage/Swiper";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Cart/action";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Spinner } from "@chakra-ui/react";

export const SingleProduct = () => {
  const [prodDetail, setProdDetail] = React.useState({});
  const [isButLoading, setIsButLoading] = useState(false)
  const [btnDisabled, setDisabled] = React.useState(true);
  const store = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const param = useParams();
  console.log("prod Id", param);

  // const cartValidate = (newCartProd) => {

  //   return duplicate

  // }

  const handleCart = (data) => {

    console.log("single", data)
    console.log("proddetail", prodDetail)
    console.log("store", store)
    const duplicate = store.filter((el) => el.title === data.name)
    console.log("duplicate", duplicate)
    if (duplicate.length > 0) {
      setTimeout(() => {
        Swal.fire("Product Added!", "Please Wait!", "success");

      }, 1000);

      setIsButLoading(true);
      setTimeout(() => {
        setIsButLoading(false);
        navigate("/cart");
      }, 3000);





      setIsButLoading(true);
      setTimeout(() => {
        setIsButLoading(false);
        navigate("/cart");
      }, 3000);
    } else {
      const { img, name, brand, price, rating } = data;
      const payload = {
        title: name,
        image: img,
        price: price,
        name: brand,
        rating: rating,
      };
      dispatch(addToCart(payload));
    }









    // console.log("store", store)
  };

  const fetchSigleProd = async () => {
    try {
      const details = await axios.get(
        `https://sleepy-pear-toga.cyclic.app/${param.name}/${param.id}`
      );
      console.log("singleDetail", details.data);
      setProdDetail(details.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSigleProd();
  }, []);

  return (
    <div>
      <div className="singleProd-wrapper">
        <div className="singleProd-container">
          <div className="singleProd-cont">
            <div className="singleProd-left-main">
              <div className="singleProd-left">
                <div className="singleProd-imgDiv">
                  <img src={prodDetail.img} alt="" />
                </div>
                <div className="singleProd-left-extra">
                  <div className="singleProd-extra-div">
                    <img
                      src="https://images.urbndata.com/is/image/Anthropologie/80258601_014_b2?$an-category$&qlt=80&fit=constrain"
                      alt=""
                    />
                    Lorem ipsum dolor sit.
                  </div>
                  <div className="singleProd-extra-div">
                    <img
                      src="https://images.urbndata.com/is/image/Anthropologie/80213226_014_b2?$an-category$&qlt=80&fit=constrain"
                      alt=""
                    />
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
              </div>
            </div>

            <div className="singleProd-right-main">
              <div className="singleProd-right">
                <div className="right-cont">
                  <div className="right-top">
                    <p>{prodDetail.title} </p>
                    <a href="/#">Reformation</a>
                    <p>$ {prodDetail.price}</p>
                    <p>
                      Or 4 interest-free installments of $62.00 with <br />
                      <span>Kalrna or Afterpay</span>
                    </p>
                  </div>
                  <hr style={{ color: "grey", border: "1px solid" }} />
                  <div className="right-middle">
                    <div className="right-middle-size">
                      <p>Sizes</p>
                      <div className="rht-li">
                        <li>0</li>
                        <li>2</li>
                        <li>4</li>
                        <li>6</li>
                        <li>8</li>
                        <li>10</li>
                        <li>12</li>
                      </div>
                      <a href="/#">Size Guide</a>
                      <p>Quantity</p>
                      <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                      </select>
                      <br />

                      <button onClick={() => handleCart(prodDetail)}>
                        {!isButLoading && ` ADD TO BASKET `}
                        {isButLoading && (
                          <Spinner
                            thickness="4px"
                            speed="0.55s"
                            emptyColor="gray.200"
                            color="#17274a"
                            size="md"
                          />
                        )}
                      </button>
                      <br />

                      <span>
                        <a href="/#">Add to Registry</a>

                        <a href="/#">Add to Wishlist</a>
                      </span>
                      <div className="middle-random">
                        <p>Free on shop Pickup</p>
                        <p>
                          Please select a size to check store availability.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="singleProd-accordian">
                  <Accordion allowZeroExpanded>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <div className="accor-heading">Product Details</div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="main-accor-div">
                        <p>Style No. 4139952400010; Color Code: 000</p>
                        <p>
                          Rendered here in an exclusive, only-at-Anthro print,
                          the Juliette features a sweetheart neckline atop a
                          corset-style bodice. Flowing into a relaxed skirt with
                          a sky-high slit, the occasion-ready number is finished
                          with delicate spaghetti straps and a smocked back
                          bodice.
                        </p>

                        <div>
                          <li>An Anthropologie exclusive print</li>
                          <li>Viscose</li>
                          <li>Back zipper</li>
                          <li>Dry clean</li>
                          <li>Imported</li>
                        </div>
                        <h3>Reformation</h3>
                        <p>
                          Founded in 2009, Reformation is a revolutionary
                          lifestyle brand that proves that fashion and
                          sustainability can coexist. The brand combines
                          stylish, vintage-inspired designs with sustainable
                          practices, releasing limited-edition collections for
                          individuals who want to look beautiful and live
                          sustainably. Reformation infuses green measures into
                          every aspect of the business. Setting an example for
                          the industry, Reformation remains at the forefront of
                          innovation in sustainable fashion—using deadstock and
                          eco fabrics, tracking and sharing the environmental
                          impact of every product, and investing in the people
                          who make this revolution possible. Reformation is
                          Climate Neutral certified and its products have been
                          carbon neutral since 2015, with a commitment to become
                          Climate Positive by 2025. The brand has also
                          established itself as a pioneer in retail innovation,
                          developing an in-store tech concept that brings the
                          best of its online experience to its physical doors.
                          Reformation's mission is to bring sustainable fashion
                          to everyone.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <div className="singleProd-mid" id="dis-none" >
            <div className="singleProd-mid-heading">Recommended for you</div>
            <hr />
            <div className="singleProd-mid-cont">
              <Swiper />
            </div>
          </div>

          <div className="singleProd-mid">
            <div className="singleProd-mid-cont">
              <div className="singleProd-mid-heading">Ratting and Review</div>
              <hr />

              <div className="singleProd-lower">
                <p>Write a Review</p>
              </div>
              <div className="singleProd-lower-btn">
                <button>Write A Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
