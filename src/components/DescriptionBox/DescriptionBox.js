import React from 'react';
import './DescriptionBox.scss'

const DescriptionBox = () => {
    return (
        <div className='desc-box'>
            <div className="desc-nav">
                <div className="desc-nav-box">Description</div>
                <div className="desc-nav-box fade">Reviews (80)</div>
            </div>
            <div className="desc-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi numquam architecto ducimus illo quasi hic doloremque rem eveniet suscipit obcaecati itaque, accusantium, laudantium rerum consequatur nam, sapiente corporis maiores dolorum.</p>
            </div>
        </div>
    );
};

export default DescriptionBox;