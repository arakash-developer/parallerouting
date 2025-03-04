import React from 'react';

const Quiz = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-8/12 lg:w-6/12">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Quiz</h2>
        <p className="text-gray-600 text-center mb-6">
          Welcome to the quiz! Please read each question carefully and select the best answer.
        </p>
        <div className="flex flex-col space-y-4">
          {/* Example question */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h4 className="text-lg font-semibold text-gray-800">Question 1: What is the capital of France?</h4>
            <form className="mt-2 space-y-2">
              <label className="block">
                <input type="radio" name="q1" value="Paris" className="mr-2" />
                Paris
              </label>
              <label className="block">
                <input type="radio" name="q1" value="London" className="mr-2" />
                London
              </label>
              <label className="block">
                <input type="radio" name="q1" value="Berlin" className="mr-2" />
                Berlin
              </label>
            </form>
          </div>
          {/* Add more questions as needed */}
        </div>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto">
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;

