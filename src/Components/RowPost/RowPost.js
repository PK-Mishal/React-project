import React from "react";
import "./RowPost.css";
function RowPost(props) {
  const { movies ,type} = props;
  const image ="https://www.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg"
  return (
    <div className="row">
      <div className="posters">
        {movies.length !== 0 ? (
          <div>
            {movies.map((element) => {
              return (
                <img
                  className="poster"
                  alt="poster"
                  src={
                    element?.[type]?.image?.medium == null
                      ? "https://www.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg"
                      :
                       element?.[type]?.image?.medium
                  }
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default RowPost;
