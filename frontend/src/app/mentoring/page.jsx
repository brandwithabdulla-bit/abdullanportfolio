"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../../public/assets/css/mentoring-page.css';

export default function MentoringPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      topic: ''
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);

  const handlePrevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  useEffect(() => {

      const times = [
          "10:00 AM",
          "1:30 PM",
          "3:00 PM",
          "5:00 PM"
      ];
      setTimeSlots(times);
  }, []);

  const handleNextStep = () => setStep(2);
  const handleBack = () => setStep(1);
  
  const handleSubmit = (e) => {
      e.preventDefault();
      // Mock submit
      setTimeout(() => {
          setStep(3);
      }, 800);
  };

  const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-wrapper dark-theme">
      <Header />
      
      <main className="mentoring-container fade-in-up">
        
        {/* Left Side: Information */}
        <section className="mentoring-info">
            <div className="info-inner">
                <span className="badge">Limited Availability</span>
                <h1 className="mentoring-title">1:1 Digital Growth Mentoring</h1>
                <p className="mentoring-desc">
                    Skip the trial and error. Book a direct 45-minute strategic tear-down with Abdulla to scale your brand, optimize your performance marketing funnels, and map out your content architecture.
                </p>
                
                <div className="benefits-list">
                    <div className="benefit-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span>Audit of your current digital setup</span>
                    </div>
                    <div className="benefit-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span>Actionable 90-day growth roadmap</span>
                    </div>
                    <div className="benefit-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span>Live feedback on ad creatives & copy</span>
                    </div>
                </div>

                <div className="price-tag">
                    <span className="price">₹4,999</span>
                    <span className="duration">/ 45 mins</span>
                </div>
            </div>
        </section>

        {/* Right Side: Interactive Widget */}
        <section className="mentoring-widget-container">
            <div className="widget-glass-card">
                
                {/*  STEP 1: Date & Time Selection  */}
                {step === 1 && (
                    <div className="widget-step slide-in">
                        <h2>Select a Date & Time</h2>
                        <p className="step-subtitle">All times are presented in IST (Indian Standard Time)</p>
                        
                        <div className="calendar-widget">
                            <div className="calendar-header">
                                <button className="cal-nav-btn" onClick={handlePrevMonth}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                </button>
                                <span className="cal-month-name">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                                <button className="cal-nav-btn" onClick={handleNextMonth}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </button>
                            </div>
                            
                            <div className="calendar-days-header">
                                {dayNames.map(d => <span key={d}>{d}</span>)}
                            </div>
                            
                            <div className="calendar-grid">
                                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                                    <div key={`empty-${i}`} className="calendar-empty"></div>
                                ))}
                                {Array.from({ length: daysInMonth }).map((_, i) => {
                                    const dayNum = i + 1;
                                    const dateStr = `${monthNames[currentMonth.getMonth()]} ${dayNum}, ${currentMonth.getFullYear()}`;
                                    const isSelected = selectedDate === dateStr;
                                    
                                    const dateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), dayNum);
                                    const today = new Date();
                                    today.setHours(0,0,0,0);
                                    const isPast = dateObj < today;
                                    const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
                                    const disabled = isPast || isWeekend;

                                    return (
                                        <button 
                                            key={dayNum} 
                                            className={`calendar-day ${isSelected ? 'active' : ''}`}
                                            onClick={() => {
                                                if (!disabled) {
                                                    setSelectedDate(dateStr);
                                                    setSelectedTime(null);
                                                }
                                            }}
                                            disabled={disabled}
                                        >
                                            {dayNum}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {selectedDate && (
                            <div className="time-selection-wrapper fade-in">
                                <p className="time-select-title">Select time for {selectedDate}</p>
                                <div className="time-slots-grid fade-in">
                                    {timeSlots.map(time => (
                                        <button 
                                            key={time} 
                                            className={`time-btn ${selectedTime === time ? 'active' : ''}`}
                                            onClick={() => setSelectedTime(time)}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button 
                            className="btn btn-primary widget-continue-btn"
                            disabled={!selectedDate || !selectedTime}
                            onClick={handleNextStep}
                        >
                            Continue
                        </button>
                    </div>
                )}

                {/*  STEP 2: Details Form  */}
                {step === 2 && (
                    <div className="widget-step slide-in">
                        <button className="back-btn" onClick={handleBack}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            Back
                        </button>
                        <h2>Enter Your Details</h2>
                        
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
                            </div>
                            
                            <div className="form-group">
                                <label>Email Address *</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 90000 00000" />
                            </div>
                            
                            <div className="form-group">
                                <label>What do you want to cover in this session? *</label>
                                <textarea name="topic" required rows="3" value={formData.topic} onChange={handleInputChange} placeholder="Briefly describe your current blockers..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary widget-continue-btn">
                                Confirm & Request Booking
                            </button>
                        </form>
                    </div>
                )}

                {/*  STEP 3: Success  */}
                {step === 3 && (
                    <div className="widget-step success-step scale-in">
                        <div className="success-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <h2>Booking Requested!</h2>
                        <p>Thank you, <strong>{formData.name}</strong>.</p>
                        <p>Your request for a session on <strong>{selectedDate} at {selectedTime}</strong> has been received.</p>
                        <p className="success-note">We will review your request and send a Google Meet link and payment details to {formData.email} shortly.</p>
                    </div>
                )}

            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
