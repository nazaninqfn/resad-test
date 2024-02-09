import { FaAngleLeft } from "react-icons/fa6";
import { IManagmentClient } from "../../../core/interface";

const ManagmentClients = ({
managmentClientData,
}: {
managmentClientData: IManagmentClient;
}) => {
return (
    <div className="managment-clients box-item">
    <div className="title-box d-flex align-items-center justify-content-between">
        <h6>مدیریت مراجعین</h6>
        <div className="more">
        <span>مشاهده همه</span>
        <FaAngleLeft />
        </div>
    </div>
    <div className="box-body">
        <div className="d-flex w-100 flex-column list-model">
        {managmentClientData?.users?.map((item) => (
            <div className="d-flex justify-content-between" key={item?.id}>
            <span className={`${!item?.active ? "text-muted" : ""}`}>
                {item?.nikname}
            </span>
            <span className={`${!item?.active ? "text-muted" : ""}`}>
                {item?.createdAt}
            </span>
            </div>
        ))}
        </div>
        <div className="box-footer d-flex justify-content-center pb-2 align-items-center">
        <span>مشاهده تمام {managmentClientData?.users?.length} نفر</span>
        </div>
    </div>
    </div>
);
};

export default ManagmentClients;
