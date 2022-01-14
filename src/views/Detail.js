import React from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../components/card/CardList';
import Card from '../components/card/Cards';
import AuthorFilter from '../components/filter/AuthorFilter'
import '../css/Detail.css';

const Detail = ({list}) => {
    // path의 author를 가져온다
    const {findText, id} = useParams();
    let data = list.find((ele, index) => {
        if(ele.id === id){
            return true;
        }
    })

    return (
        <>
            <AuthorFilter disableSearch={true} />
            <div className="detail">
                <Card data={data} disableDelete={true} />
            </div>
            <div className="wrapper">
                <CardList data={list} findText={findText} disableDelete={true} currentId={id} />
            </div>
        </>
    )
}

export default Detail;