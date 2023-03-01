const FiltersContainer = ({ children }) => {
    return (
        <div className="focus:shadow-black flex items-center justify-between p-4 bg-yellow-300 border-b border-solid border-black rounded-2xl">
            {children}
        </div>
    )
}

const ItemsLeft = ({ total = 0}) => {
    return (
        <p className="text-black text-sm">
            {total} Things left ...
        </p>
    )
}

const FilterButtonContainer = ({children}) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
}

const FilterButton = ({ action, active, filter }) => {
    console.log(active);
    return (
        <button onClick={action} className={` hover:text-black cursor-pointer transition-all duration-300 ease-in-out `
            + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-white' : 'text-black')}>    
        {filter}</button>     
    ) 
}
export { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton }