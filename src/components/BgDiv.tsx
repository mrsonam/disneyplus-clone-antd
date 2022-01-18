import { Button, Image, Space, Typography } from 'antd';
import './css/BgDiv.css';

const { Text, Link } = Typography;

const BgDiv = () => {
    return (
        <div className="background">
            <Space direction="vertical" className="content" size="large">
                <svg
                    className="svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 276 64"
                >
                    <defs>
                        <radialGradient
                            id="radial-gradient"
                            cx="-160.71"
                            cy="416.47"
                            r="2.71"
                            gradientTransform="matrix(31.48, 0, 0, -31.48, 5234.3, 13141.86)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.06" stop-color="#fff" />
                            <stop offset="0.08" stop-color="#cbffff" />
                            <stop offset="0.1" stop-color="#96ffff" />
                            <stop offset="0.12" stop-color="#68ffff" />
                            <stop offset="0.14" stop-color="#43ffff" />
                            <stop offset="0.17" stop-color="#25ffff" />
                            <stop offset="0.19" stop-color="#1ff" />
                            <stop offset="0.21" stop-color="#04ffff" />
                            <stop offset="0.23" stop-color="aqua" />
                            <stop
                                offset="1"
                                stop-color="blue"
                                stop-opacity="0"
                            />
                        </radialGradient>
                    </defs>
                    <path
                        d="M185.83,42.65v1.49a.58.58,0,0,1-.58.58h-7.07c0,.37,0,.69,0,1a54.3,54.3,0,0,1-.3,6,.59.59,0,0,1-.58.53h-1.53a.55.55,0,0,1-.54-.56v0a50.87,50.87,0,0,0,.31-5.91c0-.31,0-.64,0-1h-7a.58.58,0,0,1-.58-.58V42.65a.57.57,0,0,1,.57-.58h6.9a51.6,51.6,0,0,0-.92-7.11.49.49,0,0,1,.38-.57h1.76a.53.53,0,0,1,.52.44,55,55,0,0,1,.9,7.25h7.17A.58.58,0,0,1,185.83,42.65Z"
                        fill="#fff"
                        fill-rule="evenodd"
                    />
                    <path
                        d="M92.12,23.11h0Zm-.47.05a1.62,1.62,0,0,1-.53-.11,1.23,1.23,0,0,0,.55.13h.14Zm0,0a1.62,1.62,0,0,1-.53-.11,1.23,1.23,0,0,0,.55.13h.14Z"
                        fill="none"
                    />
                    <path
                        d="M176.21,30.88a49.37,49.37,0,0,0-86.79-8.76.58.58,0,0,0-.07.51.6.6,0,0,0,.36.37l1.29.43a.72.72,0,0,0,.82-.28,46.76,46.76,0,0,1,81.74,8.05.68.68,0,0,0,.62.42h1.53a.54.54,0,0,0,.54-.54.71.71,0,0,0,0-.2Zm-85-7.81a.22.22,0,0,1-.11,0l.1,0h0Z"
                        fill="url(#radial-gradient)"
                    />
                    <path
                        d="M108.08,33.08s.37-.55.68-1a17.71,17.71,0,0,1,2.34-2.48l.51-.42s-.43,0-.67.09a5.16,5.16,0,0,0-1.86,1c-.7.6-1.47,1.58-1.12,2.45l.12.29Zm3.9,1.05a7.59,7.59,0,0,0,3.12-.93c1-.53,2.35-1.57,2.2-2.78a1,1,0,0,0-.63-.83,1.46,1.46,0,0,0-1.18,0,3.55,3.55,0,0,0-.94.4,14.28,14.28,0,0,0-3.47,3.06c-.19.25-.39.54-.54.73s-.17.23-.16.26a4.9,4.9,0,0,0,1.6.08Zm-2.82,2.06a6.38,6.38,0,0,0-.36.63,1.14,1.14,0,0,1-.27.31.58.58,0,0,1-.82,0,2,2,0,0,1-.63-1.4,3.75,3.75,0,0,0,0-.67,4.18,4.18,0,0,0-.57-1,3.85,3.85,0,0,1-.39-1.41,4.68,4.68,0,0,1,1.48-3.38,9.63,9.63,0,0,1,3.28-2.24,6.41,6.41,0,0,1,4.21-.39,3.13,3.13,0,0,1,1.31.89,1.12,1.12,0,0,0,.18.2,1.3,1.3,0,0,0,.33.07,3.26,3.26,0,0,1,1.26.6,2.43,2.43,0,0,1,.88,1.41,3.87,3.87,0,0,1-1.21,3.26,11.92,11.92,0,0,1-4.32,3,7.09,7.09,0,0,1-2.75.49c-.26,0-.53-.09-.79-.11a4,4,0,0,1-.66-.17c-.06-.05-.13-.09-.16-.07Zm1.51,2.62a.66.66,0,0,1,.2.06,1.75,1.75,0,0,1,1,1.38A42,42,0,0,1,112.4,46c0,.91.06,1.8.1,2.7a10.83,10.83,0,0,1-.07,2.49,1.16,1.16,0,0,1-.47.71,2.2,2.2,0,0,1-1.28.12c-.87-.18-1.15-.74-1.28-1.6a43.82,43.82,0,0,1,0-7.78A17.34,17.34,0,0,1,110,39.5c.1-.26.31-.77.69-.69ZM83.86,41.89s-1.28.09-2.17.19a24.36,24.36,0,0,0-4.47.92c-.36.14-1.11.44-1.18.82a1.31,1.31,0,0,0,.45,1c.16.19,1,1,1.29,1.25a22.37,22.37,0,0,0,4.69,2.85c.53.22,1.41.53,1.41.53s-.06-2.5,0-5c0-1.31,0-2.6,0-2.6Zm23.62,1a11.21,11.21,0,0,1-.13,2.12,9.47,9.47,0,0,1-.4,1.38,16,16,0,0,1-.71,1.44,12.05,12.05,0,0,1-2,2.48,17,17,0,0,1-8.59,3.37,21.86,21.86,0,0,1-6.41-.19l-1.81-.38a7.11,7.11,0,0,1,0,.74,2.74,2.74,0,0,1-.18.62,1,1,0,0,1-.77.55A2.36,2.36,0,0,1,85.1,55a1.89,1.89,0,0,1-1-1.64c-.1-.58-.2-1.59-.2-1.59L83,51.28a23.91,23.91,0,0,1-3.59-2.19c-.63-.5-1.25-1-1.85-1.56a10.24,10.24,0,0,1-2-2.45,2.36,2.36,0,0,1-.22-2.2c.44-1.1,2-1.93,3.11-2.4a25.69,25.69,0,0,1,4.29-1.31c.48-.07,1.23-.2,1.28-.23l0,0s.06-1.13,0-1.52.29-3,.39-3.52a6.38,6.38,0,0,1,.5-1.73.46.46,0,0,1,.63-.05c1.17.73,1.53,3.27,1.62,4.56,0,.78.08,2,.08,2s1.35,0,2.18,0a21.27,21.27,0,0,1,2.53.27,17.7,17.7,0,0,1,4.37,1.25,4.47,4.47,0,0,1,2.21,2.23,2.3,2.3,0,0,1-.19,2.12A3,3,0,0,1,96.06,46a3.73,3.73,0,0,1-1.61-.37.27.27,0,0,1,0-.39h0s.51-.29.79-.44a1.64,1.64,0,0,0,.37-.26c.24-.21.45-.44.43-.7s-.4-.55-.75-.69a27.74,27.74,0,0,0-6.49-1.29l-1.5-.06.19,8.72,1.3.23c.32.05,1.72.17,2.09.18a19.2,19.2,0,0,0,8.55-1.4,8.94,8.94,0,0,0,3-2.1,6.1,6.1,0,0,0,1.44-4.52,11.76,11.76,0,0,0-2.52-5.41c-2.76-3.55-7.5-6.48-11.66-8.19a37.21,37.21,0,0,0-13-2.92,22,22,0,0,0-5,.37l-.54.15a1.42,1.42,0,0,0-.4.17l-.06.06a.74.74,0,0,0,.15.08c.14.06.71.09,1,.15a1,1,0,0,1,.65.38.38.38,0,0,1,0,.48c-.3.36-1.38.3-1.87.22s-1.12-.23-1.24-.67a2,2,0,0,1,.37-1.48,3.61,3.61,0,0,1,2.4-1.72,24.69,24.69,0,0,1,5.06-.79A29.43,29.43,0,0,1,87,25.21a46.27,46.27,0,0,1,6.11,2.38,47.41,47.41,0,0,1,4.46,2.49c.36.23,2.46,1.77,2.79,2.05.68.55,1.57,1.35,2.21,2a21.14,21.14,0,0,1,3.55,4.63c.18.36.32.71.55,1.13a9.34,9.34,0,0,1,.48,1.24c.06.25.14.61.15.62a6.14,6.14,0,0,1,.17,1.15Zm14.52.63.14,0a11.12,11.12,0,0,1,2.82.67,2.92,2.92,0,0,1,1.52,1.44,4.07,4.07,0,0,1-2,5.7A7.61,7.61,0,0,1,122,52a9.14,9.14,0,0,1-4.83-.86,5.72,5.72,0,0,1-2.45-2.09,2,2,0,0,1,.1-2.22c.75-1,2.38-1.27,3.6-1.23a15.32,15.32,0,0,1,3.5.64,6.32,6.32,0,0,1,1.31.61.42.42,0,0,1,.14.42c-.2.62-1.71.95-2.14,1-1.16.18-1.77-.26-3.09-.78a4.35,4.35,0,0,0-1.11-.3c-.6-.06-1.32.11-1.44.76,0,.34.34.66.64.79a4.74,4.74,0,0,0,2,.42,10.29,10.29,0,0,0,6.07-1.5.92.92,0,0,0,.46-.71s0-.36-.16-.4h0s-.1-.12-.16-.18a2.58,2.58,0,0,0-.71-.4,17.17,17.17,0,0,0-4.31-.8c-1.14-.1-2.93-.24-3.35-.31a4.92,4.92,0,0,1-1.31-.32,1.63,1.63,0,0,1-.88-1,3.14,3.14,0,0,1,.49-2.35c1.13-1.62,3.77-2.23,5.74-2.48s5-.24,6.87.76c.29.15.44.3.38.61a1.53,1.53,0,0,1-1.09,1.12,12.45,12.45,0,0,1-2.21.27,36.86,36.86,0,0,0-7.15.65,1.63,1.63,0,0,0-.55.23c-.34.37.63.47.83.52l.14,0,4.76.56ZM129.05,52c-.91-.33-1.12-1.8-1.16-2.55a23.35,23.35,0,0,1,1.31-8.07c.23-.65.57-1.71,1.29-1.65a1.65,1.65,0,0,1,1.14.83c.77,1.09,1.53,2.2,2.28,3.32s1.36,2.14,2,3.11a1.26,1.26,0,0,0,.25.31c.12.1.23.1.27,0a14.28,14.28,0,0,0,0-1.51c-.05-.39-.07-.7-.12-1a30.43,30.43,0,0,0-.67-3.29c-.28-1-.61-2.13-.85-3.14a4.08,4.08,0,0,1-.15-1,.51.51,0,0,1,.76-.53c.93.33,2.16,2.35,2.52,3,.12.23.6,1.43.72,1.77a14.9,14.9,0,0,1,.72,3.51,9.76,9.76,0,0,1-.5,4.2,4.54,4.54,0,0,1-.91,1.34,2.1,2.1,0,0,1-2.22.45,11.6,11.6,0,0,1-2.23-3c-.73-1.27-2-3.76-2.17-4a.43.43,0,0,0-.2-.15c-.07,0-.1.13-.12.23-.13.73-.21,4.11-.21,4.21a16.89,16.89,0,0,1-.22,2.65c-.1.45-.21.82-.63,1a1,1,0,0,1-.87-.06Zm12.58-.44a4.17,4.17,0,0,1-.37-.36,6.68,6.68,0,0,1-.41-.67c-.06-.13-.1-.22-.14-.33a4.11,4.11,0,0,1-.13-2.36,11.3,11.3,0,0,1,.69-1.87.48.48,0,0,0,0-.17c0-.15-.22-1.12-.23-1.44,0-.48.35-.82,1-.88l.13,0c.25-.06.42-.54.55-.92l.48-1.35c-.41-.1-.81-.21-1.21-.34a1.76,1.76,0,0,1-1-.84c-.25-.51-.08-.79.45-.95.19-.07,1.72-.36,2.2-.43l1.75-.23c.5-.06,2.78-.33,3.51-.31a2.87,2.87,0,0,1,2.48,1.43c.35.5.59,1.1.06,1.42-.81.49-3.43.53-3.91.53H145.7l-.53,1.79,2.93,0a3.49,3.49,0,0,1,.65.05c.54.12.73.53.75,1.13s-.1,1-.66,1.1c-.28.05-3.51.07-4,.12l-.56.07s-.23.61-.43,1.23-.38,1.29-.38,1.29h.3a3.38,3.38,0,0,0,.63-.07c1-.17,2.45-.39,3.65-.58.65-.1,1-.15,1.31.28a1.79,1.79,0,0,1,.47,1.15c0,.43-.31.71-.71,1a12,12,0,0,1-5,2.2,3.35,3.35,0,0,1-1.59-.17,3,3,0,0,1-.57-.27s-.24-.14-.33-.21ZM162,42.79a17.72,17.72,0,0,0-2.41,2.85c-.69,1-1.33,2.1-2,3a10.36,10.36,0,0,0-.52.92,2.07,2.07,0,0,0,.84,0,7.19,7.19,0,0,0,2.71-1.26,5.78,5.78,0,0,0,2-3.1,3.33,3.33,0,0,0-.19-2.28.32.32,0,0,0-.44-.05Zm-6.6,10s-.26.77-.45,1.38c-.34,1-1.07,3.86-1.25,4.73-.25,1.3-1,4.71-1,4.78a.45.45,0,0,1-.2.21c-.3.17-.42.11-.79-.08a3.55,3.55,0,0,1-1.24-1c-.71-.92-.54-2.66-.4-3.68a32,32,0,0,1,2.34-8.67.15.15,0,0,0,0-.13,6.91,6.91,0,0,1-.65-2.86c0-2.78,1.6-5.52,3.39-7.73.13-.17,1-1.22,1.41-1.2s.47.49.41.88a11.88,11.88,0,0,1-1.73,3.67,11,11,0,0,0-1.18,2.82,7.87,7.87,0,0,0-.19,1.08c0,.3.08.68.08.68s1.13-1.59,1.88-2.56c.4-.53.7-.89,1-1.27.66-.73,1.35-1.44,2-2.13a7.59,7.59,0,0,1,2-1.53,1.77,1.77,0,0,1,2,0,4.58,4.58,0,0,1,1.64,3.37,8.15,8.15,0,0,1-.78,4.26,8.8,8.8,0,0,1-3.16,3.42,8.52,8.52,0,0,1-4.72,1.55l-.48,0Z"
                        fill="#fff"
                    />
                    <path
                        d="M247,42.33s-.06.54-.15,1.14a2.42,2.42,0,0,1-2.72,2.05h-5.85l-.66,5.23h-4.66L234,42.33Zm-27.49,0h10.24c1.46,0,3.32.63,2.95,3.27a20.58,20.58,0,0,1-.55,3.21c-.78,1.86-3.1,1.92-3.43,1.94H218.41l.46-3.65h9.07l.2-1.58h-6.31C220.25,45.52,219.13,44.53,219.47,42.33Zm-.94,0-.4,3.19h-7.81l-.2,1.58h7.81l-.47,3.65H205l1.07-8.42Zm29.38,0h4.66l-1.06,8.42h-4.67l1.07-8.42Zm8.85,0h4.66l-1.06,8.42H255.7l1.06-8.42Zm-50-5.33h12.47l-.49,3.86H206.25l.49-3.86Zm37.4,0c2.6,0,3.3,1.49,3.09,3.14,0,.29-.08.63-.09.71H219.66s.07-.53.14-1.13c.19-1.58,1.5-2.65,3.49-2.72h20.85Zm14.6,0c1.61,0,3.28.74,2.95,3.27-.06.45-.07.59-.07.59H248.09l.49-3.86Z"
                        fill="#fff"
                        fill-rule="evenodd"
                    />
                    <path
                        d="M272.2,42.14l.44-3.43h-3.71l-.43,3.43H265l-.42,3.41h3.48L267.64,49h3.7l.45-3.49h3.49l.43-3.41Z"
                        fill="#f9b300"
                        fill-rule="evenodd"
                    />
                    <path d="M0,34H49.19V51.22H0Z" fill="none" />
                    <path
                        d="M30.15,51.22h3.91V34H30.14V51.22Zm-6.89-4.91a1.08,1.08,0,0,1-1,1.11H19.94a1.09,1.09,0,0,1-1.05-1.11V39.37H15v7.28c0,3,1.8,4.55,4.44,4.55h3.83c2.44,0,3.92-1.87,3.92-4.55V39.37H23.24S23.26,46.09,23.26,46.31Zm22-6.94v6.94a1.09,1.09,0,0,1-1,1.11H42a1.09,1.09,0,0,1-1-1.11V39.37H37v7.28c0,3,1.8,4.55,4.45,4.55h3.82c2.44,0,3.92-1.87,3.92-4.55V39.37Zm-37.55,0H5.24a2.91,2.91,0,0,0-1.32.24V34H0V51.2H3.9V44.28a1.09,1.09,0,0,1,1-1.11H7.22a1.09,1.09,0,0,1,1,1.11v6.94h3.92v-7.5c0-3.14-2-4.35-4.44-4.35Z"
                        fill="#1ce783"
                    />
                </svg>
                <Button type="primary" className="btn">
                    GET THE DISNEY BUNDLE
                </Button>
                <Text className="streamText">
                    Stream now.<Link underline>Terms Apply</Link>
                </Text>
                <Image
                    preview={false}
                    src="https://cnbl-cdn.bamgrid.com/assets/8349a1f652e69bf1c3685a888092435110056a55e27b4eac3289e10fcb232978/original"
                    className="companies"
                />
                <Link underline className="signupText">
                    Sign up for Disney+ only.
                </Link>
            </Space>
        </div>
    );
};

export default BgDiv;
