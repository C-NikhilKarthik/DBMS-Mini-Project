import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FaqPage = () => {
    const faqs = [
        {
            question: "What is DreamHome?",
            answer: "DreamHome is a company that specializes in property management. They act as an intermediary between property owners who wish to rent out their furnished properties and clients of DreamHome who are looking to rent furnished properties for a fixed period of time."
          },
          {
            question: "How many staff does DreamHome have?",
            answer: "DreamHome currently has about 2000 staff members working in 100 branches."
          },
          {
            question: "What is the DreamHome staff registration form?",
            answer: "The DreamHome staff registration form is used when a member of staff joins the company. It is a form that collects necessary information from new staff members to officially register them as employees of DreamHome."
          },
          {
            question: "What are the roles of DreamHome staff members?",
            answer: "DreamHome staff members are responsible for various tasks related to property management, such as property inspection, rental agreements, tenant screening, maintenance and repairs, and customer service."
          },
          {
            question: "How can I contact DreamHome staff?",
            answer: "You can contact DreamHome staff by visiting their website and using the contact information provided, such as phone numbers, email addresses, or online inquiry forms. You can also visit one of their 100 branches to speak with a staff member in person."
          },
          {
            question: "How can I apply to work at DreamHome?",
            answer: "If you are interested in joining the DreamHome team, you can visit their website or contact one of their branches to inquire about current job openings or submit your resume and application. The DreamHome staff registration form may also be used during the hiring process for new staff members."
          },
          {
            question: "Does DreamHome provide training for their staff members?",
            answer: "Yes, DreamHome provides training for their staff members to ensure they are equipped with the necessary skills and knowledge for their roles. This may include on-the-job training, workshops, seminars, or other forms of professional development."
          },
          {
            question: "How long has DreamHome been in business?",
            answer: "DreamHome's history and duration of operation may vary depending on the specific location or branch. However, they have been established as a company specializing in property management for a considerable period of time."
          },
          {
            question: "What areas does DreamHome operate in?",
            answer: "DreamHome operates in various areas, depending on the locations of their branches. They may have a presence in different cities, regions, or countries, offering property management services to clients and property owners in those areas."
          },
          {
            question: "How can I learn more about DreamHome's services?",
            answer: "To learn more about DreamHome's services, you can visit their website, contact one of their branches, or inquire through their online forms or communication channels. They may provide detailed information about their property management services, rental processes, pricing, and other related information."
          },      
        
        // Add more FAQs here
    ];

    return (
        <div className="w-full flex flex-col bg-slate-200">
            <Navbar />
            <div className="max-w-3xl py-28 mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h1>
                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FaqPage;
