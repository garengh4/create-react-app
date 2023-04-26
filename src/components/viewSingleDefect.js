import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ViewSingleDefect() {
    let [defect, setDefect] = useState({});
    let params = useParams();

    useEffect(() => {
        axios.get("http://localhost:4000/defects/" + params.id)
            .then(response => {
                setDefect(response.data);
            }).catch(err => {

            })
    },[])
    return(
        <h3>{JSON.stringify(defect)}</h3>
    )
}