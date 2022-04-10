import { useState, useNavigate  } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import FormInput2 from "./components/FormInput";
import axios from "axios";

const App=(props)=>{

  let history = useNavigate; 

  const [values, setValues] = useState({
      MerchantlegalName:"",
      MerchantNameOnCardStatement:"",
      officialWebsite:"",
      ContactPersonName:"",
      ContactPersonEmailID:"",
      ContactPersonMobileNumber:"",
      BusinessAddress: "",
      Province: "",
      District: "",
      PostelCode: "",
      Email: "",
      TelNo: "",
      FaxNo: "",
      Profile: "",
      ProductDescription: "",
      AverageProductValue: "",
      UploadCompanyLogo: "",
      YearsOfIncorporation: ""
  });

  const inputs = [
    {
      id: 1,
      name: "legalName",
      type: "text",
      placeholder:"Merchant Legal Name",
      errorMessage:"This field is required",
      required: true,
    },
    {
      id: 2,
      name: "nameOnCard",
      type: "text",
      placeholder:"Name on Customer Card Statement",
      errorMessage:"This field is required",
      required: true,
    },
    {
      id: 3,
      name: "officialWebsite",
      type: "text",
      placeholder:"Official Website",
    },
    {
      id: 4,
      name: "name",
      type: "text",
      placeholder:"Contact Person Name",
      errorMessage:"This field is required",
      required: true,
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder:"Contact Person E-mail ID",
      errorMessage:"It should be a valid email address!",
      required: true,
    },
    {
      id: 6,
      name: "mobile",
      type: "text",
      placeholder:"Contact Person Mobile Number",
      pattern: "^[0-9]{10}$",
      errorMessage:"Invalid mobile number",
      required: true,
    }
  ];

  const inputs2 = [
    {
      id: 7,
      name: "BusinessAddress",
      type: "text",
      placeholder:"Business Address",
      errorMessage:"This field is required",
      required: true,
    },
    {
      id: 8,
      name: "Province",
      type: "text",
      placeholder:"Province",
      errorMessage:"This field is required",
      required: true,
    },
    {
      id: 9,
      name: "District",
      type: "text",
      placeholder:"District",
      errorMessage:"This field is required",
      required: true,
    },
    {
      id: 10,
      name: "PostelCode",
      type: "text",
      placeholder:"Postel Code",
      errorMessage:"This field is required",
      required: true,
    },
    {
      id: 11,
      name: "BusinessEmail",
      type: "email",
      placeholder:"E-mail",
      errorMessage:"It should be a valid email address!",
      required: true,
    },
    {
      id: 12,
      name: "TelNo",
      type: "text",
      placeholder:"Tel No",
      pattern: "^[0-9]{10}$",
      errorMessage:"Invalid mobile number",
      required: true,
    },
    {
      id: 13,
      name: "FaxNo",
      type: "text",
      placeholder:"Fax No",
      pattern: "^[0-9]{10}$",
      errorMessage:"Invalid mobile number",
      required: true,
    },
    {
      id: 14,
      name: "Profile",
      type: "text",
      placeholder:"Profile / Background",
      errorMessage:"This field is required",
      required: true,
    },
    {
      id: 15,
      name: "Description",
      type: "text",
      placeholder:"Brief description about the product /  service you intend to sell online",
    },
    {
      id: 16,
      name: "AverageProductValue",
      type: "text",
      placeholder:"Average Product Value",
    },
    {
      id: 17,
      name: "UploadCompanyLogo",
      type: "text",
      placeholder:"Upload Company Logo",
    },
    {
      id: 18,
      name: "YearsOfIncorporation",
      type: "text",
      placeholder:"Years of Incorporation",
    },
  ];

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sentValues = {
      MerchantlegalName:values.MerchantlegalName,
      MerchantNameOnCardStatement:values.MerchantNameOnCardStatement,
      officialWebsite:values.officialWebsite,
      ContactPersonName:values.ContactPersonName,
      ContactPersonEmailID:values.ContactPersonEmailID,
      ContactPersonMobileNumber:values.ContactPersonMobileNumber,
      BusinessAddress:values.BusinessAddress,
      Province:values.Province,
      District:values.District,
      PostelCode:values.PostelCode,
      Email:values.Email,
      TelNo:values.TelNo,
      FaxNo:values.FaxNo,
      Profile:values.Profile,
      ProductDescription:values.ProductDescription,
      AverageProductValue:values.AverageProductValue,
      UploadCompanyLogo:values.UploadCompanyLogo,
      YearsOfIncorporation:values.YearsOfIncorporation
    }

    console.log(sentValues);

    axios.post('https://localhost/php-react/register-login-php-simple/insert.php', sentValues)
    .then((result)=>{
      if(result.values.Status === 'Invalid'){
      alert('Invalise User');
      }
      else {
      history('/dashboard');
      }
    })
    };


  console.log(values);

  return  (
  <div className = "app"> 
    <form onSubmit={handleSubmit}>
      <h3>miniBell Merchant Application Form</h3><br/>

      {inputs.map(input=>(    
      <FormInput 
        kay={input.id} 
        {...input} 
        values={values[input.name]} 
        onChange={onChange}
        />
      ))}

      <br/>
      <hr></hr><br/>
      <h3>Business Details</h3><br/>
      <hr></hr>
      <br/>

      {inputs2.map(input=>(    
      <FormInput2 
        kay={input.id} 
        {...input} 
        values={values[input.name]} 
        onChange={onChange}
        />
      ))}
      <br/>
      <button>Submit</button>
    </form>
  </div>
  );
}

export default App;