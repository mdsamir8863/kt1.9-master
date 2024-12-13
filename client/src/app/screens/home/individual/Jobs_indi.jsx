import JobCard from "../../../components/JobCard";

const Jobs_indi = () => {
  const data = [
    {
      title: "Senotor",
      description: "snator required",
      company_id: "876432687",
      posted_by: { name: "vishal", city: "bengaluru" },
      type: "hybrid",
      exp: 4,
      salary: "20000",
    },
    {
      title: "Senotor",
      description: "snator required",
      company_id: "876432687",
      posted_by: { name: "vishal", city: "bengaluru" },
      type: "hybrid",
      exp: 4,
      salary: "20000",
    },
    {
      title: "Senotor",
      description: "snator required",
      company_id: "876432687",
      posted_by: { name: "vishal", city: "bengaluru" },
      type: "hybrid",
      exp: 4,
      salary: "20000",
    },
    {
      title: "Senotor",
      description: "snator required",
      company_id: "876432687",
      posted_by: { name: "vishal", city: "bengaluru" },
      type: "hybrid",
      exp: 4,
      salary: "20000",
    },
    {
      title: "Senotor",
      description: "snator required",
      company_id: "876432687",
      posted_by: { name: "vishal", city: "bengaluru" },
      type: "hybrid",
      exp: 4,
      salary: "20000",
    },
    {
      title: "Senotor",
      description: "snator required",
      company_id: "876432687",
      posted_by: { name: "vishal", city: "bengaluru" },
      type: "hybrid",
      exp: 4,
      salary: "20000",
    },
    {
      title: "Senotor",
      description: "snator required",
      company_id: "876432687",
      posted_by: { name: "vishal", city: "bengaluru" },
      type: "hybrid",
      exp: 4,
      salary: "20000",
    },
  ];
  return (
    <>
      <div className="flex mt-5  w-full justify-center items-center">
        <div className="flex bg-gray-50 shadow-lg py-3 rounded-lg w-3/4 gap-2  justify-evenly items-end">
          <div className="w-1/3">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 .text-white"
            >
              Title/Role
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
              placeholder="Engineer"
              required
            />
          </div>
          <div className="w-44">
            <label
              htmlFor="experience"
              className="block mb-2 text-sm font-medium text-gray-900 .text-white"
            >
              Experience
            </label>
            <select
              id="experience"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
            >
              <option selected>all</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="30+">30+</option>
            </select>
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
        {data && data.map((e, i) => <JobCard key={i} job={e} />)}
      </section>
    </>
  );
};

export default Jobs_indi;
