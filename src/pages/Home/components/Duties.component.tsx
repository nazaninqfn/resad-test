import { FaAngleLeft } from "react-icons/fa6";
import { IDuties } from "../../../core/interface";

const Duties = ({
    dutiesData
}: {
    dutiesData?: IDuties
}) => {
    return (
        <div className='duties box-item'>
            <div className='title-box d-flex align-items-center justify-content-between'>
                <h6>تخصیص وظایف</h6>
                <div className="more">
                    <span>مشاهده همه</span>
                    <FaAngleLeft />
                </div>
            </div>
            <div className="box-body">
                <div className="d-flex align-items-center user-info">
                    <div className="d-flex flex-column">
                        <div className="mb-1">
                            <span className="name">وظایف تخصیص یافته </span>
                        </div>
                        <span>{dutiesData?.dutiesTitle}</span>
                    </div>
                </div>
                <div className="d-flex flex-wrap mt-3">
                    {
                        dutiesData?.users?.map(item => (
                            <div className="mx-1" key={item?.id}>
                                <img src={item?.image} width={50} alt="" />
                            </div>
                        ))
                    }
                    <div className="me-2 box-dotted d-flex align-items-center justify-content-center p-2">
                        <FaAngleLeft />
                    </div>
                </div>
                <div className="d-flex w-100 flex-column list-model">
                    {
                        dutiesData?.duties?.map((item) => (
                            <div className="d-flex justify-content-between" key={item?.id}>
                                <span>{item?.title}</span>
                                <span>{item?.time}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="d-flex justify-content-center  align-items-center">
                    <span>مشاهده تمام {dutiesData?.duties?.length} وظیفه</span>
                </div>
            </div>
            {/* <div className="box-footer d-flex justify-content-center  align-items-center">
            </div> */}
        </div>
    )
}

export default Duties
