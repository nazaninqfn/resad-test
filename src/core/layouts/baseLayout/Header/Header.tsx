import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import "./Header.scss";
import logo from "../../../../assets/images/logo-light.png";

const Header = () => {
  const location = useLocation();

  const getHeaderTitile = (): string => {
    switch (location?.pathname) {
      case "/dashboard":
        return "صفحه اصلی";
      case "/add-file":
        return "ثبت اطلاعات";
      case "/information":
        return "اطلاعات نگهبان";
      case "/location":
        return "محل‌های سرکشی";
      case "/refresh-user":
        return "ثبت مراجعین";
      case "/list-view":
        return "تخصیص وظایف";
      case "/work-space":
        return "پنل‌های مدیریتی";
      case "/chart":
        return "گزارشات";
      default:
        return "";
    }

    
  };
  //current date and time
  const date1 = new Date();
    const formattedDate = (date1.getFullYear() - 622);
    const now = new Date();
    const option = {
        day: "numeric",
        month: "long",
        weekday: "long",

    };

    const date = new Intl.DateTimeFormat("fa-IR", option).format(now);

    const [time,setTime] =useState(new Date())
    
    useEffect(()=>{
        setInterval(()=>setTime(new Date()),1000)
    },[])


    
  return (
    <div className="header d-flex align-items-center justify-content-between">
      <div className="header-titile">
        <h6>{getHeaderTitile()}</h6>

        <div className="">
            <FaRegCalendarCheck className="time" />
            <span className="time me-2">امروز {date}{formattedDate} ساعت {time.toLocaleTimeString()}</span>
        </div>
      </div>
      <div className="header-search">
        <span className="search-icon">
          <IoIosSearch />
        </span>
        <input placeholder="اینجا جستجو کنید" />
      </div>
      <span className="d-flex align-items-center ms-2">
        <span>
          <img src={logo} alt="lll" />
        </span>
        <h5>سامانه حراست و نگهبانی رصد </h5>
      </span>
    </div>
  );
};

export default Header;
