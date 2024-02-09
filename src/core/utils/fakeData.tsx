import homeLogo from "../../assets/images/menubar/icons8_home_2.png";
import addFileLogo from "../../assets/images/menubar/icons8_add_file.png";
import cvLogo from "../../assets/images/menubar/icons8_cv.png";
import userFolderLogo from "../../assets/images/menubar/icons8_user_folder.png";
import locationLogo from "../../assets/images/menubar/icons8_user_location.png";
import refreshShieldLogo from "../../assets/images/menubar/icons8_refresh_shield.png";
import listViewLogo from "../../assets/images/menubar/icons8_list_view.png";
import workspaceLogo from "../../assets/images/menubar/icons8_workspace.png";
import passedLogo from "../../assets/images/menubar/icons8_test_passed.png";
import logoutLogo from "../../assets/images/menubar/Union 98.png";

import homeLogo2 from "../../assets/images/icons8_home_2.png";
import addFileLogo2 from "../../assets/images/icons8_add_file.png";
import cvLogo2 from "../../assets/images/icons8_cv.png";
import userFolderLogo2 from "../../assets/images/icons8_user_folder.png";
import locationLogo2 from "../../assets/images/icons8_user_location.png";
import refreshShieldLogo2 from "../../assets/images/icons8_refresh_shield.png";
import listViewLogo2 from "../../assets/images/icons8_list_view.png";
import workspaceLogo2 from "../../assets/images/icons8_workspace.png";
import passedLogo2 from "../../assets/images/icons8_test_passed.png";
import logoutLogo2 from "../../assets/images/Union 129.png";

import lastMessageImage1 from "../../assets/images/mr.jpg";
import lastMessageImage2 from "../../assets/images/mr.jpg";
import userInfo from "../../assets/images/mis.jpg";
import userInfo2 from "../../assets/images/mr.jpg";

import { FaAngleLeft } from "react-icons/fa6";

export const menuListFakeData = [
  {
    id: 1,
    title: "صفحه نخست",
    url: "/dashboard",
    icon: homeLogo,
    icon2: homeLogo2,
    moreIcon: null,
    bage: null,
  },
  {
    id: 2,
    title: "ثبت اطلاعات",
    url: "/add-file",
    icon: addFileLogo,
    icon2: addFileLogo2,
    moreIcon: <FaAngleLeft />,
    bage: null,
  },
  {
    id: 3,
    title: "اطلاعات نگهبان",
    url: "/information",
    icon: cvLogo,
    icon2: cvLogo2,
    moreIcon: null,
    bage: null,
  },
  {
    id: 5,
    title: "محل‌های سرکشی",
    url: "/location",
    icon: locationLogo,
    icon2: locationLogo2,
    moreIcon: null,
    bage: null,
  },
  {
    id: 6,
    title: "ثبت مراجعین",
    url: "/refresh-user",
    icon: refreshShieldLogo,
    icon2: refreshShieldLogo2,
    moreIcon: null,
    bage: null,
  },
  {
    id: 7,
    title: "تخصیص وظایف",
    url: "/list-view",
    icon: listViewLogo,
    icon2: listViewLogo2,
    moreIcon: null,
    bage: 6,
  },
  {
    id: 8,
    title: "پنل‌های مدیریتی",
    url: "/work-space",
    icon: workspaceLogo,
    icon2: workspaceLogo2,
    moreIcon: null,
    bage: null,
  },
  {
    id: 9,
    title: "گزارشات",
    url: "/chart",
    icon: passedLogo,
    icon2: passedLogo2,
    moreIcon: null,
    bage: null,
  },
  {
    id: 10,
    title: "خروج از سامانه",
    url: "/logout",
    icon: logoutLogo,
    icon2: logoutLogo2,
    moreIcon: null,
    bage: null,
  },
];

export const lastMessageFakeData = [
  {
    id: 1,
    name: "مدیریت",
    time: "45 دقیقه پیش",
    description: "...سلام، جهت سرکشی به معابر ",
    image: lastMessageImage1,
  },
  {
    id: 2,
    name: "علی تقی",
    time: "10:35 دیروز",
    description: "...سلام، جهت سرکشی به معابر ",
    image: lastMessageImage2,
  },
];

export const dashboardFakeData = {
  guardingFakeData: {
    user: {
      id: 1,
      nikname: "محمدرضا مهرآبادی",
      image: userInfo,
      job: "نگهبان شیفت روزانه",
      active: true,
    },
    lastPresence: "ورود و خروج پرسنل",
    postJob: "نگهبان شیفت و ورودی",
    address: "خیابان امیرکبیر، کوچه امیرکبیر 51، پلاک 8، طبقه دوم",
    phone: "09390783729",
  },
  manitorfakeData: {
    averageTime: "2:45",
    allResiver: 13,
    upsertExit: "% 15/4",
    countShift: 147,
    loadShift: 8,
    persnol: [
      {
        id: 1,
        image: userInfo,
      },
      {
        id: 2,
        image: userInfo,
      },
      {
        id: 3,
        image: userInfo,
      },
      {
        id: 4,
        image: userInfo,
      },
      {
        id: 5,
        image: userInfo,
      },
    ],
  },
  dutiesFakeData: {
    dutiesTitle: "15 وظیفه برای 4 نفر",
    users: [
      {
        id: 1,
        image: userInfo2,
        job: "نگهبان شیفت روزانه",
        active: true,
      },
      {
        id: 2,
        image: userInfo2,
        job: "نگهبان شیفت روزانه",
        active: true,
      },
      {
        id: 3,
        image: userInfo2,
        job: "نگهبان شیفت روزانه",
        active: true,
      },
      {
        id: 4,
        image: userInfo2,
        job: "نگهبان شیفت روزانه",
        active: true,
      },
    ],
    duties: [
      {
        id: 1,
        title: "نگهبان شیفت و ورودی",
        time: "1400/11/03",
      },
      {
        id: 2,
        title: "چک درب ساختمان اداری",
        time: "1400/11/03",
      },
      {
        id: 3,
        title: "...چک درب ورودی آزمایشگاه شم",
        time: "1400/11/03",
      },
    ],
  },
  managmentFakeData: {
    users: [
      {
        id: 1,
        image: userInfo,
        nikname: "آقای علی عظیم‌نژاد",
        createdAt: "1400/11/03",
        active: true,
      },
      {
        id: 2,
        image: userInfo,
        nikname: "آقای سبحانیان",
        createdAt: "1400/11/03",
        active: true,
      },
      {
        id: 3,
        image: userInfo,
        nikname: "آقای علی عظیم‌نژاد",
        createdAt: "1400/11/03",
        active: true,
      },
      {
        id: 4,
        image: userInfo,
        nikname: "خانم سارانی‌راد",
        createdAt: "1400/11/03",
        active: true,
      },
      {
        id: 5,
        image: userInfo,
        nikname: "آقای میثم خرمپور",
        createdAt: "1400/11/03",
        active: true,
      },
      {
        id: 6,
        image: userInfo,
        nikname: "خانم کیارستمی (خروج)",
        createdAt: "1400/11/03",
        active: false,
      },
      {
        id: 7,
        image: userInfo,
        nikname: "خانم کیارستمی (خروج)",
        createdAt: "1400/11/03",
        active: false,
      },
    ],
  },
  userPanelFakeData: {
    panelList: [
      {
        id: 1,
        image: userInfo,
        nikname: "آقای علی عظیم‌نژاد",
        createdAt: "1400/11/03",
        active: true,
      },
      {
        id: 2,
        image: userInfo,
        nikname: "آقای سبحانیان",
        createdAt: "1400/11/03",
        active: true,
      },
      {
        id: 3,
        image: userInfo,
        nikname: "آقای علی عظیم‌نژاد",
        createdAt: "1400/11/03",
        active: true,
      },
      {
        id: 4,
        image: userInfo,
        nikname: "خانم سارانی‌راد",
        createdAt: "1400/11/03",
        active: true,
      },
    ],
    lastCreatedPanel: [
      {
        id: 1,
        image: userInfo,
        nikname: "آقای علی عظیم‌نژاد",
        createdAt: "1400/11/03",
        active: true,
      },
      {
        id: 2,
        image: userInfo,
        nikname: "آقای سبحانیان",
        createdAt: "1400/11/03",
        active: true,
      },
      {
        id: 3,
        image: userInfo,
        nikname: "آقای علی عظیم‌نژاد",
        createdAt: "1400/11/03",
        active: true,
      },
    ],
  },
};
