import Classes from "./Sidebar.module.css"
import Logo from '../../assets/icons/logo.svg';
import {MENUS} from '../../assets/menus/menu.utils.js';


const Sidebar = ()=>{
    return (
        <aside className={Classes.aside}>
            <a href="#home" className={Classes.nav__logo}>
                <img src={Logo} alt="" />
            </a>
            <nav className="nav">
                <div className={Classes.nav__menu}>
                    <ul className={Classes.nav__list}>
                        {
                            
                            MENUS.menu.map((item)=>(
                                <li className={Classes.nav__item} key={item.key}>
                                    <a href={item.url} className={Classes.nav__link}>
                                        <i className={item.logo} onClick={()=>{console.log("item is here",item)}}></i>
                                    </a>
                                </li>
                            ))
                            
                        }
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;
