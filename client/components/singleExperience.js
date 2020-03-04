import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'
import {fetchSingleExperience} from '../store/experience'

export default class SingleExperience extends React.Component {
  componentDidMount() {
    const experienceId = this.props.match.params.experienceId
    this.props.fetchSingleExperience(experienceId)
  }

  render() {
    const experience = this.props.singleExperience
    const celebrity = experience.celebrity

    return (
      <div key={experience.id}>
        <img src={experience.imageUrl} />
        <ul>
          <li>{experience.name}</li>
          <li>
            Host:
            <Link to={`/celebrity/${celebrity.id}`}> {celebrity.name}</Link>
          </li>
          <li>Details: {experience.description}</li>
          <li>
            Location: {experience.city}, {experience.state}
          </li>
          <li>Duration: {experience.duration}</li>
          <li>Group Size: {experience.groupSize}</li>
          <li>${experience.price}</li>
          <button type="button">Add To Cart</button>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleExperience: state.experience.singleExperience
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleExperience: experienceId => {
      dispatch(fetchSingleExperience(experienceId))
    }
  }
}

export const ConnectedSingleExperience = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleExperience)
