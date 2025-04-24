import { useState, useEffect } from "react";
import JobCard from "./jobCard";
import { Job } from "../type/job";
import { Container } from "react-bootstrap";
import InformationUser from "./InformationUser";

const Jobs = () => {
  const jobsURL = "https://strive-benchmark.herokuapp.com/api/jobs";
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(jobsURL);
        if (response.ok) {
          const data = await response.json();
          console.log("jobs:", data);
          setJobs(data.data);
        } else {
          console.error("Errore nella fetch dei lavori");
        }
      } catch (error) {
        console.error("Errore nel recupero dei lavori", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <Container className="mt-4">
      <InformationUser />
      <h2 className="mb-4">Offerte di lavoro</h2>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </Container>
  );
};

export default Jobs;
