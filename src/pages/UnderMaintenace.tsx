// import { Cog } from "lucide-react";

function UnderMaintenace() {
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 bg-black text-black">
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-black select-none">
      <div className="text-center space-y-6 p-8 max-w-md">
        {/* <Cog className="w-16 h-16 mx-auto text-blue-500 animate-spin" /> */}
        <h1 className="text-4xl font-bold">Under Maintenance</h1>
        <p className="text-xl">
          We're currently updating our site to bring you an even better
          experience.
        </p>
        {/* <p className="text-lg text-gray-600"> */}
        <p className="text-lg text-black">
          We'll be back online shortly. Thank you for your patience!
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default UnderMaintenace;
