/* eslint-disable react/prop-types */
import PopUpBg from "../PopUpBg";
import axios from "axios";
import { useSelector } from "react-redux";

const Component = ({
  SetUserLocation,
  toggle,
  user_form_data,
  handle_change_user_form,
  share_contact,
  toggle_contact,
  GeoLoader,
  SetGeoLoader,
  form_handler,
  UserLocation,
  set_user_form_data,
}) => {
  const { user } = useSelector((e) => e.user_reducer);

  // user location from the co-ords
  const ProvideLocation = async () => {
    SetGeoLoader(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
        await axios.get(apiUrl).then((response) => {
          const address = response.data.address;
          let city = `${address.city} - ${address.country} `;
          SetUserLocation(city);
          set_user_form_data((prev) => ({ ...prev, city }));
          SetGeoLoader(false);
          return location;
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <form
      onSubmit={form_handler}
      className="w-full flex flex-col p-5 pop_anime rounded-md bg-white h-[35rem] overflow-scroll"
    >
      <div className="flex justify-between items-center w-full">
        <span className="font-bold text-gray-900 ">Edit Your Details</span>
        <button
          onClick={toggle}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center .hover:bg-gray-600 .hover:text-white"
          data-modal-hide="default-modal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="flex gap-3 items-center mt-5">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 .text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="first_name"
            name="name"
            value={user_form_data?.name}
            onChange={handle_change_user_form}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-gray-900 .text-white"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={user_form_data?.gender}
            onChange={handle_change_user_form}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
          >
            <option value="He/Him">He/Him</option>
            <option value="She/Her">She/Her</option>
            <option value="Transgender">Transgender</option>
            <option value="NOT">Prefer not to say</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 .text-white"
          >
            Website / Portfolio
          </label>
          <input
            type="text"
            id="first_name"
            name="website"
            value={user_form_data?.website}
            onChange={handle_change_user_form}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
            placeholder="website.com"
            required
          />
        </div>
        <div className="relative flex-col items-center flex z-0  ">
          {!user.city ? (
            <span className="text-red-500 mb-2 text-[0.8em]">
              *Location to find best near you
            </span>
          ) : (
            ""
          )}
          <button
            disabled={GeoLoader}
            onClick={ProvideLocation}
            type="button"
            className="text-gray-900 w-44 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 gap-2 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center .focus:ring-[#F7BE38]/50 mr-2 mb-2"
          >
            {!GeoLoader ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {UserLocation ? UserLocation : "add location"}
          </button>
        </div>
      </div>
      <div>
        <div className="mt-4">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 .text-white"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="contact"
            value={user_form_data?.contact}
            onChange={handle_change_user_form}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
            placeholder="123-45-678"
            required
          />
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="bio"
          className="block mb-2 text-[0.8em] font-medium text-gray-900 .text-white"
        >
          Your Bio
        </label>
        <textarea
          id="bio"
          rows="2"
          name="bio"
          maxLength={100}
          value={user_form_data?.bio}
          onChange={handle_change_user_form}
          className="block p-2.5 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="mt-5">
        <label
          htmlFor="about"
          className="block mb-2 text-[0.8em] font-medium text-gray-900 .text-white"
        >
          About you
        </label>
        <textarea
          id="about"
          rows="4"
          name="about"
          maxLength={1000}
          value={user_form_data?.about}
          onChange={handle_change_user_form}
          className="block p-2.5 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
          placeholder="Write Brief about yourself..."
        ></textarea>
      </div>

      <div className="mt-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            onChange={()=>set_user_form_data((prev)=>({...prev, share_contact:!user.share_contact}))}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 .peer-focus:ring-blue-800 rounded-full peer .bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all .border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 .text-gray-300">
            Enable this to Share your contact number{" "}
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 w-fit mt-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 .bg-blue-600 .hover:bg-blue-700 focus:outline-none .focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

const EditPopup = PopUpBg(Component);

export default EditPopup;
