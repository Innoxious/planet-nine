import * as React from 'react';

interface Props {
  number: number;
  name?: string;
  onChange(index: number, value: string): void;
}

const CrewmateInput: React.FC<Props> = ({ number: index, name, onChange }) => (
  <div className="form-floating mb-3">
    <input
      className="form-control"
      id={`floatingCrewmateInput${index}`}
      placeholder=""
      maxLength={25}
      value={name}
      onChange={(e) => onChange(index, e.target.value)}
    />
    <label className="text-dark" htmlFor={`floatingCrewmateInput${index}`}>
      Crewmate {index + 1}
    </label>
  </div>
);

export default CrewmateInput;
