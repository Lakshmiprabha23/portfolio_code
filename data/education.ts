export type EducationItem = {
  degree: string;
  institution: string;
  cgpa: string;
  honor?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Bishop Heber College",
    cgpa: "8.34",
  },
  {
    degree: "Master of Data Science",
    institution: "Holy Cross College",
    cgpa: "8.98",
    honor: "Gold Medalist",
  },
];

export const achievements: string[] = [
  "Gold Medalist & First Prize for Proficiency in Data Science — M.Sc. Data Science",
  "Published book chapter \"A Comparative Analysis in Speech Recognition Prediction\" in Innovations in Real-Time Machine Learning",
  "Participated in the International Seminar on \"Research Areas in Data Analytics and Security\", Holy Cross College, Trichy",
];

export const strengths: string[] = [
  "Clear Communication",
  "Ownership & Accountability",
  "Collaborative Teamwork",
  "Business Understanding",
];
