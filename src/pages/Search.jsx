import { useState, useEffect } from "react";
import './Search.css';

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

    const activeEnter = (e) => {
        if(e.key === 'Enter') {
            addList();
        }
    }

    useEffect( () => {
        //컴포넌트가 마운트될 때 로컬 스토리지에서 검색 기록을 로드
        const savedList = localStorage.getItem("searchHistory");
        if (savedList && savedList !== "undefined") {
            try {
                setList(JSON.parse(savedList));
            } catch (e) {
                console.error("Error parsing search history:", e);
            }
        }
    }, []);

    const addList = () => {
        const updatedList = [...list, name];
        setList(updatedList);

        //로컬 스토리지에서 검색 기록을 저장
        localStorage.setItem("searchHistory", JSON.stringify(updatedList))

        setName('');
        goResult();
    }

    const deleteList = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);

        //로컬 스토리지에서 검색 기록을 저장
        localStorage.setItem("searchHistory", JSON.stringify(updatedList))        
    }

    const deleteAllList = () => {
        const updatedList = [];
        setList(updatedList);

        //로컬 스토리지에서 검색 기록을 저장
        localStorage.setItem("searchHistory", JSON.stringify(updatedList)) 
    }

    return (
        <div className="search-app">
            <div className="">
                <img src="/public/Vis_logo.png" alt="no image" width="200"></img>
            </div>
            <div>
                <input
                    className="inputName"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value) }
                    onKeyDown={(e) => activeEnter(e)}
                ></input>
                <button 
                    onClick={addList}
                >Search</button>
            </div>
            <div>
                <Link to="/">Home으로 돌아가기</Link>
            </div>
            <div>
                <h3>- 검색 기록 -</h3>
                <ul>
                    {
                        list.map( (item, index) => (
                            <li key={index}>
                                {item}
                                <button onClick={() => {deleteList(index)}}>Delete</button>
                            </li>
                        ))
                    }
                    <button onClick={deleteAllList}>DeleteAllList</button>
                </ul>
            </div>
        </div>
    )
}

export default Search;