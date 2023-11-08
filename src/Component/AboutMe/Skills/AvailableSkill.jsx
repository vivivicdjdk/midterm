import React from 'react';
import CategoryRow from './CategoryRow';
import SkillsRow from './SkillsRow';

const AvailableSkill = ({datas, inFamilyOnly}) => {
    const rows = [];
    let lastCategory = null;
    datas.forEach((data) => {
        if(inFamilyOnly && !data.familiar) return;

        if(data.category !== lastCategory) {
            rows.push(<CategoryRow category={data.category} key={data.category}/>
            );
        }
        rows.push(<SkillsRow data = {data} key={data.name} />);
        lastCategory = data.category;
    })
    return (
        <table style={{align:"left",margin:"50px"}}>
            {rows}
        </table>
    );
};

export default AvailableSkill;