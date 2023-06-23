import {
  DashboardIcon,
  BirthDetailsIcon,
  ConsultationIcon,
  CourseListIcon,
  UserProfileIcon,
  UserReportsIcon,
  QuizIcon,
  CertificateIcon,
  FinancialIcon,
  SupportIcon,
} from "../icons";
import { PATHS } from "../router/paths";
// maps the sidebar
export const sidebarMapping = [
  {
    Icon: DashboardIcon,
    text: "Dashboard",
    navlink: PATHS.userDashboard,
  },
  {
    Icon: BirthDetailsIcon,
    text: "Birth Details",
    navlink: PATHS.userBirthDetails,
  },
  {
    Icon: ConsultationIcon,
    text: "Consultation List",
    navlink: PATHS.userConsultationList,
  },
  {
    Icon: CourseListIcon,
    text: "Course List",
    navlink: PATHS.userCourseList,
  },
  {
    Icon: QuizIcon,
    text: "Quizes",
    navlink: PATHS.userQuizes,
  },
  {
    Icon: CertificateIcon,
    text: "Certificates",
    navlink: PATHS.userCertificate,
  },
  {
    Icon: FinancialIcon,
    text: "Financial",
    navlink: PATHS.userFinancial,
  },
  {
    Icon: SupportIcon,
    text: "Support",
    navlink: PATHS.userSupport,
  },
  {
    Icon: UserProfileIcon,
    text: "User Profile",
    navlink: PATHS.userProfile,
  },
  {
    Icon: UserReportsIcon,
    text: "User Reports",
    navlink: PATHS.userReports,
  },
];
export const astrlogerSidebarMapping = [
  {
    Icon: DashboardIcon,
    text: "Dashboard",
    navlink: PATHS.userDashboard,
  },
  {
    Icon: BirthDetailsIcon,
    text: "Birth Details",
    navlink: PATHS.userBirthDetails,
  },
  {
    Icon: ConsultationIcon,
    text: "Astrologer Profile",
    navlink: PATHS.astrologerProfile,
  },
  {
    Icon: CourseListIcon,
    text: "Consultation List",
    navlink: PATHS,
  },
  {
    Icon: QuizIcon,
    text: "Courses List",
    navlink: PATHS,
  },
  {
    Icon: CertificateIcon,
    text: "Available Timings",
    navlink: PATHS.astrologerAvailablity,
  },
  {
    Icon: FinancialIcon,
    text: "Charges Amount",
    navlink: PATHS.astrologerChargeAmount,
  },
  {
    Icon: SupportIcon,
    text: "Go Live",
    navlink: PATHS.astrologerGoLive,
  },
  {
    Icon: UserProfileIcon,
    text: "Rating & Review List",
    navlink: PATHS,
  },
  {
    Icon: UserReportsIcon,
    text: "Blogs",
    navlink: PATHS.astrologerBlog,
  },
  {
    Icon: QuizIcon,
    text: "Quizzes",
    navlink: PATHS,
  },
  {
    Icon: CertificateIcon,
    text: "Certificates",
    navlink: PATHS.userCertificate,
  },
  {
    Icon: FinancialIcon,
    text: "Financial",
    navlink: PATHS.userFinancial,
  },
  {
    Icon: SupportIcon,
    text: "Support",
    navlink: PATHS.userSupport,
  },
  {
    Icon: UserProfileIcon,
    text: "User Profile",
    navlink: PATHS.userProfile,
  },
  {
    Icon: UserReportsIcon,
    text: "User Reports",
    navlink: PATHS.userReports,
  },

];

// maps the navbar
export const navbarMapping = [
  {
    type: "dropdown",
    label: "Courses",
    itemsArray: ["Course One", "Course Two", "Course Three"],
  },
  {
    type: "link",
    label: "Consultation",
    link: "/user-consultation-list",
  },
  {
    type: "link",
    label: "Sessions",
    link: "/user-sessions",
  },
  {
    type: "link",
    label: "Booking List",
    link: "/user-booking-list",
  },
  {
    type: "link",
    label: "Upcomming Events",
    link: "/user-upcoming-events",
  },
  {
    type: "link",
    label: "Top Astrologers",
    link: "/user-top-astrologers",
  },
];
