import { FaAngleLeft } from "react-icons/fa6";
import { IManitor } from "../../../core/interface";

const ManitorGuarding = ({
    manitorData
}: {
    manitorData: IManitor
}) => {
    return (
        <div className='manitor box-item'>
            <div className='title-box d-flex align-items-center justify-content-between'>
                <h6>مانیتورینگ نگهبان</h6>
                <div className="more">
                    <FaAngleLeft />
                </div>
            </div>
            <div className="box-body">
                <div className="d-flex flex-column align-items-center user-info justify-content-center">
                    <h4>{manitorData?.averageTime}</h4>
                    <span>میانگین زمان شیفت‌ها در هفته‌ی اخیر</span>
                </div>
                <div className="d-flex flex-wrap mt-3">
                    <div className="col-6">
                        <div>
                            <span>تعداد کل مراجعین</span>
                            <p>{manitorData?.allResiver} نفر</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <span>ثبت خروج</span>
                            <p>{manitorData?.upsertExit}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <span>تعداد شیفت‌ها</span>
                            <p>{manitorData?.countShift} شیفت</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <span>شیفت‌های در حال انجام</span>
                            <p>{manitorData?.loadShift} شیفت</p>
                        </div>
                    </div>
                </div>
                <div className="box-footer">
                <div className="d-flex justify-content-between align-items-center">
                    <span id="ppa">پرسنل فعال</span>
                    <div className="d-flex align-items-center">
                        <span className="ms-3">{manitorData?.persnol?.length} +</span>
                        {
                            manitorData?.persnol?.map(item => (
                                <div className="img-box" key={item?.id}>
                                    <img src={item?.image} width={38} alt=""/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            </div>
            
            
        </div>
    )
}

export default ManitorGuarding
