
import styles from "./Admin.module.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deletedata, getProduct } from "../../Redux/Admin/action";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

const AdminCard = ({ _id,image, title, price, rating }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    dispatch(deletedata(_id)).then(() => dispatch(getProduct()));
  };

  const handleClick = () => {
    let timerInterval;
    Swal.fire({
      title: "Admin please wait!",
      html: "I will close in <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  return (
    <div id={styles.admin_card}>
    
      <div id={styles.image_div}>
        <img
          style={{
            border: "0px solid green",
            width: "20%",
            textAlign: "center",
            borderRadius: "15px",
          }}
          src={image}
          alt="title"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Title : {title} </h1>
        <p>Price : {price} $/-</p>
        <p>Rating : {rating}</p>
        <div id={styles.button}>
          <Link to={`/edit/${_id}`}>
            <button id={styles.edit} onClick={handleClick}>
              Edit
            </button>
          </Link>
          <button id={styles.delete} onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
