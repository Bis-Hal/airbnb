import { faArrowDown, faArrowUp, faChartLine, faCoins, faHouse, faInfo, faList, faMagnifyingGlassChart, faRightFromBracket, faSearch, faUpDown, faUserPlus, faUserSecret, faUserTie } from "@fortawesome/free-solid-svg-icons";
import {  EXECUTIVE_DASHBOARD_URL, SIGN_IN_URL } from "./url";

export const app_name = "AirBnB";
export const sign_in = "Sign In";
export const sign_up = "SIGN UP";
export const username = "Username";
export const password = "Password";
export const forgot_password = "Forgot Password";
export const account_exist_qa = "Don\'t have an account?";
export const copy_right = "Copyright 2024;";
export const explore = "Explore";
export const dashboard_counties_ranting_section_heading = "Top Countries";
export const dashboard = "Dashboard";
export const welcome = "Welcome";
export const latitude = "latitude";
export const longitude = "Longitude";



export const user_name = "Pramudita Thapaliya"
export const cities = "Cities"
export const associated_cities = "100,000"
export const slogon = "Belong Anywhere"
export const slogon_2 = "Beyond Signing in"



export const ENGLAND_IMAGE = "england";
export const USA_IMAGE = "usa";
export const CITY_IMAGE = "city";
export const THAILAND_IMAGE = "thailand";

export const cost_coordinates = [
    {
        "cost": "4,500",
        "x": "0",
        "y": "0",
        "color" : "black"
    },
    {
        "cost": "500",
        "x": "28",
        "y": "8",
        "color" : "black"
    },
    {
        "cost": "580",
        "x": "70",
        "y": "12",
        "color" : "white"
    },
    {
        "cost": "1,254",
        "x": "90",
        "y": "3",
        "color" : "white"
    },
    {
        "cost": "3,549",
        "x": "80",
        "y": "86",
        "color" : "white"
    },
    {
        "cost": "978",
        "x": "20",
        "y": "85",
        "color" : "black"
    },
    {
        "cost": "1,238",
        "x": "50",
        "y": "60",
        "color" : "white"
    },
    {
        "cost": "305",
        "x": "35",
        "y": "32",
        "color" : "black"
    },
    {
        "cost": "5,555",
        "x": "45",
        "y": "80",
        "color" : "black"
    },
    {
        "cost": "565",
        "x": "55",
        "y": "80",
        "color" : "white"
    },
];

export const  executiveNavBarItems = {
    "Home":[
         {
            "icon": faCoins,
            "label": "Dashboard",
            "url" : "#"
        },
        {
            "icon": faSearch,
            "label": "Analytics",
            "url" : "#"
        },
        {
            "icon": faChartLine,
            "label": "Prediction",
            "url" : "#"
        },
    ],
    "Auth": [
        {
            "icon": faRightFromBracket,
            "label": "Log out",
            "url": SIGN_IN_URL
        },
    ],
}

export const hotelOwnerNavBarItems ={
    "Home":[
        {
            "icon": faHouse,
            "label":dashboard,
            "url": '#'
        },
    ],
    "Analytics":[
        {
            "icon": faMagnifyingGlassChart,
            "label":"Power BI",
            "url": '#'
        },
        {
            "icon": faUserSecret,
            "label":"MCDM",
            "url": '#'
        },
    ],
    "Auth": [
        {
            "icon": faRightFromBracket,
            "label": "Log out",
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


export const listOfCountriesMock = ["Thailand","Maldives","Hongkong","USA","China","Japan","South Korea"]; 



