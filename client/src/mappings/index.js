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
// maps the sidebar
export const sidebarMapping = [
  {
    Icon: DashboardIcon,
    text: "Dashboard",
    navlink: "/user-dashboard",
  },
  {
    Icon: BirthDetailsIcon,
    text: "Birth Details",
    navlink: "/user-birth-details",
  },
  {
    Icon: ConsultationIcon,
    text: "Consultation List",
    navlink: "/consultation-list",
  },
  {
    Icon: CourseListIcon,
    text: "Course List",
    navlink: "/course-list",
  },
  {
    Icon: QuizIcon,
    text: "Quizes",
    navlink: "/quizes",
  },
  {
    Icon: CertificateIcon,
    text: "Certificates",
    navlink: "/certificates",
  },
  {
    Icon: FinancialIcon,
    text: "Financial",
    navlink: "/financial",
  },
  {
    Icon: SupportIcon,
    text: "Support",
    navlink: "/support",
  },
  {
    Icon: UserProfileIcon,
    text: "User Profile",
    navlink: "/user-profile",
  },
  {
    Icon: UserReportsIcon,
    text: "User Reports",
    navlink: "/user reports",
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
