import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";
import { SearchContext } from "../../context/SearchContext.jsx";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Modal = ({ setModalOpen, id }) => {
  const { data, loading, error } = useFetch(`/api/hotels/room/${id}`);
  const [selectRoom, setSelectRoom] = useState("");
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { date } = useContext(SearchContext);
  const navigate = useNavigate();
  // console.log(data);
  const selectedRoom = data.find((room) => room.title == selectRoom);
  console.log(selectedRoom);
  const handleChange = (e) => {
    setSelectRoom(e.target.value);
  };

  const handleCheck = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const dateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let dateNow = new Date(start);
    const datesList = [];

    while (dateNow <= end) {
      datesList.push(new Date(dateNow).getTime());
      dateNow.setDate(dateNow.getDate() + 1);
    }

    return datesList;
  };

  const allDatesRange = dateInRange(date[0].startDate, date[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDatesRange.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSubmit = async (e) => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const response = axios.put(`/api/rooms/available/${roomId}`, {
            dates: allDatesRange,
          });
          console.log(response.data);
        })
      );
      setModalOpen(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className="Modal">
          <div className="ModalContainer">
            <div className="closer">
              <IoClose onClick={() => setModalOpen(false)} />
            </div>
            <p className="Rtext">Reserve Hotel !</p>
            <div className="roomSelect">
              <span>select room :</span>
              <select
                name="select"
                id="selecter"
                onChange={handleChange}
                className="select"
              >
                <option value="">--select room--</option>
                {data.map((room) => (
                  <option key={room._id} value={room.title}>
                    {room.title}
                  </option>
                ))}
              </select>
            </div>
            {selectRoom && (
              <>
                <div className="roomContents">
                  <div className="roomTitle">
                    Room name: {selectedRoom.title}
                  </div>
                  <div className="roomPrice">Price:$ {selectedRoom.price}</div>
                  <div className="maxPeople">
                    Max-People : {selectedRoom.maxPeople}
                  </div>
                  <div className="description">
                    Description : {selectedRoom.desc}
                  </div>
                  <div className="roomNumber">
                    <span>Select room number :</span>
                    {selectedRoom.roomNumbers.map((number) => (
                      <div className="roomSelectorContainer">
                        <div className="roomSelector">
                          <span>{number.number}</span>
                          <input
                            type="checkbox"
                            disabled={!isAvailable(number)}
                            key={number._id}
                            value={number._id}
                            onChange={handleCheck}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            <div className="btnDiv">
              <button className="ModalBtn" onClick={handleSubmit}>
                Reserve Now !
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
