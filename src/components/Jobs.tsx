import { useState, useEffect } from "react";
import JobCard from "./jobCard";
import { Job } from "../type/job";
import { Container, Button, Spinner } from "react-bootstrap";
import InformationUser from "./InformationUser";
import { useLocation } from "react-router-dom";

const Jobs = () => {
  const jobsURL = "https://strive-benchmark.herokuapp.com/api/jobs";
  const [jobs, setJobs] = useState<Job[]>([]);
  const [visibleJobs, setVisibleJobs] = useState(15);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          search ? `${jobsURL}?search=${encodeURIComponent(search)}` : jobsURL
        );
        if (response.ok) {
          const data = await response.json();
          console.log("jobs:", data);
          setJobs(data.data);
        } else {
          console.error("Errore nella fetch dei lavori");
        }
      } catch (error) {
        console.error("Errore nel recupero dei lavori", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [search]);

  const handleLoadMore = () => {
    setVisibleJobs((prev) => prev + 15);
  };

  return (
    <Container className="mt-4">
      <InformationUser />
      <h2 className="my-4">Offerte di lavoro</h2>
      {search && (
        <div className="mb-3 text-muted">
          Risultati per: <strong>{search}</strong>
        </div>
      )}
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          {jobs.slice(0, visibleJobs).map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
          {visibleJobs < jobs.length && (
            <div className="text-center mt-3">
              <Button variant="outline-primary" onClick={handleLoadMore}>
                Carica altri
              </Button>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Jobs;
