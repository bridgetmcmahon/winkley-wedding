import { useState } from "react";
import { useActionData, Form } from "@remix-run/react";

export default function RsvpForm() {
  const [submitted, setSubmitted] = useState(false);
  let errors = useActionData();

  if (submitted) {
    return (
      <div>
        <h2>Thanks for your RSVP!</h2>
        <p onClick={() => setSubmitted(false)}>Need to submit another?</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Please fill out the form below to RSVP</h2>

      <Form method="post">
        <div className="form-input__text mb2">
          <label>Name</label>
          <input type="text" />
        </div>

        <div className="form-input__radio-buttons mb2">
          <p>Attending the wedding?</p>
          <input
            type="radio"
            id="attendingWeddingYes"
            name="attendingWedding"
            value="true"
          />
          <label htmlFor="attendingWeddingYes">Yes</label>

          <input
            type="radio"
            id="attendingWeddingNo"
            name="attendingWedding"
            value="false"
            checked
          />
          <label htmlFor="attendingWeddingNo">No</label>
        </div>

        <div className="form-input__radio-buttons mb2">
          <p>Attending the recovery?</p>
          <input
            type="radio"
            id="attendingRecoveryYes"
            name="attendingRecovery"
            value="true"
          />
          <label htmlFor="attendingRecoveryYes">Yes</label>

          <input
            type="radio"
            id="attendingRecoveryNo"
            name="attendingRecovery"
            value="false"
            checked
          />
          <label htmlFor="attendingRecoveryNo">No</label>
        </div>

        <div className="form-input__text">
          <label>Dietary requirements</label>
          <input type="text" />
        </div>

        <div className="form-submit pt2">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
}
