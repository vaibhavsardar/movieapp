import React, { useEffect, useState } from 'react';

const Popup = ({ isOpen, onClose ,movie}) => {
    const initialValues = {
        movie_name: movie.name,
        ticket_no:Math.floor(Math.random() * 100000000),
        date: new Date().toLocaleDateString(),
        cxname: "",
        ticket_qnty:1
      };
  const [ticket, setTicket] = useState(initialValues);
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  
  const handleTicketChange = (value) => {
    setNumberOfTickets((prevValue) => Math.max(prevValue + value, 1));
    setTicket({...ticket,"ticket_qnty": Math.max(numberOfTickets + value, 1)});
  };

  const handleSubmit = () => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const updatedData = [...storedTickets, ticket];
    localStorage.setItem('tickets', JSON.stringify(updatedData));

    alert(' Ticket Booked successfully');
    console.log("ticket",ticket)
    setTicket(initialValues)
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white p-6 rounded shadow-lg z-10">
        <h2 className="text-2xl font-bold mb-4"   onChange={(e)=>{setTicket({...ticket,"movie_name": e.target.value})}} >{movie.name}</h2>
        <p className=" font-bold mb-4">Ticket no: <span className=' font-normal'>{ticket.ticket_no}</span></p>
        <p className=" font-bold mb-4">Date: <span className=' font-normal'>{new Date().toLocaleDateString()}</span></p>
        <input
          type="text"
          requir
          value={ticket.cxname}
          onChange={(e)=>{setTicket({...ticket,"cxname": e.target.value,"movie_name":movie.name})}}
          className="w-full border p-2 mb-4"
          placeholder="Enter Your Name."
        />
         <div className="flex items-center mb-4">
          <label className="block mr-4">Number of Tickets:</label>
          <button onClick={() => handleTicketChange(-1)} className="bg-gray-200 px-2 py-1 rounded">
            -
          </button>
          <span className="mx-2">{ticket.ticket_qnty}</span>
          <button onClick={() => handleTicketChange(1)} className="bg-gray-200 px-2 py-1 rounded">
            +
          </button>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Book
          </button>
          <button onClick={onClose} className="ml-2 text-gray-500">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
