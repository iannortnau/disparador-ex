import Body from "./components/structural/Body";
import Icon from "./components/ornament/Icon";
import {useEffect, useState} from "react";
import Loading from "./components/ornament/Loading";
import axios from "axios";
import InputIcon from "./components/ornament/InputIcon";
import RegisterKey from "./components/ornament/RegisterKey";

function App() {
    const [load, setLoad] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const [key, setKey] = useState(null);

    useEffect(function () {
        getLocalKey();

    }, []);

    function getLocalKey(){
        const response = window.localStorage.getItem("key");

        if(response !== null){
            setKey(response);
            authenticateKey(response).then(r => {});
        }else {
            setLoad(false);
        }
    }

    async function authenticateKey(key){
        const response = await axios.get("http://82.180.160.211:3000/validation/"+key);

        console.log(response);
    }

    return (
        <Body>
            <Icon/>
            {load&&
                <Loading/>
            }
            {!load&&!authenticated&&
                <RegisterKey/>
            }
            {!load&&authenticated&&
                <p>válido</p>
            }


        </Body>
    );
}

export default App;
