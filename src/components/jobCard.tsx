import React from "react";
import { Card, Button } from "react-bootstrap";
import { Job } from "../type/job";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {job.company_name} • {job.job_type}
        </Card.Subtitle>
        <Card.Text>
          <strong>Categoria:</strong> {job.category}
          <br />
          <strong>Località:</strong> {job.candidate_required_location}
          <br />
          <strong>Data Pubblicazione:</strong>
          {new Date(job.publication_date).toLocaleDateString()}
        </Card.Text>
        <Button variant="primary" href={job.url} target="_blank">
          Vai all'annuncio
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
