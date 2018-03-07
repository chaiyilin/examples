import React from 'react';

export class Compo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" onChange="" />
        </div>
        <div>
          <input type="radio" name="gender" value="space" />space
          <input type="radio" name="gender" value="underscore" />underscore
          <input type="radio" name="gender" value="camel" checked />camel
        </div>

        {/*     <select>
      <option value="volvo">space</option>
      <option value="saab">camel</option>
      <option value="mercedes">underscore</option>
    </select> */}
        <div>
          <input type="text" />
        </div>
      </div>
    );
  }
}
