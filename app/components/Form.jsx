import { useState, useRef, useEffect } from "react";
import { useFetcher, useActionData } from "@remix-run/react";

export default function RsvpForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();
  const fetcher = useFetcher();
  const errors = useActionData();
  const hasErrors = fetcher?.errors?.name

  const buttonText =
    fetcher.state == "submitting"
      ? "Submitting..."
      : fetcher.state == "loading"
      ? "Submitted!"
      : "Submit";

  useEffect(() => {
    if (fetcher.type === "done" && fetcher.data.ok) {
      setSubmitted(true);
    }
  }, [fetcher]);

  if (submitted) {
    return (
      <div>
        <h2>Thanks for your RSVP!</h2>
        <p className="faux-link" onClick={() => setSubmitted(false)}>
          Need to submit another?
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Fill out the form below to RSVP</h2>

      <fetcher.Form method="post" ref={formRef}>
        <div className="form-input__text mb2">
          <label>Name</label>
          <input type="text" name="name" />
          {errors?.name && <small>Please tell us who you are!</small>}
        </div>

        <div className="form-input__radio-buttons mb2">
          <p>Are you attending the wedding?</p>
          <input
            type="radio"
            id="attendingWeddingYes"
            name="attendingWedding"
            value="true"
            defaultChecked
          />
          <label htmlFor="attendingWeddingYes">Yes</label>

          <input
            type="radio"
            id="attendingWeddingNo"
            name="attendingWedding"
            value="false"
          />
          <label htmlFor="attendingWeddingNo">No</label>
        </div>

        <div className="form-input__radio-buttons mb2">
          <p>Are you attending the recovery?</p>
          <input
            type="radio"
            id="attendingRecoveryYes"
            name="attendingRecovery"
            value="true"
            defaultChecked
          />
          <label htmlFor="attendingRecoveryYes">Yes</label>

          <input
            type="radio"
            id="attendingRecoveryNo"
            name="attendingRecovery"
            value="false"
          />
          <label htmlFor="attendingRecoveryNo">No</label>
        </div>

        <div className="form-input__text">
          <label>Dietary requirements</label>
          <input type="text" name="dietaryRequirements" />
        </div>

        <div className="form-submit pt2">
          <button type="submit" disabled={hasErrors}>
            {buttonText}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}
