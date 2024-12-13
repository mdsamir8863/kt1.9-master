
import ProjectCard from "../../../components/ProjectCard"


const projects_indi = () => {
  const data=[
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"indi",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"company",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"company",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"company",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"company",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"company",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"company",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"company",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"company",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"both",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
    {
      title:"human Scino",
      poster_name:"lala",
      description:"kala",
      type:"bulli",
      duration:'5',
      open_to:"company",
      location:"bengaluru",
      budget:"$566767",
      poster_id:"73467829",
      createdAt:"12/12/12",
      
    },
  ]
  
  return (
    <>
    
    <div className="flex mt-5  w-full justify-center items-center">
        <div className="flex bg-gray-50 shadow-lg py-3 rounded-lg w-3/4 gap-2  justify-evenly  items-end">
          <div className="w-1/2">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 .text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
              placeholder="Nural Engine project"
              required
            />
          </div>

          <div className="w-44">
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900 .text-white"
            >
              Location
            </label>
            <select
              id="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
            >
             
              <option value="my">My</option>
              <option value="all">All Around</option>
            </select>
          </div>
          <div>
            <button
              type="button"
              className="text-white flex items-center gap-2 bg-lime-700 hover:bg-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-1  .bg-lime-600 .hover:bg-lime-700 .focus:ring-lime-800"
            >
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <section className="w-full p-4 flex flex-wrap overflow-y-scroll">
        {data && data.map((e, i) => <ProjectCard key={i} project={e} />)}
      </section></>
  )
}

export default projects_indi