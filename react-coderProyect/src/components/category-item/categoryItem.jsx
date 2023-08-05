import './categoryItem.css'

const CategoryItem = ({ onSelectCategory, type, name}) => {
    return (
        <button key={123} onClick={onSelectCategory} type={type} className='categoryContainer'>
            <p className='categoryName'>{name}</p>
        </button>
    )
}

export default CategoryItem;