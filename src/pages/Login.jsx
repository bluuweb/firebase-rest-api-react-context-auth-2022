import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../context/UserContext";

const Login = () => {
    const [email, setEmail] = useState("test1@test.com");
    const [password, setPassword] = useState("123123");

    const { setUser, accessUser } = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await accessUser({ email, password });
        navigate("/dashboard");
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;
