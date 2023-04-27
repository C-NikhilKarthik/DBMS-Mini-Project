import React from "react";
import { useState,useEffect } from "react";
import myBackgroundImage from "../assets/registration-bg.jpg";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import clientIcon from "../assets/registered.png";
import { BsPersonCheckFill, BsPersonCircle, BsCalendar3, BsTelephoneInboundFill, BsFillCaretDownFill } from "react-icons/bs";
import { GiRank3 } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import office from "../assets/office.png";
import map from "../assets/map.png";
// import edit from "../assets/edit.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import calendarIcon from "../assets/calendar.png";
function RegistrationStaff() {

  const [fullname,setfullname]=useState('')
  const [position,setposition]=useState('')
  const [staffnumber,setstaffnumber]=useState('')
  const [salary,setsalary]=useState(0)
  const [dob, setdob] = useState(null);
  const [sex,setsex]=useState('')
  const [branchno,setbranchno]=useState('')
  const [supervisornum,setsupervisornum]=useState('')
  const [managerstartdate, setmanagerstartdate] = useState(null);
  const [managerbonus,setmanagerbonus]=useState(0)
  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    setmanagerstartdate(date);
  };

  const handleDobChange = (date) => {
    setdob(date);
  };

  const handle_submit=async(e)=>{

    const response=await fetch("/staffregistration",{
      method:"POST",
      body:JSON.stringify({
        fullname:fullname,
        position:position,
        staffnumber:staffnumber,
        salary:salary,
        dob:dob,
        sex:sex,
        branchno:branchno,
        supervisornum:supervisornum,
        managerstartdate:managerstartdate,
        managerbonus:managerbonus
        
      }),
      headers:{ "Content-type": "application/json" }
    })

    const json=await response.json()

    if(json.mssg==="FAILED")
    {
      window.alert("error in inserting values")
    }
    else{
      window.alert("Staff Registration Successful")
    }
    
  }

  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const [selectedBranchPhoneNo, setSelectedBranchPhoneNo] = useState(null);
  useEffect(() => {
    const fetchBranches = async () => {
      const response = await fetch("/getbranches");
      const data = await response.json();
      setBranches(data);
    };

    fetchBranches();
  }, []);

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  const handleBranchChangePhoneNo = (event) => {
    setSelectedBranchPhoneNo(event.target.value);
  };
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-full sm:h-screen w-screen flex items-center justify-center py-32 px-4"
        style={{ backgroundImage: `url(${myBackgroundImage})` }}
      >
        <form>
          <motion.div layout transition={{ layout: { duration: 1, type: "spring" } }} className="sm:w-2/3 layout  w-full h-fit bg-[#050505] bg-opacity-[43%] backdrop-blur-md rounded-lg p-4">
            <h1 className="font-sans font-bold text-4xl text-center py-6 text-slate-200">
              Dream House Staff Registration
            </h1>
            <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-10 p-4">
              <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
                <div className="relative flex items-center">
                  <input onChange={(e)=>setfullname(e.target.value)} placeholder="Full Name" type="text" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                  < BsPersonCircle className="absolute text-xl left-2" />
                </div>
                <div className="relative flex items-center">
                    <select onChange={(e)=>setposition(e.target.value)} className="block w-full pl-10 bg-white bg-opacity-[65%] pr-3 py-2 rounded-md bg-transparent appearance-none placeholder-black">
                      <option value="None">Position</option>
                      <option value="Manager">Manager</option>
                      <option value="Supervisior">Supervisior</option>
                      <option value="Assistant">Assistant</option>
                    </select>
                  < GiRank3 className="absolute text-xl left-2" />
                </div>
                <div className="flex gap-4 w-full">
                  <div className="relative flex items-center">
                    <input onChange={(e)=>setstaffnumber(e.target.value)} placeholder="Staff Number" type="text" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                    <img
                      src={clientIcon}
                      alt="Client Icon"
                      className="absolute left-2 h-6 w-6"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <input onChange={(e)=>setsalary(e.target.value)} placeholder="Salary" type="number" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                    < MdOutlineAttachMoney className="absolute text-xl left-2" />
                  </div>
                </div>
                <div className="relative flex gap-4 items-center">
                  <div className="relative w-full flex items-center">
                    < BsCalendar3 className="absolute text-xl z-[2] left-2" />
                    <DatePicker
                      selected={dob}
                      onChange={handleDobChange}
                      dateFormat="MM/dd/yyyy"
                      className="w-full px-10 py-2 bg-white bg-opacity-[65%] rounded-md bg-transparent placeholder-black"
                      placeholderText="Date of Birth"
                    />
                  </div>
                  <div className="w-full relative flex items-center">
                    < BsPersonCheckFill className="absolute text-xl left-2" />
                    <select onChange={(e)=>setsex(e.target.value)} className="block w-full pl-10 bg-white bg-opacity-[65%] pr-3 py-2 rounded-md bg-transparent appearance-none placeholder-black">
                      <option value="none">Sex</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 p-4 rounded-2xl">
                <div className="relative flex items-center">
                <select
                  id="branch"
                  name="branch"
                  className="block bg-white bg-opacity-[65%] w-full pl-10 pr-3 py-2 rounded-full bg-transparent appearance-none placeholder-black"
                  
                  onChange={(e) => setbranchno(e.target.value)}
                >
                  <option value="">Select branchNo</option>
                  {branches.map((branch) => (
                    <option key={branch.branchNo} value={branch.branchNo}>
                      {branch.branchNo}
                    </option>
                  ))}
                </select>
                  <img
                    src={office}
                    alt="Office Icon"
                    className="absolute left-3 h-6 w-6"
                  />
                </div>

                <div className="relative flex items-center">

                <select
                  id="branch"
                  name="branch"
                  className="block bg-white bg-opacity-[65%] w-full pl-10 pr-3 py-2 rounded-full bg-transparent appearance-none placeholder-black"
                  value={selectedBranch}
                  onChange={handleBranchChange}
                >
                  <option value="">Select branch</option>
                  {branches.map((branch) => (
                    <option key={branch.branchNo} value={branch.branchNo}>
                      {branch.streetAddress},{branch.city}
                    </option>
                  ))}
                </select>


                  <img
                    src={map}
                    alt="map Icon"
                    className="absolute left-3 h-6 w-6"
                  />
                </div>
                <div className="relative flex items-center">
                <select
                  id="branch"
                  name="branch"
                  className="block bg-white bg-opacity-[65%] w-full pl-10 pr-3 py-2 rounded-full bg-transparent appearance-none placeholder-black"
                  value={selectedBranchPhoneNo}
                  onChange={handleBranchChangePhoneNo}
                >
                  <option value="">Select branch</option>
                  {branches.map((branch) => (
                    <option key={branch.branchNo} value={branch.branchNo}>
                      {branch.telephoneNumber}
                    </option>
                  ))}
                </select>
                  < BsTelephoneInboundFill className="absolute text-xl left-2" />
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <motion.div layout transition={{ layout: { duration: 1, type: "spring" } }} className="bg-[#EFEFEF] bg-opacity-[16%] flex flex-col gap-6 rounded-2xl p-4">
                <motion.div layout="position" className="flex justify-between items-center">
                  <div className="text-xl text-slate-200 font-semibold">
                    Enter Details where applicable (Optional)
                  </div>
                  <button id="button" type="button" onClick={() => { setOpen(!open) }} className="  rounded-full bg-white p-2">
                    < BsFillCaretDownFill />
                  </button>
                </motion.div>
                {
                  open && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 flex-col lg:flex-row w-full">
                    <div className="relative w-full flex items-center">
                      <input onChange={(e)=>setsupervisornum(e.target.value)} placeholder="Supervisior Number" type="text" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                      < BsPersonCircle className="absolute text-xl left-2" />
                    </div>
                    <div className="relative w-full flex items-center">
                      < BsCalendar3 className="absolute text-xl z-[2] left-2" />
                      <DatePicker
                        selected={managerstartdate}
                        onChange={handleDateChange}
                        dateFormat="MM/dd/yyyy"
                        className="w-full px-10 py-2 bg-white bg-opacity-[65%] rounded-md bg-transparent placeholder-black"
                        placeholderText="Manager Start Date"
                      />
                    </div>
                    <div className="relative fle  x w-full items-center">
                      <input onChange={(e)=>setmanagerbonus(e.target.value)} placeholder="Manager Bonus" type="number" className="bg-white flex items-center bg-opacity-[65%] px-10 py-2 rounded-md bg-transparent placeholder-black w-full" />
                      < MdOutlineAttachMoney className="absolute text-xl left-2" />
                    </div>
                  </motion.div>)
                }

              </motion.div>
            </div>
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={handle_submit}
                class="inline-block bg-gradient-to-br from-blue-300 to-blue-400 py-4 px-12 rounded-full text-lg text-purple-100 uppercase tracking-wide shadow-xs hover:shadow-2xl active:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition duration-200 "
              >
                Submit
              </button>
            </div>
          </motion.div>
        </form>
      </div>
    </>
  );

}

export default RegistrationStaff