import React from 'react';
import "../assets/styles/components/Categories.scss";

const Categories = ({children, title}) => (
    <div className="catergories">
        <h3 className="categories__title">{title}</h3>
        {children}
    </div>
)

export default Categories;