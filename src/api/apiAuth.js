import axios from "axios";

export const createUser = async ({ email, password }) => {
    const { data } = await axios.post(
        `${import.meta.env.VITE_AUTH_URL}/accounts:signUp?key=${
            import.meta.env.VITE_API_KEY_WEB
        }`,
        {
            email,
            password,
            returnSecureToken: true,
        }
    );
    return data;
};

export const loginUser = async ({ email, password }) => {
    const { data } = await axios.post(
        `${import.meta.env.VITE_AUTH_URL}/accounts:signInWithPassword?key=${
            import.meta.env.VITE_API_KEY_WEB
        }`,
        {
            email,
            password,
            returnSecureToken: true,
        }
    );
    return data;
};
