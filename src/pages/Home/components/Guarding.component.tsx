import { FaAngleLeft } from "react-icons/fa6";
import { IconButton } from "@mui/material";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";
import { IGuarding } from "../../../core/interface";

const Guarding = ({
    guardingData
}:{
    guardingData: IGuarding
}) => {
    return (
        <div className='guarding box-item'>
            <div className='title-box d-flex align-items-center justify-content-between'>
                <h6>نمایه نگهبانی</h6>
                <div className="more">
                    <span>مشاهده همه</span>
                    <FaAngleLeft />
                </div>
            </div>
            <div className="box-body">
                <div className="d-flex align-items-center user-info">
                    <img src={guardingData?.user?.image} width={50} alt=""/>
                    <div className="d-flex flex-column me-2">
                        <div className="mb-1">
                            <span className="name">{guardingData?.user?.nikname}</span>
                            <span className="box-active me-1"> {guardingData?.user?.active ? 'فعال': 'غیر فعال'}</span>
                        </div>
                        <span>{guardingData?.user?.job}</span>
                    </div>
                </div>
                <div className="d-flex flex-wrap mt-3">
                    <div className="col-6">
                        <div>
                            <span>آخرین حضور</span>
                            <p>{guardingData?.lastPresence}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <span>پست کاری</span>
                            <p>{guardingData?.postJob}</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            <span>محل سکونت</span>
                            <p>{guardingData?.address}</p>
                        </div>
                    </div>
                </div>
                <div className="box-footer">
                <div className="call-info d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <span>تلفن تماس : </span>
                        <span className="me-1">{guardingData?.phone}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <IconButton>
                            <IoChatbubbleEllipsesOutline />
                        </IconButton>
                        <IconButton>
                            <PiPhoneCall />
                        </IconButton>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Guarding
