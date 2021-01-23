import * as React from 'react';

interface Props {
  crewmateNumber: number;
}

const CrewmateInput: React.FC<Props> = ({ crewmateNumber }) => (
  <div className="form-floating mb-3" key={`crewmate-div-${crewmateNumber}`}>
    <input
      className="form-control"
      id={`floatingCrewmateInput${crewmateNumber}`}
      placeholder=""
      maxLength={50}
      key={`crewmate-input-${crewmateNumber}`}
    />
    <label
      className="text-dark"
      htmlFor={`floatingCrewmateInput${crewmateNumber}`}
      key={`crewmate-label-${crewmateNumber}`}
    >
      Crewmate {crewmateNumber}
    </label>
  </div>
);

const TeamForm: React.FC = () => {
  const [crewmates, setCrewmates] = React.useState(2);

  const crewmateInputs = new Array<React.ReactNode>();

  for (let index = 1; index <= crewmates; index++) {
    crewmateInputs.push(CrewmateInput({ crewmateNumber: index }));
  }

  const addCrewmateOnClick = () => {
    if (crewmates !== 5) {
      setCrewmates(crewmates + 1);
    }
  };

  const removeCrewmateOnClick = () => {
    if (crewmates !== 2) {
      setCrewmates(crewmates - 1);
    }
  };

  return (
    <div className="col-sm-6">
      <h2>add/edit</h2>
      <form>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="floatingTeamName"
            placeholder=""
            maxLength={50}
          />
          <label className="text-dark" htmlFor="floatingTeamName">
            Team name
          </label>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <button
            type="button"
            onClick={removeCrewmateOnClick}
            className="btn btn-dark"
            disabled={crewmates === 2}
          >
            --
          </button>
          <button
            type="button"
            onClick={addCrewmateOnClick}
            className="btn btn-dark"
            disabled={crewmates === 5}
          >
            ++
          </button>
        </div>
        {crewmateInputs}
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
};
export default TeamForm;
