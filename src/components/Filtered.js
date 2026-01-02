
function Filtered({ filterData, setCategory, category }) {



    return (
        <div className="flex gap-5 items-center mt-4 mb-4">

            {filterData.map((data) => {
                const isActive = (category === data.title);
                return <button className={`bg-[#2b2b31] px-[0.5rem] py-[0.3rem] text-white font-semibold rounded-md border ${isActive ? "border-white" : "border-none"} `}  key={data.id} onClick={() => setCategory(data.title)} > {data.title} </button>
            })}
        </div>
    );
}


export default Filtered;