import { faArrowDown, faArrowUp, faHouse, faInfo, faList, faMagnifyingGlassChart, faRightFromBracket, faUpDown, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { DASHBOARD_URL, SIGN_IN_URL } from "./url";

export const app_name = "AirBnB";
export const sign_in = "SIGN IN";
export const sign_up = "SIGN UP";
export const username = "Username";
export const password = "Password";
export const forgot_password = "Forgot Password";
export const account_exist_qa = "Don\'t have an account?";
export const copy_right = "Copyright 2024;";
export const explore = "Explore";
export const dashboard_counties_ranting_section_heading = "Top Countries";



export const user_name = "Pramudita Thapaliya"
export const cities = "Cities"
export const associated_cities = "100,000"
export const slogon = "Navigate the Numbers, Discover the World"



export const ENGLAND_IMAGE = "england";
export const USA_IMAGE = "usa";
export const CITY_IMAGE = "city";
export const THAILAND_IMAGE = "thailand";


export const navBarItems ={
    "Home":[
        {
            "icon": faHouse,
            "label":"Dashboard",
            "url": DASHBOARD_URL
        },
        {
            "icon": faMagnifyingGlassChart,
            "label":"Analytics",
            "url": DASHBOARD_URL
        },
        {
            "icon": faList,
            "label":"Countries",
            "url": DASHBOARD_URL
        },
        {
            "icon": faInfo,
            "label":"About Us",
            "url": DASHBOARD_URL
        },
    ],
    "Auth": [
        {
            "icon": faRightFromBracket,
            "label": "Log out",
            "url": SIGN_IN_URL
        },
        {
            "icon": faUserPlus,
            "label": "Register",
            "url": SIGN_IN_URL
        },

    ],

}

export const countries = [
    {
        "name" : "England",
        "indicator" : faArrowUp,
        "stats" : 1400,
        "image" : "england"

    },
    {
        "name" : "USA",
        "indicator" : faArrowDown,
        "stats" : 1500,
        "image" : "usa"

    },
    {
        "name" : "Thailand",
        "indicator" : faArrowUp,
        "stats" : 1400,
        "image" : "thailand"

    },
    {
        "name" : "Spain",
        "indicator" : faArrowUp,
        "stats" : 1800,
        "image" : "thailand"

    },
]



