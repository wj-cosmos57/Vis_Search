import { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Search() {
    const [ list, setList ] = useState([]);
    const [ name, setName ] = useState('');
    const movePage = useNavigate();

    const goResult = () => {
        movePage("/searchResult", { state: {
            pdfName: `${name}`
        } });
    };

    const addList = () => {
        setList((prevList) => {
            return [...prevList, name];
        })
        setName('');
        goResult();
    }
    const deleteList = () => {

    }
    return (
        <>
            <div>
                <img src="/public/Vis_logo.png" alt="no image" width="200"></img>
            </div>
            <div>
                <input
                    className="inputName"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value) }
                ></input>
                <button 
                    onClick={addList}
                >Search</button>
            </div>
            <div>
                <Link to="/">Home으로 돌아가기</Link>
            </div>
        </>
    )
}

export default Search;