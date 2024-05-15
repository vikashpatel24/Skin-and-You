import React from "react";
// import {Link} from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative mt-16">
        <div className="bg-white">
          <div className="relative flex md:flex-row flex-col  justify-between">
            <div className="w-[1/5] h-screen relative">
              <img alt="Banner" className="w-full h-full" src="left.png" />
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60 backdrop-blur-md"></div>
              <div className="absolute flex-col top-0 left-0 w-30 h-full flex items-center justify-center px-8">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold">
                    BE HAIRFREE WITH
                    <br />
                    PAINFREE LASERS
                  </h1>
                  <div className="text-white text-lg flex flex-col">
                    <span className="bg-[#643232] w-[65%] px-4 py-4">
                      NO THREADING
                    </span>
                    <span className="bg-[#824646] w-[55%] px-4 py-4">
                      NO BLEACHING
                    </span>
                    <span className="bg-[#9b6464] w-[45%] px-4 py-4">
                      NO WAXING
                    </span>
                  </div>
                </div>
                <div class="space-y-4 text-lg font-bold absolute bottom-8">
                  <div class="flex items-center justify-start">
                    <div class="h-full mr-2">
                      <FaLocationDot class="w-auto h-full" />
                    </div>
                    <div>
                      <p>115 B Mittal Court,</p>
                      <p>Nariman Point, Mumbai 400 021</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-start">
                    <div class="h-full mr-2">
                      <FaPhone class="w-auto h-full" />
                    </div>
                    <div>
                      <p>+91 222284 3000 | +91 22 2282 55 55</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-start space-x-2">
                    <span class="w-6 h-6">
                      <FaFacebook />
                    </span>
                    <span class="w-6 h-6">
                      <FaInstagram />
                    </span>
                    <span class="w-6 h-6">
                      <FaXTwitter />
                    </span>
                    <span class="w-6 h-6">
                      <FaLinkedin />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img alt="Banner" className="w-[1/5] h-screen" src="right.jpg" />
              <Link to={"/register"}>
                <button className="absolute bottom-32 right-40 bg-white hover:bg-orange-600 hover:text-white  border-2 border-orange-500 text-orange-500 px-8 py-1 rounded-full">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
