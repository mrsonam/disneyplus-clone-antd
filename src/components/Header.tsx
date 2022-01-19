import { Affix, Button } from 'antd';
import './css/Header.css';

const Header = () => {
    return (
        <div className="affix">
            <Button type="primary" className="login">
            Affix top
        </Button>
        </div>
        
    );
};

export default Header;
