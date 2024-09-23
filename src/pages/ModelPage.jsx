import React from 'react';
import { Footer } from '../components/Footer';

export default function ModelPage() {
    const models = [
        {
            name: 'Model 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.',
            imageUrl: 'https://via.placeholder.com/300',
        },
        {
            name: 'Model 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.',
            imageUrl: 'https://via.placeholder.com/300',
        },
        {
            name: 'Model 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.',
            imageUrl: 'https://via.placeholder.com/300',
        },
    ];

    return (
        <div>
            <div className="flex flex-col items-center space-y-12 p-10 bg-gray-100 min-h-screen">
                {models.map((model, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl transition-transform hover:scale-105">
                        <img
                            src={model.imageUrl}
                            alt={model.name}
                            className="w-64 h-64 object-cover mb-6 rounded-lg"
                        />
                        <h2 className="text-2xl font-semibold mb-4">{model.name}</h2>
                        <p className="text-gray-600 text-center mb-6">{model.description}</p>
                        <button className="bg-[#6A9C89] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#16423C]">
                            Explore {model.name}
                        </button>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
