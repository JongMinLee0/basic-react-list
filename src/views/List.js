import React, { useState } from "react";
import CardList from "../components/CardList";
import AddForm from "../components/form/AddForm";
import AuthorFilter from "../components/filter/AuthorFilter";
import '../css/Cards.css';

const List = ({list, setList}) => {
    const [filterText, setFilterText] = useState("");

    // 해당하는 아이디를 리스트에서 삭제한다
    const deleteCard = (id) => {
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
            <AuthorFilter filter={(text)=>setFilterText(text.toLowerCase())} />
            <div className="wrapper">
                <CardList data={list} filterText={filterText} deleteCard={deleteCard} />
            </div>
            <AddForm addItem={addCard} />
        </>
    )
}

export default List;