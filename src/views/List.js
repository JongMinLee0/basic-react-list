import React, { useEffect, useState } from "react/cjs/react.development";
import Cards from "../components/card/Cards";
import AuthorFilter from "../components/filter/AuthorFilter";
import AddForm from "../components/AddForm";
import useFetch from "../helper/api";
import logo from '../loading.gif';

const List = () => {
    const [filterText, setFilterText] = useState("");
    const [list, setList] = useState([]);
    const {response, loading} = useFetch({
        url : "https://picsum.photos/v2/list",
        target : null
    });

    // 데이터 받아온 후 리스트 초기화
    useEffect(()=>{
        setList(response)
    }, [response]);


    // 해당하는 아이디를 리스트에서 삭제한다
    const deleteCaard = (id) => {
        if(id > -1){
            let findIndex = list.findIndex(function(item, index) {
                if(parseInt(item.id) === id)
                    return true;
            });
            list.splice(findIndex, 1);
        }
        setList([...list]);
    }

    // 작성한 카드를 목록에 추가
    const addCard = (id, author, imageUrl) => {
        let findId = list.find((ele, index) => {
            if(ele.id === id){
                return true;
            }
        })
        if(findId !== undefined){
            alert('중복되는 id가 존재합니다.');
            return;
        }
        
        list.push({
            id: id,
            author: author,
            download_url: imageUrl
        });
        setList([...list]);
    }

    return (
        <>  
            {
                loading ? (
                    <img src={logo} alt="loading..." />
                ) : (
                    <>
                    <AuthorFilter filter={(text)=>setFilterText(text.toLowerCase())} />
                        <div className="wrapper">
                            {list.map((ele, i) => {
                                if(!ele.author.toLowerCase().includes(filterText)){
                                    return;
                                }
                                return (
                                    <Cards key={i} data={ele} onClickCard={deleteCaard}/>
                                )
                            })}
                        </div>
                        <AddForm addItem={addCard} />
                    </>
                )
            }
        </>
    )
}

export default List;