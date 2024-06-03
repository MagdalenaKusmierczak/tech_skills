//Data
const employee = [
  {
    ["personalInfo"]: [
      { ["firstName"]: "John" },
      { ["lastName"]: "Doe" },
      { ["age"]: 30 },
      {
        ["address"]: [
          { ["city"]: "Anytown" },
          { ["state"]: "NY" },
          { ["postalCode"]: "12345" },
        ],
      },
    ],
  },
  {
    ["employmentDetails"]: [
      { ["position"]: "Software Engineer" },
      { ["department"]: "Engineering" },
      { ["startDate"]: "2022-01-01" },
      { ["endDate"]: null },
      {
        ["manager"]: [
          { ["firstName"]: "Alice" },
          { ["lastName"]: "Smith" },
          { ["email"]: "alice@example.com" },
        ],
      },
    ],
  },
];

//To call data from database 'employee' with certain key e.g. "firstName",
// call getEmployeeInfo(employee, "firstName")
//To call nested data e.g. firstName of manager
// call getEmployeeInfo(employee, "manager.firstName")

// const getEmployeeInfo = (employee, key) => {
//   //Calling data
//   const personalInformation = Object.values(employee[0].personalInfo);
//   const employmentDetailsList = Object.values(employee[1].employmentDetails);

//   //Function to get keys from object in array
//   const dataKeys = (arr) => {
//     let keysArray = [];
//     for (let value of Object.values(arr)) {
//       const dataKey = Object.keys(value);
//       keysArray = [...keysArray, ...dataKey];
//     }
//     return keysArray;
//   };

//   //Calling data with validation
//   if (dataKeys(personalInformation).includes(key)) {
//     const personalInfoData = employee[0].personalInfo.find((data) => data[key]);
//     return console.log(personalInfoData);
//   }
//   if (dataKeys(employmentDetailsList).includes(key)) {
//     const employmentData = employee[1].employmentDetails.find(
//       (data) => data[key]
//     );
//     return console.log(employmentData);
//   }

//   // Calling nested data
//   //Address data
//   if (key.startsWith("address.")) {
//     const addressData = Object.values(personalInformation[3].address);
//     const addressKey = key.split(".")[1];
//     if (dataKeys(addressData).includes(addressKey)) {
//       const addressInfo = addressData.find((data) => data[addressKey]);
//     return console.log(addressInfo);
//     }
//   }
//   //Manager data
//   if (key.startsWith("manager.")) {
//     const managerData = Object.values(employmentDetailsList[4].manager);
//     const managerKey = key.split(".")[1];
//     //Key validation
//     if (dataKeys(managerData).includes(managerKey)) {
//       const managerInfo = managerData.find((data) => data[managerKey]);
//       return console.log(managerInfo);
//     }
//   }

//   return console.log("Klucz nie istnieje");
// };

const getEmployeeInfo = (employee) => {
  for (const typeOfInformation of Object.values(employee)) {
    for (const informations of Object.entries(Object.values(typeOfInformation))) {
      console.log(informations);
      for (const information of Object.values(informations[1])) {
        console.log(information);
      }
    }
  }
};
getEmployeeInfo(employee);
