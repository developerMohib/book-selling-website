

const Header = () => {
    return (
        <div>
            <ul className="flex gap-2 p-3 " > 
                <li> <a className="p-2 bg-base-300 border rounded-lg hover:bg-gray-300" href="">Home </a> </li>
                <li> <a className="p-2 bg-base-300 border rounded-lg hover:bg-gray-300" href="">Books</a> </li>
                <li> <a className="p-2 bg-base-300 border rounded-lg hover:bg-gray-300" href="">Cart</a> </li>
            </ul>
        </div>
    );
};

export default Header;