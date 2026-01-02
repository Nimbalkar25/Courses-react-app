import Navbar from "./components/Navbar"
import './App.css';
import Cards from "./components/Cards";
import Filtered from "./components/Filtered";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data.js"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const[category,setCategory] = useState("All")

  useEffect(() => {
   const fetchData = async () => {
    setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);

      } catch (e) {
        toast.error("Something went wrong in Network");
      }

      setLoading(false);
    }
    fetchData();
  }, []);

  const getFilteredCourses = () =>{
    if(category === "All"){
      return Object.values(courses).flat();
    }

    return courses[category];
    
  }
  return (
    <div className="min-h-screen flex flex-col w-[100vw]  bg-[#404055] ">
      <div >
              <Navbar />
      </div>
      <div className="flex flex-col items-center ">
              <Filtered filterData={filterData} setCategory={setCategory} category={category} />

              {loading ? (<Spinner/> ) : (<Cards courses={getFilteredCourses()} />)}
      </div>

    </div>
  );
}

export default App;
