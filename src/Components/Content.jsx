import React, { useState, useEffect } from "react";
import Item from "./Item";

const Content = () => {
  const [estimateFlowData, setEstimateFlowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const items = estimateFlowData.flatMap((dataObj) =>
    dataObj.items.inventory.flatMap((inventoryObj) =>
      inventoryObj.category.flatMap((categoryObj) =>
        categoryObj.items.map((itemObj) => itemObj.displayName)
      )
    )
  );

  const numbers = estimateFlowData.flatMap((dataObj) =>
    dataObj.items.inventory.flatMap((inventoryObj) =>
      inventoryObj.category.flatMap((categoryObj) =>
        categoryObj.items.map((itemObj) => itemObj.order)
      )
    )
  );

  console.log(numbers);
  console.log(items);

  // console.log(estimateFlowData);

  const furniture = items.slice(0, 10);
  const ele = items.slice(50, 60);
  const fragile = items.slice(100, 110);
  const numfurniture = numbers.slice(0, 10);
  const numele = numbers.slice(50, 60);
  const numfragile = numbers.slice(100, 110);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://test.api.boxigo.in/sample-data/");
        const result = await response.json();

        const data = result.Customer_Estimate_Flow;

        // Store the data in state
        setEstimateFlowData(data);
        setIsLoading(false);

        // console.log(estimateFlowData);
      } catch (error) {
        console.error("Error fetching the data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="ml-48 p-4 flex-1">
        <h1 className="font-bold mb-2 text-2xl">My Moves</h1>
        {isLoading ? (
          <div className="ml-6 font-bold text-center  text-2xl">
            Loading data <i className="fa-solid fa-spinner"></i>
          </div>
        ) : (
          <div>
            {estimateFlowData.map((item, index) => {
              return (
                <Item
                  key={index}
                  from={item.moving_from}
                  to={item.moving_to}
                  id={item.estimate_id}
                  proSize={item.property_size}
                  total_items={item.total_items}
                  distance={item.distance}
                  date={item.moving_on}
                  isflexible={item.move_date_flexible}
                  oldfloorNo={item.old_floor_no}
                  newfloorNo={item.new_floor_no}
                  oldElevatorAva={item.old_elevator_availability}
                  newElevatorAva={item.new_elevator_availability}
                  packingService={item.packing_service}
                  oldParkingDistance={item.old_parking_distance}
                  newParkingDistance={item.new_parking_distance}
                  oldAdditionalInfo={item.old_house_additional_info}
                  newAdditionalInfo={item.new_house_additional_info}
                  furniture={furniture}
                  elec={ele}
                  fragile={fragile}
                  numfurniture={numfurniture}
                  numelec={numele}
                  numfragile={numfragile}
                />
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default Content;
