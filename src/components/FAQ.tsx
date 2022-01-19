import { Typography, Collapse } from 'antd';
import './css/FAQ.css';

const { Text } = Typography;
const { Panel } = Collapse;

const FAQ = () => {
    return (
        <div className="faq">
            <Text className="title" strong>
                Freuently Asked Questions
            </Text>
            <Collapse className="accordian">
                <Panel
                    className="accordianTitle"
                    header="What is Disney+?"
                    key="1"
                >
                    <Text className="accordianText">
                        Disney+ is the streaming home of Disney, Pixar, Marvel,
                        Star Wars, National Geographic, and more. From new
                        releases to your favorite classics and exclusive
                        Originals, there's something for everyone, all ad free.
                    </Text>
                </Panel>
            </Collapse>
            <Collapse className="accordian">
                <Panel
                    className="accordianTitle"
                    header="Where can I watch Disney+?"
                    key="2"
                >
                    <Text className="accordianText">
                        The Disney+ app is available on mobile devices, web
                        browsers, game consoles, set-top boxes, and smart TVs.
                        For a complete list of supported devices, click here.
                    </Text>
                </Panel>
            </Collapse>
            <Collapse className="accordian">
                <Panel
                    className="accordianTitle"
                    header="How much does Disney+ cost?"
                    key="3"
                >
                    <Text className="accordianText">
                        Access unlimited entertainment with Disney+ for
                        $7.99/month or $79.99/year.
                    </Text>
                </Panel>
            </Collapse>
            <Collapse className="accordian">
                <Panel
                    className="accordianTitle"
                    header="What's includede with Disney+?"
                    key="4"
                >
                    <Text className="accordianText"></Text>
                </Panel>
            </Collapse>
            <Collapse className="accordian">
                <Panel
                    className="accordianTitle"
                    header="What is the Disney Bundle"
                    key="5"
                >
                    <Text className="accordianText">
                        The Disney Bundle includes Disney+, ESPN+, and the Hulu
                        plan that fits you best for a discounted price. You can
                        save 25%, compared to the monthly cost of subscribing to
                        all 3 services separately! Choose between The Disney
                        Bundle with Hulu (ad-supported) for $13.99/month or with
                        Hulu (No Ads) for $19.99/month. Learn More.
                        <br /> With Disney+, you get new releases, classics,
                        series, and Originals from the creators at Disney,
                        Pixar, Marvel, Star Wars, and Nat Geo.
                        <br /> With Hulu, you can enjoy over 80,000 episodes of
                        every kind of TV, including hit series, breakthrough
                        Hulu Originals, and kids TV.
                        <br /> And with ESPN+, you can stream thousands of
                        events, top Originals, the complete 30 for 30 library,
                        and more. <br />
                        Get all three and start streaming now!
                    </Text>
                </Panel>
            </Collapse>
            <Collapse className="accordian">
                <Panel
                    className="accordianTitle"
                    header="What is Premier Access?"
                    key="1"
                >
                    <Text className="accordianText">
                        With Premier Access, you can watch the latest Disney
                        releases at the same time they are in open theaters and
                        before they become available to all Disney+ subscribers
                        for $29.99. Once you have Premier Access to a movie, you
                        can watch it as many times as you want on any platform
                        where Disney+ is available, as long as you are an active
                        Disney+ subscriber.
                    </Text>
                </Panel>
            </Collapse>
        </div>
    );
};

export default FAQ;
