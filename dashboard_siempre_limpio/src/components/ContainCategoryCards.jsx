import React from 'react'
import CategoryCard from './CategoryCard'
import { useState, useEffect } from 'react';


function ContainCategoryCards() {

  let [datesCategory, setDatesCategory] = useState([])

  const urlApiProducts = 'http://localhost:3030/api/products'

  useEffect(() => {
    fetch(urlApiProducts)
      .then(response => response.json())
      .then(data => setDatesCategory(data.countByCategory))
  }, [])


  return (
    <div className="col-lg-6 containerCategoryCards mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {datesCategory.map(d => {
              return <CategoryCard key={d.category.name} title={d.category.name} amount={d.category.count} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainCategoryCards