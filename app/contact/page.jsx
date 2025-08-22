"use client";

import { useState } from 'react';
import { FiMail, FiPhone, FiCalendar, FiClock, FiUser, FiMessageSquare, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    appointmentDate: '',
    appointmentTime: ''
  });

  const [activeTab, setActiveTab] = useState('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        appointmentDate: '',
        appointmentTime: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM'
  ];

  return (
    <div className="min-h-screen bg-primary py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left side - Form */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-center mb-2 text-outline">Get In Touch</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Have questions or want to schedule a meeting? Reach out below.
          </p>

          <div className="flex border-b border-border mb-8">
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'contact' ? 'text-accent border-b-2 border-accent' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Form
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'appointment' ? 'text-accent border-b-2 border-accent' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('appointment')}
            >
              Book Appointment
            </button>
          </div>

          {submitSuccess ? (
            <div className="bg-green-500/10 text-green-400 p-4 rounded-lg mb-8 text-center">
              Thank you! Your {activeTab === 'contact' ? 'message has been sent' : 'appointment has been booked'}. 
              I'll get back to you soon.
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            {activeTab === 'contact' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-primary-foreground">
                      Name <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-primary-foreground">
                      Email <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-foreground">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-foreground">
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-primary-foreground">
                    Message <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-4 text-muted-foreground" />
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent focus:border-transparent"
                    ></textarea>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-primary-foreground">
                      Name <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-primary-foreground">
                      Email <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="appointmentDate" className="block text-sm font-medium text-primary-foreground">
                      Date <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="pl-10 w-full bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="appointmentTime" className="block text-sm font-medium text-primary-foreground">
                      Time <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <FiClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <select
                        id="appointmentTime"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent focus:border-transparent appearance-none"
                      >
                        <option value="">Select a time</option>
                        {availableTimes.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-primary-foreground">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent focus:border-transparent"
                  ></textarea>
                </div>
              </>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-primary font-medium py-3 px-6 rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : activeTab === 'contact' ? (
                  'Send Message'
                ) : (
                  'Book Appointment'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Contact Info */}
        <div className="w-full md:w-80 space-y-6">
          <div className="bg-[#232329] p-6 rounded-lg border border-border hover:border-accent transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <FiMail className="text-accent text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">Email</h3>
            </div>
            <p className="text-muted-foreground hover:text-accent transition-colors">
              sourav11uin@gmail.com
            </p>
          </div>

          <div className="bg-[#232329] p-6 rounded-lg border border-border hover:border-accent transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <FiPhone className="text-accent text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">Phone</h3>
            </div>
            <p className="text-muted-foreground hover:text-accent transition-colors">
              +91 95084 95778
            </p>
          </div>

          <div className="bg-[#232329] p-6 rounded-lg border border-border hover:border-accent transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <FiCalendar className="text-accent text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">Availability</h3>
            </div>
            <p className="text-muted-foreground hover:text-accent transition-colors">
              Mon-Fri: 5PM - 10PM
            </p>
            <p className="text-muted-foreground hover:text-accent transition-colors">
              Weekends: Book appointment
            </p>
          </div>

          <div className="bg-[#232329] p-6 rounded-lg border border-border hover:border-accent transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <FiUser className="text-accent text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">Connect</h3>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/scorzion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                <FiGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sourav-sharma-5318182b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
              >
                <FiLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;