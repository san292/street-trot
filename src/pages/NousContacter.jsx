import React from 'react';

const NousContacter = () => {
  return (
    <div className="relative w-80  md:w-96  mx-auto min-h-screen mt-40 md:mt-20  p-2 ">
      <form className="">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">
              Tous les champs sont obligatoires.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide  text-gray-700 hover:border-red-500 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  hover:border-red-500 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  hover:border-red-500 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};
//     <div classNameName="container mx-auto my-20 w-1/3 border focus:border-zinc-5000 bg-white">
//       <div classNameName="p-5 space-y-5 shadow-xl">
//         <h4 className="text-center text-2xl">Contact Us</h4>

//         <form>
//           <div className="grid grid-cols-2 gap-5  ">
//             <input
//               type="text"
//               className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-zinc-500"
//               placeholder="First Name"
//             />
//             <input
//               type="text"
//               className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-zinc-500"
//               placeholder="Last Name"
//             />
//             <input
//               type="email"
//               className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-zinc-500 col-span-2"
//               placeholder="Email"
//             />
//             <input
//               type="tel"
//               className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-zinc-500 col-span-2"
//               placeholder="Phone"
//             />
//             <textarea
//               cols="10"
//               rows="5"
//               className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-zinc-500 col-span-2"
//               placeholder="Ecrivez votre message..."
//             ></textarea>
//           </div>
//           <div className="text-center">
//             <input
//               type="submit"
//               value="Envoyez votre message"
//               className="focus:outline-none mt-5 bg-zinc-500 px-4 py-2 text-white font-bold w-[200px] rounded-lg"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

export default NousContacter;
