import React, { useState } from "react";
import AuthorizeLetter from "./AuthorizeLetter";

function AuthorizeForm() {
    const [form, setForm] = useState({
        owner: "",
        woso: "",
        hf: "",
        address: "Vill - Shimultala, Krishnagar, PS - Kotwali, Dist - Nadia",
        driver: "",
        driverFather: "",
        driverAddress: "",
        license: "",
        truck: "",
        from: "",
        to: "",
    });
    const [generate, setGenerate] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.name);
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleGenerate = (e) => {
        e.preventDefault();
        setGenerate(true);
    };
    return (
        <>
            {generate ? (
                <AuthorizeLetter data={form} setGenerate={setGenerate} />
            ) : (
                <form onSubmit={handleGenerate} className="p-2">
                    <div className="conatiner p-5 flex flex-wrap gap-5">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Owner
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="owner" value={form.owner} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Wife / Son
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="woso" value={form.woso} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Husband / Father name
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="hf" value={form.hf} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Address
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="address" value={form.address} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Driver name
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="driver" value={form.driver} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Driver's father name
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="driverFather" value={form.driverFather} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Driver Address
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="driverAddress" value={form.driverAddress} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                License No.
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="license" value={form.license} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Truck No.
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="truck" value={form.truck} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                From date
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="from" value={form.from} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                To date
                            </label>
                            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="to" value={form.to} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="border-2 border-blue-500 bg-blue-400 text-white  font-bold py-2  px-4 rounded">Generate</button>
                    </div>
                </form>
            )}
        </>
    );
}

export default AuthorizeForm;
