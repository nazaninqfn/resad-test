import { FaAngleLeft } from "react-icons/fa6";
import { IUserPanel } from "../../../core/interface";

const UserPanel = ({
    userPanel
}: {
    userPanel: IUserPanel
}) => {
    return (
        <div className='user-panel box-item'>
            <div className='title-box d-flex align-items-center justify-content-between'>
                <h6>ثبت‌نام پنل کاربر</h6>
                <div className="more">
                    <FaAngleLeft />
                </div>
            </div>
            <div className="box-body">
                <div className="d-flex justify-content-between align-items-center">
                    <span>لیست پنل‌های کاربران</span>
                    <div className="d-flex align-items-center">
                        <span className="ms-3">{userPanel?.panelList?.length} +</span>
                        {
                            userPanel?.panelList?.map(item => (
                                <div className="img-box" key={item?.id}>
                                    <img src={item?.image} width={38} alt="1"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="d-flex  flex-column align-items-start mt-3">
                    <span>آخرین پنل‌های ایجاد شده</span>
                    <div className="d-flex w-100 flex-column list-model mt-2">
                        {
                            userPanel?.lastCreatedPanel?.map(item => (
                                <div className="d-flex justify-content-between" key={item.id}>
                                    <span>{item?.nikname}</span>
                                    <span>{item?.createdAt}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <span>نیاز به پنل کاربری جدید دارید؟</span>
                <div className="box-footer">
                <div className="call-info d-flex align-items-center py-2 justify-content-between">
                    <div className="d-flex align-items-center">
                        <span>ثبت‌نام پنل کاربری جدید </span>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaAngleLeft />
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default UserPanel
