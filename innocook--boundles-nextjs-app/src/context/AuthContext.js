import { createContext, useContext, useState, useEffect } from 'react';
import { readToken, removeToken, setToken, decodeToken } from '@/services'; // Import decodeToken function

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authState, setAuthState] = useState({
        token: null,
        username: ''
    });

    useEffect(() => {
        const token = readToken();
        if (token) {
            const decoded = decodeToken(token);
            setAuthState({
                token: token,
                username: decoded.user.username // Assuming the decoded token contains the username
            });
        }
    }, []);

    const login = (token) => {
        const decoded = decodeToken(token);
        setAuthState({
            token: token,
            username: decoded.user.username // Assuming the decoded token contains the username
        });
    };

    const logout = () => {
        removeToken();
        setAuthState({
            token: null,
            username: ''
        });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
