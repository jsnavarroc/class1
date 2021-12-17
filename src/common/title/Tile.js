import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import useHook from './hooks/useExpleHook';



const Title = (props) => {
    const { title } = props;
    // const {data} = useHook();

    return (
        <h1>{ title }</h1>
    )
}


export default Title;
    
Title.propTypes = {
    title: PropTypes.string,
};

