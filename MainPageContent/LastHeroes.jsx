import { Outlet, Link } from "react-router-dom";
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Heroes() {
  // Dummy data for the bar chart
  const data = [
    { name: 'Company A', hires: 400 },
    { name: 'Company B', hires: 300 },
    { name: 'Company C', hires: 200 },
    { name: 'Company D', hires: 278 },
    { name: 'Company E', hires: 189 },
  ];

  const barChartsProps = {
    width: '100%',
    height: 300,
    data: data,
    margin: { top: 5, right: 30, left: 20, bottom: 5 },
  };

  return (
    <main>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">Warangal College Placement Statistics</h1>
          <h3 className="fw-normal text-muted mb-3">Explore the top companies and success stories</h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <Link to="/placement" className="icon-link">
              Learn more
              <svg className="bi">
                <use xlinkHref="#chevron-right"></use>
              </svg>
            </Link>
            <Link to="/placement" className="icon-link">
              Search Data
              <svg className="bi">
                <use xlinkHref="#chevron-right"></use>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Top Hiring Companies</h2>
            <p className="lead">The best companies who hired from Warangal College in recent years.</p>
          </div>
          <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart {...barChartsProps}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hires" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Recent Placement Highlights</h2>
            <p className="lead">High-paying offers, success stories, and notable alumni.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}>
          <ResponsiveContainer width="100%" height="100%">
              <BarChart {...barChartsProps}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hires" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Top Placement Opportunities at Warangal</h1>
          <p className="col-md-8 fs-4">
            At Warangal, we pride ourselves on our exceptional placement record, providing students with unparalleled opportunities to launch their careers. Our robust partnerships with leading companies ensure that graduates have access to a wide range of job openings and internships. Explore how our dedicated placement cell supports you in your journey to success!
          </p>
          <Link to="/placement" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Yearly Placement Growth</h2>
            <p className="lead">Track how placements have improved over the years.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
        </div>
        <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Placement Statistics</h2>
            <p className="lead">A comprehensive report on the placement percentages and packages.</p>
          </div>
          <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
        </div>
      </div>
    </main>
  );
}

export default Heroes;
