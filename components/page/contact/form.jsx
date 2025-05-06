'use client'

import {  Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import {  useState } from "react";

export default function Form(){
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      tele: "",
      comment: "",
    });
    const sendEmail = async (e) => {
      e.preventDefault();
      setValidation(true);
      if (formData.fullName && formData.tele && formData.email) {
        setIsLoading(true);
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (response.status === 200) {
            setFormData({
              fullName: "",
              email: "",
              tele: "",
              comment: "",
            });
            setValidation(false);
            setIsLoading(false);
          }
        } catch {
            setIsLoading(false);
        }
      }
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({...formData,[name]: value,});
    };
      return(
          <div className=" py-20 ">
              <div className=" font-primary ">
                  <div className=" container mx-auto flex flex-col lg:flex-row items-center justify-center  ">
                      <form className=" w-full  flex flex-col gap-4 p-6 " onSubmit={sendEmail}>
                        <h2 className="text-secondary text-4xl lg:text-6xl font-bold ">Prendre contact</h2>
                        <p className=" text-lg  ">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>
                          <div className=" flex flex-col lg:flex-row gap-4">
                              <div className=" w-full">
                                  <input value={formData.fullName} onChange={handleInputChange} type="text" name='fullName' className={` ${!formData.fullName && validation ? "border-red-500 placeholder:text-red-500 ":'border-secondary'}   bg-[#EFEFEF] h-12 w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium   `} placeholder=' Nom complet * ' />
                              </div>
                              <div className=" w-full">
                                  <input value={formData.tele} onChange={handleInputChange} type="tele" name='tele' className={` ${!formData.tele && validation ? "border-red-500 placeholder:text-red-500 ":'border-secondary'} bg-[#EFEFEF] h-12 w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium  `} placeholder=' Téléphone *' />
                              </div>
                          </div>
                          <div className=" w-full">
                              <input value={formData.email} onChange={handleInputChange} type="email" name='email' className={` ${!formData.email && validation ? "border-red-500 placeholder:text-red-500 ":'border-secondary'} bg-[#EFEFEF] h-12 w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium  `} placeholder=' E-mail *' />
                          </div>                        
                          <textarea value={formData.comment} onChange={handleInputChange} className='bg-[#EFEFEF] w-full rounded-lg border-2 border-secondary p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium  '  placeholder='Commentaires ' name="comment" id="comment" cols={30} rows={6}></textarea>
                          <button disabled={isLoading} type="submit" className=' cursor-pointer bg-secondary border-2 hover:text-secondary duration-700 hover:bg-white border-secondary text-white font-medium text-sm items-center justify-center rounded-full w-full  py-3 px-2 flex gap-1'><Mail className=" h-5"/>  {isLoading? "Envoyer...": "Envoyer un message"}</button>
                      </form>
                    </div>
              </div>
          </div>
      )
  }