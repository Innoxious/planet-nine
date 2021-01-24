import * as React from 'react';
import { postUserDocumentAsync } from '../apis/userClient';
import UserContext from '../contexts/UserContext';
import CrewmateInput from './CrewmateInput';

interface Props {
  teamName?: string;
  crewmates?: Array<string>;
}

const TeamForm: React.FC<Props> = (props: Props) => {
  const [crewmates, setCrewmates] = React.useState(
    props?.crewmates?.length ? props.crewmates : ['', ''],
  );
  const [teamName, setTeamName] = React.useState(props.teamName || '');
  const [errorMessage, setErrorMessage] = React.useState('');
  const { user, updateUser } = React.useContext(UserContext);
  const crewmateInputOnChange = (index: number, value: string): void => {
    setCrewmates(crewmates.map((c, i) => (i === index ? value : c)));
  };
  const crewmateInputs = new Array<JSX.Element>();
  for (let i = 0; i < crewmates.length; i++) {
    crewmateInputs.push(
      <CrewmateInput
        number={i}
        name={crewmates[i]}
        onChange={crewmateInputOnChange}
        key={`crewmate-input-${i}`}
      />,
    );
  }

  const addCrewmateOnClick = () => {
    if (crewmates.length !== 5) {
      setCrewmates([...crewmates, '']);
    }
  };

  const removeCrewmateOnClick = () => {
    if (crewmates.length !== 2) {
      setCrewmates(crewmates.slice(0, crewmates.length - 1));
    }
  };

  const submitTeamForm = React.useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setErrorMessage('');
      const newTeam = [{ name: teamName, players: crewmates }];
      const response = await postUserDocumentAsync({
        ...user,
        teams: user.teams?.concat(newTeam),
      });
      if (response.success) {
        updateUser(response.updatedUser || {});
      } else {
        setErrorMessage(response.errorMessage || '');
      }
    },
    [user, teamName, crewmates],
  );

  return (
    <div className="mx-auto">
      <h2>add/edit</h2>
      <form onSubmit={submitTeamForm}>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="floatingTeamName"
            placeholder=""
            maxLength={25}
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
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
            disabled={crewmates.length === 2}
          >
            --
          </button>
          <button
            type="button"
            onClick={addCrewmateOnClick}
            className="btn btn-dark"
            disabled={crewmates.length === 5}
          >
            ++
          </button>
        </div>
        {crewmateInputs}
        <p className="text-danger">{errorMessage}</p>
        <button
          type="submit"
          disabled={
            teamName === '' || crewmates.some((c) => c === null || c === '')
          }
          className="btn btn-dark"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TeamForm;
