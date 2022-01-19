import { Image, Space, Typography } from 'antd';
import './css/Mockup.css';

const { Text } = Typography;

const Mockup = () => {
    return (
        <div className="mockup">
            <div className="horizontal">
                <div className="img">
                    <Image
                        className="img"
                        preview={false}
                        src="https://cnbl-cdn.bamgrid.com/assets/dfb3abcfec7868ef0044c30ca1defc37488e4cd61cf6a9960e0bb1a848291cc7/original"
                    />
                </div>

                <div className="text">
                    <Text className="title" strong>Watch the way you want</Text>
                    <ul className="description">
                        <li>
                            Host virtual movie nights with GroupWatch. Pause,
                            rewind and react with up to six friends.
                            Subscription is required to join GroupWatch.
                        </li>
                        <li>
                            Download any movie or series and watch on-the-go.
                        </li>
                        <li>
                            Enjoy an ever-growing range of titles in stunning 4K
                            UHD and Dolby Atmos sound on compatible devices.
                        </li>
                        <li>Stream on up to four devices at the same time.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Mockup;
