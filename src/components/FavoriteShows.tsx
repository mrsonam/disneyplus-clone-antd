import { Col, Row, Typography, Image } from 'antd';
import './css/FavoriteShows.css';

const { Title, Text } = Typography;

const FavoriteShows = () => {
    return (
        <div className="favoriteShows">
            <Text className='title'>Disney+ has your favorite stories</Text><br/>
            <Text className='description'>
                An unprecedented collection of the world's most beloved movies
                and TV series streaming now on Disney+
            </Text>
            <Row gutter={[24, 24]}>
                <Col md={8} span={12}><Image preview={false} src='https://cnbl-cdn.bamgrid.com/assets/55856e5f183d5aa87f64c18470d6227381ea56c47de5e415d1afac073cba8574/original'/></Col>
                <Col md={8} span={12}><Image preview={false} src='https://cnbl-cdn.bamgrid.com/assets/8aa88c099c3f1b1725f7a6770487c942d9ac1bb99bbe96af8715ec771f4a45f6/original'/></Col>
                <Col md={8} span={12}><Image preview={false} src='https://cnbl-cdn.bamgrid.com/assets/1c31bfabce9a9977b524f090923377f4b0a3016537fdb6ea7592dab3e87f5c4f/original'/></Col>
                <Col md={8} span={12}><Image preview={false} src='https://cnbl-cdn.bamgrid.com/assets/0b2b144caa6df79709d171894570e804514c8f200a811a4dd58cd6bbb8e7f3a5/original'/></Col>
                <Col md={8} span={12}><Image preview={false} src='https://cnbl-cdn.bamgrid.com/assets/bc9a846d71941b9e0f0b12b613f4d1fd923eb0078f63caf78e9848bb4c1165b5/original'/></Col>
                <Col md={8} span={12}><Image preview={false} src='https://cnbl-cdn.bamgrid.com/assets/8138b7e8336a96bff3d2a7adf4144945720ee5d3aff4ebe763ccb156335af6fe/original'/></Col>
                <Col md={8} span={12}><Image preview={false} src='https://cnbl-cdn.bamgrid.com/assets/b1d8d5f40cbedf8e5c7ffae8d4e931037ee2c7ac79b586b24a32b352758e71e4/original'/></Col>
                <Col md={8} span={12}><Image preview={false} src='https://cnbl-cdn.bamgrid.com/assets/eaae3a6c628011823990144877d47bd3ca77e878011f64f079bae2b328581755/original'/></Col>
                <Col md={8} span={12} className='last'><Image preview={false} src='https://cnbl-cdn.bamgrid.com/assets/9962a79416ab16f18b80e4ea494012d265e122305a272f246c92a627b23391f9/original'/></Col>
            </Row>
        </div>
    );
};

export default FavoriteShows;
