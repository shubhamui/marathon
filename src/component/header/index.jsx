import { useState } from "react";
import { Menu } from "../menu";
import Wrapper from "./style"
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Link } from "react-router-dom";

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Wrapper className="header">
            {
                menuOpen && <Menu />
            }
            <button onClick={e => setMenuOpen(prev => !prev)}>
                {
                    menuOpen
                     ? <CloseTwoToneIcon />
                     : <MenuTwoToneIcon />
                }
            </button>
            <Link to="/">विराट वैश्य महापंचायत</Link>
        </Wrapper>
    )
}