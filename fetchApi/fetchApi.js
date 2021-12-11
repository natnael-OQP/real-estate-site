import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '504fd0403dmsh222f9dd76bdd42fp1afcf7jsn525f2aeca63c'
        }
    });

    return data;
}

