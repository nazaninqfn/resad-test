import { useLocation, useNavigate } from "react-router-dom";
import userProfile from "../../../../assets/images/mis.jpg";
import { lastMessageFakeData, menuListFakeData } from "../../../utils/fakeData";
import { FaAngleLeft } from "react-icons/fa6";
import chatImage from '../../../../assets/images/call/icons8_chat_bubble_1.png'
import openImage from '../../../../assets/images/call/icons8_open_envelope.png'
import ringerImage from '../../../../assets/images/call/icons8_ringer_volume_2.png'
import whastappImage from '../../../../assets/images/call/icons8_whatsapp.png'
import "./MenuBar.scss";
import { Drawer } from "@mui/material";
import { useRightDrawerStyles } from "../../../hooks/useDrawerStyle";
const MenuBarMobile = ({
    drawerIsOpen,
    handleDrawerClickedBranch
}: {
    drawerIsOpen: boolean,
    handleDrawerClickedBranch: () => void
}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = (href: string) => {
        navigate(href)
    }
    return (
        <Drawer
            dir="rtl"
            anchor="left"
            open={drawerIsOpen}
            onClose={handleDrawerClickedBranch}
        >
            <div className="menu-bar thin-scrollbar d-flex flex-column">
                <div className="user-info d-flex justify-content-center align-items-center">
                    <div className="img-user">
                        <img src={userProfile} width={50} height={50} />
                    </div>
                    <div className="user-title">
                        <p>میثم خرمپور</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <span className="box-info">5</span>
                            <span>اعلان های خوانده شده</span>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="menu-list w-100">
                    <h6>منو اصلی</h6>
                    <div className="d-flex flex-column w-100 pe-4 mt-4">
                        {
                            menuListFakeData.map(item => (
                                <div onClick={() => handleNavigate(item?.url)} className={`${location?.pathname.includes(item?.url) ? 'selected-box' : ''} d-flex w-100 align-items-center menu-item`} key={item.id}>
                                    {
                                        location?.pathname.includes(item?.url) &&
                                        <>
                                            <div className="triangle top-triangle"></div>
                                            <div className="triangle bottom-triangle"></div>
                                        </>
                                    }
                                    {
                                        location?.pathname.includes(item?.url) ?
                                            <img src={item.icon2} />
                                            :
                                            <img src={item.icon} />
                                    }
                                    <div className="d-flex justify-content-start w-100">
                                        <span className="me-3">{item?.title}</span>
                                        {
                                            item?.bage &&
                                            <span className="menu-bage me-4">{item?.bage}</span>
                                        }
                                        {
                                            item?.moreIcon &&
                                            <span className="me-5">{item?.moreIcon}</span>
                                        }

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="last-message">
                    <div className="divider"></div>
                    <div className="d-flex message-title align-items-center justify-content-between w-100 mt-3">
                        <h6>آخرین پیام‌های دریافتی</h6>
                        <div className="alarm-box">
                            <FaAngleLeft />
                        </div>
                    </div>
                    <div className="last-message-box p-3 d-flex w-100 flex-column w-100 mt-3">
                        {
                            lastMessageFakeData?.map(item => (
                                <div key={item?.id} className="last-message-item align-items-center d-flex w-100 flex-column py-2">
                                    <div className="d-flex w-100 justify-content-between align-items-center mb-2">
                                        <div className="d-flex align-items-center">
                                            <img src={item?.image} width={35} />
                                            <span className="me-2">{item?.name}</span>
                                        </div>
                                        <span>{item?.time}</span>
                                    </div>
                                    <p>{item?.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="emergency-call">
                    <div className="divider"></div>
                    <div className="d-flex emergency-title align-items-center justify-content-between w-100 mt-3">
                        <h6>تماس اضطراری با حراست</h6>
                    </div>
                    <div className="emergency-box d-flex w-100 justify-content-around mt-3">
                        <div><img src={ringerImage} width={20} title="تماس" /></div>
                        <div><img src={chatImage} width={20} title="گفتگو" /></div>
                        <div><img src={openImage} width={20} title="پیغام ها" /></div>
                        <div><img src={whastappImage} width={20} title="واتس اپ" /></div>
                    </div>
                </div>

            </div>
        </Drawer>

    );
};

export default MenuBarMobile;
