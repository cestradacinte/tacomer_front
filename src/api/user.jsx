/* eslint-disable no-unused-vars */
import { BASE_API } from '../utils/constants'

export const loginApi = async (formValue) => {
const url = `${BASE_API}/api/auth/login`;
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValue)
    };
    const response = await fetch(url, params);

    if (response.status !== 200) {
        throw "Error al iniciar sesion";
    }

    const result = await response.json();

    return result;
    
}

export const userData = async(token) => {
    const response = await fetch(`${BASE_API}/api/auth/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    if(!response.ok) {
        throw new Error("No se pudo obtener el usuario");
    }
    return await response.json();
};
