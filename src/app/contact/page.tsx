"use client";
import React, { useState } from 'react';


export default function ContactPage() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [sent, setSent] = useState(false);


function handleSubmit(e: React.FormEvent) {
e.preventDefault();
// For demo: we just show a success message.
setSent(true);
setName('');
setEmail('');
setMessage('');
}


return (
<section>
<h2 className="text-2xl font-semibold mb-4">Contact</h2>
<div className="bg-white p-6 rounded-lg shadow-sm max-w-xl">
{sent && <div className="mb-4 text-green-600">Thanks — your message was sent!</div>}
<form onSubmit={handleSubmit} className="space-y-4">
<div>
<label className="block text-sm mb-1">Name</label>
<input value={name} onChange={e => setName(e.target.value)} className="w-full p-2 border rounded" required />
</div>
<div>
<label className="block text-sm mb-1">Email</label>
<input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
</div>
<div>
<label className="block text-sm mb-1">Message</label>
<textarea value={message} onChange={e => setMessage(e.target.value)} className="w-full p-2 border rounded h-28" required />
</div>
<button className="bg-indigo-600 text-white px-4 py-2 rounded">Send Message</button>
</form>
</div>
</section>
);
}