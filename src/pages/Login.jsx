import { useState } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../api/apiAuth";
import { useUserContext } from "../context/UserContext";

const Login = () => {
    const [email, setEmail] = useState("test1@test.com");
    const [password, setPassword] = useState("123123");

    const { setUser } = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser({
                email: email,
                password: password,
            });

            console.log(data);

            setUser(data);
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
        }
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
