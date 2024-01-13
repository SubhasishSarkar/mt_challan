import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <main className="bg-[#001932]">
                <RouterProvider router={router} />
            </main>
        </div>
    );
}

export default App;
