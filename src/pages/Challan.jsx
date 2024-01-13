import React, { useRef } from "react";
import RungtaChallan from "../components/RungtaChallan";
import ReactPrint from "react-to-print";
function Challan() {
    const ref = useRef();
    return (
        <div>
            <div ref={ref}>
                <RungtaChallan />
                <div className="border-2 border-white border-dashed border-b-black"></div>
            </div>
            <div className="flex justify-center">
                <ReactPrint trigger={() => <button className="border-2 border-blue-500 bg-blue-400 text-white  font-bold py-2  px-4 rounded">Print</button>} content={() => ref.current} documentTitle={"MS_Challan" + Date.now()} />
            </div>
        </div>
    );
}

export default Challan;
