// 배운 언어
import {useState} from 'react';
import React from 'react';
import SearchBox from './SearchBox';
import AvailableSkill from './AvailableSkill';
import datas from './datas';

const Skills = () => {
    const [inFamilyOnly, setInFamilyOnly] = useState(false);

    const changeInFamilyOnly = (e) => {
        setInFamilyOnly(e.target.checked);
    }
    return (
        <div>
            현재까지 배우고 사용해본 기술들입니다.
          <SearchBox 
            inFamilyOnly={inFamilyOnly}
            changeInFamilyOnly={changeInFamilyOnly}/>
            <AvailableSkill 
            datas={datas}
            inFamilyOnly={inFamilyOnly}/>
        </div>
    );
};

export default Skills;