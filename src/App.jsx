import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <MainPage />
    </>
  );
}

function MainPage() {
  const [emailList, setEmailList] = useState([]);
  const [viewMessage, setViewMessage] = useState(false);
  const [favoriteState, setFavoriteState] = useState(false);

  useEffect(() => {
    fetch("https://flipkart-email-mock.vercel.app/")
      .then((res) => res.json())
      .then((data) => setEmailList(data.list));
  }, []);

  const changeState = () => {
    setFavoriteState(true);
  };

  return (
    <div className="main-page">
      <p className="nav-items">
        Filter By :
        <span>
          <a href="#">Unread</a>
        </span>
        <span>
          <a href="#">Read</a>
        </span>
        <span>
          <a href="#">Favorites</a>
        </span>
      </p>
      <div className="message-container">
        <div className="message-div">
          {emailList.map((item, index) => (
            <div
              onClick={() => setViewMessage(true)}
              key={index}
              className="message-box"
            >
              <p className="name">F</p>
              <div className="message-content">
                <div className="head">
                  <p>
                    From :
                    <span className="email-name">
                      Foo Bar {item.from.email}
                    </span>
                  </p>
                  <p>
                    Subject :
                    <span className="subject-name">{item.subject}</span>
                  </p>
                </div>
                <>
                  <p className="content">{item.short_description}......</p>
                </>
                <>
                  <p className="date">
                    {item.date} <span className="time">10:30am</span>
                    <span className="favorite">Favorite</span>
                  </p>
                </>
              </div>
            </div>
          ))}
        </div>
        {viewMessage ? (
          <div className="message-view-main">
            <div className="message-view-div">
              <p className="name">F</p>
              <div className="message-view-title">
                <p className="message-view-subject">Lorem Ipsum</p>
                <button
                  onClick={changeState}
                  className={favoriteState ? "disabled" : "button"}
                >
                  Add To Favorite
                </button>
              </div>
            </div>
            <div className="message-inner-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quo
              iusto in culpa deserunt, quibusdam maxime blanditiis quidem magnam
              natus, dolore enim hic, vitae et rerum! Accusamus, sint
              cupiditate. Perspiciatis veritatis itaque nostrum quis incidunt
              suscipit alias debitis voluptate velit quo harum inventore
              voluptatum, reprehenderit, sed, fuga cupiditate molestias dolorem
              culpa? Perferendis iste, porro deleniti, molestias molestiae quis
              corporis, dignissimos atque voluptatum nobis nemo quibusdam
              consequuntur eligendi dolorem facere natus non praesentium
              architecto consequatur amet neque omnis libero fuga. Fugit ducimus
              odio vel officia autem dolore sed cum veniam, ipsam deleniti
              aliquam ullam excepturi ad expedita maxime qui tempora iure.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              tenetur eum dolorum expedita id recusandae, nostrum corrupti
              repudiandae error distinctio. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam
              earum, quas consectetur esse, aspernatur ab consequuntur quaerat
              enim saepe explicabo accusamus cum odit veniam repellat sunt
              veritatis molestiae in deleniti, mollitia dolore sint velit ipsum?
              Ea, eum minus nihil totam ut similique quae maiores dolorem
              perspiciatis! Fuga, incidunt iusto. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Animi tenetur eum dolorum expedita
              id recusandae, nostrum corrupti repudiandae error distinctio.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam
              earum, quas consectetur esse, aspernatur ab consequuntur quaerat
              enim saepe explicabo accusamus cum odit veniam repellat sunt
              veritatis molestiae in deleniti, mollitia dolore sint velit ipsum?
              Ea, eum minus nihil totam ut similique quae maiores dolorem
              perspiciatis! Fuga, incidunt iusto. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Animi tenetur eum dolorum expedita
              id recusandae, nostrum corrupti repudiandae error distinctio.
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
