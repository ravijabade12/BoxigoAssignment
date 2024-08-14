import React from "react";

const Table = (props) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-2/3 border-collapse">
          <thead>
            <tr className="space-x-4">
              <th className="text-left font-bold ">Furnitures</th>
              <th></th>
              <th className="text-left font-bold px-12">Electricals</th>
              <th></th>
              <th className="text-left font-bold px-12">Fragile</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {props.fur.map((item, index) => (
              <tr className="space-x-4" key={index}>
                <td className="py-2">{item}</td>
                <td className="">{props.numfur[index]}</td>
                <td className="px-12">{props.elec[index]}</td>
                <td>{props.numelec[index]}</td>
                <td className="px-12">{props.fragile[index]}</td>
                <td>{props.numfragile[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
