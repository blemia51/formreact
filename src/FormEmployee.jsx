import React, {Component} from "react"
import './App.css'

class FormEmployee extends Component {
constructor(props) {
  super(props);
  this.state = {
    title: '',
    poster: '',
    comment: '',
  }
  this.onChange = this.onChange.bind(this);
  this.submitForm = this.submitForm.bind(this);
}

onChange(e) {
  this.setState({
    [e.target.name]: e.target.value,
  });
}

submitForm(e) {
  e.preventDefault();
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(this.state),
  };
  const url = 'https://post-a-form.herokuapp.com/api/movies/'
  fetch(url, config)
  .then(res => res.json())
  .then(res => {
    if (res.error) {
      alert(res.error);
    } else {
      alert(`Film ajouté!`);
    }
  }).catch(e => {
    console.error(e);
    alert('Erreur lors de l\'ajout d\'un Film');
  });
}



render() {
  return (
    <div className="FormEmployee">
  <h1>Saisi d'un film</h1>

  <form onSubmit={this.submitForm}>
    <fieldset>
      <legend>Informations</legend>
      <div className="form-data">
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.onChange}
          value={this.state.lastname}
        />
      </div>

      <div className="form-data">
        <label htmlFor="link">poster</label>
        <input
          type="text"
          id="poster"
          name="poster"
          onChange={this.onChange}
          value={this.state.firstname}
        />
      </div>

      <div className="form-data">
        <label htmlFor="description">comment</label>
        <textarea
          type="text"
          id="comment"
          name="comment"
          rows="5" cols="33"
          onChange={this.onChange}
          value={this.state.email}
        ></textarea>
      </div>
      <hr />
      <div className="form-data">
        <input type="submit" value="Envoyer" />
      </div>
    </fieldset>
  </form>
</div>




  )
}


}
export default FormEmployee;
