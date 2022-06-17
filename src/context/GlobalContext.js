import {createContext, useState} from "react";
import axios from "axios";
import moment from "moment";

export const GlobalContext = createContext({});

export function GlobalProvider(props){
    const [apiUrl,setApiUrl] = useState("http://82.180.160.211:3000/validation/");
    const [load, setLoad] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [key, setKey] = useState("");

    async function validateKey(key){
        try{
            const response = await axios.get(apiUrl+key);

            console.log("conectado | "+moment().format("DD/MM/YYYY(HH:mm:ss)"));
            return {status: true, data: response.data}
        }catch (e){
            console.log("erro[1] | "+moment().format("DD/MM/YYYY(HH:mm:ss)"));
            return {status: false, data: e.response.data.message};
        }

    }

    return (
        <GlobalContext.Provider
            value={{
                apiUrl,
                setApiUrl,
                load,
                setLoad,
                authenticated,
                setAuthenticated,
                key,
                setKey,
                validateKey
            }}>
            {props.children}
        </GlobalContext.Provider>
    );
}
