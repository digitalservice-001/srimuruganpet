"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { useForm, type SubmitHandler } from "react-hook-form"

type ContactFormInputs = {
  name: string
  email: string
  subject: string
  mobile: string
  message: string
}
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormInputs>()
  // const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)
  //   setSubmitStatus(null)

  //   try {
  //     // This would be replaced with actual API call using Resend
  //     const response = await fetch('/api/send-email', {
  //       method: 'POST',
  //       body: JSON.stringify(formData),
  //       headers: { 'Content-Type': 'application/json' },
  //     });

  //     // Simulating API call
  //     await new Promise((resolve) => setTimeout(resolve, 1000))

  //     if (!response.ok) throw new Error('Failed to send email');
  //     const data = await response.json();
  //     console.log(data);
  //     setSubmitStatus({
  //       success: true,
  //       message: "Your message has been sent successfully!",
  //     })

  //     // Reset form
  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     })
  //   } catch (error) {
  //     console.error("Error sending email:", error)
  //     setSubmitStatus({
  //       success: false,
  //       message: "Failed to send your message. Please try again later.",
  //     })
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }
  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setSubmitStatus(null)
    console.log("Form data:", data)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })

      if (!response.ok) throw new Error("Failed to send email")
      // const result = await response.json()

      // Open WhatsApp with pre-filled message after successful form submission
      // const whatsappMessage = encodeURIComponent(
      //   `Name: ${data.name}\nEmail: ${data.email}\nMobile: ${data.mobile}\nSubject: ${data.subject}\nMessage: ${data.message}`,
      // )
      // const whatsappNumber = "+916385218179" // Replace with your actual WhatsApp number with country code
      // window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")

      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully! You can also contact us via WhatsApp.",
      })

      reset()
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus({
        success: false,
        message: "Failed to send your message. Please try again later.",
      })
    }
  }
  return (
    <main className="min-h-screen">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6">
            {/* Left Column - Address and Map */}
            <div className="space-y-8">
              {/* Address Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Our Office</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-gray-700 mr-3 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg">Address</h3>
                      <p className="text-gray-600">
                        12B vaiyampalayam road , Keeranatham
                        <br />
                        Coimbatore, Tamil Nadu
                        <br />
                        India - 641035
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-gray-700 mr-3 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-gray-600">+91 9715074266</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-gray-700 mr-3 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-600">srimuruganpet@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Location</h2>
                <div className="aspect-video w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.4713156691!2d76.89001362341609!3d11.011701484836407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716066000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Coimbatore Map"
                  ></iframe> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8805519312353!2d76.99737171525854!3d11.125498290929444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f70065ed5471%3A0x2656cd389b9f4484!2sSri%20Murugan%20PET%20Industries!5e0!3m2!1sen!2sin!4v1685052101234!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}

                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sri Murugan PET Industries Location"
                  ></iframe>



                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

              {/* {submitStatus && (
                <div
                  className={`p-4 mb-6 rounded-md ${submitStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                >
                  {submitStatus.message}
                </div>
              )} */}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* <div>
                  <label htmlFor="name" className="block text-medium font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    placeholder="Please enter your name"
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters long" },
                      maxLength: { value: 50, message: "Name must be less than 50 characters long" },
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-medium font-medium text-gray-700 mb-1">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Please enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-medium font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Please enter your subject"
                    type="text"
                    id="subject"
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-medium font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Please enter your mobile number"
                    inputMode="numeric"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Mobile number must be exactly 10 digits",
                      },
                    })}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.value = input.value.replace(/[^0-9]/g, "");
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-medium font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Please enter your message"
                    {...register("message", { required: "Message is required" })}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  ></textarea>
                </div> */}
                <div>
                  <label htmlFor="name" className="block text-medium font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    placeholder="Please enter your name"
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters long" },
                      maxLength: { value: 50, message: "Name must be less than 50 characters long" },
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${errors.name ? "border-red-500 focus:ring-red-400 bg-red-50" : "border-gray-300 focus:ring-gray-400"}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-medium font-medium text-gray-700 mb-1">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Please enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${errors.email ? "border-red-500 focus:ring-red-400 bg-red-50" : "border-gray-300 focus:ring-gray-400"}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-medium font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Please enter your subject"
                    type="text"
                    id="subject"
                    {...register("subject", { required: "Subject is required" })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${errors.subject ? "border-red-500 focus:ring-red-400 bg-red-50" : "border-gray-300 focus:ring-gray-400"}`}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-medium font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Please enter your mobile number"
                    inputMode="numeric"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Mobile number must be exactly 10 digits",
                      },
                    })}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement
                      input.value = input.value.replace(/[^0-9]/g, "")
                    }}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${errors.mobile ? "border-red-500 focus:ring-red-400 bg-red-50" : "border-gray-300 focus:ring-gray-400"}`}
                  />
                  {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-medium font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Please enter your message"
                    {...register("message", { required: "Message is required" })}
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${errors.message ? "border-red-500 focus:ring-red-400 bg-red-50" : "border-gray-300 focus:ring-gray-400"}`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex justify-center items-center w-full px-4 sm:px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors disabled:bg-gray-400 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/919715074266`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 sm:px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base whitespace-nowrap"
                  >
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* ...existing SVG paths... */}
                    </svg>
                    WhatsApp Us
                  </a>
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 mt-4 rounded-md ${submitStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  )
}

