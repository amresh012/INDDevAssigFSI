/* eslint-disable no-unused-vars */
import {  useState } from "react";
import {  TableVirtuoso } from "react-virtuoso";

import Card from "./Component/Card";
import { createUsers } from "./User";

export default function App() {
  const [users, setUsers] = useState(createUsers);

  return (
    <div className="flex flex-col text-2xl  gap-12 font-bold  items-center justify-center h-screen">
      <h1 className="bg-black text-white p-2">
        Rendring 10000 rows 
      </h1>
      <TableVirtuoso
        className="!h-[900px] !w-[90rem] overflow-x-hidden "
        data={users}
        itemContent={(index, user) => <Card user={user} />}
        fixedHeaderContent={() => (
          <tr className="w-full flex items-center justify-around bg-green-500">
            <th className="w-[150px] bg-grayscale-700 text-left">Id</th>
            <th className="w-[150px] bg-grayscale-700 text-left">Image</th>
            <th className="w-[150px] bg-grayscale-700 text-left">Name</th>
            <th className="w-[150px] bg-grayscale-700 text-left">Country</th>
          </tr>
        )}
      />
    </div>
  );
}
