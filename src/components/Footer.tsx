import { Image, Select, Typography } from 'antd';
import './css/Footer.css';
import { GlobalOutlined } from '@ant-design/icons';

const { Link, Text } = Typography;
const { Option } = Select;

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <Image
                    preview={false}
                    src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
                />
            </div>
            <div className="links">
                <GlobalOutlined color='secondary'/>
                <Select
                    defaultValue="english"
                    bordered={false}
                    className="select"
                >
                    <Option value="english">English</Option>
                    <Option value="spanish">Spanish</Option>
                </Select>
                <Link type="secondary">Subscriber Agreement</Link>
                <Link type="secondary">Privacy Policy</Link>
                <Link type="secondary">Your California Privacy Rights</Link>
                <Link type="secondary">
                    Do Not Sell My Personal Information
                </Link>
                <Link type="secondary">Children's Online Privacy Policy</Link>
                <Link type="secondary">Closed Captioning</Link>
                <Link type="secondary">Interest-Based Ads</Link>
                <Link type="secondary">Supported Devices</Link>
                <Link type="secondary">Help</Link>
                <Link type="secondary">Gift Disney+</Link>
                <Link type="secondary">About Us</Link>
                <Link type="secondary">Disney+ Partner Program</Link>
                <Link type="secondary">The Disney Bundle</Link>
            </div>
            <Text type="secondary" className="copyright">
                &copy; Disney. All Rights Reserved.
            </Text>
        </footer>
    );
};

export default Footer;
