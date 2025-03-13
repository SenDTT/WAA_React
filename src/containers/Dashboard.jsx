import { Outlet } from "react-router";
import Header from "./Header";

const Dashboard = () => {

    return (
        <>
            <Header />
            
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Dashboard;