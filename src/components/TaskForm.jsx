import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function TaskForm() {
  const [formData, setFormData] = useState({
    sector: "",
    user: "",
    source: "",
    issue_type: "",
    customer_id: "",
    title: "",
    description: "",
    support_type: "",
    status: "",
    priority: "",
    start_date: "",
    end_date: "",
    assigned_to: "",
  });
    let sectors = ["Gachie", "Rwaka"];
    let users = ["John", "Doe"];
    let sources = ["Facebook", "Twitter"];
    let issues = ["Issue 1", "Issue 2"];
    let supports = ["Support 1", "Support 2"];
    let statuses = ["Status 1", "Status 2"];
    let priorities = ["Priority 1", "Priority 2"];
  

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(formData); // Pass data to parent component
  };

  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="p-4 shadow rounded bg-light">
            <h2 className="text-center mb-4">Task Form</h2>

            <Form onSubmit={handleSubmit}>
              {/* Sector */}
              <Form.Group className="mb-3">
                <Form.Label>Sector</Form.Label>
                <Form.Select
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                >
                  <option value="">Select Sector</option>
                  {sectors.map((sector) => (
                    <option key={sector.id} value={sector.id}>
                      {sector.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* User */}
              <Form.Group className="mb-3">
                <Form.Label>User</Form.Label>
                <Form.Select
                  name="user"
                  value={formData.user}
                  onChange={handleChange}
                >
                  <option value="">Select User</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Source */}
              <Form.Group className="mb-3">
                <Form.Label>Source (Lead)</Form.Label>
                <Form.Select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                >
                  <option value="">Select Source</option>
                  {sources.map((source) => (
                    <option key={source.id} value={source.id}>
                      {source.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Issue Type */}
              <Form.Group className="mb-3">
                <Form.Label>Issue Type</Form.Label>
                <Form.Select
                  name="issue_type"
                  value={formData.issue_type}
                  onChange={handleChange}
                >
                  <option value="">Select Issue</option>
                  {issues.map((issue) => (
                    <option key={issue.id} value={issue.id}>
                      {issue.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Customer ID */}
              <Form.Group className="mb-3">
                <Form.Label>Customer Identification</Form.Label>
                <Form.Control
                  type="text"
                  name="customer_id"
                  value={formData.customer_id}
                  onChange={handleChange}
                  placeholder="Enter Customer ID"
                />
              </Form.Group>

              {/* Title */}
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter Task Title"
                />
              </Form.Group>

              {/* Description */}
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter Task Description"
                />
              </Form.Group>

              {/* Support Type */}
              <Form.Group className="mb-3">
                <Form.Label>Type of Support</Form.Label>
                <Form.Select
                  name="support_type"
                  value={formData.support_type}
                  onChange={handleChange}
                >
                  <option value="">Select Support Type</option>
                  {supports.map((support) => (
                    <option key={support.id} value={support.id}>
                      {support.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Status */}
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="">Select Status</option>
                  {statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Priority */}
              <Form.Group className="mb-3">
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="">Select Priority</option>
                  {priorities.map((priority) => (
                    <option key={priority.id} value={priority.id}>
                      {priority.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Start Date */}
              <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* End Date */}
              <Form.Group className="mb-3">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Assigned To */}
              <Form.Group className="mb-3">
                <Form.Label>Assigned To</Form.Label>
                <Form.Select
                  name="assigned_to"
                  value={formData.assigned_to}
                  onChange={handleChange}
                >
                  <option value="">Select User</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Buttons */}
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Submit Task
                </Button>
                <Button
                  variant="secondary"
                  type="reset"
                  onClick={() => setFormData({})}
                >
                  Reset
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TaskForm;
