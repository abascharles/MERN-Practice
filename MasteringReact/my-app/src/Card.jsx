const imageUrl = 'https://i.imgur.com/yXOvdOSs.jpg';

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt="profile picture" />
      <h2>Bro Code</h2>
      <p>I Make Youtube videos and play video games </p>
    </div>
  );
}

export default Card;
