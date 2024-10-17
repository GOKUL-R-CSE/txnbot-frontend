import React from 'react';

const Bot = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-700 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-center text-2xl font-bold mb-4">Chat with our Bot</h2>
        <iframe
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/04492a0d-9e30-4d55-8c8e-d5406c3a3911"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default Bot;