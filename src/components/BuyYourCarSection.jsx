import HowToBuy from "./HowToBuy"

import { IoCarSportOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { HiStatusOnline } from "react-icons/hi";
import { GoStack } from "react-icons/go";
import { IoCalculatorOutline } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";

const BuyYourCarSection = () => {
    const qualities = [
      {
        id: 1,
        icon: <IoCarSportOutline />,
        title: "Find the right car for you",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita.",
      },
      {
        id: 2,
        icon: <HiStatusOnline/>,
        title: "get your trade appraisal online",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita.",
      },
      {
        id: 3,
        icon: <IoCalculatorOutline/>,
        title: "calculate a payment for you",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita.",
      },
      {
        id: 4,
        icon: <AiOutlineSafetyCertificate/>,
        title: "protect your investment",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita.",
      },
      {
        id: 5,
        icon: <GoStack/>,
        title: "carsento Store-To-Door Delivery",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita.",
      },
      {
        id: 6,
        icon: <GrNotes/>,
        title: "Easily upload your document",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita.",
      },
    ];

  return (
    <div className="relative">
          <div className="buy-your-car">
              <HowToBuy />
              <div className="second">
                  <div className="second_container">
                      {qualities.map((item) => (
                          <div className="grid_layout_item" key={item.id}>
                              <div className="top">
                                  {item.icon}
                              </div>
                              <div className="title">
                                  {item.title}
                              </div>
                              <div className="text">
                                  {item.text}
                              </div>
                          </div>
                      ))}
                </div>
              </div>
      </div>
    </div>
  )
}

export default BuyYourCarSection
