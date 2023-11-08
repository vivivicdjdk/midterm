import React from 'react';

const SearchBox = (props) => {
    const {inFamilyOnly, changeInFamilyOnly} = props;
    return (
        <form>
            <p><input
            type="checkbox"
            checked={inFamilyOnly}
            onChange={changeInFamilyOnly} />
            {'  '}Only show familiar skills
            </p>
        </form>
    );
};

export default SearchBox;