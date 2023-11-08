import React from 'react';

const SkillsRow = ({data}) => {
    const name = data.familiar?(
    data.name
    ):(
        <span style={{color:"gray", align:"left"}}>{data.name}</span>
    );
    return (
        <tr>
            <td style={{align:"left", margin:"20px"}}>{name}</td>
        </tr>
    );
};

export default SkillsRow;