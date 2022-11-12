import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
    const { user } = useUserContext();
    console.log("LayoutPrivate", user);

    if (user === null) {
        return <p>Loading user...</p>;
    }

    return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};
export default LayoutPrivate;
