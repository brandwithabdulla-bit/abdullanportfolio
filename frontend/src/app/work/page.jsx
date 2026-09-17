import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Case Studies | Digital Marketing Work in Kerala – Muhammed Abdulla",
  description:
    "Explore real-world digital marketing and performance marketing case studies by Muhammed Abdulla — a leading performance marketer in Kerala. See measurable ROI from strategic paid ad and SEO campaigns.",
  keywords: [
    "performance marketing case studies kerala",
    "digital marketing work kerala",
    "performance marketer in kerala",
    "digital marketer in kerala",
    "google ads results kerala",
    "marketing campaign results kerala",
  ],
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Case Studies | Digital Marketing Work – Muhammed Abdulla, Kerala",
    description:
      "Real-world performance marketing and digital marketing case studies by Muhammed Abdulla — Kerala's top performance marketer.",
    url: "/work",
    type: "website",
  },
  twitter: {
    title: "Digital Marketing Case Studies – Kerala | Muhammed Abdulla",
    description:
      "See real campaign results from a top performance marketer in Kerala. Paid ads, SEO wins, and brand growth case studies.",
  },
};

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
                    <span className="cs-indicator"></span> WORK &amp; IMPACT
                </div>
                <h1 className="cs-heading">Recent <span className="cs-highlight">Case Studies</span></h1>
                <p className="cs-description">A selection of websites, campaigns and digital work built to create measurable
                    business growth.</p>
            </div>

            {/*  Filters  */}
            <div className="cs-filters fade-in delay-1">
                <a href="#all" className="cs-filter active" data-filter="all">ALL WORK</a>
                <a href="#web" className="cs-filter" data-filter="web">WEB DEVELOPMENT</a>
                <a href="#performance" className="cs-filter" data-filter="performance">PERFORMANCE MARKETING</a>
                <a href="#social" className="cs-filter" data-filter="social">CONTENT &amp; PRODUCTION</a>
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
