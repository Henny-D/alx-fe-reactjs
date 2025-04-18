
function UserProfile() {
    return (
      <div className="hover:shadow-xl bg-gray-100 sm:p-4 md:p-8 p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        <img src="https://via.placeholder.com/150" alt="User" className="hover:scale-110 transition-transform duration-300 ease-in-out rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36"/>
        <h1 className="sm:text-lg md:text-xl text-blue-800 my-4  hover:text-blue-500">John Doe</h1>
        <p className="sm:text-sm text-gray-600 md:text-base ">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;