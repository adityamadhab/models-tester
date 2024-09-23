import React, { useState } from 'react';

export const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus velit non nibh facilisis, vel sodales arcu gravida.'
        },
        {
            question: 'Quisque aliquet leo in gravida?',
            answer: 'Nullam ut est id justo tincidunt fringilla. Aliquam erat volutpat. Duis nec nulla fermentum, porttitor nulla eget, varius lorem.'
        },
        {
            question: 'Mauris pharetra ante vel velit tempor?',
            answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.'
        },
        {
            question: 'Curabitur blandit lectus a purus dignissim?',
            answer: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Praesent semper ipsum sit amet ligula suscipit, eget gravida sapien convallis.'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto mt-4 mb-10 p-4 sm:p-6 lg:p-8">
            <p className="text-center mt-6 text-xl lg:text-2xl font-bold mb-6">Frequently Asked Questions</p>
            {faqData.map((item, index) => (
                <div key={index} className={`faq my-2 ${activeIndex === index ? 'border-none' : 'border border-gray-300'} rounded-lg`}>
                    <button
                        className={`accordion w-full p-4 sm:p-6 flex justify-between items-center text-left text-md sm:text-lg font-semibold focus:outline-none ${activeIndex === index ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-100`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className={`pannel overflow-hidden transition-max-height duration-200 ease-in-out ${activeIndex === index ? 'max-h-screen p-4 sm:p-6 bg-gray-100' : 'max-h-0 p-0'}`}>
                        <p className="text-gray-700 text-md sm:text-lg">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
