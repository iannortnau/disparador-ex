import Body from "./components/structural/Body";
import Icon from "./components/ornament/Icon";
import {useContext, useEffect, useState} from "react";
import Loading from "./components/ornament/Loading";
import ValidateKey from "./components/ornament/ValidateKey";
import {GlobalContext} from "./context/GlobalContext";
import Trigger from "./components/ornament/Trigger";

function App() {
    const {
        load,
        setLoad,
        authenticated,
        setAuthenticated,
        validateKey
    } = useContext(GlobalContext);

    useEffect(function () {
        validateKeyFromLocal().then(r => {});
    },[])

    async function validateKeyFromLocal() {
        const response = window.localStorage.getItem("key");

        if (response === null) {
            setLoad(false);
            console.log("chave local não encontrada");
        } else {
            console.log("chave local encontrada");
            const resp = await validateKey(response);
            if (resp.status) {
                setLoad(false);
                setAuthenticated(true);
            }else{
                setLoad(false);
            }
        }
    }

    return (
        <Body>
            <Icon/>
            {load&&
                <Loading/>
            }
            {!load&&!authenticated&&
                <ValidateKey/>
            }
            {!load&&authenticated&&
                <Trigger/>
            }
        </Body>
    );
}

export default App;


