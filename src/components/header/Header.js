import './Header.css';
import BackImg from './Back.png';
import SearchImg from './search.png';



function Header() {
    return (
        <header className="bg-gradient-to-b from-black">
            <div class="flex justify-between ">
                <div><img src={BackImg} alt="Back button " /></div>
                <div>Romantic Comedy</div>
                <div><img src={SearchImg} alt="Search button " /></div>
            </div>
        </header>
    )
}

export default Header
