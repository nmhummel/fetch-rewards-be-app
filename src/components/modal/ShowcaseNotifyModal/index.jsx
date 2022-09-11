import React from 'react';

const ShowcaseNotifyModal = ({ title, content, handleCloseModal }) => {
  return (
    <div className="absolute inset-x-0 bottom-0 z-50 px-0 pb-0 overflow-auto sm:fixed sm:px-4 sm:pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
      <div onClick={handleCloseModal} className="absolute inset-0 transition-opacity sm:fixed">
        <div className="absolute inset-0 bg-gray-500 opacity-75" />
      </div>

      <div
        className="transition-all transform bg-white shadow-xl sm:rounded-md sm:overflow-hidden sm:max-w-3xl sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="flex flex-col p-4">
          <div className="flex justify-center">
            <h3 className="text-lg font-bold leading-6">{title}</h3>
          </div>
          <div className="flex pt-6 pb-6">
            <span>{content}</span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleCloseModal}
              className="w-full px-10 py-2 font-bold text-gray-600 border-2 border-gray-600 border-solid rounded sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseNotifyModal;
