import React, { Dispatch, SetStateAction, useState } from "react";
interface NameModalProps {
  closeModal: Dispatch<SetStateAction<boolean>>;
  downloadFile: (fileName: string) => void;
}

const NameModal = ({ closeModal, downloadFile }: NameModalProps) => {
  const [fileName, setFileName] = useState("");
  return (
    <div className="flex bg-black/40 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative items-center w-96 my-6 mx-auto max-w-3xl">
        <div className=" rounded-lg shadow-lg relative p-5 flex flex-col  w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between  border-gray-300 rounded-t ">
            <p className="text-lg font-semibold">Save results file </p>
            <button
              className="border-0 float-right"
              onClick={() => closeModal(false)}
            >
              <span className="text-black  h-6 w-6 text-xl block py-0 rounded-full">
                x
              </span>
            </button>
          </div>
          <div className="relative py-6 flex-auto w-full">
            <form className="rounded  w-full">
              <label className="block text-black text-sm  mb-1">
                File Name
              </label>
              <input
                placeholder="file name"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="shadow appearance-none border focus:outline-none rounded w-full py-2 px-1 text-black"
              />
            </form>
          </div>

          <button
            name="download"
            disabled={!fileName.length}
            onClick={() => {
              downloadFile(fileName), closeModal(false);
            }}
            className="mt-10 disabled:opacity-45 disabled:hover:bg-emerald-500 text-white p-3 bg-emerald-500 rounded text-center focus:outline-none focus:ring focus:ring-slate-500 hover:bg-emerald-600 flex justify-center"
          >
            Download results file
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameModal;
