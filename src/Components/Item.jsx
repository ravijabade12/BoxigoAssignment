import React, { useState } from "react";
import Table from "./Table";

const Item = (props) => {
  const [view, setView] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="m-6">
        <div className="flex   justify-between items-center ">
          <div className="w-2/5">
            <h5 className="font-bold ">From</h5>
            <p>{props.from}</p>
          </div>

          <div className="w-1/6 h-6 flex justify-center items-center ">
            <i
              className="fa-solid fa-arrow-right  rounded-full p-4  bg-white shadow-lg"
              style={{ color: "#cb1527" }}
            ></i>
          </div>

          <div className="w-2/5">
            <h5 className="font-bold">To</h5>
            <p>{props.to}</p>
          </div>

          <div className="w-1/6">
            <h5 className="font-bold">Request#</h5>
            <p className="font-bold text-red-700">{props.id}</p>
          </div>
        </div>

        {/* 2 section  */}

        <div className="flex justify-between items-center mt-3">
          <div className="flex justify-between items-center gap-3">
            <i className="fa-solid fa-house" style={{ color: "#d71d39" }}></i>
            <p>{props.proSize}</p>
          </div>

          <div className="flex justify-between items-center gap-3">
            <i
              className="fa-solid fa-building"
              style={{ color: "#d71d39" }}
            ></i>
            <p>{props.total_items}</p>
          </div>

          <div className="flex justify-between items-center gap-3">
            <i className="fa-solid fa-route" style={{ color: "#d71d39" }}></i>
            <p>{props.distance}</p>
          </div>

          <div className="flex justify-between items-center gap-3">
            <i className="fa-solid fa-truck" style={{ color: "#d71d39" }}></i>
            <p>{props.date}</p>
            <i className="fa-solid fa-pencil"></i>
          </div>

          <div className="flex justify-between items-center gap-3">
            {/* <i
              className="fa-solid fa-square-check"
              style={{ color: "#f02424" }}
            ></i> */}
            <input
              style={{ accentColor: "red" }}
              type="checkbox"
              checked={props.isflexible}
              readOnly
            />
            <label htmlFor="check">is flexible</label>
          </div>

          <div>
            <button
              onClick={() => setView(!view)}
              className="px-6 text-red-600 py-1 border-4 rounded-md  border-red-600"
            >
              View move details
            </button>
          </div>

          <div>
            <button className="px-6 py-2 bg-red-600 text-white rounded-md">
              Quotes Awaiting
            </button>
          </div>
        </div>

        {/* section 3 */}

        <div className="flex gap-2 items-center mt-2">
          <i
            className="fa-solid fa-triangle-exclamation"
            style={{ color: "#e51030" }}
          ></i>
          <p>
            <span className="font-bold">Disclaimer: </span>Please update your
            move date before two days of shifting
          </p>
        </div>

        {view && (
          <section className="mt-5 flex flex-col gap-4">
            <div className="" id="inventory">
              <div className="flex items-center gap-3">
                <p className="font-bold">Inventory Details</p>
                <button className="bg-black text-white rounded-md font-bold px-2 py-1">
                  Edit Inventory
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <div className="bg-gray-300 text-red-600 p-2 flex justify-between font-bold">
                  <div>
                    Living Room
                    <span className="text-white ml-2 px-1 bg-red-600 rounded-full">
                      15
                    </span>
                  </div>

                  <i
                    onClick={() => setOpen(!open)}
                    className={`fa-solid cursor-pointer ${
                      open ? "fa-arrow-down" : "fa-arrow-up"
                    }`}
                  ></i>
                </div>
                {/* living room section  */}

                {open && (
                  <Table
                    // open={open}
                    fur={props.furniture}
                    elec={props.elec}
                    fragile={props.fragile}
                    numfur={props.numfurniture}
                    numelec={props.numelec}
                    numfragile={props.numfragile}
                  />
                )}

                <div className="bg-gray-300 text-red-600 p-2 flex justify-between font-bold">
                  <div>
                    Bed Room
                    <span className="text-white ml-2 px-1 bg-red-600 rounded-full">
                      6
                    </span>
                  </div>

                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="bg-gray-300 text-red-600 p-2 flex justify-between font-bold">
                  <div>
                    Kitchen
                    <span className="text-white ml-2 px-1 bg-red-600 rounded-full">
                      7
                    </span>
                  </div>

                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="bg-gray-300 text-red-600 p-2 flex justify-between font-bold">
                  <div>
                    Bathroom
                    <span className="text-white ml-2 px-1 bg-red-600 rounded-full">
                      4
                    </span>
                  </div>

                  <i className="fa-solid fa-arrow-up"></i>
                </div>
              </div>
            </div>

            <div id="housedetails">
              <div className="flex items-center gap-3">
                <p className="font-bold">House Details</p>
                <button className="bg-black text-white rounded-md font-bold px-2 py-1">
                  Edit House details
                </button>
              </div>

              <div className="mt-9 mb-3">
                <h2 className="text-red-600 font-bold">
                  Existing House Details
                </h2>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <h3 className="font-bold">Floor No.</h3>
                    <p>{props.oldfloorNo}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Elevator Available</h3>
                    <p>{props.oldElevatorAva}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Packing Required</h3>
                    <p>{props.packingService}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Distance from truck to door</h3>
                    <p>{props.oldParkingDistance}</p>
                  </div>
                </div>

                <h1 className="font-bold my-2">Additional Information</h1>
                <p>
                  {props.oldAdditionalInfo === ""
                    ? "No additional Info"
                    : props.oldAdditionalInfo}
                </p>
              </div>

              <hr />

              <div className="mt-3">
                <h2 className="text-red-600 font-bold">New House Details</h2>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <h3 className="font-bold">Floor No.</h3>
                    <p>{props.newfloorNo}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Elevator Available</h3>
                    <p>{props.newElevatorAva}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Packing Required</h3>
                    <p>{props.packingService}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Distance from truck to door</h3>
                    <p>{props.newParkingDistance}</p>
                  </div>
                </div>

                <h1 className="font-bold my-2">Additional Information</h1>
                <p>
                  {props.newAdditionalInfo === ""
                    ? "No Additional info"
                    : props.newAdditionalInfo}
                </p>
              </div>
            </div>
          </section>
        )}

        <hr className="mt-6" />
      </section>
    </>
  );
};

export default Item;
