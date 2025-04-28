import { useState } from "react";

export default function WhatsAppForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, date, message } = formData;

        // Format message for WhatsApp
        const whatsappMessage =
            `*Name :* ${name}%0a` +
            `*Email :* ${email}%0a` +
            `*Phone :* ${phone}%0a` +
            `*Date :* ${date}%0a` +
            `*Message :* ${message}`;

        // Replace with your WhatsApp number
        const whatsappUrl = `https://wa.me/923554229889?text=${whatsappMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank').focus();
    };

    return (
        <div className="w-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Name"
                        required
                    />
                </div>

                <div>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                        required
                    />
                </div>

                <div>
                    <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Phone Number"
                        required
                    />
                </div>

                <div>
                    <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Message"
                    ></textarea>
                </div>

                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        onClick={() => setFormData({ name: "", email: "", phone: "", date: "", message: "" })}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}