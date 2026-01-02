import Card from "./Card"

function Cards({ courses }) {


    return (
        <div className="flex flex-wrap justify-center w-[55%] gap-[1rem]  [@media(max-width:1024px)]:w-[70%] [@media(max-width:800px)]:w-[65%]">
            {courses.map((course) => {
                return <Card key={course.id} course={course} />
            })}
        </div>
    )
}


export default Cards;