

const TableRows = ({data, index}) => {
    const imageStyle = {
        width: 100,
        heigth: 100
    }

    return (
        <>
            <tr id={index}>
                <td>{data.author}</td>
                <td>{data.url}</td>
                <td>
                    <img src={data.download_url} alt={data.author} style={imageStyle} />
                </td>
            </tr>
        </>
    )
}

export default TableRows;