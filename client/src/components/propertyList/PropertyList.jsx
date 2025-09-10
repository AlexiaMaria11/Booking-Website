import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src="/images/hotel.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="/images/apartment.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>4230 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="/images/resort.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>150 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="/images/villa.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>560 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="/images/cabin.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2331 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
