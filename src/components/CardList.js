import React from 'react';
import Cards from './card/Cards';

const CardList = ({data, filterText="", findText="", deleteCard, disableDelete=false, currentId}) => {
    return (
        <>
            {
                data.map((ele, i) => {
                    if(!ele.author.toLowerCase().includes(filterText)){
                        return;
                    }

                    if(findText !== "" && findText !== ele.author){
                        return;
                    }

                    if(currentId === ele.id){
                        return;
                    }

                    return (
                        <Cards key={i} data={ele} onClickCard={deleteCard} disableDelete={disableDelete}/>
                    )
                })
            }
        </>
    )
}

export default CardList;