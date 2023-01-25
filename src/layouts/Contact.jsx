import React, { useRef, useEffect, useState } from 'react';


// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css'


const Contact = () => {
  {/*AOS*/}
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  {/*Drag and Drop Components*/}
      // drag state
      const [dragActive, setDragActive] = React.useState(false);
      // ref
      const inputRef = React.useRef(null);
      const [uploadedFiles, setUploadedFiles] = useState(null);

      // handle drag events
      const handleDrag = (e) => {
         e.preventDefault();
         e.stopPropagation();
         if (e.type === "dragenter" || e.type === "dragover") {
           setDragActive(true);
         } else if (e.type === "dragleave") {
           setDragActive(false);
         }
      };

      // triggers when file is dropped
      const handleDrop = (e) => {
         e.preventDefault();
         e.stopPropagation();
         setDragActive(false);
         if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);

         }
      };

      // triggers when file is selected with click
      const handleChange = (e) => {
         e.preventDefault();
         if (e.target.files && e.target.files[0]) {
           handleFiles(e.target.files);
         }
      };

      {/*triggers the input when the button is clicked*/}
      const onButtonClick = () => {
         if(inputRef.current){
               inputRef.current.click();
               alert(`File Uploaded`)
             }
      };

      {/*Property fields*/}
      const [name, setName] = useState("");
      const [address, setAddress] = useState("");
      const [unit, setUnit] = useState("");
      const [city, setCity] = useState("");
      const [state, setState] = useState("");
      const [roomType, setRoomType] = useState("");
      const [price, setPrice] = useState("");
      const [roomSize, setRoomSize] = useState("");
      const [description, setDescription] = useState("");

      {/*form submission*/}
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !address || !unit || !city || !state || !roomType || !price || !roomSize || !description) {
          alert("All fields are required");
          return;
        }else if (name || address || unit || city || state || roomType || price || roomSize || description) {
          alert(`Hello, ${name} . Your form has been submitted, you will hear from us shortly.`)
          resetForm();
        }
      };

      {/*Form Reset*/}
      const resetForm =() =>{
         setName("");
         setAddress("");
         setUnit("");
         setCity("");
         setState("");
         setRoomType("");
         setPrice("");
         setRoomSize("");
         setDescription("");
      }

     {/*function to handle files*/}
     const handleFiles = (files) => {
       setUploadedFiles(files[0]);
   }

  return (
    <section className="Contact">
    {/*Property Form*/}
    <div
      data-aos="zoom-in-left"
      data-aos-easing="ease-in-cubic"
      data-aos-duration="2000"
      className="mt-16 font-bold">
      <h2 className="text-center px-8">Your property with us and be Confident that Your Room will be Filled Out!</h2>

      {/*Property Contact Form*/}
        <div className="m-8 md:m-16 border-2 rounded-xl shadow-2xl">
          <h2 className="capitalize text-[#F4511E] font-bold pt-4 text-center"> Add a new property</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8 px-8">

                <div className="">
                  <label className="text-sm font-semibold leading-8">Name<span className='text-[#F4551E] m-2'>*</span></label><br />
                    <input type="text" id="Name" value={name} placeholder="Enter Name"  onChange={(e) => setName(e.target.value)} className="text-sm indent-4 py-2 bg-[#F9F9F9] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] required"
                      />
                </div>
                <div className="">
                  <label  className="text-sm font-semibold leading-8">Address<span className='text-[#F4551E] m-2'>*</span></label><br />
                  <input type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} className="text-sm indent-4 py-2 bg-[#F9F9F9] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] required"
                    />
                </div>
                <div className="">
                  <label  className="text-sm font-semibold leading-8">Unit Number<span className='text-[#F4551E] m-2'>*</span></label><br />
                  <input type="text" placeholder="Enter Unit" value={unit} onChange={(e) => setUnit(e.target.value)} className="text-sm indent-4 py-2 bg-[#F9F9F9] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] required"
                    />
                </div>
                <div className="">
                  <label  className="text-sm font-semibold leading-8">City<span className='text-[#F4551E] m-2'>*</span></label><br />
                  <select name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="text-sm indent-4 py-2 bg-[#F9F9F9] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] required">
                    <option value="">Select City</option>
                    <option value="Alameda">Alameda</option>
                    <option value="Benicia">Benicia</option>
                    <option value="Berkeley">Berkeley</option>
                    <option value="Calistoga">Calistoga</option>
                    <option value="Fremont">Fremont</option>
                    <option value="Half Moon Bay">Half Moon Bay</option>
                  </select>
                </div>
                <div className="">
                  <label  className="text-sm font-semibold leading-8">State<span className='text-[#F4551E] m-2'>*</span></label><br />
                  <select name="state" id="State" value={state} onChange={(e) => setState(e.target.value)} className="text-sm indent-4 py-2 bg-[#F9F9F9] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] required">
                    <option value="">Select State</option>
                    <option value="California">California</option>
                  </select>
                </div>
                <div className="">
                  <label  className="text-sm font-semibold leading-8">Room Type<span className='text-[#F4551E] m-2'>*</span></label><br />
                  <select name="roomType" id="room" value={roomType} onChange={(e) => setRoomType(e.target.value)} className="text-sm indent-4 py-2 bg-[#F9F9F9] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] required">
                    <option value="">Select Room Type</option>
                    <option value="Private">Private Room</option>
                    <option value="Standard">Standard Room</option>
                    <option value="Deluxe">Deluxe Room</option>
                    <option value="Joint">Joint Room</option>
                    <option value="Suite">Suite Room</option>
                    <option value="Connecting">Connecting Room</option>
                  </select>
                </div>
                <div className="">
                  <label  className="text-sm font-semibold leading-8">Price<span className='text-[#F4551E] m-2'>*</span></label><br />
                  <input name="price" type="text" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} className="text-sm indent-4 py-2 bg-[#F9F9F9] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] required"
                    />
                </div>
                <div className="">
                  <label  className="text-sm font-semibold leading-8">Room Type<span className='text-[#F4551E] m-2'>*</span></label><br />
                  <select name="roomSize" id="room" value={roomSize} onChange={(e) => setRoomSize(e.target.value)} className="text-sm indent-4 py-2 bg-[#F9F9F9] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] required">
                    <option value="">Select Room Type</option>
                    <option value="Single">Single Room</option>
                    <option value="Double">Double Room</option>
                    <option value="Triple">Triple Room</option>
                    <option value="Quad">Quad Room</option>
                  </select>
                </div>
              </div>
              <div className="m-8">
                <label  className="text-sm font-semibold leading-8">Description<span className='text-[#F4551E] m-2'>*</span></label><br />
                <textarea cols="30" rows="10" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} className="text-sm indent-4 p-4 bg-[#F9F9F9] text-[#737373] w-full border-1 rounded-sm border-[#E6E6E6] hover:border-[#F4511E] focus:border-[#F4511E] required"
                  />
              </div>
              {/*Upload Property Image*/}
              <div className="m-8">
                <h2 className="font-semibold text-base mb-2">Upload Photos</h2>
                <div className="w-full border-2 border-[#F4511E] border-dashed bg-[#fef2f2] text-center justify-center mx-auto cursor-pointer">
                  <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} className="invisible" />
                      <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                        <div className="flex text-xs md:text-md p-1 gap-2 justify-center">
                          <p>Drag your image here, or  </p>
                          <button className="upload-button text-[#F4551E] mt-0 md:mt-0 md:ml-0 hover:underline" type="button" onClick={onButtonClick}> browse</button>
                        </div>
                      </label>
                    { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
                    <p className="text-xs text-center font-normal text-gray-500 mb-6">Supported: JPG, JPEG, PNG</p>
                    {/*Show selected file*/}
                    { uploadedFiles && <p className="text-xs text-center font-bold text-gray-600 mb-2">{uploadedFiles.name}</p> }
                </div>

                <div className="text-center mt-4">
                <button type="submit" value="Submit" className=" border-2 px-12 md:px-20 py-4 rounded-lg mt-4 hover:bg-[#F97316] text-[10px] sm:text-sm md:text-sm bg-[#F4511E] text-[#FFFFFF]">
                    Add New Property
                </button>

            </div>
              </div>
            </form>


        </div>

    </div>
    </section>
  )
}

export default Contact;
