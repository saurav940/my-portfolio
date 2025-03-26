const initialState = {
    name: "Saurav Kumar",
    summary: "QA Engineer with 3+ years of experience in manual and automation testing.",
    experience: [
      { company: "Capital Small Finance Bank", role: "QA Engineer", duration: "May 2021 - Present" }
    ],
    projects: ["Internet Banking", "Mobile Banking Application", "Core Banking System"],
    skills: ["Selenium", "TestNG", "Java", "SQL", "JIRA", "Postman"],
    education: [
      { degree: "MCA - Data Science", institution: "LPU", year: "2021" },
      { degree: "BCA", institution: "CT Group", year: "2019" }
    ],
    certifications: ["AWS Fundamentals", "Data Science - DataCamp"],
    contact: { email: "iamsaurav1997@icloud.com", phone: "+91 7696620197" }
  };
  
  const rootReducer = (state = initialState, action) => {
    return state;
  };
  
  export default rootReducer;
  