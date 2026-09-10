import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WorkPage() {
  return (
    <>
      <Header />
      
      {/*  Recent Case Studies Section  */}
      <section id="work" className="case-studies-section" style={{ minHeight: '100vh', paddingTop: '150px' }}>
        <div className="case-studies-container">
            {/*  Header  */}
            <div className="cs-header fade-in-up">
                <div className="cs-eyebrow">
                    <span className="cs-indicator"></span> WORK & IMPACT
                </div>
                <h2 className="cs-heading">Recent <span className="cs-highlight">Case Studies</span></h2>
                <p className="cs-description">A selection of websites, campaigns and digital work built to create measurable
                    business growth.</p>
            </div>

            {/*  Filters  */}
            <div className="cs-filters fade-in delay-1">
                <a href="#all" className="cs-filter active" data-filter="all">ALL WORK</a>
                <a href="#web" className="cs-filter" data-filter="web">WEB DEVELOPMENT</a>
                <a href="#performance" className="cs-filter" data-filter="performance">PERFORMANCE MARKETING</a>
                <a href="#social" className="cs-filter" data-filter="social">CONTENT & PRODUCTION</a>
            </div>

            {/*  Grid  */}
            <div id="cs-grid" className="cs-grid">
                {/*  Projects will be dynamically injected here by JavaScript  */}
            </div>

            {/*  View More Button  */}
            <div className="cs-view-more-container">
                <button id="cs-view-more-btn" className="cs-view-more-btn">View More Projects ↗</button>
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
