
import AdminHeader from "./AdminHeader";
import { useTheme } from "@/provider/theme-provide";

import { useState } from "react";
import Overview from "./Overview";
import Courses from "./Courses";
import Students from "./Students";



const AdminDashboard = () => {
  const { theme } = useTheme()
  const [filterId, setFilterId] = useState(0);
  const [showList, setShowList] = useState(0)
  return <main >
    <AdminHeader filterId={filterId} onFilterId={setFilterId} />
    <Overview filterId={filterId} />

    <div className={`border rounded-lg mt-5 h-96 ${theme == "light" ? "bg-white" : ""} `}>
      <header className=" p-4 border-b rounded">
        <div>
          <ul className="flex space-x-2">
            <li className={` ${showList === 0 ? "" : "text-gray-400"}`} onClick={() => setShowList(0)}>All Courses</li>
            <li className={` ${showList === 1 ? "" : "text-gray-400"}`} onClick={() => setShowList(1)}>Student</li>
          </ul>
        </div>

      </header>
      {
        showList == 0 ? <Courses /> : <Students />
      }
    </div>
  </main>;
};

export default AdminDashboard;
