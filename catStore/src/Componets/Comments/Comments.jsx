import { useState, useEffect } from "react";
import "./Comments.css";

const Comments = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('./comments.json'); 
      const data = await response.json();
      setReviews(data.comments);
    };

    fetchReviews();
  }, []);

  return (
    <>
      {reviews.map((review, index) => (
        <div key={index} className="mainAvaliaton">
          <div className="avaliationArea">
            <div>
              <h3>{review.title}</h3>
            </div>
            by: {review.name}
          </div>

          <div className="descriptionArea">
            <div>{review.note}/5</div>
            <p>{review.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
