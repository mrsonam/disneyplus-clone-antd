import './css/FavoriteDevices.css';
import { Space, Typography, Image, Row, Col } from 'antd';

const { Text } = Typography;

const FavoriteDevices = () => {
    return (
        <Space direction="vertical" className="devices">
            <Text className="title" strong>
                Available on your favorite devices
            </Text>
            <Row>
                <Col md={6} span={12} className="device">
                    <Image
                        className="deviceImage"
                        preview={false}
                        src="https://cnbl-cdn.bamgrid.com/assets/00fb59319fa715222100d8a84d11bc7e23a42970b4f413c9e85166d0cfba9346/original"
                    />
                    <Text strong className="deviceTitle">
                        TV
                    </Text>
                    <div className="deviceList">
                        <li>Amazon Fire TV</li>
                        <li>Android TV devices</li>
                        <li>AppleTV</li>
                        <li>Chromecast</li>
                        <li>LG TV</li>
                        <li>Roku</li>
                        <li>Samsung</li>
                        <li>Xfinity X1 & Flex</li>
                    </div>
                </Col>
                <Col md={6} span={12} className="device">
                    <Image
                        className="deviceImage"
                        preview={false}
                        src="https://cnbl-cdn.bamgrid.com/assets/d73b7c534afd2af2a454dbd47bd6c766c70e334ce8137084e9cd25c2644dd267/original"
                    />
                    <Text strong className="deviceTitle">
                        Computer
                    </Text>
                    <div className="deviceList">
                        <li>Chrome OS</li>
                        <li>MacOS</li>
                        <li>Windows PC</li>
                    </div>
                </Col>
                <Col md={6} span={12} className="device">
                    <Image
                        className="deviceImage"
                        preview={false}
                        src="https://cnbl-cdn.bamgrid.com/assets/66475056e769443ef9a491a48dfa44059c8964890ae9ef7c4f69f322693c59d8/original"
                    />
                    <Text strong className="deviceTitle">
                        Mobile & Tablet
                    </Text>
                    <div className="deviceList">
                        <li>Amazon Fire Tablets</li>
                        <li>Android Phones and Tablets</li>
                        <li>iPhone and iPad</li>
                    </div>
                </Col>
                <Col md={6} span={12} className="device">
                    <div className="deviceImage">
                        <Image
                            preview={false}
                            src="https://cnbl-cdn.bamgrid.com/assets/51b639d2ebe97ee175975c29d42a90b0e043713856db8e5d6d9fb87b2b3a48c0/original"
                        />
                    </div>
                    <Text strong className="deviceTitle">
                        Game Consoles
                    </Text>
                    <div className="deviceList">
                        <li>PS4</li>
                        <li>PS5</li>
                        <li>Xbox One</li>
                        <li>Xbox Series X</li>
                        <li>Xbox Series S</li>
                    </div>
                </Col>
            </Row>
        </Space>
    );
};

export default FavoriteDevices;
