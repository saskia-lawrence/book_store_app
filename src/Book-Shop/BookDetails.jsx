import "./style.css"

export default function BookDetails({ bookInfo }) {
  console.log(bookInfo);
  return (
    <div>
      <h3>{bookInfo.title}</h3>
      <br />
      <h4>{bookInfo.subtitle}</h4>
      <br />
      <label htmlFor="text">Price:</label>
      <h5>{bookInfo.price}</h5>
      <br />
      <a href={bookInfo.url} target="_blank">Show Info</a>
      <br />
      <img src={bookInfo.image}/>
    </div>
  );
}
