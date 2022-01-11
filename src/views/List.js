import { useEffect, useState } from "react/cjs/react.development";
import Table from "../components/table/Table";
import useFetch from "../helper/api";
import logo from '../loading.gif';

const List = () => {
    const [list, setList] = useState([]);
    const {response, loading, error} = useFetch({
        url : "https://picsum.photos/v2/list",
        target : null
    });

    useEffect(()=>{
        setList(response)
    }, [response]);

    return (
        <>
            {
                loading ? (
                    <img src={logo} alt="loading..." />
                ) : (
                    <>
                        <Table 
                            tableData={list} 
                            displayBtn={true} 
                            updateList={(updateList) => {
                                setList(updateList);
                            }} 
                        />
                    </>
                )
            }
        </>
    )
}

export default List;