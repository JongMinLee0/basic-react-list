import TableRows from "./TableRows";
import {
    SwipeableList,
    SwipeableListItem,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';


const TableBody = ({tableData, updateList}) => {

    const trailingActions = (index) => (
        <TrailingActions>
            <button onClick={() => {
                if(index > -1){
                    tableData.splice(index, 1);
                }
                updateList(tableData);
            }}>Delete</button>
        </TrailingActions>
    );

    return (
        <tbody>
            {tableData.map((ele, i) => {
                return (
                    <SwipeableList>
                        <SwipeableListItem
                            trailingActions={trailingActions(i)}
                        >
                            <TableRows key={i} index={i} data={ele} />
                        </SwipeableListItem>
                    </SwipeableList>
                )
            })}
        </tbody>
    )
}


export default TableBody;