const CategoryRow = ({category}) => {
    return (
        <tr>
             <th style={{color:"#f5ae9a",
                        fontSize:"25px",
                        textDecoration:"underline",
                        textShadow:"1px 1px 1px #a5a9b1",
                        }} colSpan="2"> {category}</th>
        </tr>
    );
};

export default CategoryRow;