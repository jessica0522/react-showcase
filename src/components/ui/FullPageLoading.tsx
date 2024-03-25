import React from "react";

const FullPageLoading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-200/85 grid place-content-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default FullPageLoading;
