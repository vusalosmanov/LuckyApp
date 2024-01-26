import React, { useEffect } from 'react';
import { ClipLoader, MoonLoader } from 'react-spinners';
import { FadeLoader } from 'react-spinners'
const Loading = ({ loading }) => {
    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                document.querySelector('.loading-container').style.zIndex = 'initial';
            }, 1000);
        }
    }, [loading]);

    return (
        <div className="loading-container">
            <ClipLoader color={'#000000'} loading={loading} size={150} />
        </div>
    );
};

export default Loading;
