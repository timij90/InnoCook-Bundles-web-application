// /services/index.js
import { jwtDecode } from 'jwt-decode';
import Router from 'next/router';

export function setToken(token) {
    localStorage.setItem('access_token', token);
}

export function getToken() {
    return localStorage.getItem('access_token');
}

export function readToken() {
    try {
        const token = getToken();
        console.log('Reading token:', token); // Add this line
        return token ? token : null; // Return the token string instead of decoding here
    } catch (err) {
        return null;
    }
}

export function decodeToken(token) {
    try {
        return jwtDecode(token);
    } catch (err) {
        console.error('Error decoding token:', err);
        return null;
    }
}

export function isAuthenticated() {
    const token = readToken();
    return token ? true : false;
}

export function removeToken() {
    localStorage.removeItem('access_token');
}

export async function registerUser(user, password, confirmPassword) {
    const { firstName, lastName, email } = user;
    const res = await my_fetch('https://inno-cook-bundles-backend.vercel.app/api/auth/register', {
        method: "POST",
        body: JSON.stringify({ username: `${firstName} ${lastName}`, email, password, confirmPassword }),
    });

    const data = await res.json();
    console.log('Response:', data); // Debugging line

    if (res.status === 200) {
        setToken(data.token);
        return true;
    } else {
        throw new Error(data.message);
    }
}

export async function authenticateUser(email, password) {
    const res = await my_fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.status === 200) {
        setToken(data.token);
        return data.token; // Return the token instead of true
    } else {
        throw new Error(data.message);
    }
}

export async function addFavorite(recipeId) {
    const res = await my_fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me/favorites`, {
        method: "POST",
        body: JSON.stringify({ recipeId }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
}

export async function deleteFavorite(recipeId) {
    const res = await my_fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me/favorites`, {
        method: "DELETE",
        body: JSON.stringify({ recipeId }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
}

export async function getFavorites() {
    const res = await my_fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me/favorites`, {
        method: "GET",
    });

    if (!res.ok) {
        throw new Error('Failed to fetch favorites');
    }

    return await res.json();
}

export async function getRecentlyViewed() {
    const res = await my_fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me/history`, {
        method: "GET",
    });

    if (!res.ok) {
        throw new Error('Failed to fetch history');
    }

    return await res.json();
}

export async function addRecentlyViewed(recipeId) {
    const res = await my_fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/search/id`, {
        method: "POST",
        body: JSON.stringify({ recipeId }),
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
    }
    const data = await res.json();
    console.log(data); // Debugging line
    return data;
}

export async function my_fetch(url, args) {
    const _args = {
        ...args,
        headers: {
            "content-type": "application/json",
            "x-auth-token": getToken()
        }
    }
    try {
        const response = await fetch(url, _args);

        if (response?.status === 401) {
            removeToken();
            Router.push("/login");
            return;
        }
        return response;
    } catch (error) {
        console.error(error.response);
        throw error;
    }
}


