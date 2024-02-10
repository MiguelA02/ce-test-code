import AvatarIcon from "../assets/images/avatar.svg";
import Certification from "../assets/images/certification.svg";

export const USER = Object.freeze({
  firstName: "Baptist",
  lastName: "Wilhelmine",
  picture: AvatarIcon,
  hourly: 80,
});

export const OPTIONS_ASIDE = [
  {
    id: 1,
    name: "Bio",
  },
  {
    id: 2,

    name: "Certifications",
  },
  {
    id: 3,
    name: "Languages spoken",
  },
  {
    id: 4,
    name: "Subjects",
  },
  {
    id: 5,
    name: "Availability",
  },
  {
    id: 6,
    name: "Special education",
  },
  {
    id: 7,
    name: "Location",
  },
];

export const TYPES_TEACHING = ["By grade", "By subjects"];




export const OPTIONS_SERVICES = [
  { value: "Mathematics", label: "Mathematics" },
  { value: "Physics", label: "Physics" },
  { value: "History", label: "History" },
];


export const DATA_PROFILE = Object.freeze({
  aboutMe:
    "Baptist is an accomplished artist and knitter who has lived and worked in London, Minneapolis, Düsseldorf, and New York. She has been working with Young at Art since April 2019. Baptist has an MFA from Parsons School of Design. She is an art and knitting teacher for children and adults and owns Edgemont Art Barn in Westchester. She has taught in both Waldorf and Montessori schools as an enrichment specialist and is a visiting artist at Greenburgh Library and Mt. Sinai Hospital. Her classes are designed to enhance whole learning and personal development. She creates open-ended, process-driving projects that allow the students to develop their ideas and personal communication skills as well as their art skills. She works with students in drawing, collage, assemblage, and more. Baptist also helps teens develop their portfolio for college admissions.",
  certifications: [
    {
      image: Certification,
      name: "Ontario Certified Teacher",
    },
    {
      image: Certification,
      name: "Early Childhood Educator",
    },
    {
      image: Certification,
      name: "Early Childhood Educator",
    },
    {
      image: Certification,
      name: "Early Childhood Educator",
    },
  ],
  language: [{ name: "English" }, { name: "French" }],
  availability: [
    { name: "Mondays, 08:00 AM - 11:30 AM" },
    { name: "Mondays, 03:00 PM - 08:30 PM" },
    { name: "Wednesdays, 03:00 PM - 08:30 PM" },
    { name: "Thursdays, 03:00 PM - 08:30 PM" },
    { name: "Fridays, 03:00 PM - 08:30 PM" },
  ],
  services: [
    {
      name: "Mathematics",
      grades: [
        { name: "Grade 1" },
        { name: "Grade 2" },
        { name: "Grade 3" },
        { name: "Grade 4" },
        { name: "Grade 5" },
        { name: "Grade 6" },
      ],
    },
    {
      name: "Physics",
      grades: [
        { name: "Grade 1" },
        { name: "Grade 2" },
        { name: "Grade 3" },
        { name: "Grade 4" },
        { name: "Grade 5" },
      ],
    },
    {
      name: "History",
      grades: [{ name: "Grade 3" }, { name: "Grade 4" }, { name: "Grade 5" }],
    },
  ],
  location: {
    address:
      "Toronto Street, St. John'S, Newfoundland and Labrador A1A 2T2, Canada",
    availability: [
      { name: "Virtual" },
      { name: "At student’s residence" },
      { name: "At student’s residence" },
    ],
  },
})