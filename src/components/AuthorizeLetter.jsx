import React, { useRef } from "react";
import ReactPrint from "react-to-print";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdPrint } from "react-icons/md";

function AuthorizeLetter({ data, setGenerate }) {
    const ref = useRef();
    return (
        <div className="conatiner p-5">
            <div className="border-2 border-black ">
                <div className="pl-[10rem] pr-5 pt-[60%]" ref={ref}>
                    <div>
                        <h2 className="font-bold text-center text-lg">AUTHORISED LETTER</h2>
                        <p>
                            {data.owner} {data.woso} of {data.hf}, Address : {data.address}, by cast hindu by profession bussiness, do hearby authorise to my driver {data.driver} son of {data.driverFather}, Address : {data.driverAddress}
                        </p>
                        <p>
                            Being driving License No. : {data.license} vide registration no : {data.truck} in my consent.
                        </p>
                        <p>
                            He will undertake to make the full responsibility of my said car. This authorised letter will be valid from {data.from} to {data.to}.
                        </p>
                    </div>
                    <div className="flex justify-between pt-14">
                        <div>
                            <p>Sign of driver</p>
                        </div>
                        <div>
                            <p>Sign of vehicle owner</p>
                            <p className="pt-10">Identified by me</p>
                            <p className="pt-20">Advocate</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5 flex justify-center gap-5">
                <button
                    className="border-2 border-blue-500 bg-blue-400 text-white  font-bold py-2  px-4 rounded flex justify-center items-center gap-2"
                    onClick={(e) => {
                        e.stopPropagation();
                        setGenerate(false);
                    }}
                >
                    <IoArrowBackOutline />
                    Back
                </button>
                <ReactPrint
                    trigger={() => (
                        <button className="border-2 border-blue-500 bg-blue-400 text-white  font-bold py-2  px-4 rounded flex justify-center items-center gap-2">
                            <MdPrint />
                            Print
                        </button>
                    )}
                    content={() => ref.current}
                    documentTitle={"MS_Challan" + Date.now()}
                />
            </div>
        </div>
    );
}

export default AuthorizeLetter;
