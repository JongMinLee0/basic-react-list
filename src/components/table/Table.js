import TableBody from "./TableBody";
import AddButton from "../button/AddButton";

const Table = ({tableData, displayBtn = false, updateList}) => {
    return (
        <>
            <table>
                <TableBody tableData={tableData} updateList={updateList}/>
            </table>
            {displayBtn ? <AddButton /> : ""}
        </>
    )
}

export default Table;