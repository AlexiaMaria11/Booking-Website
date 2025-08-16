import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: "/images/apartment.jpg",
    },
    {
      src: "/images/cabin.jpg",
    },
    {
      src: "/images/apartment.jpg",
    },
    {
      src: "/images/cabin.jpg",
    },
    {
      src: "/images/apartment.jpg",
    },
    {
      src: "/images/cabin.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the hearth of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Grand
                Hotel offers elegant accommodations with a restaurant, private
                parking, a fitness center, and a stylish bar. This 5-star
                property combines historic charm with modern comforts, featuring
                spacious rooms with classic décor, premium bedding, and city
                views. Guests can enjoy a rich buffet breakfast each morning and
                savor Polish and international cuisine in the on-site
                restaurant. For relaxation, the hotel provides a wellness area
                with a sauna and fitness facilities. The Grand Hotel also offers
                a 24-hour front desk, concierge services, and a tour desk to
                help you plan your stay in Krakow. Airport transfers and room
                service are available upon request, and free WiFi is accessible
                throughout the property. With its central location, just steps
                away from the Main Market Square, Wawel Castle, and numerous
                shops and cafés, the hotel is an ideal choice for travelers
                interested in culture, history, and city walks.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real hearth of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
