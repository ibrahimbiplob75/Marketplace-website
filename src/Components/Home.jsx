import slider1 from "../assets/img-4.jpg";
import slider2 from "../assets/img-5.jpg";
import slider3 from "../assets/img-6.jpg"
import slider4 from "../assets/img-7.jpg"
import {
  FaTruck,
  FaHeadphonesAlt,
  FaMoneyCheckAlt,
  FaRocket,
} from "react-icons/fa";

const Home = () => {
    return (
      <div>
        <div className="flex justify-around mt-10">
          <div className="flex-initial w-1/3 text-center mr-6 ml-8">
            <h2 className="text-3xl font-bold border">Category</h2>
          </div>

          <div className="flex-initial w-full">
            <div className="carousel w-5/6">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shiping */}
        <div className="flex justify-around mt-20 mb-10  w-3/4 mx-auto shadow-2xl">
          <div className="flex justify-center items-center p-6">
            <FaTruck className="text-xl w-32 h-12 text-red-600"></FaTruck>
            <div>
              <h1 className="text-2xl font-semibold">Free shiping</h1>
              <p>Free shipping on all BD order</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-6">
            <FaHeadphonesAlt className="text-xl w-32 h-12 text-red-600"></FaHeadphonesAlt>
            <div>
              <h1 className="text-2xl font-semibold">Support 24/ 7</h1>
              <p>Contact us 24 hours a day</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-6">
            <FaRocket className="text-xl w-32 h-12 text-red-600"></FaRocket>
            <div>
              <h1 className="text-2xl font-semibold">90 Days Return</h1>
              <p>If goods have problems</p>
            </div>
          </div>

          <div className="flex justify-center items-center p-6">
            <FaMoneyCheckAlt className="text-xl w-32 h-12 text-red-600"></FaMoneyCheckAlt>
            <div>
              <h1 className="text-2xl font-semibold">100% Money Back</h1>
              <p>You have 30 days to Return</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;