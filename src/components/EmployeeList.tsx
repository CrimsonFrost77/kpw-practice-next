"use client";

import React from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface Employee {
  name: string;
  designation: string;
  mobile: string;
  education: string;
  joiningDate: string;
}

interface DepartmentProps {
  title: string;
  data: Employee[];
}

// Department Table Component
const DepartmentTable: React.FC<DepartmentProps> = ({ title, data }) => {
  const { language } = useLanguage();

  return (
    <div className="mt-8">
      <div className="bg-[#2F4050] text-white p-4 rounded-t-lg">
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-b-lg">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'en' ? 'Name' : 'নাম'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'en' ? 'Designation' : 'পদবি'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'en' ? 'Mobile' : 'মোবাইল'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'en' ? 'Education' : 'শিক্ষাগত যোগ্যতা'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'en' ? 'Joining Date' : 'যোগদানের তারিখ'}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((employee, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.designation}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.mobile}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.education}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.joiningDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Employee List Component
const EmployeeList = () => {
  const { language } = useLanguage();

  const employeeData = {
    executiveOfficers: [
      {
        name: "Md. Jahidul Alam Talukdar",
        designation: "Municipal Executive Officer",
        mobile: "01704808086",
        education: "M.Sc (Fisheries)",
        joiningDate: "01.06.2023"
      },
      {
        name: "Engr. Horipad Ray",
        designation: "Executive Engineer",
        mobile: "01714424343",
        education: "B.Sc Engineering",
        joiningDate: "-"
      },
      {
        name: "Md. Arif-Ul-Islam",
        designation: "Accounts Officer",
        mobile: "01833718433",
        education: "B.Com",
        joiningDate: "-"
      },
      {
        name: "Abdul Mottaleb",
        designation: "Assistant Engineer",
        mobile: "01913340033",
        education: "B.Sc Engineering",
        joiningDate: "-"
      },
      {
        name: "Md. Mahmudul Hasan",
        designation: "Sub-Assistant Engineer (Civil)",
        mobile: "01766458181",
        education: "B.Sc Engineering",
        joiningDate: "-"
      },
      {
        name: "Mahmuda Begum (Lucky)",
        designation: "Sub-Assistant Engineer (Electrical)",
        mobile: "01717642149",
        education: "Diploma Engineering",
        joiningDate: "-"
      },
      {
        name: "Md. Biplab Hossen",
        designation: "Sub-Assistant Engineer (Civil)",
        mobile: "01984232103",
        education: "Diploma Engineering",
        joiningDate: "-"
      }
    ],
    generalBranch: [
      {
        name: "Nasir Uddin",
        designation: "Chief Assistant",
        mobile: "01724936359",
        education: "M.Com",
        joiningDate: "-"
      },
      {
        name: "Md. Abdus Sobur Molla",
        designation: "Senior Assistant",
        mobile: "01721620951",
        education: "B.A",
        joiningDate: "-"
      },
      {
        name: "Md. Moazzem Hossen",
        designation: "Store Keeper",
        mobile: "01728010916",
        education: "B.A",
        joiningDate: "-"
      },
      {
        name: "Md. Jahangir Alam",
        designation: "Senior Assistant",
        mobile: "01723664344",
        education: "H.S.C",
        joiningDate: "-"
      },
      {
        name: "Md. Saiful Islam",
        designation: "Junior Assistant cum Typist",
        mobile: "01772541685",
        education: "H.S.C",
        joiningDate: "-"
      },
      {
        name: "Md. Jahangir Alam",
        designation: "Senior Assistant",
        mobile: "01788617207",
        education: "Class 10",
        joiningDate: "-"
      },
      {
        name: "Masud Rana",
        designation: "Jeep Driver",
        mobile: "01758730325",
        education: "S.S.C",
        joiningDate: "-"
      },
      {
        name: "Sharmin Akter",
        designation: "Office Assistant (Mayor)",
        mobile: "01714639993",
        education: "H.S.C",
        joiningDate: "-"
      },
      {
        name: "Md. Shah Alam Jomaddar",
        designation: "Office Assistant",
        mobile: "01720363374",
        education: "Class 8",
        joiningDate: "-"
      }
    ],
    taxAssessmentBranch: [
      {
        name: "Khondokar Anwarul Mamun",
        designation: "Tax Assessor",
        mobile: "01818965702",
        education: "B.S.S",
        joiningDate: "-"
      },
      {
        name: "Md. Selim Hossen",
        designation: "Assistant Tax Assessor",
        mobile: "01766632271",
        education: "B.A",
        joiningDate: "-"
      }
    ],
    accountsBranch: [
      {
        name: "Md. Isdadul Haque",
        designation: "Treasurer",
        mobile: "01721612056",
        education: "B.Com",
        joiningDate: "-"
      },
      {
        name: "Fahadil Khalid",
        designation: "Accounts Assistant",
        mobile: "01679522262",
        education: "B.Com",
        joiningDate: "-"
      }
    ],
    civilBranch: [
      {
        name: "Md. Jonny Ahmed",
        designation: "Surveyor/Sub-Overseer",
        mobile: "01722444437",
        education: "Diploma Engineering",
        joiningDate: "-"
      },
      {
        name: "Md. Nasir Ul Hasan (Nannu)",
        designation: "Work Assistant",
        mobile: "01818420883",
        education: "H.S.C",
        joiningDate: "-"
      },
      {
        name: "Md. Rajib Khan",
        designation: "Work Assistant",
        mobile: "01734881283",
        education: "S.S.C",
        joiningDate: "-"
      }
    ],
    healthBranch: [
      {
        name: "Wasim Arafat",
        designation: "Health Assistant",
        mobile: "01782719244",
        education: "H.S.C",
        joiningDate: "-"
      },
      {
        name: "Jhorna Akter",
        designation: "Vaccination Supervisor",
        mobile: "01718912970",
        education: "S.S.C",
        joiningDate: "-"
      },
      {
        name: "Md. Moktar Hossen",
        designation: "Vaccination Supervisor",
        mobile: "01712232620",
        education: "H.S.C",
        joiningDate: "-"
      }
    ],
    cleanlinessBranch: [
      {
        name: "Rowshan Akter Ruby",
        designation: "Conservancy Inspector",
        mobile: "01726621446",
        education: "B.A",
        joiningDate: "-"
      },
      {
        name: "Khondokar Abu Taher",
        designation: "Supervisor",
        mobile: "01915400413",
        education: "B.A",
        joiningDate: "-"
      },
      {
        name: "Md. Arif Hossen-1",
        designation: "Office Assistant",
        mobile: "01767342535",
        education: "Class 8",
        joiningDate: "-"
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-white bg-[#007554] rounded-lg p-4">
        {language === 'en' ? 'Kaliakair Municipality Employee List' : 'কালিয়াকৈর পৌরসভা কর্মচারী তালিকা'}
      </h1>

      <DepartmentTable 
        title={language === 'en' ? 'Executive Officers' : 'কার্যনির্বাহী কর্মকর্তা'} 
        data={employeeData.executiveOfficers} 
      />
      <DepartmentTable 
        title={language === 'en' ? 'General Branch' : 'সাধারণ শাখা'} 
        data={employeeData.generalBranch} 
      />
      <DepartmentTable 
        title={language === 'en' ? 'Tax Assessment Branch' : 'কর নির্ধারণ শাখা'} 
        data={employeeData.taxAssessmentBranch} 
      />
      <DepartmentTable 
        title={language === 'en' ? 'Accounts Branch' : 'হিসাব শাখা'} 
        data={employeeData.accountsBranch} 
      />
      <DepartmentTable 
        title={language === 'en' ? 'Civil/Electrical/Mechanical Branch' : 'সিভিল/ইলেক্ট্রিক্যাল/মেকানিক্যাল শাখা'} 
        data={employeeData.civilBranch} 
      />
      <DepartmentTable 
        title={language === 'en' ? 'Health and Family Planning Branch' : 'স্বাস্থ্য ও পরিবার পরিকল্পনা শাখা'} 
        data={employeeData.healthBranch} 
      />
      <DepartmentTable 
        title={language === 'en' ? 'Cleanliness Branch' : 'পরিচ্ছন্নতা শাখা'} 
        data={employeeData.cleanlinessBranch} 
      />
    </div>
  );
};

export default EmployeeList;