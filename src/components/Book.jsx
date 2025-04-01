import "./style.css";

function Book(props) {
  return (
    <div className="book-card">
      <img className="book-cover"
        src={props.bookDetails.image}
        height="200"
        width="100"
        alt="Image"
      />
      <div className="book-details"> 
        <h2 className="book-list">{props.bookDetails.title}</h2>
        <p className="book-author">{props.bookDetails.author}</p>
        <p className="book-description">{props.bookDetails.description}</p>
      </div>
    </div>
  );
}

export default Book;
