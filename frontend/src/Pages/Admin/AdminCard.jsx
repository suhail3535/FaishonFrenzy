import styles from "./Admin.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deletedata, getProduct } from "../../Redux/Admin/action";

const AdminCard = ({ _id, image, title, price, rating }) => {
    const dispatch = useDispatch();

    const handleDelete = (_id) => {
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
        <div id={styles.Admincart_component}>
            <div className="paymentCard-cont" id={styles.manage_prod}>
                <div className="paymentCard-info-img-div">
                    <img src={image} alt="" />
                </div>
                <div className="paymentCard-info" id={styles.detail_box}>
                    <div className="paymentCard-info-cont">
                        <p>{title}</p>

                        <p>
                            <span>Style:</span># 4130318350035
                        </p>
                        <p>
                            <span>Color:</span>GREEN
                        </p>
                        <p>
                            <span>Size:</span>XS
                        </p>
                        <p>
                            {" "}
                            <span>Fit</span> Standard
                        </p>
                    </div>
                </div>
                <div>${price}</div>
                <div>{rating} ⭐</div>

                <div>
                    <Link to={`/edit/${_id}`}>
                        <button id={styles.edit} onClick={handleClick}>
                            Edit
                        </button>
                    </Link>
                </div>

                <div>
                    <button
                        id={styles.delete}
                        onClick={() => handleDelete(_id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminCard;
