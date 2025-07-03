import React from "react";
import { contact } from "./contactdata";

const Contact = () => {
  return (
    <div className=" bg-white flex items-center justify-center p-6 my-4">
      <div className="bg-blue-50 shadow-lg rounded-2xl p-8 w-full max-w-2xl border border-blue-200">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          {contact.fullname}
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-300 pb-2 mb-4">
            Education
          </h2>
          <ul className="space-y-2 pl-4 list-disc text-blue-900">
            <li className="text-lg">{contact.educations.univer}</li>
            <li className="text-lg">{contact.educations.itedu}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-300 pb-2 mb-4">
            Social Links
          </h2>
          <ul className="flex flex-col space-y-3 text-blue-600">
            <li>
              <a
                href={contact.Instagram}
                rel="noopener noreferrer"
                className="hover:underline text-lg"
              >
                📸 Instagram
              </a>
            </li>
            <li>
              <a
                href={contact.Telegram}
                rel="noopener noreferrer"
                className="hover:underline text-lg"
              >
                💬 Telegram
              </a>
            </li>
            <li>
              <a
                href={contact.Linkedin}
                rel="noopener noreferrer"
                className="hover:underline text-lg"
              >
                🔗 Linkedin
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.Email}`}
                className="hover:underline text-lg"
              >
                ✉️ {contact.Email}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.phone}`}
                className="hover:underline text-lg"
              >
                📞 {contact.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
