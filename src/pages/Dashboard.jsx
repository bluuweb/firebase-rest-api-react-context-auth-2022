import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
    const { token } = useUserContext();

    return (
        <>
            <h1>Dashboard</h1>
            <h2>Shhhh: {token}</h2>
        </>
    );
};
export default Dashboard;
