import React from "react";
import "./Rooms.css"

function ParallaxRooms() {
  return (
    <>
      <div className="background">
        <span className="a-place">
          A Place of <br />
          <span className="animated_text">
            <span>Waves</span>
            <span>Comfort</span>
            <span>Sunsets</span>
          </span>
        </span>
      </div>

      <div id="rooms" className="our_and_yourhome_text">
        <p className="our_acc">OUR ACCOMMODATION</p>
        <p className="rooms_text">Your Home Away From Home</p>
      </div>

      <section className="rooms">
        <div className="room1">
          <div className="rooms_inlinetext">
            <div>
              <h3 className="room_name">Duplex Room</h3>
              <h3 className="price">
              ₹5000 <span className="per_night">/Per day</span>
              </h3>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="td capacity">Capacity:</td>
                  <td className="td">Max 15 persons</td>
                </tr>
                <tr>
                  <td className="td bed">Bed:</td>
                  <td className="td">King Beds</td>
                </tr>
                <tr>
                  <td className="td services">Services:</td>
                  <td className="td td_wifi">
                  Wi-Fi, TV, Fridge, Fully Furnished With 2 Bathrooms
                  </td>
                </tr>
              </tbody>
            </table>
            <a
              className="details"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Now
            </a>
          </div>
        </div>
        <div className="room2">
          <div className="rooms_inlinetext">
            <div>
              <h3 className="room_name">2 BHK Room</h3>
              <h3 className="price">
              ₹5000<span className="per_night">/Per day</span>
              </h3>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="td capacity">Capacity:</td>
                  <td className="td">Max 15 persons</td>
                </tr>
                <tr>
                  <td className="td bed">Bed:</td>
                  <td className="td">1 King Size, 1 Queen Size</td>
                </tr>
                <tr>
                  <td className="td services">Services:</td>
                  <td className="td td_wifi">
                  Wi-Fi, TV, Fridge, Fully Furnished With 2 Bathrooms
                  </td>
                </tr>
              </tbody>
            </table>
            <a
              className="details"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ParallaxRooms;
