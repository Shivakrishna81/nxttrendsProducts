import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList} = props

  return (
    <div className="filters-group-container">
      <input type="search" placeholder="search" className="search" />
      <h1 className="chead">Category</h1>
      <ul className="category">
        {categoryOptions.map(each => (
          <li>{each.name}</li>
        ))}
      </ul>
      <h1 className="chead">Ratings</h1>
      <ul className="category">
        {ratingsList.map(each => (
          <li className="rat">
            <img src={each.imageUrl} alt={each.ratingId} className="star_img" />
            <p>& UP</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FiltersGroup
