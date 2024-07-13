import React from 'react'

function CategoryCard({ title, amount }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {title}
                </div>
                <span id='cardCategorySpan'>{amount}</span>
            </div>
        </div>
    )
}

export default CategoryCard